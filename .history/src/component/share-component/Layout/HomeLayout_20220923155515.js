import React from "react";
import Navbar from "../Navbar";

export const HomeLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
