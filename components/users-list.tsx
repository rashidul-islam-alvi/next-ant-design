"use client";

import React, { useEffect, useState } from "react";
import { Button, Dropdown, Table } from "antd";
import type { MenuProps, TableProps } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
} from "@/redux/features/users/api/usersApi";
import toast from "react-hot-toast";
import Loading from "./loading";

interface DataType {
  key: string;
  username: string;
  email: string;
  options: string[];
}

const UsersList = () => {
  const [id, setId] = useState("");
  const getAllUsers = useGetAllUsersQuery(1);
  const [deleteUser, { isError, isSuccess }] = useDeleteUserMutation();

  const handleEditClick = () => {
    console.log("edit", id);
  };
  const handleDeleteClick = () => {
    deleteUser(id);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted Successfully " + id);
    }

    if (isError) {
      toast.error("Something went wrong");
    }
  }, [isSuccess, isError, id]);

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

  const data = getAllUsers.data?.map((user: any) => ({
    key: user.id,
    username: user.username,
    email: user.email,
    option: ["edit", "delete"],
  }));

  return (
    <div>
      {getAllUsers.isLoading ? (
        <Loading />
      ) : (
        <Table columns={columns} dataSource={data} />
      )}
    </div>
  );
};

export default UsersList;
