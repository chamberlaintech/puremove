import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li className="nav-text">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-text">
          <Link to="workout">Workouts</Link>
        </li>
        <li className="nav-text">
          <Link to="recipe">Recipes</Link>
        </li>
        <li className="nav-text">
          <Link to="about">About</Link>
        </li>
        <li className="nav-text">
          <Link to="contact">Contact</Link>
        </li>
      </ul>
      <div className="navbar-smallscreen">
        <RiMenu3Fill
          onClick={() => setToggleMenu(true)}
          className="overlay-open"
        />
      </div>

      {toggleMenu && (
        <div className="navbar-smallscreen-overlay flex-center slide-bottom">
          <RiCloseFill
            fontSize={28}
            className="overlay-close"
            onClick={() => setToggleMenu(false)}
          />
          <ul className="navbar-smallscreen-links">
            <li className="nav-text">
              <Link to="/" onClick={() => setToggleMenu(false)}>
                Home
              </Link>
            </li>
            <li className="nav-text">
              <Link to="workout" onClick={() => setToggleMenu(false)}>
                Workouts
              </Link>
            </li>
            <li className="nav-text">
              <Link to="recipe" onClick={() => setToggleMenu(false)}>
                Recipes
              </Link>
            </li>
            <li className="nav-text">
              <Link to="about" onClick={() => setToggleMenu(false)}>
                About
              </Link>
            </li>
            <li className="nav-text">
              <Link to="contact" onClick={() => setToggleMenu(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
