import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Button,
  colors,
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Form } from "..";
import { deleteInviteProject } from "../../state/inviteListProject/deleteInviteProjectSlice";
import { inviteListProject } from "../../state/inviteListProject/inviteListProjectSlice";
import { updateInviteProject } from "../../state/inviteListProject/updateInviteProjectSlice";
import { inviteMemberProjectSlice } from "../../state/inviteMemberProject/inviteMemberProjectSlice";
const inviteImg = "/asset/img/inviteImg.jpg";

const InvaiteMemberProject = () => {
  const [email, setEmail] = useState(null);
  const dispatch = useDispatch();
  const projectInviteList = useSelector((state) => state.projectInviteList);

  const { users } = projectInviteList;
  const handleSubmtClicked = (e) => {
    e.preventDefault();
    if (email !== null) {
      dispatch(inviteMemberProjectSlice({ email: email }));
    }
  };

  const deleteMemberProject = (id) => {
    dispatch(deleteInviteProject(id));
  };

  const updateMemberProject = (user) => {
    const data = {
      status: user.status,
      inviteId: user._id,
    };
    dispatch(updateInviteProject(data));
  };

  useEffect(() => {
    dispatch(inviteListProject());
  }, [dispatch]);
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
          Invite users
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
            src={inviteImg}
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
            <form style={{ marginLeft: "10%" }}>
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
                onClick={handleSubmtClicked}
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
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users && (
                <>
                  {users.map((user) => (
                    <TableRow
                      key={user._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Avatar sx={{ bgcolor: colors.deepOrange[500] }}>
                            {user.email[0]}
                          </Avatar>
                          <Typography> {user.email}</Typography>
                        </Stack>
                      </TableCell>
                      <TableCell align="right">{user.lastActive}</TableCell>
                      <TableCell align="right">{user.status}</TableCell>
                      <TableCell align="right">
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={1}
                          justifyContent="right"
                        >
                          <Button
                            variant="text"
                            onClick={() => deleteMemberProject(user._id)}
                          >
                            Delete invite
                          </Button>
                          <Button
                            variant="text"
                            onClick={() => updateMemberProject(user)}
                          >
                            Update invite
                          </Button>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </Container>
  );
};

export default InvaiteMemberProject;
