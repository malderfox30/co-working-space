import { BellOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Popover, Typography } from 'antd';
import { InfiniteLoader, List } from 'react-virtualized';
import { useEffect, useState } from 'react';
import { useToggle, showError } from '@base-projects/web-uikit';
import { onMessage } from 'firebase/messaging';
import NotificationItem from '../common/NotificationItem';
import { showSuccess } from '#/shared/utils/tools';
import useTypeSafeTranslation from '#/shared/hooks/useTypeSafeTranslation';
import { ClientName } from '#/graphql/client';
import {
  Notification,
  useClearNotificationCountMutation,
  useGetNewNotificationCountQuery,
  useGetNotificationsQuery,
  useDeleteAllNotificationMutation,
  useMarkAllNotificationAsSeenMutation,
} from '#/generated/schemas';
import { messaging } from '#/shared/utils/firebase';

interface Props {
  userId: string;
}

function NotiCount({ count }: { count: number }) {
  return (
    <span className="h-full absolute -top-24 right-1 text-xs">
      {!!count && (
        <span className="bold bg-primary text-white py-0.5 px-1.5 r-full">
          {count}
        </span>
      )}
    </span>
  );
}

function NotificationPopup({ userId }: Props) {
  const { t } = useTypeSafeTranslation();
  const [isVisible, onOpen, onClose] = useToggle(false);
  const [newNotiCount, setNewNotiCount] = useState(0);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [clearNotificationCountMutation] = useClearNotificationCountMutation({
    context: {
      clientName: ClientName.Notification,
    },
    variables: {
      userId: userId,
    },
  });
  const { data, loading, refetch } = useGetNotificationsQuery({
    context: {
      clientName: ClientName.Notification,
    },
    variables: {
      userId: userId,
      first: 10,
      after: '',
    },
    onCompleted: data => {
      setNotifications([
        ...notifications,
        ...(data?.getNotifications.items ?? []),
      ]);
    },
    skip: !userId,
  });
  const [deleteAllNotificationMutation] = useDeleteAllNotificationMutation({
    context: {
      clientName: ClientName.Notification,
    },
    variables: {
      userId: userId,
    },
    onCompleted() {
      showSuccess(t('popupNotifications.deleteAllSuccess'));
      refetchNotification();
    },
    onError: showError,
  });
  const [markAllNotificationAsSeenMutation] =
    useMarkAllNotificationAsSeenMutation({
      context: {
        clientName: ClientName.Notification,
      },
      variables: {
        userId: userId,
      },
      onCompleted() {
        showSuccess(t('popupNotifications.markAllReadSuccess'));
        refetchNotification();
      },
      onError: showError,
    });
  useGetNewNotificationCountQuery({
    context: {
      clientName: ClientName.Notification,
    },
    variables: {
      userId: userId,
    },
    onCompleted: data => setNewNotiCount(data?.getNewNotificationCount),
    skip: !userId,
  });

  useEffect(() => {
    const unsubscribe = onMessage(messaging, () => {
      setNewNotiCount(newNotiCount => newNotiCount + 1);
    });
    return unsubscribe;
  }, []);

  async function loadMoreRows({
    startIndex,
    stopIndex,
  }: {
    startIndex: number;
    stopIndex: number;
  }) {
    return (
      data?.getNotifications.pageInfo?.hasNextPage &&
      refetch({
        first: stopIndex - startIndex,
        after: data?.getNotifications.pageInfo.endCursor,
      })
    );
  }

  const onVisibleChange = (visible: boolean) => {
    if (visible && newNotiCount) {
      setNewNotiCount(0);
      clearNotificationCountMutation();
    }
  };

  const refetchNotification = () => {
    setNotifications([]);
    refetch({
      first: 10,
      after: '',
    });
  };

  const onBellClick = () => {
    refetchNotification();
    onOpen();
  };

  return (
    <Popover
      placement="bottomLeft"
      overlayClassName="fixed"
      title={
        <div className="flex max-w-full spaced pt-3 vert">
          <Typography.Title level={4} className="m-0 pl-2">
            <BellOutlined /> {t('popupNotifications.notification')}
          </Typography.Title>
          <div className="flex max-w-full spaced items-end mt-5">
            <Button
              type="text"
              size="small"
              className="border-none"
              icon={<CheckOutlined />}
              onClick={() => markAllNotificationAsSeenMutation()}
              onMouseDown={e => e.preventDefault()}
            >
              {t('popupNotifications.markAllAsRead')}
            </Button>
            <Button
              type="text"
              size="small"
              className="border-none"
              icon={<CloseOutlined />}
              onMouseDown={e => e.preventDefault()}
              onClick={() => deleteAllNotificationMutation()}
            >
              {t('popupNotifications.clearAll')}
            </Button>
          </div>
        </div>
      }
      visible={isVisible}
      trigger={'click'}
      onVisibleChange={onVisibleChange}
      content={
        notifications.length ? (
          <InfiniteLoader
            isRowLoaded={({ index }) => !!notifications[index]}
            loadMoreRows={loadMoreRows}
            rowCount={10000}
          >
            {({ onRowsRendered, registerChild }) => (
              <List
                height={98 * 4}
                autoHeight={notifications.length > 4 ? false : true}
                onRowsRendered={onRowsRendered}
                ref={registerChild}
                rowCount={notifications.length}
                rowHeight={98}
                rowRenderer={({ index, key, style }) => (
                  <div style={style} key={key}>
                    <NotificationItem
                      item={notifications[index]}
                      userId={userId}
                      onClose={onClose}
                    />
                  </div>
                )}
                width={320}
              />
            )}
          </InfiniteLoader>
        ) : (
          <div className="w-80 tc py-16 bold">
            {loading
              ? t('popupNotifications.loading')
              : t('popupNotifications.noNoti')}
          </div>
        )
      }
    >
      <div className="m-auto relative">
        <BellOutlined
          className="flex items-center w-8 text-2xl pointer-scale"
          onBlur={onClose}
          onClick={onBellClick}
        />
        <NotiCount count={newNotiCount} />
      </div>
    </Popover>
  );
}

export default NotificationPopup;
