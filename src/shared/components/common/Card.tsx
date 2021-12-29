import { Typography, Image } from 'antd';
import ImageDefault from '#/assets/images/imageDefault.png';

interface Props {
  url: string;
  defaultImage?: string;
  width?: number;
  height?: number;
  description?: string;
}

function IdentityCard({
  url,
  defaultImage = ImageDefault,
  width = 180,
  height = 108,
  description,
}: Props) {
  return (
    <div className="tc mb-8">
      <Image
        src={url ? `${import.meta.env.VITE_IMAGE_URL}/${url}` : defaultImage}
        width={width}
        height={height}
        className="object-cover r-lg shadow-md"
        preview={{
          maskClassName: 'r-lg',
        }}
      />
      <Typography.Title level={5} className="tc">
        {description}
      </Typography.Title>
    </div>
  );
}

export default IdentityCard;
