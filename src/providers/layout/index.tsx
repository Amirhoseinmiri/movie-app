"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import { getCurrentUserFromMongoDB } from "@/server-actions/users";
import { message } from "antd";
import { UsersI } from "@/interfaces/users";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [loggedInUser, setLoggedInUser] = useState<UsersI | null>();
  const getLoggedInUser = async () => {
    try {
      const response = await getCurrentUserFromMongoDB();
      setLoggedInUser(response.data);
    } catch (error: any) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);
  return (
    <div>
      <Header loggedInUser={loggedInUser!} />
      {children}
    </div>
  );
};

export default LayoutProvider;
