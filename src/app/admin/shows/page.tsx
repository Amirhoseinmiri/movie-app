import LinkButton from "@/components/link-button";
import PageTitle from "@/components/page-title";
import { Button } from "antd";
import React from "react";

const Shows = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <PageTitle title="Amir Movie" />
        <LinkButton path="/admin/shows/add" title="Add Show" />
      </div>
    </div>
  );
};

export default Shows;
