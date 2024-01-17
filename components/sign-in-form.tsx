"use client";

import React from "react";
import { Button, Checkbox, Form } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import CardWrapper from "./ui/card-wrapper";
import FormField from "./ui/form-field";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const SignInForm = () => {
  return (
    <CardWrapper
      headerLabel="Sign In"
      subHeaderLabel="Welcome back, you've been missed!"
      backButtonHref="/sign-up"
      backButtonLabel="Don't have an account yet ? Sign In"
      showSocial
    >
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <FormField
          icon={
            <MailOutlined style={{ marginRight: "10px", color: "GrayText" }} />
          }
          name="email"
          placeholderLabel="Your Email Here"
          email
          rulesMessage="Please enter a valid email address"
        />

        <FormField
          password
          icon={
            <LockOutlined style={{ marginRight: "10px", color: "GrayText" }} />
          }
          name="password"
          placeholderLabel="Create password"
          rulesMessage="Password can't be empty"
        />

        <Form.Item<FieldType> name="remember">
          <Checkbox
            style={{
              fontSize: "15px",
              color: "#B0B7C3",
            }}
          >
            Remember Me
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            style={{
              width: "100%",
              height: "50px",
              borderRadius: "15px",
              backgroundColor: "#377DFF",
            }}
            type="primary"
            htmlType="submit"
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </CardWrapper>
  );
};

export default SignInForm;
