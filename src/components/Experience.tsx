import React from "react";
import { Briefcase, Calendar, CheckCircle2, Building } from "lucide-react";

export const Experience: React.FC = () => {
  const experiences = [
    {
      period: "2024 — Present",
      role: "Web Developer & Frontend Engineer",
      company: "High Horse & Client Deliveries",
      location: "New Delhi, India / Remote",
      summary:
        "Lead frontend developer building production web experiences for search marketing, e-commerce brands, and industrial manufacturers.",
      achievements: [
        "Architected and deployed high-performance Next.js and React web applications optimized for Search, Answer, and Generative Engine Optimization (SEO/AEO/GEO).",
        "Engineered custom Shopify Liquid storefronts for brands including Party Rack India and customized e-commerce stores.",
        "Built B2B corporate platforms for Bawa Polymers and Terra Curtains, optimizing product discoverability and customer lead capture.",
        "Pioneering WebGL and Three.js 3D interactive experiences for the upcoming SKYLIVE smart TV brand launch.",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Shopify Liquid", "Three.js", "GSAP", "Tailored SEO"],
    },
    {
      period: "2023 — 2024",
      role: "E-Commerce & Shopify Frontend Specialist",
      company: "Commercial E-commerce Projects",
      location: "Remote",
      summary:
        "Specialized in converting Figma design systems into bespoke, lightning-fast Shopify themes and responsive web applications.",
      achievements: [
        "Constructed modular Liquid sections and snippets to allow non-technical store managers to update merchandising effortlessly.",
        "Integrated third-party APIs, review platforms, dynamic product filtering, and custom bundle builders.",
        "Optimized mobile checkout funnels, achieving noticeable improvements in mobile engagement and average session duration.",
      ],
      technologies: ["Shopify Liquid", "JavaScript", "HTML5/CSS3", "Responsive UI", "E-commerce Optimization"],
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        
        <div className="section-header-centered">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Professional Journey</span>
          </div>
          <h2 className="section-title">
            Industry <span className="accent-gradient">Work Experience</span>
          </h2>
          <p className="section-subtitle">
            A hands-on history of shipping real-world web applications and commercial e-commerce storefronts.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-card">
              <div className="timeline-card-header">
                <div className="timeline-meta">
                  <span className="timeline-period">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </span>
                  <span className="timeline-company">
                    <Building size={14} />
                    <span>{exp.company}</span>
                  </span>
                </div>
                <h3 className="timeline-role">{exp.role}</h3>
                <p className="timeline-summary">{exp.summary}</p>
              </div>

              <div className="timeline-achievements">
                {exp.achievements.map((item, aIdx) => (
                  <div key={aIdx} className="achievement-item">
                    <CheckCircle2 size={18} className="text-emerald achievement-bullet" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="timeline-tech-stack">
                {exp.technologies.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
