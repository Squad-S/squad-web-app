import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, ProjectList } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projectlist" element={<ProjectList />} />
    </Routes>
  );
}

export default App;
