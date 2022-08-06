import React from "react";
import { Route, Routes } from "react-router-dom";
import { InviteMember, SignUp } from "./components";
import { ConfirmPassword, Home, ProjectList } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/confirm-password" element={<ConfirmPassword />} />
      <Route path="/project/invite" element={<InviteMember />} />

      <Route path="/projects" element={<ProjectList />} />
    </Routes>
  );
}

export default App;
