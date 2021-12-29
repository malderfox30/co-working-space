import { Slider, Upload, ImageProps, Typography } from 'antd';
import ImgCrop from 'antd-img-crop';
import { useState } from 'react';
import { RcFile } from 'antd/es/upload';
import { showError, uploadFile } from '@base-projects/web-uikit';
import Image from './Image';
import { S3UploadType } from '#/generated/schemas';
import useAsyncQuery from '#/shared/hooks/useAsyncQuery';
import 'antd/es/modal/style';
import 'antd/es/slider/style';

interface Props {
  onChange?: (url: string) => void;
  disabled?: boolean;
  src?: string | null;
  aspect?: number | undefined;
  description?: string | null;
  width?: number;
  height?: number;
}

function UploadImage({
  onChange,
  disabled,
  src = '',
  aspect = 5 / 3,
  description,
  width = 150,
  height = 90,
  ...rest
}: Props & ImageProps) {
  const { getPresignedUrl } = useAsyncQuery();
  const [imageURL, setImageURL] = useState<string | undefined>(
    src ?? undefined,
  );
  const [progress, setProgress] = useState(0);

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
          onUploadProgress: setProgress,
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
    <ImgCrop grid shape="rect" aspect={aspect}>
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
            <Image
              url={imageURL}
              preview={false}
              width={width}
              height={height}
              isUpload
              className="flex center2"
            >
              <Slider value={progress} className="w-20" />
            </Image>
          </>
        ) : (
          <Image
            preview={false}
            url={imageURL}
            width={width}
            height={height}
            alt="image"
            isUpload
            {...rest}
          />
        )}
        <Typography.Title level={5} className="tc">
          {description}
        </Typography.Title>
      </Upload>
    </ImgCrop>
  );
}

export default UploadImage;
