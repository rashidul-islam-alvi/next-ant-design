"use client";

import React from "react";
import { Button, Checkbox, Form } from "antd";
import { SmileOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import CardWrapper from "./ui/card-wrapper";
import FormField from "./ui/form-field";
import { useSignupUserMutation } from "@/redux/features/auth/api/authApi";

const SignUpForm = () => {
  const [signupUser, { data, isLoading }] = useSignupUserMutation();

  const onFinish = (values: any) => {
    const signUpCredential = { email: values.email, password: values.password };
    signupUser(signUpCredential);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  console.log(data);

  type FieldType = {
    email?: string;
    username?: string;
    password?: string;
    agree?: string;
  };

  return (
    <CardWrapper
      headerLabel="Getting Started"
      subHeaderLabel="Create an account to continue"
      backButtonHref="/sign-in"
      backButtonLabel="Already have an account ? Sign In"
      showSocial
    >
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
          icon={
            <SmileOutlined style={{ marginRight: "10px", color: "GrayText" }} />
          }
          name="username"
          placeholderLabel="Your Name"
          rulesMessage="Name can't be empty"
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

        <Form.Item<FieldType> name="agree" valuePropName="checked">
          <Checkbox
            style={{
              fontSize: "15px",
              color: "#B0B7C3",
            }}
          >
            I agree to the Terms & Conditions
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            style={{
              height: "50px",
              borderRadius: "15px",
              backgroundColor: "#377DFF",
            }}
            type="primary"
            htmlType="submit"
            block
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </CardWrapper>
  );
};

export default SignUpForm;
