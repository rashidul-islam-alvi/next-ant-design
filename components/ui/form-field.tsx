import { Form, Input } from "antd";
import Password from "antd/es/input/Password";
import React from "react";

interface SignUpFormItemProps {
  name: string;
  icon: React.ReactNode;
  placeholderLabel: string;
  rulesMessage: string;
  type?: string;
  password?: boolean;
  email?: boolean;
  component?: React.ReactNode;
}

const FormField = ({
  name,
  icon,
  placeholderLabel,
  rulesMessage,
  password,
  email,
}: SignUpFormItemProps) => {
  if (password)
    return (
      <Form.Item
        name={name}
        rules={[{ required: true, message: rulesMessage }]}
      >
        <Input.Password
          style={{ height: "55px", padding: "0 20px", borderRadius: "15px" }}
          prefix={icon}
          placeholder={placeholderLabel}
        />
      </Form.Item>
    );

  if (email)
    return (
      <Form.Item
        name={name}
        rules={[
          {
            required: true,
            message: rulesMessage,
            type: "email",
          },
        ]}
      >
        <Input
          style={{ height: "55px", padding: "0 20px", borderRadius: "15px" }}
          prefix={icon}
          placeholder={placeholderLabel}
        />
      </Form.Item>
    );

  return (
    <Form.Item name={name} rules={[{ required: true, message: rulesMessage }]}>
      <Input
        style={{ height: "55px", padding: "0 20px", borderRadius: "15px" }}
        prefix={icon}
        placeholder={placeholderLabel}
      />
    </Form.Item>
  );
};

export default FormField;
