import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./folder/Login";
import Home from "../src/folder/Home";
import Signup from "../src/folder/Signup";
import Otpscreen from "./folder/Otpscreen";
import Loginphone from "./folder/Loginphone";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/otpscreen" element={<Otpscreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/loginphone" element={<Loginphone />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
