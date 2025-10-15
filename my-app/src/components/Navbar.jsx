import React, { useState } from "react";
import "./Navbar.css";
import logo from "./lostandfound.png";
import { Link } from "react-router-dom";
import ItemForm from "./ItemForm";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleOpenForm = () => {
    setShowForm(true);
    setMenuOpen(false);
  };

  const handleCloseForm = () => setShowForm(false);

  const handleFormSubmit = (formData) => {
    console.log("Form submitted:", formData);
    setShowForm(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Lost & Found Logo" />
          </Link>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <button
              onClick={handleOpenForm}
              className="nav-btn-link"
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: "1.4rem",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Report Item
            </button>
          </li>
          <li>
            <Link to="/BrowseItems" onClick={() => setMenuOpen(false)}>
              Browse Items
            </Link>
          </li>
        </ul>

        <div className="Profile">
          <Link
            to="/profile"
            onClick={() => setMenuOpen(false)}
            className="user-profile"
          >
            <div className="user-profile-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
              </svg>
              Login
            </div>
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {showForm && (
        <ItemForm onSubmit={handleFormSubmit} onCancel={handleCloseForm} />
      )}
    </>
  );
};

export default Navbar;
