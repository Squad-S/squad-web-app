import React from "react";
import { Route, Routes } from "react-router-dom";
import ConfirmPassword from "./components/ConfirmPassword/ConfirmPassword";
import { Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/confirm-password" element={<ConfirmPassword />} />
    </Routes>
  );
}

export default App;
