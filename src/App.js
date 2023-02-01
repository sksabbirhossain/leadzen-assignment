import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-details/:userid" element={<UserDetails />} />
    </Routes>
  );
}

export default App;
