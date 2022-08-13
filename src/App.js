import React from "react";
import { Route, Routes } from "react-router-dom";
import { InviteMember, SignUp } from "./components";
import {
  ConfirmPassword,
  ForgetPassword,
  Home,
  InviteMemberOrganization,
  LogIn,
  Organization,
  Project,
  ProjectList,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/organization" element={<Organization />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/confirm-password" element={<ConfirmPassword />} />
      <Route
        path="/organization/invite"
        element={<InviteMemberOrganization />}
      />
      <Route path="/project/invite" element={<InviteMember />} />
      <Route path="/project" element={<Project />} />
      <Route path="/projects" element={<ProjectList />} />
      <Route path="/forgot-password" element={<ForgetPassword />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
}

export default App;
