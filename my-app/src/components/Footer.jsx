import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-header">
          <h2 className="footer-logo">
            Lost<span>&</span>Found
          </h2>
        </div>

        <div className="footer-content">
          <div className="footer-column">
            <h3>About</h3>
            <p>
              Lost&Found helps students and communities reconnect with their
              misplaced belongings quickly and securely.
            </p>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#how">How It Works</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Follow Us</h3>
            <ul className="socials">
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">GitHub</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>
            <p>Email: support@lostfound.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Lost&Found. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
