import React from "react";
import { personalProjects, type PersonalProject } from "../data/personal-projects";
import { Code2, CheckCircle2, Terminal } from "lucide-react";

export const PersonalProjects: React.FC = () => {
  return (
    <section className="personal-projects-section" id="personal-projects">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-badge purple-badge">
            <Code2 size={14} />
            <span>Independent Engineering</span>
          </div>
          
          <h2 className="section-title">
            Personal <span className="accent-gradient">Projects</span>
          </h2>
          
          <p className="section-subtitle">
            Projects I've built to explore ideas, solve problems and expand my technical skills.
          </p>
        </div>

        {/* Three Medium/Large Cards Grid */}
        <div className="personal-projects-grid">
          {personalProjects.map((project: PersonalProject) => (
            <article key={project.number} className="personal-card-item" id={`personal-${project.number}`}>
              
              {/* Preview Image Frame */}
              <div className="personal-preview-frame">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="personal-preview-img"
                  loading="lazy"
                />
                <div className="personal-overlay-gradient"></div>
                <div className="personal-index-tag">
                  <span>{project.number}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="personal-card-body">
                <div className="personal-category-badge">{project.category}</div>
                <h3 className="personal-project-title">{project.title}</h3>
                <p className="personal-project-desc">{project.description}</p>

                {/* Technical Highlights (Only what is actually present in code) */}
                <div className="technical-highlights-block">
                  <div className="highlights-title">
                    <Terminal size={14} className="text-cyan" />
                    <span>Technical Highlights:</span>
                  </div>
                  <ul className="highlights-list">
                    {project.technicalHighlights.map((highlight: string, idx: number) => (
                      <li key={idx} className="highlight-list-item">
                        <CheckCircle2 size={14} className="text-emerald highlight-check" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies List */}
                <div className="personal-tech-tags">
                  {project.technologies.map((tech: string) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Optional Links: Only if real URL or GitHub provided, otherwise no fake links */}
                {(project.url || project.githubUrl) && (
                  <div className="personal-card-links">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary personal-action-btn"
                      >
                        <span>View Project ↗</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary personal-action-btn"
                      >
                        <span>GitHub ↗</span>
                      </a>
                    )}
                  </div>
                )}

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
