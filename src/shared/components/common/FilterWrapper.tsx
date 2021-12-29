import { Button, Col, Form, Row, Space } from 'antd';
import { Store } from 'antd/es/form/interface';
import { PropsWithChildren } from 'react';
import useTypeSafeTranslation from '#/shared/hooks/useTypeSafeTranslation';

interface Props {
  onFilter: (values: Store) => void;
}

function FilterWrapper({ onFilter, children }: PropsWithChildren<Props>) {
  const { t } = useTypeSafeTranslation();
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
    onFilter({});
  };

  return (
    <Form form={form} onFinish={onFilter}>
      <Row className="w-full">
        <Col flex={1}>
          <Row gutter={12} className="w-full">
            {children}
          </Row>
        </Col>
        <Col flex={1} className="flex justify-end">
          <Space size="middle">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {t('button.filter')}
              </Button>
            </Form.Item>
            <Form.Item>
              <Button onClick={onReset}>{t('button.clearFilter')}</Button>
            </Form.Item>
          </Space>
        </Col>
      </Row>
    </Form>
  );
}

export default FilterWrapper;
