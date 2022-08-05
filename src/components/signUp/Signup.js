import { Button, Container, Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import logo from "../../img/logo.png";
import signUpImg from "../../img/singUp-img.png";
import Form from "../form/Form";

const Signup = () => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const handelForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("worker-email", email);
    formData.append("full-name", name);
    formData.append("password", password);
    fetch("https://sq-user-service.herokuapp.com/user/signup", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.insertedId) {
          console.log("singUp successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
              <i
                style={{ padding: "10px", color: "blue" }}
                class="fa-solid fa-check"
              />
              <p style={{ padding: "5px" }}>cale agaile practice</p>
            </div>
            <div style={{ display: "flex" }}>
              <i
                style={{ padding: "10px", color: "blue" }}
                class="fa-solid fa-check"
              />
              <p style={{ padding: "5px" }}>consolided workflows</p>
            </div>
            <div style={{ display: "flex" }}>
              <i
                style={{ padding: "10px", color: "blue" }}
                class="fa-solid fa-check"
              />
              <p style={{ padding: "5px" }}>Expand visibility</p>
            </div>
            <div style={{ display: "flex" }}>
              <i
                style={{ padding: "10px", color: "blue" }}
                class="fa-solid fa-check"
              />
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
