import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About Me", href: "#about" },
    { label: "Industry Work", href: "#industry-work" },
    { label: "Personal Projects", href: "#personal-projects" },
    { label: "SKYLIVE 3D", href: "#skylive-showcase" },
    { label: "Experience", href: "#experience" },
    { label: "Technical Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`navbar-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <a href="#" className="navbar-brand">
          <div className="brand-logo-icon">IS</div>
          <div className="brand-text">
            <span className="brand-name">Ishmeet Singh</span>
            <span className="brand-role">Web Developer</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar-nav desktop-nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Status Pill & CTA */}
        <div className="navbar-actions desktop-nav">
          <div className="status-badge-pill" title="Available for projects">
            <span className="pulse-dot emerald"></span>
            <span>Available for Work</span>
          </div>
          <a href="#contact" className="btn btn-primary nav-cta">
            <span>Let's Talk</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div className="mobile-menu-links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mobile-menu-footer">
              <div className="status-badge-pill">
                <span className="pulse-dot emerald"></span>
                <span>Available for Select Work</span>
              </div>
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={() => setMobileMenuOpen(false)}
                style={{ width: "100%", marginTop: "12px" }}
              >
                <span>Get in Touch</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
