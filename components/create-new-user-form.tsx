import { Form, Input } from "antd";
import React from "react";

type FieldType = {
  firstName?: string;
  lastName?: string;
  email?: string;
};

const CreateNewUseForm = ({ form }: any) => {
  return (
    <Form form={form}>
      <Form.Item<FieldType>
        name="firstName"
        rules={[{ required: true, message: "First name required!" }]}
      >
        <Input placeholder="First Name" />
      </Form.Item>

      <Form.Item<FieldType>
        name="lastName"
        rules={[{ required: true, message: "Last name required" }]}
      >
        <Input placeholder="Last Name" />
      </Form.Item>

      <Form.Item<FieldType>
        name="email"
        rules={[
          {
            required: true,
            message: "Please enter a valid email adrress",
            type: "email",
          },
        ]}
      >
        <Input placeholder="User Email" />
      </Form.Item>
    </Form>
  );
};

export default CreateNewUseForm;
