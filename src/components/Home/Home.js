import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <span className="welcome">Welcome to TODO! Login </span>
      <nav id="login-btn">
        <NavLink to="/login">HERE</NavLink>.
      </nav>
      <br />
      <div>
        <span className="welcome">Don't have an account? Register</span>{" "}
        <nav id="navbtn">
          <NavLink to="/register">HERE</NavLink>.
        </nav>
      </div>
    </div>
  );
}
