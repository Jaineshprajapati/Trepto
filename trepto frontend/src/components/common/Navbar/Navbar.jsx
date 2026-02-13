import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/trepto_logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const isHome = pathname === "/" || pathname === "/home";

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll detection (HOME PAGE ONLY)
  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Unified navigation handler
  const handleNav = (to, hash = null) => {
    navigate(to);
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`navbar ${
        isHome && !isScrolled ? "navbar-transparent" : "navbar-solid"
      }`}
    >
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => handleNav("/")}>
          <img src={logo} alt="Trepto Logo" style={{ cursor: "pointer" }} />
        </div>

        {/* Desktop Links */}
        <div className="navbar-links desktop-links">
          <button
            className={`nav-link${isHome ? " active" : ""}`}
            onClick={() => handleNav("/")}
          >
            Home
          </button>

          <button
            className={`nav-link${pathname === "/services" ? " active" : ""}`}
            onClick={() => handleNav("/services")}
          >
            Services
          </button>

          <button
            className={`nav-link${pathname === "/about" ? " active" : ""}`}
            onClick={() => handleNav("/about")}
          >
            About
          </button>

          <button
            className={`nav-link${pathname === "/career" ? " active" : ""}`}
            onClick={() => handleNav("/career")}
          >
            Career
          </button>
        </div>

        {/* Desktop CTA */}
        <div className="navbar-cta desktop-cta">
          <button
            className="contact-btn"
            onClick={() => handleNav("/career", "#contact")}
          >
            Contact Us
          </button>
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
          <button
            className={`nav-link${isHome ? " active" : ""}`}
            onClick={() => handleNav("/")}
          >
            Home
          </button>

          <button
            className={`nav-link${pathname === "/services" ? " active" : ""}`}
            onClick={() => handleNav("/services")}
          >
            Services
          </button>

          <button
            className={`nav-link${pathname === "/about" ? " active" : ""}`}
            onClick={() => handleNav("/about")}
          >
            About
          </button>

          <button
            className={`nav-link${pathname === "/career" ? " active" : ""}`}
            onClick={() => handleNav("/career")}
          >
            Career
          </button>

          <button
            className="contact-btn mobile-contact"
            onClick={() => handleNav("/career", "#contact")}
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
