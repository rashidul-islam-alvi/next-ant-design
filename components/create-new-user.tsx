"use client";

import { Button, Form, Modal } from "antd";
import React, { useEffect, useState } from "react";
import CreateNewUserForm from "./create-new-user-form";
import { useCreateUserMutation } from "@/redux/features/users/api/usersApi";
import toast from "react-hot-toast";

const CreateNewUser = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [createNewUser, { isLoading, isError, isSuccess }] =
    useCreateUserMutation();
  const [form] = Form.useForm();

  const handleOkClick = () => {
    form
      .validateFields()
      .then((values) => {
        createNewUser(values);
        form.resetFields();
        setModalOpen(false);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    form.resetFields();
    setModalOpen(false);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("User Created Succesfully.");
    }

    if (isError) {
      toast.error("Something Went Wrong");
    }
  }, [isError, isSuccess]);

  return (
    <div>
      <Button type="dashed" size="large" onClick={() => setModalOpen(true)}>
        Create a new user
      </Button>
      <Modal
        title="Create a new user"
        centered
        open={modalOpen}
        onOk={() => handleOkClick()}
        onCancel={() => handleCancel()}
        okText="Create"
      >
        <CreateNewUserForm form={form} />
      </Modal>
    </div>
  );
};

export default CreateNewUser;
