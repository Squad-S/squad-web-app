import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, ProjectList, ForgetPassword } from "./pages";
import { SignUp, InviteMember } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/signup" element={<SignUp />} />
      <Route path="/project/invite" element={<InviteMember />} />

      <Route path="/projects" element={<ProjectList />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
    </Routes>
  );
}

export default App;
