import React from "react";
import { useSelector } from "react-redux";

const index = () => {
  const { isLoading, userLogin, error } = useSelector(
    (state) => state.userLogin
  );
  return <div>{<h1>{userLogin.body}</h1>}</div>;
};

export default index;
