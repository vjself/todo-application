import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <span className="welcome">
        Welcome to TODO! Login <NavLink to="/login">HERE</NavLink>.{" "}
      </span>

      <br />
      <div>
        <span className="welcome">
          Don't have an account? Register <NavLink to="/register">HERE</NavLink>
          .
        </span>{" "}
      </div>
    </div>
  );
}
