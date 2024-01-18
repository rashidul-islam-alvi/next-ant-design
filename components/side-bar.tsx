"use client";

import React from "react";
import Header from "./ui/header";
import {
  UserOutlined,
  DashboardOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const menuItems = [
    {
      id: 1,
      label: "Dashboard",
      href: "/dashboard",
      icon: <DashboardOutlined />,
    },
    {
      id: 2,
      label: "Users",
      href: "/users",
      icon: <UserOutlined />,
    },
    {
      id: 3,
      label: "Sales",
      href: "/sales",
      icon: <MoneyCollectOutlined />,
    },
  ];

  const pathName = usePathname();

  return (
    <div className="w-[250px] border-r-2 h-full px-8 py-5 flex flex-col gap-5 ">
      <div className="mb-10">
        <Logo />
      </div>
      <div>
        <Header label="Pages" className="text-lg" />
      </div>

      <div>
        <ul className="flex flex-col gap-5">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`px-5 py-4 text-[16px] text-[#A7AFBC] rounded-md ${
                pathName === item.href ? "bg-[#F0F5FA]" : ""
              } duration-500 ease-in-out transition-all `}
            >
              <Link href={item.href}>
                <li className="flex gap-5 items-center">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </li>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
