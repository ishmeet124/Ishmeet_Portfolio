import React from "react";
import { Compass, Target, Gauge, Cpu, Sparkles } from "lucide-react";

export const Philosophy: React.FC = () => {
  const pillars = [
    {
      number: "01",
      icon: <Target size={24} className="text-emerald" />,
      title: "Commercial Impact Over Tutorial Demos",
      description:
        "Code has value when it solves commercial problems. I prioritize architecture that drives conversions, generates qualified leads, and provides real utility for live paying customers.",
    },
    {
      number: "02",
      icon: <Gauge size={24} className="text-cyan" />,
      title: "Performance Is Not Negotiable",
      description:
        "Every extra 100 milliseconds of latency hurts conversion. I design with zero bloat, optimal asset pipelines, efficient DOM footprints, and mobile-first responsiveness.",
    },
    {
      number: "03",
      icon: <Cpu size={24} className="text-indigo" />,
      title: "Clean, Scalable Architecture",
      description:
        "Whether crafting modular Shopify Liquid sections or scalable Next.js component hierarchies, I write typed, documented, maintainable code built for long-term production stability.",
    },
    {
      number: "04",
      icon: <Sparkles size={24} className="text-purple" />,
      title: "Immersive 3D Storytelling",
      description:
        "Digital products stand out when they feel alive. Using Three.js and GSAP, I turn passive browsing into memorable, tactile 3D brand narratives that elevate perception.",
    },
  ];

  return (
    <section className="philosophy-section" id="philosophy">
      <div className="container">
        
        <div className="section-header-centered">
          <div className="section-badge">
            <Compass size={14} />
            <span>Guiding Principles</span>
          </div>
          <h2 className="section-title">
            Development <span className="accent-gradient">Philosophy</span>
          </h2>
          <p className="section-subtitle">
            The core engineering beliefs that guide how I approach every client website and digital product.
          </p>
        </div>

        <div className="philosophy-grid">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="philosophy-card">
              <div className="pillar-header">
                <span className="pillar-num">{pillar.number}</span>
                <div className="pillar-icon-box">{pillar.icon}</div>
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
