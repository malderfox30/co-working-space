import {
  CarOutlined,
  UserOutlined,
  CloseCircleFilled,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { Divider, Typography } from 'antd';
import { showError } from '@base-projects/web-uikit';
import styled from '@emotion/styled';
import useTypeSafeTranslation from '#/shared/hooks/useTypeSafeTranslation';
import { showSuccess } from '#/shared/utils/tools';
import {
  Notification,
  NotificationStatus,
  useDeleteNotificationMutation,
  useMarkNotificationAsSeenMutation,
  UserType,
} from '#/generated/schemas';
import { ClientName } from '#/graphql/client';

interface Props {
  item: Notification;
  userId: string;
  onClose: () => void;
}

const Wraper = styled.div`
  height: 96px;
  box-sizing: border-box;
  .clear-btn-display {
    display: none;
  }
  &:hover {
    background-color: var(--primary-shadow-color) !important;
    .clear-btn-display {
      display: block;
    }
  }
`;

function NotificationItem({ item, userId, onClose }: Props) {
  const { t } = useTypeSafeTranslation();
  const [deleteNotificationMutation] = useDeleteNotificationMutation({
    context: {
      clientName: ClientName.Notification,
    },
    variables: {
      userId: userId,
      createdAt: item.createdAt,
    },
    onCompleted() {
      showSuccess(t('popupNotifications.deleteSuccess'));
      onClose();
    },
    onError: showError,
  });
  const [markNotificationAsSeenMutation] = useMarkNotificationAsSeenMutation({
    context: {
      clientName: ClientName.Notification,
    },
    variables: {
      userId: userId,
      createdAt: item.createdAt,
    },
    onCompleted: onClose,
  });

  return (
    <Wraper
      className={
        item.notificationStatus === NotificationStatus.Unseen ? 'bold' : 'o-75'
      }
    >
      <Link
        to={
          item.extraObject?.userType === UserType.Driver
            ? `/drivers/${item.extraObject?.senderId}`
            : `/users/${item.extraObject?.senderId}`
        }
        onClick={() => markNotificationAsSeenMutation()}
        onMouseDown={e => e.preventDefault()}
        className="hover:text-gray hover:bg-shadow"
      >
        <div className="flex items-center py-2 px-5 h-24">
          <div className="mr-4 text-2xl">
            {item.extraObject?.userType === UserType.Driver ? (
              <CarOutlined />
            ) : (
              <UserOutlined />
            )}
          </div>
          <div>
            <strong>{t('popupNotifications.verifyRequest')}</strong>
            <Typography.Paragraph
              className="max-h-11 ovf-hidden text-xs mt-0.5 mb-0.5"
              ellipsis={{
                rows: 2,
                expandable: false,
                tooltip: true,
              }}
            >
              {item.bodyText}
            </Typography.Paragraph>
            <p className="text-gray text-xs mt-0.5">
              {dayjs(item.createdAt).format('MM/DD/YYYY, HH:mm')}
            </p>
          </div>
        </div>
        <Divider className="m-0" />
      </Link>
      {item.notificationStatus === NotificationStatus.Unseen && (
        <div className="absolute right-3 bottom-3 r-full w-3 h-3 bg-primary" />
      )}
      <CloseCircleFilled
        className="primary absolute top-12 right-3 pointer-scale clear-btn-display"
        onClick={() => deleteNotificationMutation()}
        onMouseDown={e => e.preventDefault()}
      />
    </Wraper>
  );
}

export default NotificationItem;
