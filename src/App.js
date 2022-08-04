import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import LogIn from "./pages/logIn/LogIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
}

export default App;
