import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Form } from "../../components";
import { confirmUserPassword } from "../../state/user/confirmPasswordSlice";
import "./confirmPassword.css";
const logo = "/assets/images/logo.png";
const leftImage = "/assets/images/leftImage.png";
const rightImage = "/assets/images/rightImage.png";

const ConfirmPassword = () => {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleSubmtClicked = (e) => {
    e.preventDefault();
    if (code !== null && password !== null) {
      dispatch(confirmUserPassword({ code, password }));
    }
  };

  return (
    <section className="h-screen">
      <div className="left-image">
        <img src={leftImage} alt="background" />
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="image-content">
            <img src={logo} alt="logo" />
          </div>
        </div>

        <div className="mx-auto my-5 max-w-lg rounded-xl bg-white p-8 shadow-2xl shadow-slate-300">
          <h4 className="text-center ">Reset Password</h4>

          <form className="my-5">
            <Form
              type="number"
              value={code}
              label="Enter Recovery Code"
              name="email"
              onChange={(e) => setCode(e.target.value)}
            />
            <Form
              type="password"
              value={password}
              label="New Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              variant="regular"
              sx={{
                width: "90%",
                backgroundColor: "RoyalBlue",
                my: 4,
                color: "white",
              }}
              type="submit"
              onClick={handleSubmtClicked}
            >
              Confirm
            </Button>
            <hr />
            <p className="my-2 text-center">
              <Link
                to="/login"
                variant="body2"
                className="inline-flex items-center space-x-1 font-medium text-indigo-600"
              >
                <span>Return to log in </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="right-image">
        <img src={rightImage} alt="background" />
      </div>
    </section>
  );
};

export default ConfirmPassword;
