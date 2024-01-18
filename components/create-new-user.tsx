"use client";

import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import CreateNewUserForm from "./create-new-user-form";

const CreateNewUser = () => {
  const [newUser, setNewUser] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [form] = Form.useForm();

  const handleOkClick = () => {
    form
      .validateFields()
      .then((values) => {
        setNewUser(values);
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

  console.log(newUser);
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
