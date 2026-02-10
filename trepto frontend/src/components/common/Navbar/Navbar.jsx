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

  // Helper to navigate and (for mobile) close menu
  const handleNav =
    (to, isRoute = false) =>
    (e) => {
      e.preventDefault();
      if (isRoute) {
        navigate(to);
      } else {
        window.location.hash = to;
      }
      setIsOpen(false);
    };

  // Determine active link
  const isActive = (route, exact = false) => {
    if (exact) {
      return pathname === route;
    }
    return pathname.startsWith(route);
  };

  return (
    <nav
      className={`navbar ${isHome && !isScrolled ? "navbar-transparent" : "navbar-solid"}`}
    >
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => navigate("/")}>
          <img src={logo} alt="Trepto Logo" style={{ cursor: "pointer" }} />
        </div>

        {/* Desktop Links */}
        <div className="navbar-links desktop-links">
          <a
            href="/"
            className={`nav-link${isHome ? " active" : ""}`}
            onClick={handleNav("/", true)}
          >
            Home
          </a>
          <a
            href="/services"
            className={`nav-link${pathname === "/services" ? " active" : ""}`}
            onClick={handleNav("/services", true)}
          >
            Services
          </a>

          <a
            href="/about"
            className={`nav-link${pathname === "/about" ? " active" : ""}`}
            onClick={handleNav("/about", true)}
          >
            About
          </a>
          <a
            href="/career"
            className={`nav-link${pathname === "/career" ? " active" : ""}`}
            onClick={handleNav("/career", true)}
          >
            Career
          </a>
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
          <a
            href="/"
            className={`nav-link${isHome ? " active" : ""}`}
            onClick={handleNav("/", true)}
          >
            Home
          </a>
          <a
            href="/services"
            className={`nav-link${pathname === "/services" ? " active" : ""}`}
            onClick={handleNav("/services", true)}
          >
            Services
          </a>

          <a
            href="/about"
            className={`nav-link${pathname === "/about" ? " active" : ""}`}
            onClick={handleNav("/about", true)}
          >
            About
          </a>
          <a
            href="/career"
            className={`nav-link${pathname === "/career" ? " active" : ""}`}
            onClick={handleNav("/career", true)}
          >
            Career
          </a>

          <button className="contact-btn mobile-contact" onClick={toggleMenu}>
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
