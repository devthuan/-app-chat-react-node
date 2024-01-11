import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Friend from "./components/Friend/Friend";

const DefaultLayout = ({ children }) => {
  return (
    <div className="w-screen   max-h-screen flex  justify-center items-center ">
      <div className="bg-[#000] max-w-[68px] min-h-[800px] h-screen max-h-screen flex">
        <Navbar />
      </div>
      <div className="bg-[#1F1D1D] max-w-[321px] min-h-[800px] h-screen max-h-screen ">
        <Friend />
      </div>
      <div className="max-w-full  min-h-[800px]  h-screen max-h-screen ">
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
