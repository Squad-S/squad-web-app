import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import logo from "../../img/logo.png";

const Singup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

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
            width: "250px",
          }}
          src={logo}
          alt=""
        />
      </div>

      <Grid
        container
        spacing={2}
        style={{ marginLeft: "30%", marginTop: "15px" }}
      >
        <Grid item xs={12} md={6} style={{}}>
          <Paper elevation={3}>
            <form onSubmit={handelForm} style={{ marginLeft: "25%" }}>
              <TextField
                sx={{
                  width: "50%",
                  marginBottom: "10px",
                  border: "1px solid LimeGreen",
                  borderRadius: 2,
                }}
                id="standard-basic"
                label="Warker Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />{" "}
              <br />
              <TextField
                sx={{
                  width: "50%",
                  marginBottom: "10px",
                  border: "1px solid LimeGreen",
                  borderRadius: 2,
                }}
                id="standard-basic"
                label="Full Name"
                onChange={(e) => setName(e.target.value)}
                required
              />{" "}
              <br />
              <TextField
                sx={{
                  width: "50%",
                  marginBottom: "5px",
                  border: "1px solid LimeGreen",
                  borderRadius: 2,
                }}
                id="standard-basic"
                label="Password"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br />
              <Button variant="contained" type="submit" sx={{ m: 2 }}>
                Sing Up
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Singup;
