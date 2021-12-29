import { Tag } from 'antd';
import { OrderStatus as Status } from '#/generated/schemas';
import useTypeSafeTranslation from '#/shared/hooks/useTypeSafeTranslation';

interface Props {
  status?: Status | null;
}

function OrderStatus({ status }: Props) {
  const { t } = useTypeSafeTranslation();

  const userStatus = (() => {
    if (status === Status.Accepted)
      return { color: 'var(--info-color)', name: t('status.accepted') };
    if (status === Status.LookingForDriver)
      return { color: 'var(--warning-color)', name: t('status.looking') };
    if (status === Status.Completed)
      return { color: 'var(--success-color)', name: t('status.completed') };
    if (status === Status.Cancelled)
      return { color: 'var(--error-color)', name: t('status.cancelled') };
    return { color: 'var(--yellow-color)', name: t('status.pickedUp') };
  })();

  return (
    <Tag color={userStatus.color} className="r-40">
      {userStatus.name}
    </Tag>
  );
}

export default OrderStatus;
