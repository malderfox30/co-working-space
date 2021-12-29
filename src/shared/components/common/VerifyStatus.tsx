import { Tag } from 'antd';
import { VerificationRequestStatus } from '#/generated/schemas';
import useTypeSafeTranslation from '#/shared/hooks/useTypeSafeTranslation';

interface Props {
  status?: VerificationRequestStatus | null;
}

function VerifyStatus({ status }: Props) {
  const { t } = useTypeSafeTranslation();

  const userStatus = (() => {
    if (status === VerificationRequestStatus.Pending)
      return { color: 'var(--warning-color)', name: t('status.pending') };
    if (status === VerificationRequestStatus.Approved)
      return { color: 'var(--success-color)', name: t('status.verified') };
    if (status === VerificationRequestStatus.Denied)
      return { color: 'var(--error-color)', name: t('status.rejected') };
    return { color: 'var(--normal-color)', name: t('status.notVerify') };
  })();

  return (
    <Tag color={userStatus.color} className="r-40">
      {userStatus.name}
    </Tag>
  );
}

export default VerifyStatus;
