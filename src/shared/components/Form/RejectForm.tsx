import { Form, Button, Input } from 'antd';
import { Store } from 'antd/es/form/interface';
import useTypeSafeTranslation from '#/shared/hooks/useTypeSafeTranslation';

function RejectForm({ onRejectConfirm }: Store) {
  const { t } = useTypeSafeTranslation();

  return (
    <Form onFinish={onRejectConfirm}>
      <Form.Item name="reason" rules={[{ required: true }]}>
        <Input.TextArea rows={3} placeholder={t('drivers.rejectReason')} />
      </Form.Item>
      <div className="flex justify-end">
        <Button htmlType="submit" type="primary">
          {t('button.reject')}
        </Button>
      </div>
    </Form>
  );
}

export default RejectForm;
