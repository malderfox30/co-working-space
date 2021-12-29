import { Tag } from 'antd';
import { formatDate } from '@base-projects/web-uikit';
import Avatar from './Avatar';
import { UserInfo, VehicleVerification } from '#/generated/schemas';

interface Props {
  driver?: UserInfo | null;
  vehicle?: Partial<VehicleVerification> | null;
}

function PackageDriverInfo({ driver, vehicle }: Props) {
  return (
    <div className="flex items-start w-full mt-2">
      <Avatar
        className="block flex-shrink-0 shadow"
        size={56}
        src={driver?.avatar}
      />
      <div className="px-5 w-full">
        <p className="inline break-all">
          <strong>{driver?.name}</strong> | {driver?.email}
        </p>
        <p className="text-xs">{driver?.phoneNumber}</p>
        <p className="text-xs">
          {vehicle?.licensePlate && <Tag>{vehicle?.licensePlate}</Tag>}
          {`${vehicle?.brand ?? ''} ${
            vehicle?.yearOfManufacture
              ? formatDate(vehicle?.yearOfManufacture, 'YYYY')
              : ''
          }`}{' '}
        </p>
      </div>
    </div>
  );
}

export default PackageDriverInfo;
