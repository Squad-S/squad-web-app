import React, { useState } from "react";
import "./login.css";
import { Form } from "../../components";
const logo = "/assets/images/logo.png";
const leftImage = "/assets/images/leftImage.png";
const rightImage = "/assets/images/rightImage.png";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="h-screen bg-cyan-50">
      <div className="leftImage">
        <img src={leftImage} alt="background" />
      </div>

      <div className="logo-bg">
        <img
          className={`logo h-32 w-48 bg-blue-800 object-contain p-3`}
          src={logo}
          alt=""
        />
      </div>
      <div>
        <div className=" border-primaryBorder m-auto w-full max-w-md rounded-lg border bg-white py-10 px-16 shadow-xl">
          <h1 className="text-bold text-primary mt-4 mb-12 text-center text-2xl font-medium">
            Log in to your account
          </h1>

          <form onSubmit={handleFormSubmit}>
            <Form
              type="email"
              value={email}
              name="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <Form
              type="password"
              value={password}
              name="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="mt-6 ">
              <button
                style={{ width: "95%" }}
                className={` border-green focus:border-green-dark w-96 rounded border bg-blue-800 py-2 px-4 text-sm text-white focus:outline-none`}
              >
                Login
              </button>
            </div>
            <h1 className={`py-4 text-center text-green-500`}>OR</h1>
            <hr />
            <div>
              <p className={`text-center text-blue-700`}>
                Can't log in? <button>Sign up for an account </button>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
      <p className={`py-4 text-center text-blue-700`}>
        Privacy Policy User Notice
      </p>
      <div className="rightImage">
        <img src={rightImage} alt="background" />
      </div>
      <p>{email}</p>
    </div>
  );
};

export default LogIn;
