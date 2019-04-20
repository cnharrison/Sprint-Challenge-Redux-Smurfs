import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/smurf-form">Add Smurf</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
