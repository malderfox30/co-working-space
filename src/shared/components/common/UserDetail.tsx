import { formatDate } from '@base-projects/web-uikit';
import VerifyStatus from './VerifyStatus';
import useTypeSafeTranslation from '#/shared/hooks/useTypeSafeTranslation';
import { IDriver, IUser, User } from '#/generated/schemas';

interface Props {
  detail: Partial<User> | Partial<IUser> | Partial<IDriver> | null | undefined;
}

function UserDetail({ detail }: Props) {
  const { t } = useTypeSafeTranslation();
  return (
    <>
      <p>
        {t('profile.email')}: {detail?.email ?? 'N/A'}
      </p>
      <p>
        {t('profile.phone')}: {detail?.phoneNumber ?? 'N/A'}
      </p>
      <p>
        {t('users.address')}: {detail?.address?.address ?? 'N/A'}
      </p>
      {detail?.address2 && (
        <p>
          {t('users.address2')}: {detail?.address2}
        </p>
      )}
      <p>
        {t('users.birthday')}: {formatDate(detail?.dob, 'MM/DD/YYYY') ?? 'N/A'}
      </p>
      <p>
        {t('users.gender')}: {detail?.gender ?? 'N/A'}
      </p>
      <p>
        {t('users.status')}:{' '}
        <VerifyStatus status={detail?.userVerificationRequest?.status} />
      </p>
    </>
  );
}

export default UserDetail;
