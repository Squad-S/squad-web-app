import React, { useState } from "react";
import classes from "./forgotpassword.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../state/forgetPassword/action";
const logo = "/asset/img/logo.png";
const background = "/assets/images/forgetPassword.png";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      forgotPassword({
        email: email,
      })
    );
  };
  return (
    <div
      className={classes.full_container}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={classes.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={classes.form_container}>
        <form action="">
          <h2>Can't log in?</h2>
          <label htmlFor="">We'll send a recovery code to</label>
          <br />
          <input
            onChange={handleChange}
            type="email"
            value={email}
            placeholder="Enter email"
            name="email"
          />
          <br />
          <button onClick={handleSubmit}>Send Secret Code</button>
          <br />
          <div>
            {" "}
            <Link to="/login">Return to Log in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
