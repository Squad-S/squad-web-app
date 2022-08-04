import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../images/logo.png";
import "./confirmPassword.css";
const ConfirmPassword = () => {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const confirmPassword = async (e) => {
    e.preventDefault();
    const data = { code, newPassword: password };
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { message } = await axios.patch(
      "https://sq-user-service.herokuapp.com/reset-password",
      data,
      config
    );
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="image-content">
          <img src={image} alt="logo" />
        </div>
      </div>

      <div className="mx-auto my-5 max-w-lg rounded-xl bg-white p-8 shadow-2xl shadow-slate-300">
        <p className="text-center text-slate-500">Reset Password</p>

        <form onSubmit={confirmPassword} className="my-5">
          <div className="flex flex-col space-y-5">
            <label htmlFor="email">
              <p className="pb-2 font-medium text-slate-700">
                Enter Recovery Code
              </p>
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                type="number"
                className="w-full rounded-lg border border-slate-200 py-3 px-3 hover:shadow focus:border-slate-500 focus:outline-none"
                placeholder="Enter Recovery Code"
              />
            </label>
            <label htmlFor="password">
              <p className="pb-2 font-medium text-slate-700">New Password</p>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="w-full rounded-lg border border-slate-200 py-3 px-3 hover:shadow focus:border-slate-500 focus:outline-none"
                placeholder="Enter New password"
              />
            </label>

            <button className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border-indigo-500 bg-indigo-600 py-3 font-medium text-white hover:bg-indigo-500 hover:shadow">
              <span>Confirm</span>
            </button>
            <hr />
            <p className="text-center">
              <Link
                to="/login"
                variant="body2"
                className="inline-flex items-center space-x-1 font-medium text-indigo-600"
              >
                <span>Return to log in </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfirmPassword;
