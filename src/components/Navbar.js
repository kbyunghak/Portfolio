import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">Andrew Kim</Link> {/* ✅ Clickable Logo */}
      </div>
      <nav className="portfolio-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/resume">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
