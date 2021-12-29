import { Store } from 'antd/es/form/interface';
import { Auth } from 'aws-amplify';
import { Typography, Form, Row, Col, Button } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { showError } from '@base-projects/web-uikit';
import AuthLayout from '#/shared/components/layout/AuthLayout';
import useTypeSafeTranslation from '#/shared/hooks/useTypeSafeTranslation';
import FormInput from '#/shared/components/common/FormInput';

function ForgotPassword() {
  const { t } = useTypeSafeTranslation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async ({ email }: Store) => {
    try {
      setLoading(true);
      await Auth.forgotPassword(email);
      navigate('/reset-password', { state: email });
    } catch (error) {
      showError(t('forgotPassword.error'));
    } finally {
      setLoading(false);
    }
  };

  const onCancel = () => {
    navigate('/login');
  };
  return (
    <AuthLayout>
      <Typography.Title level={2} className="tc primary mb-8">
        {t('appInfo.name')}
      </Typography.Title>
      <Typography.Paragraph className="bold">
        {t('forgotPassword.title')}
      </Typography.Paragraph>
      <Typography.Text className="">
        {t('forgotPassword.success.description')}
      </Typography.Text>
      <Form onFinish={onSubmit} layout="vertical">
        <FormInput
          name="email"
          label="Email"
          messageVariables={{ name: 'Email' }}
          rules={[
            {
              type: 'email',
              required: true,
            },
          ]}
        />
        <Row gutter={20}>
          <Col xs={12}>
            <Button block onClick={onCancel}>
              {t('button.cancel')}
            </Button>
          </Col>
          <Col xs={12}>
            <Button block type="primary" htmlType="submit" loading={loading}>
              {t('button.forgotPassword')}
            </Button>
          </Col>
        </Row>
      </Form>
    </AuthLayout>
  );
}
export default ForgotPassword;
