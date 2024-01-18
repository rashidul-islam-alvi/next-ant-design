import Header from "@/components/ui/header";
import UsersList from "@/components/users-list";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <Header label="Users List" />
      </div>

      <div>
        <UsersList />
      </div>
    </div>
  );
};

export default page;
