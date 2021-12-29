import { AvatarProps, Slider, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { useEffect, useState } from 'react';
import { RcFile } from 'antd/es/upload';
import { showError, uploadFile } from '@base-projects/web-uikit';
import Avatar from './Avatar';
import { S3UploadType } from '#/generated/schemas';
import useAsyncQuery from '#/shared/hooks/useAsyncQuery';
import 'antd/es/modal/style';
import 'antd/es/slider/style';

interface Props {
  onChange?: (url: string) => void;
  disabled?: boolean;
  isPersonAvatar?: boolean;
  src?: string | null;
}

function UploadAvatar({
  onChange,
  disabled,
  isPersonAvatar,
  src,
  size = 100,
  ...rest
}: Props & AvatarProps) {
  const { getPresignedUrl } = useAsyncQuery();
  const [imageURL, setImageURL] = useState(src);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setImageURL(src as string);
  }, [src]);

  const handleUpload = async ({
    file,
  }: {
    file: string | Blob | RcFile | File;
  }) => {
    try {
      setProgress(0);
      const { data } = await getPresignedUrl({
        fileType: (file as File).type,
        fileName: (file as File).name,
        pathType: S3UploadType.Profile,
      });
      const uploadUrl = data?.presignedUrlS3?.uploadUrl;
      const url = `${data?.presignedUrlS3.pathFile}`;
      if (uploadUrl) {
        await uploadFile({
          file: file as Blob,
          signedRequest: uploadUrl,
          onUploadProgress: (percent: number) => setProgress(percent),
        });

        onChange?.(url);
        setImageURL(url);
        setProgress(100);
      }
    } catch (error) {
      showError(error as Error);
    }
  };

  return (
    <ImgCrop grid shape="round">
      <Upload
        accept="image/*"
        customRequest={handleUpload}
        showUploadList={false}
        disabled={disabled}
        maxCount={1}
        progress={{
          strokeWidth: 4,
          showInfo: false,
        }}
      >
        {progress !== 0 && progress !== 100 ? (
          <>
            <Avatar size={size} className="flex center2">
              <Slider value={progress} className="w-20" />
            </Avatar>
          </>
        ) : (
          <Avatar
            isPersonAvatar={isPersonAvatar}
            src={imageURL}
            size={size}
            alt="image"
            {...rest}
          />
        )}
      </Upload>
    </ImgCrop>
  );
}

export default UploadAvatar;
