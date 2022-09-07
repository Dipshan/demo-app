import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Register from "./components/Register";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <Link className="site-logo" to="/">
          <h2>Home</h2>
        </Link>

        <div className="header-right">
          <Link to="/signin">Sign-In</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>

      <div className="body">
        <Routes>
          <Route path="signin" element={<Signin />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
