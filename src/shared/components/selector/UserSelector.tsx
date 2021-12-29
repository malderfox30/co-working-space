import InfinitySelect, { InfinitySelectProps } from '../common/InfinitySelect';
import {
  GetUsersDocument,
  GetUsersQuery,
  GetUsersQueryVariables,
  User,
} from '#/generated/schemas';

function UserSelector({
  ...rest
}: InfinitySelectProps<User, GetUsersQueryVariables>) {
  return (
    <InfinitySelect<GetUsersQuery, GetUsersQueryVariables, User>
      formatData={data => data?.getUsers}
      query={GetUsersDocument}
      className="w-96"
      onClick={e => e.preventDefault()}
      mode="multiple"
      convertDataToOptions={users =>
        users.map(user => ({
          label: `${user.email}`,
          value: `${user.email}`,
        }))
      }
      {...rest}
    />
  );
}

export default UserSelector;
