import React from "react";
import { CheckCircle2, ShieldCheck, Zap, Layers, Cpu, Award } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        
        <div className="about-header-wrapper">
          <div className="section-badge">
            <Cpu size={14} />
            <span>Developer Profile</span>
          </div>
          <h2 className="section-title">
            About <span className="accent-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            Web Developer building modern websites, e-commerce experiences and interactive digital products with a strong foundation in software engineering principles.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Story Column */}
          <div className="about-story-card">
            <h3 className="story-heading">
              Hi, I'm Ishmeet Singh — Crafting High-Impact Digital Experiences
            </h3>
            <p className="story-paragraph">
              I am a web developer with proven experience delivering real, live commercial websites for agencies, e-commerce brands, and industrial manufacturers. My professional work centers on creating performant Next.js applications, custom Shopify Liquid storefronts, and cutting-edge 3D product experiences.
            </p>
            <p className="story-paragraph">
              Beyond commercial client work, I continuously invest in personal technical projects — building full-stack Python/Flask web applications, exploring automation and assistant architectures with Python, and developing mobile applications with Flutter and Dart.
            </p>
            
            <div className="about-principles-list">
              <div className="principle-item">
                <CheckCircle2 size={20} className="principle-icon text-emerald" />
                <div>
                  <strong>Professional Experience:</strong> Five live industry websites deployed in production: High Horse, Party Rack India, Bawa Polymers, Terra Curtains, and SKYLIVE.
                </div>
              </div>
              <div className="principle-item">
                <CheckCircle2 size={20} className="principle-icon text-cyan" />
                <div>
                  <strong>Personal Development:</strong> Purpose-built software systems including a full-stack Travel Booking &amp; Itinerary Planner (Flask &amp; Supabase), the JARVIS Python Personal AI Agent, and a Flutter Real Estate Mobile App.
                </div>
              </div>
              <div className="principle-item">
                <CheckCircle2 size={20} className="principle-icon text-indigo" />
                <div>
                  <strong>Technical Foundation:</strong> Formal industrial training in Flutter &amp; Dart, Fundamentals of Object-Oriented Programming from IIT Kanpur, and core Java programming.
                </div>
              </div>
            </div>
          </div>

          {/* Value Highlights Cards */}
          <div className="about-highlights-column">
            
            <div className="highlight-mini-card">
              <div className="mini-card-icon">
                <Zap size={24} className="text-amber" />
              </div>
              <div className="mini-card-content">
                <h4>E-Commerce &amp; Shopify Expertise</h4>
                <p>Developing custom Shopify Liquid themes, collection architectures, responsive storefronts, and conversion-focused checkout UX.</p>
              </div>
            </div>

            <div className="highlight-mini-card">
              <div className="mini-card-icon">
                <ShieldCheck size={24} className="text-emerald" />
              </div>
              <div className="mini-card-content">
                <h4>Modern Web &amp; Full-Stack</h4>
                <p>Architecting Next.js, React, TypeScript frontends and reliable Python/Flask backends backed by Supabase and SMTP integrations.</p>
              </div>
            </div>

            <div className="highlight-mini-card">
              <div className="mini-card-icon">
                <Layers size={24} className="text-purple" />
              </div>
              <div className="mini-card-content">
                <h4>Interactive 3D &amp; Motion</h4>
                <p>Leveraging Three.js WebGL and GSAP animations to create interactive spatial storytelling, such as the SKYLIVE 3D TV showcase.</p>
              </div>
            </div>

            <div className="highlight-mini-card">
              <div className="mini-card-icon">
                <Award size={24} className="text-cyan" />
              </div>
              <div className="mini-card-content">
                <h4>Engineered for Search (SEO/AEO/GEO)</h4>
                <p>Optimizing semantic structure and performance for traditional search engines as well as next-generation generative AI discovery.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
