import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-content-links">
            <h5 className="footer-heading">Links</h5>
            <ul>
              <li className="footer-text">
                <Link to="/">Home</Link>
              </li>
              <li className="footer-text">
                <Link to="workout">Workouts</Link>
              </li>
              <li className="footer-text">
                <Link to="recipe">Recipes</Link>
              </li>
              <li className="footer-text">
                <Link to="about">About</Link>
              </li>
              <li className="footer-text">
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-content-contact">
            <h5 className="footer-heading">Contact info</h5>
            <h6 className="footer-subheading">Email</h6>
            <p className="footer-text">contact@puremove.com</p>
            <h6 className="footer-subheading">Phone</h6>
            <p className="footer-text">(555) 123-4567</p>
          </div>
          <div className="footer-content-newsletter">
            <h5 className="footer-heading">Newsletter</h5>
            <p className="footer-text">
              Join our newsletter for the latest in fitness and healthy living
            </p>
            <form className="footer-content-newsletter-form">
              <div className="footer-form-control">
                <input
                  className="newsletter-input"
                  type="email"
                  id="email"
                  placeholder="Email here"
                />
                <button className="submit-button">Submit</button>
              </div>
            </form>
            <div className="footer-content-newsletter-media">
              <FaFacebookF />
              <FaInstagram />
              <FaXTwitter />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p className="footer-copyright-text">
          © 2024 PureMove. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
