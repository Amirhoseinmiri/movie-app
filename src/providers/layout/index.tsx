"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import { getCurrentUserFromMongoDB } from "@/server-actions/users";
import { message } from "antd";
import { UsersI } from "@/interfaces/users";
import { usePathname } from "next/navigation";
import { IUsersGlobalStore, useUsersGlobalStore } from "@/store/users-store";
import Spinner from "@/components/spinner";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState<boolean>(false);
  const isAuthRoute =
    pathname.includes("/sign-in") || pathname.includes("/sign-up");
  const { setLoggedInUserData, loggedInUserData }: IUsersGlobalStore =
    useUsersGlobalStore() as IUsersGlobalStore;
  const getLoggedInUser = async () => {
    try {
      setLoading(true);
      const response = await getCurrentUserFromMongoDB();
      setLoggedInUserData(response.data);
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isAuthRoute) {
      getLoggedInUser();
    }
  }, [pathname]);

  if (isAuthRoute) {
    return <div>{children}</div>;
  }
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  }
  return (
    <div>
      <Header loggedInUser={loggedInUserData!} />
      <div className="p-5">{children}</div>
    </div>
  );
};

export default LayoutProvider;
