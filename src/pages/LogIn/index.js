import React, { useState } from "react";
import "./login.css";
import { Form } from "../../components";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../../state/LogIn/loginSlice";
import { useNavigate } from "react-router-dom";
const logo = "/assets/images/logo.png";
const leftImage = "/assets/images/leftimage.svg";
const rightImage = "/assets/images/rightimage.svg";

const LogIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/signup");
  };
  const handleForgetPassword = () => {
    navigate("/forget-password");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(
      fetchUserData({
        email: email,
        password: password,
      })
    );
  };
  return (
    <div className="h-screen bg-cyan-50">
      <div>
        <img
          className="absolute bottom-0 left-0 w-96"
          src={leftImage}
          alt="background"
        />
      </div>

      <div className="align-center grid justify-center py-5">
        <img
          className="logo h-32 w-48 bg-blue-800 object-contain p-3"
          src={logo}
          alt=""
        />
      </div>
      <div>
        <div className=" border-primaryBorder m-auto w-full max-w-md rounded-lg border bg-white py-10 px-16 shadow-xl">
          <h1 className="text-bold text-primary mt-4 mb-4 text-center text-2xl font-medium">
            Log in to your account
          </h1>

          <form>
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

            <div className="mt-6">
              <button
                onClick={handleFormSubmit}
                className="border-green focus:border-green-dark w-[90%] rounded border bg-blue-800 py-2 px-4  text-white focus:outline-none"
              >
                Login
              </button>
            </div>
            <div>
              <button
                className="mt-4 text-blue-800"
                onClick={handleForgetPassword}
              >
                Forgotten Password ?{" "}
              </button>
            </div>
            <h1 className="py-4 text-center text-green-500">OR</h1>
            <hr />
            <div>
              <p className="text-center text-blue-700">
                Can't log in?
                <button onClick={handleSignup}>Sign up for an account </button>
              </p>
            </div>
          </form>
        </div>
      </div>
      <p className="py-4 text-center text-blue-700">
        Privacy Policy User Notice
      </p>
      <div className="absolute right-0 bottom-0 w-96">
        <img src={rightImage} alt="background" />
      </div>
    </div>
  );
};

export default LogIn;
