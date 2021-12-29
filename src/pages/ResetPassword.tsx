import { Typography, Form, Button } from 'antd';
import { Auth } from 'aws-amplify';
import { Store } from 'antd/es/form/interface';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { showError } from '@base-projects/web-uikit';
import FormInput from '#/shared/components/common/FormInput';
import AuthLayout from '#/shared/components/layout/AuthLayout';
import useTypeSafeTranslation from '#/shared/hooks/useTypeSafeTranslation';
import { showSuccess } from '#/shared/utils/tools';

function ResetPassword() {
  const { t } = useTypeSafeTranslation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { state: email } = useLocation();

  const onSubmit = async ({ code, newPassword, confirmNewPassword }: Store) => {
    try {
      setLoading(true);
      if (newPassword === confirmNewPassword && email) {
        await Auth.forgotPasswordSubmit(email, code, newPassword);
        showSuccess(t('resetPassword.success'));
        navigate('/login');
      } else {
        showError(t('resetPassword.error'));
      }
    } catch (error) {
      showError(error as Error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthLayout>
      <Typography.Title level={2} className="tc primary mb-8">
        {t('appInfo.name')}
      </Typography.Title>
      <Form onFinish={onSubmit} layout="vertical">
        <FormInput
          name="code"
          label={t('resetPassword.code')}
          rules={[
            {
              required: true,
            },
          ]}
        />
        <FormInput
          name="newPassword"
          label={t('resetPassword.newPassword')}
          rules={[
            {
              required: true,
            },
          ]}
          type="password"
        />
        <FormInput
          name="confirmNewPassword"
          label={t('resetPassword.confirmPassword')}
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('Confirm new password is not match!'),
                );
              },
            }),
          ]}
          type="password"
        />
        <Button
          type="primary"
          block
          className="mt-5"
          htmlType="submit"
          loading={loading}
        >
          {t('button.resetMyPassword')}
        </Button>
      </Form>
    </AuthLayout>
  );
}
export default ResetPassword;
