import React from "react";
import "./Navbar.css";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="PaisaOnClick Logo" />
      </div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Loans</li>
        <li>Tools</li>
        <li>Learn</li>
        <li>Restructure</li>
        <li>Careers</li>
        <li>Contact Us</li>
        <button>Sign-in</button>
      </ul>
    </nav>
  );
};

export default Navbar;
