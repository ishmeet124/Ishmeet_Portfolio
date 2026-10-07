import React from "react";
import { ArrowDown, Sparkles, Code2, ShoppingBag, Globe, Award } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        
        {/* Industry Proof Tag */}
        <div className="hero-intro-badge">
          <span className="pulse-dot emerald"></span>
          <span className="badge-text">Web Developer</span>
          <span className="badge-divider">•</span>
          <span className="badge-highlight">Modern Websites, E-Commerce &amp; Interactive Products</span>
        </div>

        {/* Headline */}
        <h1 className="hero-title">
          <span className="hero-name-label">Ishmeet Singh</span>
          <span className="hero-title-highlight">
            Building modern websites, <span className="accent-gradient">e-commerce experiences</span> and <span className="accent-gradient">interactive digital products</span>.
          </span>
        </h1>

        {/* Subtitle Positioning */}
        <p className="hero-description">
          A dedicated developer with a strong blend of <strong>5 live industry client websites</strong>, full-stack &amp; AI personal engineering projects, and a rigorous foundation in <strong>Object-Oriented Programming (IIT Kanpur)</strong> and <strong>Flutter mobile development</strong>.
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a href="#industry-work" className="btn btn-primary hero-btn-main">
            <span>Explore Industry Work</span>
            <ArrowDown size={18} />
          </a>
          <a href="#personal-projects" className="btn btn-secondary hero-btn-sub">
            <span>Personal Projects</span>
          </a>
          <a href="#skylive-showcase" className="btn btn-secondary hero-btn-sub">
            <Sparkles size={18} color="#a855f7" />
            <span>SKYLIVE 3D Showcase</span>
          </a>
        </div>

        {/* 3 Pillars of Experience */}
        <div className="hero-stats-grid">
          <div className="hero-stat-card">
            <div className="stat-icon-wrapper">
              <Globe size={22} className="stat-icon text-indigo" />
            </div>
            <div className="stat-content">
              <div className="stat-number">5 Live</div>
              <div className="stat-label">Industry Websites</div>
              <div className="stat-sub">High Horse, Party Rack, Bawa, Terra, SKYLIVE</div>
            </div>
          </div>

          <div className="hero-stat-card">
            <div className="stat-icon-wrapper">
              <ShoppingBag size={22} className="stat-icon text-cyan" />
            </div>
            <div className="stat-content">
              <div className="stat-number">Shopify</div>
              <div className="stat-label">E-Commerce Specialist</div>
              <div className="stat-sub">Custom Liquid &amp; Storefronts</div>
            </div>
          </div>

          <div className="hero-stat-card">
            <div className="stat-icon-wrapper">
              <Code2 size={22} className="stat-icon text-purple" />
            </div>
            <div className="stat-content">
              <div className="stat-number">3 Projects</div>
              <div className="stat-label">Personal Development</div>
              <div className="stat-sub">Travel Planner, JARVIS AI, Real Estate App</div>
            </div>
          </div>

          <div className="hero-stat-card">
            <div className="stat-icon-wrapper">
              <Award size={22} className="stat-icon text-emerald" />
            </div>
            <div className="stat-content">
              <div className="stat-number">IIT Kanpur</div>
              <div className="stat-label">Technical Foundation</div>
              <div className="stat-sub">OOP Fundamentals &amp; Flutter Training</div>
            </div>
          </div>
        </div>

        {/* Five Live Industry Brands */}
        <div className="hero-client-ticker">
          <span className="ticker-label">Five Live Industry Projects:</span>
          <div className="ticker-pills">
            <span className="ticker-pill">01 — High Horse</span>
            <span className="ticker-pill">02 — Party Rack India</span>
            <span className="ticker-pill">03 — Bawa Polymers</span>
            <span className="ticker-pill">04 — Terra Curtains</span>
            <span className="ticker-pill">05 — SKYLIVE</span>
          </div>
        </div>

      </div>
    </section>
  );
};
