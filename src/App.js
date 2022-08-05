import React from "react";
import { Routes, Route } from "react-router-dom";
import InviteMemberProject from "./components/invite-member-project/InviteMemberProject";
import SignUp from "./components/signUp/SignUp";

import { Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/project/invite" element={<InviteMemberProject />} />
    </Routes>
  );
}

export default App;
