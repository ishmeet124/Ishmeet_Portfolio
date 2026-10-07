import React from "react";
import { industryProjects, type IndustryProject } from "../data/industry-projects";
import { Sparkles, Layers } from "lucide-react";

export const IndustryWork: React.FC = () => {
  return (
    <section className="industry-work-section" id="industry-work">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-badge">
            <Layers size={14} />
            <span>Featured Industry Work</span>
          </div>
          
          <h2 className="section-title">
            Industry <span className="accent-gradient">Work</span>
          </h2>
          
          <p className="section-subtitle">
            Real websites and digital experiences I've worked on in a professional environment.
          </p>
        </div>

        {/* Five Large Industry Project Cards */}
        <div className="industry-projects-grid">
          {industryProjects.map((project: IndustryProject) => {
            const isBuilding = project.statusBadge === "Currently Building";

            return (
              <article
                key={project.number}
                className={`industry-card-item ${isBuilding ? "is-building-card" : ""}`}
                id={`industry-${project.number}`}
              >
                {/* Browser Frame & Preview */}
                <div className="industry-preview-wrapper">
                  <div className="browser-mockup-header">
                    <div className="browser-dots">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <div className="browser-tab-label">
                      {project.title} — {project.category}
                    </div>
                  </div>

                  <div className="industry-image-frame">
                    <img
                      src={project.image}
                      alt={`${project.title} live website preview`}
                      className="industry-preview-img"
                      loading="lazy"
                    />
                    <div className="image-overlay-gradient"></div>

                    {/* Status Badge */}
                    <div className="card-badge-container">
                      {isBuilding ? (
                        <div className="status-badge amber">
                          <span className="pulse-dot amber"></span>
                          <span className="status-text">Currently Building</span>
                        </div>
                      ) : (
                        <div className="status-badge emerald">
                          <span className="pulse-dot emerald"></span>
                          <span className="status-text">LIVE</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="industry-card-body">
                  <div className="industry-meta-row">
                    <span className="project-index-number">{project.number}</span>
                    <span className="project-category-badge">{project.category}</span>
                  </div>

                  <h3 className="industry-project-title">{project.title}</h3>

                  <p className="industry-project-desc">{project.description}</p>

                  {/* Special Highlight for SKYLIVE */}
                  {project.highlight && (
                    <div className="project-highlight-box">
                      <Sparkles size={16} className="highlight-icon" />
                      <div className="highlight-text">
                        <strong>Feature Highlight:</strong> {project.highlight}
                      </div>
                    </div>
                  )}

                  {/* Technology Pills */}
                  <div className="industry-tech-pills">
                    {project.technologies.map((tech: string) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Clean Action Button - NEVER displaying raw URL */}
                  <div className="industry-card-footer">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn ${isBuilding ? "btn-amber" : "btn-emerald"} live-action-btn`}
                      title={`Open live website for ${project.title}`}
                    >
                      <span>View Live Website ↗</span>
                    </a>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
