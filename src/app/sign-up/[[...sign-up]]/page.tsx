import { SignUp } from "@clerk/nextjs";
import { Video } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="grid lg:grid-cols-2 h-screen">
      <div className="bg-black flex items-center justify-center">
        <div className="text-white flex flex-col ">
          <h1 className="flex gap-2 lg:text-6xl text-4xl items-center font-bold">
            SHEY <Video size={40} className="text-orange-500" /> OTT
          </h1>
          <p className="font-semibold text-sm text-gray-300">
            An online video streaming platform for movies and web series
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <SignUp />;
      </div>
    </div>
  );
};

export default Page;
