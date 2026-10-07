import React from "react";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="portfolio-footer">
      <div className="container footer-container">
        
        <div className="footer-top-row">
          <div className="footer-brand-info">
            <div className="footer-logo">
              <span className="brand-logo-icon">IS</span>
              <span className="footer-title">Ishmeet Singh</span>
            </div>
            <p className="footer-tagline">
              Web Developer delivering modern websites, e-commerce storefronts, and interactive digital products.
            </p>
          </div>

          <div className="footer-nav-columns">
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#about">About Me</a></li>
                <li><a href="#industry-work">Industry Work</a></li>
                <li><a href="#personal-projects">Personal Projects</a></li>
                <li><a href="#skylive-showcase">SKYLIVE 3D Showcase</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Technical</h4>
              <ul>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Technical Skills</a></li>
                <li><a href="#certifications">Certifications &amp; Training</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="#contact">Get in Touch</a></li>
                <li><a href="mailto:ishmeetsinghw006@gmail.com">ishmeetsinghw006@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-divider"></div>

        <div className="footer-bottom-row">
          <div className="footer-copy">
            © {new Date().getFullYear()} Ishmeet Singh. All live client work, personal projects and credentials accurately represented.
          </div>

          <button
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};
