import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <p>Smurf Village Redux</p>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/smurf-form">Add Smurf</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
