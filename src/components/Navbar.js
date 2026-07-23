import React from "react";
import { NavLink } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

const internalLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => (
  <header className="site-header">
    <div className="navbar">
      <NavLink to="/" className="logo-link">
        <span>Andrew Kim</span>
        <small>Software Developer</small>
      </NavLink>

      <nav className="portfolio-nav" aria-label="Primary navigation">
        <ul>
          {internalLinks.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) => isActive ? "active" : undefined}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <a href={`${process.env.PUBLIC_URL}/documents/Andrew_Kim_Resume.pdf`} download>
              Resume
            </a>
          </li>
          <li className="social-link">
            <a href="https://github.com/kbyunghak" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <Github size={18} aria-hidden="true" />
            </a>
          </li>
          <li className="social-link">
            <a href="https://www.linkedin.com/in/kbyunghak/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Navbar;
