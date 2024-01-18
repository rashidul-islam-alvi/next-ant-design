"use client";

import { useGetAllUsersQuery } from "@/redux/features/users/api/usersApi";
import React from "react";

const page = () => {
  const getAllUsers = useGetAllUsersQuery(1);

  console.log(getAllUsers);

  return <div>page</div>;
};

export default page;
