"use client";

import React from "react";
import { Button, Checkbox, Form } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import CardWrapper from "./ui/card-wrapper";
import FormField from "./ui/form-field";
import { useRouter } from "next/navigation";
import { useSigninUserMutation } from "@/redux/features/auth/api/authApi";

interface FieldType {
  username?: string;
  password?: string;
  remember?: string;
}

const SignInForm = () => {
  const router = useRouter();
  const [signinUser, { data, isLoading, error, isError, isSuccess }] =
    useSigninUserMutation();

  const onFinish = (values: any) => {
    const loginCredentials = { email: values.email, password: values.password };
    signinUser(loginCredentials);
  };

  return (
    <CardWrapper
      headerLabel="Sign In"
      subHeaderLabel="Welcome back, you've been missed!"
      backButtonHref="/sign-up"
      backButtonLabel="Don't have an account yet ? Sign In"
      showSocial
    >
      {isLoading ? (
        <h2>Loading....</h2>
      ) : (
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <FormField
            icon={
              <MailOutlined
                style={{ marginRight: "10px", color: "GrayText" }}
              />
            }
            name="email"
            placeholderLabel="Your Email Here"
            email
            rulesMessage="Please enter a valid email address"
          />

          <FormField
            password
            icon={
              <LockOutlined
                style={{ marginRight: "10px", color: "GrayText" }}
              />
            }
            name="password"
            placeholderLabel="Create password"
            rulesMessage="Password can't be empty"
          />

          {isError && (
            <div className="flex items-center p-3 text-lg rounded-md bg-red-200 my-5 uppercase gap-x-2 text-destructive">
              <p className="text-red-500"> {error?.data.error}</p>
            </div>
          )}

          <Form.Item<FieldType> name="remember" valuePropName="checked">
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
      )}
    </CardWrapper>
  );
};

export default SignInForm;
