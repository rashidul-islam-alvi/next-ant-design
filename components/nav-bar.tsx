"use client";

import React from "react";
import { DownOutlined, SearchOutlined, BellOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Space, Input, Avatar } from "antd";
import Logo from "./logo";

const items: MenuProps["items"] = [
  {
    label: "BANGLA (BN)",
    key: "1",
  },
  {
    label: "Espanol (ES)",
    key: "2",
  },
  {
    label: "Franch (FR)",
    key: "3",
  },
];

const handleMenuClick: MenuProps["onClick"] = (e) => {};

const menuProps = {
  items,
  onClick: handleMenuClick,
};

interface NavbarProps {
  loggedIn?: boolean;
}

const Navbar = ({ loggedIn }: NavbarProps) => {
  return (
    <div className="flex justify-between items-center px-10 py-5">
      {!loggedIn && <Logo />}

      {loggedIn && (
        <div className="lg:w-[550px] md:w-[350px] w-[250px]">
          <Input
            suffix={<SearchOutlined style={{ color: "GrayText" }} />}
            style={{
              height: "50px",
              backgroundColor: "#F0F5FA",
              borderRadius: "15px",
              fontSize: "16px",
            }}
            placeholder="Search"
          />
        </div>
      )}
      <div>
        {loggedIn ? (
          <div className="flex gap-5">
            <BellOutlined className="text-2xl " style={{ color: "GrayText" }} />
            <Avatar
              size={"large"}
              style={{
                backgroundColor: "ButtonHighlight",
                border: "1px solid gray",
              }}
            />
          </div>
        ) : (
          <Dropdown className="bg-[#F0F5FA]" menu={menuProps}>
            <Button className="text-xs" size="middle">
              <Space>
                English (UK)
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        )}
      </div>
    </div>
  );
};

export default Navbar;
