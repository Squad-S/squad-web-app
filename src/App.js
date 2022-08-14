import React from "react";
import { Route, Routes } from "react-router-dom";
import { InviteMember, SignUp } from "./components";
import {
  ConfirmPassword,
  ForgetPassword,
  Home,
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
      <Route path="/project/invite/:projectId" element={<InviteMember />} />
      <Route path="/project" element={<Project />} />
      <Route path="/projects" element={<ProjectList />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/forgot-password" element={<ForgetPassword />} />
    </Routes>
  );
}

export default App;
