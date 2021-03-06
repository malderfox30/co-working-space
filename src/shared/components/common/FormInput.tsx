import { Form, Input } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { Rule } from 'antd/es/form';
import { NamePath } from 'antd/es/form/interface';

interface Props {
  name?: NamePath;
  label?: string;
  required?: boolean;
  messageRequire?: string;
  messageValidate?: string;
  initialValue?: string | number;
  onChange?: (_value: unknown) => void;
  pattern?: RegExp;
  placeholder?: string | boolean;
  style?: React.CSSProperties;
  prefix?: React.ReactNode;
  type?: string;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  disabled?: boolean;
  size?: SizeType;
  rules?: Rule[];
  messageVariables?: Record<string, string>;
  value?: string;
}

function FormInput({
  name,
  label,
  required,
  onChange,
  placeholder,
  style,
  prefix,
  rules,
  type,
  addonBefore,
  addonAfter,
  disabled,
  initialValue,
  size,
  messageVariables,
  value,
}: Props) {
  const props = {
    disabled,
    style,
    placeholder: placeholder ? `Enter ${label}` : undefined,
    prefix,
    type,
    onChange,
    value,
    size,
    addonAfter,
    addonBefore,
  };
  return (
    <Form.Item
      label={label}
      name={name}
      messageVariables={messageVariables}
      rules={[
        {
          required,
        },
        ...(rules as Rule[]),
      ]}
      initialValue={initialValue}
    >
      {(() => {
        if (type === 'password') {
          return <Input.Password {...props} />;
        }
        return <Input {...props} />;
      })()}
    </Form.Item>
  );
}

FormInput.defaultProps = {
  required: false,
  type: 'text',
  rules: [],
};

export default FormInput;
