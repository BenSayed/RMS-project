import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const [shomodel, setshomodel] = useState(false);
  return (
    <header className="header">
      <button
        onClick={() => {
          setshomodel(true);
        }}
        className="menu  icon-menu"
      ></button>

      <div className="logo-container">
        <img
          src="public/IMEG/Logo.png"
          alt="Flavor Haven Logo"
          className="logo"
        />
        <span className="brand-name">Flavor Haven</span>
      </div>

      <nav className="nav">
        <a
          href="#home"
          className={`nav-link ${activeLink === "#home" ? "active" : ""}`}
          onClick={() => handleLinkClick("#home")}
        >
          Home
        </a>
        <a
          href="#menu"
          className={`nav-link ${activeLink === "#menu" ? "active" : ""}`}
          onClick={() => handleLinkClick("#menu")}
        >
          Menu
        </a>
        <a
          href="#reservation"
          className={`nav-link ${
            activeLink === "#reservation" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("#reservation")}
        >
          Reservation
        </a>
        <a
          href="#about"
          className={`nav-link ${activeLink === "#about" ? "active" : ""}`}
          onClick={() => handleLinkClick("#about")}
        >
          About
        </a>
        <a
          href="#contactus"
          className={`nav-link ${activeLink === "#contactus" ? "active" : ""}`}
          onClick={() => handleLinkClick("#contactus")}
        >
          Contact us
        </a>
      </nav>

      <button className="login-button">Login </button>

      {shomodel && (
        <div className="fixed">
          <ul className="model">
            <li>
              {" "}
              <button
                className="icon-clear"
                onClick={() => {
                  setshomodel(false);
                }}
              >
                {" "}
              </button>{" "}
            </li>
            <li>
              <a href=""> Home </a>
            </li>
            <li>
              <a href=""> Menu </a>
            </li>
            <li>
              <a href="">Reservation</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href=""> Contact us </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
