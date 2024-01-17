"use client";

import React, { useState } from "react";
import ImageComponent from "./ui/custom-image-component";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Space } from "antd";

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

const Navbar = () => {
  return (
    <div className="flex justify-between px-10 py-5">
      <div className="flex gap-5 items-center">
        <ImageComponent
          path="/paper.png"
          alt="nav_logo_paper"
          className="w-14"
        />
        <h2 className="text-2xl">Stack</h2>
      </div>
      <div>
        <Dropdown className="bg-[#F0F5FA]" menu={menuProps}>
          <Button className="text-xs" size="middle">
            <Space>
              English (UK)
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
