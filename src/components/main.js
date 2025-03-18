import { Link, useNavigate } from "react-router-dom";
import Andrew from '../images/andrew3.jpg';

const Main = () => {
    const navigate = useNavigate();

    const handleHireMeClick = () => {
      window.location.href = "mailto:kbyunghak@gmail.com?subject=Hiring Inquiry";
    };
  
    const handleContactMeClick = () => {
      navigate("/contact");
    };

    return (
        <div className="portfolio-container">          
            <main className="portfolio-main">
                <section className="hero-section">
                    <div className="hero-content">
                        <p>I'm</p>
                        <h1>Andrew Kim</h1>
                        <h2>Software Developer</h2>
                        <div className="hero-buttons">
                            <button className="btn-primary" onClick={handleHireMeClick}>Hire Me</button>
                            <button className="btn-secondary" onClick={handleContactMeClick}>Contact Me</button>
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
