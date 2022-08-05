import React from "react";
import { Routes, Route } from "react-router-dom";
import InvaiteMemberProject from "./components/invaite-member-project/InvaiteMemberProject";
import Signup from "./components/signUp/Signup";

import { Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/project/invite" element={<InvaiteMemberProject />} />
    </Routes>
  );
}

export default App;
