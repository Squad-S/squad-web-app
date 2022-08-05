import React from "react";
import Navber from "../../components/Navber";

const Home = () => {
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
      <Navber menuname={menuname} button={button} />
      <h1 className="my-6 text-center text-3xl font-bold">Welcome to React</h1>
    </div>
  );
};

export default Home;
