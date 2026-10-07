import React, { useState } from "react";
import { certifications, type Certificate } from "../data/certifications";
import { Award, ExternalLink, X, Building, CheckCircle } from "lucide-react";

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section className="certifications-section" id="certifications">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-badge emerald-badge">
            <Award size={14} />
            <span>Credentials &amp; Education</span>
          </div>
          
          <h2 className="section-title">
            Certifications &amp; <span className="accent-gradient">Training</span>
          </h2>
          
          <p className="section-subtitle">
            Continuous learning through technical training and programming education.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="certificates-grid">
          {certifications.map((cert: Certificate) => (
            <article key={cert.id} className="certificate-card-item">
              
              {/* Certificate Image Frame */}
              <div className="cert-image-frame" onClick={() => setSelectedCert(cert)}>
                <img
                  src={cert.image}
                  alt={`${cert.title} Certificate`}
                  className="cert-preview-img"
                  loading="lazy"
                />
                <div className="cert-hover-overlay">
                  <span className="cert-zoom-btn">
                    <ExternalLink size={16} />
                    <span>View Certificate</span>
                  </span>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="cert-card-content">
                <div className="cert-category-tag">{cert.category}</div>
                <h3 className="cert-title">{cert.title}</h3>

                {cert.institution && (
                  <div className="cert-institution-row">
                    <Building size={14} className="text-cyan" />
                    <span>{cert.institution}</span>
                  </div>
                )}

                <p className="cert-desc">{cert.description}</p>

                <div className="cert-action-row">
                  <button
                    className="btn btn-secondary cert-action-btn"
                    onClick={() => setSelectedCert(cert)}
                    type="button"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={15} />
                  </button>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Certificate Modal Viewer */}
      {selectedCert && (
        <div className="cert-modal-backdrop" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <div className="modal-title-wrap">
                <h4>{selectedCert.title}</h4>
                {selectedCert.institution && <span className="modal-institution">{selectedCert.institution}</span>}
              </div>
              <button
                className="cert-modal-close-btn"
                onClick={() => setSelectedCert(null)}
                aria-label="Close certificate preview"
              >
                <X size={20} />
              </button>
            </div>

            <div className="cert-modal-body">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="cert-modal-img"
              />
            </div>

            <div className="cert-modal-footer">
              <div className="cert-modal-cat">
                <CheckCircle size={15} className="text-emerald" />
                <span>{selectedCert.category}</span>
              </div>
              <button className="btn btn-secondary" onClick={() => setSelectedCert(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
