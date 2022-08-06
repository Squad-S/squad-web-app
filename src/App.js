import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Project } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  );
}

export default App;
