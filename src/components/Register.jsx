import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let navigate = useNavigate();

  const redirectToSignin = () => {
    navigate("/signin");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and Confirm password does not match");
    }
    const body = [
      {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      },
    ];
    console.log(body);
    const url = ""; //api url
    axios
      .post(url, body) //this posts and stores body to database
      .then((res) => {
        console.log(res); //displays response in console
        redirectToSignin(); //move to signin page after regsitering user
      })
      .catch((err) => {
        console.log(err); //displays if any error occurs
      });
  };

  return (
    <div className="register">
      <div className="register-card">
        <h1>Create New Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="register-detail">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="register-detail">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="register-detail">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="register-detail">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="register-button">
            <button type="submit" className="primary">
              Create My Account
            </button>
          </div>
        </form>
        <div className="acc-login">
          <h5>Already have an account ?</h5>
          <div>
            <a className="acc-link" href="/signin">
              Sign-In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
