import React from "react";
import { Button, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { MoreOutlined } from "@ant-design/icons";

const UsersList = ({ users }) => {
  interface DataType {
    key: string;
    username: string;
    email: string;
    options: string[];
  }

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
        <Space size="middle">
          <MoreOutlined rotate={90} className="text-2xl" />
        </Space>
      ),
    },
  ];

  const data = users.map((user) => ({
    key: user.id,
    username: user.username,
    email: user.email,
    option: ["edit"],
  }));

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default UsersList;
