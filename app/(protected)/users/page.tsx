"use client";

import Header from "@/components/ui/header";
import UsersList from "@/components/users-list";
import { useGetAllUsersQuery } from "@/redux/features/users/api/usersApi";
import React, { useState } from "react";

const page = () => {
  const [page, setPage] = useState(1);
  const getAllUsers = useGetAllUsersQuery(page);

  return (
    <div className="flex flex-col gap-10">
      <div>
        <Header label="Users List" />
      </div>

      <div>
        {getAllUsers.isLoading ? (
          <h2>Loading</h2>
        ) : (
          <UsersList users={getAllUsers.data} />
        )}
      </div>
    </div>
  );
};

export default page;
