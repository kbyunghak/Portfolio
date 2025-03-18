import { Link } from "react-router-dom";
import '../Main.css';
import Andrew from '../images/andrew3.jpg';
import Resume from './resume';

const Main = () => {
  return (
    <div className="portfolio-container">
        <header className="portfolio-header">
        <div className="logo">Portfolio</div>
            <nav className="portfolio-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
        <main className="portfolio-main">

            <section className="hero-section">
                <div className="hero-content">
                    <p>I'm</p>
                    <h1>Andrew Kim</h1>
                    <h2>Software Developer</h2>
                    <div className="hero-buttons">
                        <button className="btn-primary">Hire Me</button>
                        <button className="btn-secondary">Contact Me</button>
                    </div>
                </div>
                <div className="hero-image">
                <img src= {Andrew} alt="Andrew Kim" className="profile-image" />
                </div>
            </section>
        </main>

        <footer className="resume-footer">©2025 Andrew Kim</footer>
  </div>
  );
};

export default Main;
