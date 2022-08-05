import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Organization } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/organization" element={<Organization />} />
    </Routes>
  );
}

export default App;
