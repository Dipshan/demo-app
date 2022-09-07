import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      redirectToHome();
    }
  };
  return (
    <div className="signin">
      <form className="signin-card" onSubmit={handleSubmit}>
        <h1>Sign-In</h1>
        <div className="signin-detail">
          <label htmlFor="email">Email or Mobile Number</label>
          <input
            type="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="signin-detail">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="signin-button">
          <button type="submit">Sign-in </button>
        </div>
        <div className="acc-login">
          <h5>New User ?</h5>
          <a className="acc-link" href="/register">
            Create New Account
          </a>
        </div>
      </form>
    </div>
  );
}
