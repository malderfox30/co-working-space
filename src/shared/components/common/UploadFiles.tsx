import { AvatarProps, Button, Upload } from 'antd';
import { RcFile } from 'antd/es/upload';
import { showError, uploadFile } from '@base-projects/web-uikit';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { S3UploadType } from '#/generated/schemas';
import useAsyncQuery from '#/shared/hooks/useAsyncQuery';
import 'antd/es/modal/style';
import 'antd/es/slider/style';
import useTypeSafeTranslation from '#/shared/hooks/useTypeSafeTranslation';
import { getFileName } from '#/shared/utils/tools';

interface Props {
  onChange?: (value: string[]) => void;
  disabled?: boolean;
  defaultFiles?: string[];
}

function UploadFiles({
  onChange,
  disabled,
  defaultFiles,
}: Props & AvatarProps) {
  const { t } = useTypeSafeTranslation();
  const { getPresignedUrl } = useAsyncQuery();
  const [files, setFiles] = useState(defaultFiles || []);

  const handleUpload = async ({
    file,
    onSuccess,
    onError,
  }: {
    file: string | Blob | RcFile | File;
    onSuccess?: (body: string, xhr: XMLHttpRequest) => void;
    onError?: (event: ProgressEvent) => void;
  }) => {
    try {
      const { data } = await getPresignedUrl({
        fileType: (file as File).type,
        fileName: (file as File).name,
        pathType: S3UploadType.Package,
      });
      const uploadUrl = data?.presignedUrlS3?.uploadUrl;
      const url = `${data?.presignedUrlS3.pathFile}`;
      if (uploadUrl) {
        const response = await uploadFile({
          file: file as Blob,
          signedRequest: uploadUrl,
        });
        onSuccess?.(response.statusText, file as unknown as XMLHttpRequest);
        onChange?.([...files, url]);
        setFiles([...files, url]);
      }
    } catch (error) {
      onError?.(error as ProgressEvent<EventTarget>);
      showError(error as Error);
    }
  };

  const onRemove = ({ url }: { url?: string }) => {
    const index = files.indexOf(url || '');
    const newFileList = files.slice();
    newFileList.splice(index, 1);
    onChange?.(newFileList);
    setFiles(newFileList);
  };

  return (
    <Upload
      customRequest={handleUpload}
      showUploadList={true}
      disabled={disabled}
      maxCount={5}
      defaultFileList={defaultFiles?.map((item, index) => {
        return {
          uid: index.toString(),
          name: getFileName(item) || `document ${index}`,
          url: `${import.meta.env.VITE_IMAGE_URL}/${item}`,
        };
      })}
      onRemove={onRemove}
      progress={{
        strokeWidth: 4,
        showInfo: false,
      }}
    >
      <Button icon={<UploadOutlined />}>
        {t('drivers.attachRelevantDocument')}
      </Button>
    </Upload>
  );
}

export default UploadFiles;
