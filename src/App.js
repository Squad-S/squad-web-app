import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  ProjectList,
  Organization,
  Project,
  ForgetPassword,
  ConfirmPassword,
} from "./pages";
import { SignUp, InviteMember } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/organization" element={<Organization />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/confirm-password" element={<ConfirmPassword />} />
      <Route path="/project/invite" element={<InviteMember />} />
      <Route path="/project" element={<Project />} />
      <Route path="/projects" element={<ProjectList />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
    </Routes>
  );
}

export default App;
