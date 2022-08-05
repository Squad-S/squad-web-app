import { Button, Container, Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import Form from "../form/Form";
import CheckIcon from "@mui/icons-material/Check";
import { useDispatch } from "react-redux";
import { createSignUp } from "../../state/signUp/signUpSlice";
const signUpImg = "/asset/img/signUp-img.png";
const logo = "/asset/img/logo.png";

const Signup = () => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();
  const handelForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("worker-email", email);
    formData.append("full-name", name);
    formData.append("password", password);
    dispatch(createSignUp(formData));
  };

  return (
    <Container className=" my-2">
      <div>
        <img
          style={{
            backgroundColor: "blue",
            marginLeft: "43%",
            borderRadius: "30% 70% 70% 30%",
            height: "150px",
            width: "300px",
          }}
          src={logo}
          alt=""
        />
      </div>

      <Grid
        container
        spacing={2}
        style={{ marginLeft: "20%", marginTop: "15px" }}
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
              }}
            >
              <b>Get Started</b>
            </h3>
            <form style={{ marginLeft: "10%" }} onSubmit={handelForm}>
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

              <Button
                variant="regular"
                sx={{
                  width: "90%",
                  backgroundColor: "RoyalBlue",
                  my: 4,
                  color: "white",
                }}
                type="submit"
              >
                Sign Up
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Signup;
