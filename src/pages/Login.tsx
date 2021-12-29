import { Button, Form, Typography, Checkbox, Row, Col } from 'antd';
import { Store } from 'antd/es/form/interface';
import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { showError } from '@base-projects/web-uikit';
import FormInput from '#/shared/components/common/FormInput';
import useTypeSafeTranslation from '#/shared/hooks/useTypeSafeTranslation';
import AuthLayout from '#/shared/components/layout/AuthLayout';

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTypeSafeTranslation();

  const onFinish = async ({ email, password }: Store) => {
    try {
      setLoading(true);
      await Auth.signIn(email, password);
      navigate('/');
    } catch (error) {
      setLoading(false);
      showError(t('login.loginFail'));
    }
  };

  return (
    <Form onFinish={onFinish} layout="vertical" scrollToFirstError>
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
      <FormInput
        name="password"
        label="Password"
        rules={[
          {
            required: true,
          },
        ]}
        type="password"
      />
      <Row justify="space-between">
        <Col>
          <Checkbox>{t('login.rememberMe')}</Checkbox>
        </Col>
        <Col>
          <Link to="/forgot-password">{t('login.forgotPassword')}</Link>
        </Col>
      </Row>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="mt-5"
          block
          loading={loading}
        >
          {t('login.loginBtn')}
        </Button>
      </Form.Item>
    </Form>
  );
}

function Login() {
  const { t } = useTypeSafeTranslation();
  return (
    <AuthLayout>
      <Typography.Title level={2} className="tc primary mb-8">
        {t('appInfo.name')}
      </Typography.Title>
      <LoginForm />
    </AuthLayout>
  );
}
export default Login;
