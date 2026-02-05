import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../../assets/images/trepto_logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/home";

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll detection (HOME PAGE ONLY)
  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true); // always solid on other pages
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <nav
      className={`navbar ${isHome && !isScrolled ? "navbar-transparent" : "navbar-solid"}`}
    >
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Trepto Logo" />
        </div>

        {/* Desktop Links */}
        <div className="navbar-links desktop-links">
          <a href="/" className="nav-link active">Home</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="/about" className="nav-link">About</a>
          <a href="#careers" className="nav-link">Careers</a>
        </div>

        {/* Desktop CTA */}
        <div className="navbar-cta desktop-cta">
          <button className="contact-btn">Contact Us</button>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          <a href="/" className="nav-link active" onClick={toggleMenu}>Home</a>
          <a href="#services" className="nav-link" onClick={toggleMenu}>Services</a>
          <a href="#about" className="nav-link" onClick={toggleMenu}>About</a>
          <a href="#careers" className="nav-link" onClick={toggleMenu}>Careers</a>

          <button className="contact-btn mobile-contact" onClick={toggleMenu}>
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
