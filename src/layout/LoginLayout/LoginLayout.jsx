import React from "react";

const LoginLayout = ({children}) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#1F1D1D]">
      {children}
    </div>
  );
};

export default LoginLayout;
