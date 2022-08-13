import { Button, Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import { Form, Loader } from "..";
import CheckIcon from "@mui/icons-material/Check";
import { useDispatch, useSelector } from "react-redux";
import { createSignUp } from "../../state/signUp/signUpSlice";
import { NavLink, useNavigate } from "react-router-dom";
const signUpImg = "/asset/img/signUp-img.png";
const logo = "/asset/img/logo.png";

const SignUp = () => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const signUp = useSelector((state) => state.signUp);
  const { isLoading, success } = signUp;
  if (success) {
    navigate("/", { replace: true });
  }
  const handleSubmtClicked = (e) => {
    e.preventDefault();
    if (email !== null && name !== null && password !== null) {
      dispatch(createSignUp({ email: email, name: name, password: password }));
    }
  };
  return (
    <main>
      <div>
        <section>
          <svg
            style={{ position: "absolute", margin: 0, zIndex: "-1" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="blue"
              d="M0,224L80,202.7C160,181,320,139,480,149.3C680,160,800,224,960,218.7C1120,213,1280,139,1360,101.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,180,0C320,0,360,0,80,0L0,0Z"
            ></path>
          </svg>
        </section>
        <img
          style={{
            marginLeft: "43%",
            borderRadius: "30% 70% 70% 30%",
            height: "100px",
            width: "200px",
            paddingTop: "10px",
            zIndex: -1,
          }}
          src={logo}
          alt=""
        />
      </div>

      <Grid
        container
        spacing={2}
        style={{ marginLeft: "20%", marginTop: "-35px" }}
      >
        <Grid item xs={12} md={4}>
          <img
            src={signUpImg}
            alt=""
            style={{ height: "200px", width: "90%" }}
          />
          <h3 style={{ margin: "15px 0px 15px 0px" }}>
            <b>The most efective way to manage team</b>
          </h3>
          <section style={{ marginLeft: "15%" }}>
            <div style={{ display: "flex" }}>
              <CheckIcon sx={{ color: "blue", marginTop: "5px" }} />
              <p style={{ padding: "5px" }}>cale agaile practice</p>
            </div>
            <div style={{ display: "flex" }}>
              <CheckIcon sx={{ color: "blue", marginTop: "5px" }} />
              <p style={{ padding: "5px" }}>consolided workflows</p>
            </div>
            <div style={{ display: "flex" }}>
              <CheckIcon sx={{ color: "blue", marginTop: "5px" }} />
              <p style={{ padding: "5px" }}>Expand visibility</p>
            </div>
            <div style={{ display: "flex" }}>
              <CheckIcon sx={{ color: "blue", marginTop: "5px" }} />
              <p style={{ padding: "5px" }}>Plan, track, and release</p>
            </div>
          </section>
        </Grid>
        <Grid item xs={12} md={4} style={{}}>
          <Paper elevation={3} sx={{ marginTop: "20px" }}>
            <h3
              style={{
                textAlign: "center",
                fontSize: "25px",
                marginBottom: "10px",
                paddingTop: "25px",
              }}
            >
              <b>Get Started</b>
            </h3>
            <form style={{ marginLeft: "10%" }}>
              <Form
                type="email"
                value={email}
                label="Worker Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form
                type="text"
                value={name}
                label="Full Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <Form
                type="password"
                value={password}
                label="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {isLoading ? (
                <Loader />
              ) : (
                <Button
                  variant="contained"
                  sx={{
                    width: "90%",
                    backgroundColor: "RoyalBlue",
                    my: 2,
                    color: "white",
                  }}
                  type="submit"
                  onClick={handleSubmtClicked}
                >
                  Sign Up
                </Button>
              )}

              <NavLink to="/login">
                <p
                  style={{
                    marginLeft: "15%",
                    marginTop: "5px",
                    paddingBottom: "15px",
                  }}
                >
                  Already a member ? go to{" "}
                  <strong style={{ color: "green" }}> Log in</strong>
                </p>
              </NavLink>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </main>
  );
};

export default SignUp;
