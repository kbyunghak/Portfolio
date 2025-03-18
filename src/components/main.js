import { Link, useNavigate } from "react-router-dom";
import andrewImage from '../images/andrew3.jpg';

const Main = () => {
    const navigate = useNavigate();

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
                        <p className="short-intro">
                            Passionate about building efficient, scalable, and user-friendly software. <br/>
                            Experienced in full-stack development, cloud solutions, and modern web technologies.
                        </p>
                        <div className="hero-buttons">
                            <a 
                                href="mailto:kbyunghak@gmail.com?subject=Hiring Inquiry" 
                                className="btn-primary"
                                aria-label="Send an email to hire Andrew"
                            >
                                Hire Me
                            </a>
                            <button 
                                className="btn-secondary" 
                                onClick={handleContactMeClick} 
                                aria-label="Go to contact page"
                            >
                                Contact Me
                            </button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src={andrewImage} alt="Andrew Kim" className="profile-image" />
                    </div>
                </section>
            </main>

            <footer className="resume-footer">©2025 Andrew Kim</footer>
        </div>
    );
};

export default Main;
