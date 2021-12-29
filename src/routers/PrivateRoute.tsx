/* eslint-disable unused-imports/no-unused-vars-ts */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useApolloClient, useReactiveVar } from '@apollo/client';
import { loadable, showError } from '@base-projects/web-uikit';
import { Auth } from 'aws-amplify';
import { useNavigate, useRoutes } from 'react-router-dom';
import useTypeSafeTranslation from '#/shared/hooks/useTypeSafeTranslation';
import {
  IUser,
  useCreateNewTokenMutation,
  useDeleteTokenMutation,
  useGetMeQuery,
} from '#/generated/schemas';
import { userInfoVar } from '#/graphql/cache';
import { ClientName } from '#/graphql/client';
import PrivateLayout from '#/shared/components/layout/PrivateLayout';
import { getDeviceID, requestToken } from '#/shared/utils/firebase';

const NotFound = loadable(import('../pages/404Page'));

function PrivateRoute() {
  const { t } = useTypeSafeTranslation();
  const client = useApolloClient();
  const navigate = useNavigate();
  const {
    fullName = '',
    userType = '',
    avatar = '',
    id: userId = '',
  } = useReactiveVar(userInfoVar) as IUser;

  const [deleteToken] = useDeleteTokenMutation({
    context: {
      clientName: ClientName.Notification,
    },
    onCompleted() {
      localStorage.removeItem('deviceToken');
    },
  });

  const [createNewToken] = useCreateNewTokenMutation({
    context: {
      clientName: ClientName.Notification,
    },
    onError: showError,
  });

  const logout = async () => {
    const deviceId = localStorage.getItem('deviceId');
    if (deviceId) {
      deleteToken({
        variables: {
          input: {
            deviceId: deviceId,
            userId: userId,
            deviceToken: localStorage.getItem('deviceToken'),
          },
        },
      });
    }
    client.resetStore();
    Auth.signOut();
    navigate('/login');
  };

  useGetMeQuery({
    onCompleted: async data => {
      userInfoVar(data?.getMe ?? {});
      try {
        const permission = await Notification.requestPermission();
        const deviceToken = await requestToken();
        if (deviceToken && permission) {
          const deviceId = getDeviceID();
          createNewToken({
            variables: {
              input: {
                deviceId: deviceId,
                userId: data?.getMe?.id,
                deviceToken: deviceToken,
              },
            },
          }).then(() => {
            localStorage.setItem('deviceId', deviceId);
            localStorage.setItem('deviceToken', deviceToken);
          });
        }
      } catch (error) {
        showError(t('popupNotifications.requestPermissionFail'));
      }
    },
    onError() {
      logout();
      showError(t('login.hasNoPermission'));
    },
  });

  const routes = useRoutes([{ path: '*', element: <NotFound /> }]);

  return (
    <PrivateLayout
      logout={logout}
      userInfo={{
        fullName: fullName as string,
        userType: userType as string,
        avatar: avatar as string,
        id: userId as string,
      }}
    >
      {routes}
    </PrivateLayout>
  );
}

export default PrivateRoute;
