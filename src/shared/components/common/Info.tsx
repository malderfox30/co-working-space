import Avatar from './Avatar';
interface Props {
  avatar: string | undefined | null;
  fullName: string | undefined | null;
  email: string | undefined | null;
}
function Info({ avatar, fullName, email }: Props) {
  return (
    <div className="flex items-center w-full">
      <div>
        <Avatar src={avatar} name={fullName ?? email} />
      </div>
      <div className="px-5 w-full">
        <strong className="primary block truncate max-w-64">{fullName}</strong>
        <p className="truncate max-w-64">{email}</p>
      </div>
    </div>
  );
}

export default Info;
