import { useReactiveVar } from '@apollo/client';
import { PageContainer } from '@ant-design/pro-layout';
import { Form, Input, Button, Card, Typography, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { Store } from 'antd/es/form/interface';
import { Auth } from 'aws-amplify';
import { showError, useToggle } from '@base-projects/web-uikit';
import { userInfoVar } from '../graphql/cache';
import ChangePassword from './ChangePassword';
import UploadAvatar from '#/shared/components/common/UploadAvatar';
import { IUser, useUpdateMeMutation } from '#/generated/schemas';
import { showSuccess } from '#/shared/utils/tools';
import useTypeSafeTranslation from '#/shared/hooks/useTypeSafeTranslation';

function UserInfo() {
  const { t } = useTypeSafeTranslation();
  const [visible, onOpen, onClose] = useToggle(false);
  const [loading, setLoading] = useState(false);
  const { avatar, fullName, email, userType } = useReactiveVar(
    userInfoVar,
  ) as IUser;
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      avatar,
      fullName,
      email,
      userType,
    });
  }, [email]);

  const [updateMeMutation] = useUpdateMeMutation({
    onCompleted: data => {
      showSuccess(t('success.description'));
      userInfoVar(data.updateMe);
    },
    onError: showError,
  });
  const onUpdate = ({ fullName, avatar }: IUser) => {
    updateMeMutation({
      variables: {
        input: {
          fullName: fullName,
          avatar: avatar,
        },
      },
    });
  };

  const onChangePassword = async ({ oldPassword, newPassword }: Store) => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(user, oldPassword, newPassword);
      showSuccess(t('changePassword.success'));
      onClose();
    } catch (error) {
      showError(t('changePassword.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer
      fixedHeader
      header={{
        title: t('header.profile'),
      }}
      extra={[
        <Button key="changePassword" type="primary" onClick={onOpen}>
          {t('button.changePassword')}
        </Button>,
      ]}
    >
      <Card>
        <Modal
          title={t('changePassword.title')}
          centered
          visible={visible}
          onOk={onChangePassword}
          onCancel={onClose}
          footer={[]}
        >
          <ChangePassword
            onChangePassword={onChangePassword}
            onClose={onClose}
            loading={loading}
          />
        </Modal>
        <div className="w-96 mx-auto">
          <Form form={form} layout="vertical" onFinish={onUpdate}>
            <div className="flex justify-center">
              <Form.Item name="avatar" noStyle>
                <UploadAvatar src={avatar} size={120} />
              </Form.Item>
            </div>
            <Typography.Title className="tc mt-4" level={5}>
              {t('profile.title')}
            </Typography.Title>
            <Form.Item name="fullName" label={t('profile.fullName')}>
              <Input size="large" />
            </Form.Item>
            <Form.Item name="email" label={t('profile.email')}>
              <Input size="large" disabled />
            </Form.Item>
            <Form.Item name="userType" label={t('profile.role')}>
              <Input size="large" disabled />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="ml-40">
                {t('button.save')}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </PageContainer>
  );
}

export default UserInfo;
