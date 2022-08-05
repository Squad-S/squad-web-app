import { Button, Container, Grid, IconButton, InputBase } from "@mui/material";
import React, { useState } from "react";
import invaiteImg from "../../img/invaiteImg.jpg";
import Form from "../form/Form";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [];
const InvaiteMemberProject = () => {
  const [email, setEmail] = useState(null);

  const handelForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Email", email);

    fetch("https://sq-project-service.herokuapp.com/project/invite", {
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
      <section style={{ display: "flex", margin: "15px 15px" }}>
        <h3>Users</h3>
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px",
            marginLeft: "70%",
            borderRadius: "5px",
          }}
        >
          Invaite users
        </button>
        <h1 style={{ marginLeft: "20px" }}>
          <b>....</b>
        </h1>
      </section>
      <p style={{ textAlign: "center" }}>
        Manage product accrss for all the users in your organization.{" "}
        <NavLink style={{ color: "blue" }} to={"#"}>
          learn more about access
        </NavLink>{" "}
      </p>
      <Grid
        container
        spacing={2}
        style={{ marginLeft: "20%", marginTop: "15px" }}
      >
        <Grid item xs={12} md={4}>
          <img
            src={invaiteImg}
            alt=""
            style={{ height: "300px", width: "90%", marginTop: "20px" }}
          />
          <section
            style={{
              border: "1px solid black",
              width: "70%",
              borderRadius: "5px",
              marginTop: "25px",
            }}
          >
            <IconButton sx={{ p: "5px" }} aria-label="menu"></IconButton>
            <InputBase
              sx={{}}
              placeholder="Enter name or email address"
              inputProps={{ "aria-label": "name or email address" }}
            />
            <IconButton type="submit" sx={{ p: "5px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </section>
        </Grid>
        <Grid item xs={12} md={4} style={{}}>
          <Paper elevation={3} sx={{ marginTop: "20px" }}>
            <h3
              style={{
                textAlign: "center",
                fontSize: "20px",
                marginBottom: "10px",
                paddingTop: "10px",
              }}
            >
              <b> Theare's a team behaind every success</b>
            </h3>
            <p
              style={{
                textAlign: "center",
                fontSize: "15px",
                marginBottom: "10px",
              }}
            >
              Add your team and start creatting greate things together
            </p>
            <form style={{ marginLeft: "10%" }} onSubmit={handelForm}>
              <Form
                type="email"
                placeholder="Email Address"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form
                type="email"
                placeholder="Email Address"
                value={email}
                name="name"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form
                type="email"
                placeholder="Email Address"
                value={email}
                name="password"
                onChange={(e) => setEmail(e.target.value)}
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
                Add team members
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <section style={{ margin: "10px 0px 50px 0px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell align="right">Last active</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Ations</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.lastActive}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="right">{row.actions}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </Container>
  );
};

export default InvaiteMemberProject;
