"use client";

import { Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const LinkButton = ({ title, path }: { title: string; path: string }) => {
  const router = useRouter();
  return (
    <Button
      type="link"
      className="border border-black"
      onClick={() => router.push(path)}
    >
      {title}
    </Button>
  );
};

export default LinkButton;
