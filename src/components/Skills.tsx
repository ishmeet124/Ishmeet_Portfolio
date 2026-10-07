import React from "react";
import { skillGroups, type SkillGroup } from "../data/skills";
import {
  Code,
  ShoppingCart,
  Server,
  Database,
  FileCode2,
  Box,
  Smartphone,
  Cpu,
  TrendingUp,
  Check,
} from "lucide-react";

export const Skills: React.FC = () => {
  // Mapping icons to each skill category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Code size={20} className="text-indigo" />;
      case "E-commerce":
        return <ShoppingCart size={20} className="text-cyan" />;
      case "Backend":
        return <Server size={20} className="text-emerald" />;
      case "Database / Backend Services":
        return <Database size={20} className="text-purple" />;
      case "CMS":
        return <FileCode2 size={20} className="text-amber" />;
      case "Animation & Interactive Web":
        return <Box size={20} className="text-pink" />;
      case "Mobile Development":
        return <Smartphone size={20} className="text-sky" />;
      case "Programming Concepts":
        return <Cpu size={20} className="text-indigo" />;
      case "SEO":
        return <TrendingUp size={20} className="text-emerald" />;
      default:
        return <Code size={20} className="text-cyan" />;
    }
  };

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        
        <div className="section-header-centered">
          <div className="section-badge">
            <Code size={14} />
            <span>Technical Skills</span>
          </div>
          <h2 className="section-title">
            Technical <span className="accent-gradient">Skills</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my real technical stack across frontend, e-commerce, backend, mobile, and interactive development.
          </p>
        </div>

        <div className="skills-categories-grid">
          {skillGroups.map((group: SkillGroup, idx: number) => (
            <div key={idx} className="skill-category-box">
              <div className="skill-group-top">
                <div className="skill-icon-bubble">{getCategoryIcon(group.category)}</div>
                <h3 className="skill-group-title">{group.category}</h3>
              </div>

              <div className="skill-tags-flow">
                {group.skills.map((skill: string) => (
                  <div key={skill} className="skill-chip">
                    <Check size={13} className="text-emerald chip-check" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
