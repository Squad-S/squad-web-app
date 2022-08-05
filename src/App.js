import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, ProjectList, Organization} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/organization" element={<Organization />} />
      <Route path="/projects" element={<ProjectList />} />
    </Routes>
  );
}

export default App;
