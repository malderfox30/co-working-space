import Avatar from './Avatar';
import { User, UserInfo } from '#/generated/schemas';

interface Props {
  userInfo?: UserInfo | User | null;
}

function PackageUserInfo({ userInfo }: Props) {
  return (
    <div className="flex items-start w-full mt-2">
      <Avatar
        className="block flex-shrink-0 shadow"
        size={56}
        src={userInfo?.avatar}
      />
      <div className="px-5 w-full">
        <p className="inline break-all">
          <strong>{userInfo?.name}</strong> | {userInfo?.email}
        </p>
        <p className="text-xs">{userInfo?.address}</p>
        <p className="text-xs">{userInfo?.address2}</p>
        <p className="text-xs">{userInfo?.phoneNumber}</p>
      </div>
    </div>
  );
}

export default PackageUserInfo;
