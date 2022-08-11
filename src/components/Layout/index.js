import React from "react";
import { Navbar } from "../";

const Layout = ({ children }) => {
  const menuname = [
    {
      list: "Dashboard",
      isActive: true,
      id: 1,
    },
    {
      list: "Dashboard",
      isActive: false,
      id: 2,
    },
    {
      list: "Dashboard",
      isActive: false,
      id: 3,
    },
    {
      list: "Dashboard",
      isActive: false,
      id: 4,
    },
  ];

  const button = {
    buttonName: "create",
    props: {
      type: "button",
    },
  };

  return (
    <>
      <Navbar menuname={menuname} button={button} />
      <div>{children}</div>
    </>
  );
};

export default Layout;
