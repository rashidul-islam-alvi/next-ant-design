"use client";

import Header from "@/components/ui/header";
import UsersList from "@/components/users-list";
import { useGetAllUsersQuery } from "@/redux/features/users/api/usersApi";
import React from "react";

const page = () => {
  const getAllUsers = useGetAllUsersQuery(1);

  return (
    <div className="flex flex-col gap-10">
      <div>
        <Header label="Users List" />
      </div>

      <div>
        {getAllUsers.isSuccess && <UsersList users={getAllUsers.data} />}
      </div>
    </div>
  );
};

export default page;
