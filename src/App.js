import React from "react";
import { Routes, Route } from "react-router-dom";
import Singup from "./components/singUp/Singup";

import { Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/singup" element={<Singup />} />
    </Routes>
  );
}

export default App;
