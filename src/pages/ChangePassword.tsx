import { Form, Button, Col, Row } from 'antd';
import { Store } from 'antd/es/form/interface';
import useTypeSafeTranslation from '../shared/hooks/useTypeSafeTranslation';
import FormInput from '#/shared/components/common/FormInput';

function ChangePassword({ onChangePassword, onClose, loading }: Store) {
  const { t } = useTypeSafeTranslation();
  return (
    <Form onFinish={onChangePassword} layout="vertical" scrollToFirstError>
      <Form.Item
        name="oldPassword"
        label="Current Password"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <FormInput type="password" />
      </Form.Item>
      <Form.Item
        name="newPassword"
        label="New Password"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <FormInput type="password" />
      </Form.Item>
      <Form.Item
        name="confirmNewPassword"
        label="Confirm New Password"
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
      >
        <FormInput type="password" />
      </Form.Item>
      <Row className="justify-end">
        <Col>
          <Button type="ghost" onClick={onClose} block>
            {t('button.cancel')}
          </Button>
        </Col>
        <Col className="ml-2">
          <Button type="primary" htmlType="submit" block loading={loading}>
            {t('button.changePassword')}
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default ChangePassword;
