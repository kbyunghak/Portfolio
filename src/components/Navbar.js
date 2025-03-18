import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react"; // ✅ Added LinkedIn icon

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">Andrew Kim</Link> {/* ✅ Clickable Logo */}
      </div>
      <nav className="portfolio-nav">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/resume">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li>  
            <a href="https://github.com/kbyunghak" target="_blank" rel="noopener noreferrer">
                GitHub <Github size={16} />
            </a>
          </li>
          <li>  
            <a href="https://www.linkedin.com/in/kbyunghak/" target="_blank" rel="noopener noreferrer">
                LinkedIn <Linkedin size={16} />
            </a>
          </li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
