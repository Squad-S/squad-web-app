import React from "react";
import Navbar from "../Navber";

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
      id: 1,
    },
    {
      list: "Dashboard",
      isActive: false,
      id: 1,
    },
    {
      list: "Dashboard",
      isActive: false,
      id: 1,
    },
  ];

  const button = {
    buttonName: "create",
    props: {
      type: "button",
    },
  };

  return (
    <div>
      <Navbar menuname={menuname} button={button} />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
