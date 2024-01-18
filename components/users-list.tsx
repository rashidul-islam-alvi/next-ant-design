"use client";

import React, { useState } from "react";
import { Button, Dropdown, Space, Table, Tag } from "antd";
import type { MenuProps, TableProps } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { useDeleteUserMutation } from "@/redux/features/users/api/usersApi";
import toast from "react-hot-toast";

interface DataType {
  key: string;
  username: string;
  email: string;
  options: string[];
}

// todo: make interface of users
const UsersList = ({ users }: any) => {
  const [id, setId] = useState("");
  const [deleteUser, { isError, isSuccess }] = useDeleteUserMutation();

  const handleEditClick = () => {
    console.log("edit", id);
  };
  const handleDeleteClick = () => {
    deleteUser(id);
  };

  if (isSuccess) {
    toast.success("Deleted Succesfully");
  }

  if (isError) {
    toast.error("Something went wrong");
  }

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Button block onClick={() => handleEditClick()}>
          Edit
        </Button>
      ),
    },
    {
      key: "2",
      label: (
        <Button danger block onClick={() => handleDeleteClick()}>
          Delete
        </Button>
      ),
    },
  ];

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "ID",
      dataIndex: "key",
      key: "id",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Options",
      key: "options",
      dataIndex: "options",
      render: (_, record) => (
        <div
          onClick={() => {
            setId(record.key);
          }}
        >
          <Dropdown
            menu={{ items }}
            placement="bottomRight"
            trigger={["click"]}
            arrow
          >
            <Button type="text">
              <MoreOutlined rotate={90} className="text-2xl" />
            </Button>
          </Dropdown>
        </div>
      ),
    },
  ];

  // todo: make interface of user
  const data = users.map((user: any) => ({
    key: user.id,
    username: user.username,
    email: user.email,
    option: ["edit", "delete"],
  }));

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default UsersList;
