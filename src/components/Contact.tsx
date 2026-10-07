import React, { useState } from "react";
import { Mail, Copy, Check, Send, MapPin, MessageSquare, ArrowUpRight, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Industry Website / Next.js",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const emailAddress = "ishmeetsinghw006@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
      });
    } catch {
      // fallback
    }

    // Prepare mailto fallback or clear
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        projectType: "Industry Website / Next.js",
        message: "",
      });
    }, 4000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        
        <div className="contact-layout-grid">
          
          {/* Left Column: Direct Info & Availability */}
          <div className="contact-info-block">
            <div className="section-badge">
              <MessageSquare size={14} />
              <span>Let's Connect</span>
            </div>

            <h2 className="section-title">
              Have a Project in Mind? <br />
              <span className="accent-gradient">Let's Build It Right.</span>
            </h2>

            <p className="contact-subtext">
              Whether you need a high-converting Shopify store, a custom Next.js web application, or an immersive 3D product showcase, I'm ready to bring proven industry experience to your team.
            </p>

            {/* Email Copy Card */}
            <div className="email-copy-box">
              <div className="email-copy-details">
                <span className="email-label">Direct Email</span>
                <span className="email-value">{emailAddress}</span>
              </div>
              <button
                className="btn-copy-action"
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? <Check size={18} className="text-emerald" /> : <Copy size={18} />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            {/* Contact Details List */}
            <div className="contact-meta-items">
              <div className="meta-item">
                <div className="meta-icon-box">
                  <MapPin size={18} className="text-cyan" />
                </div>
                <div>
                  <div className="meta-title">Location</div>
                  <div className="meta-desc">New Delhi, India • Available Worldwide (Remote)</div>
                </div>
              </div>

              <div className="meta-item">
                <div className="meta-icon-box">
                  <Sparkles size={18} className="text-purple" />
                </div>
                <div>
                  <div className="meta-title">Current Status</div>
                  <div className="meta-desc">Available for select projects & engineering roles</div>
                </div>
              </div>
            </div>

            {/* Social / External links */}
            <div className="contact-social-pills">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>LinkedIn Profile</span>
                <ArrowUpRight size={14} />
              </a>
              <a
                href={`mailto:${emailAddress}?subject=Project%20Inquiry%20-%20Ishmeet%20Singh`}
                className="social-pill"
              >
                <Mail size={16} />
                <span>Send Direct Mail</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-block">
            <div className="contact-form-card">
              
              <h3 className="form-card-title">Send a Message</h3>
              <p className="form-card-subtitle">I typically reply within 24 hours.</p>

              {formSubmitted ? (
                <div className="form-success-banner">
                  <div className="success-icon-bubble">
                    <Check size={28} className="text-emerald" />
                  </div>
                  <h4>Thank you for reaching out!</h4>
                  <p>
                    Your message has been recorded. Ishmeet Singh will review your request and get back to you shortly.
                  </p>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setFormSubmitted(false)}
                    style={{ marginTop: "16px" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="project-inquiry-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="projectType" className="form-label">
                      Project Requirement
                    </label>
                    <select
                      id="projectType"
                      className="form-select"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    >
                      <option value="Industry Website / Next.js">Industry Website / Next.js</option>
                      <option value="Shopify Store / Liquid Customization">Shopify Store / Liquid Customization</option>
                      <option value="Interactive 3D Experience (Three.js/GSAP)">Interactive 3D Experience (Three.js/GSAP)</option>
                      <option value="SEO / AEO / GEO Optimization">SEO / AEO / GEO Optimization</option>
                      <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
                      <option value="Other Commercial Project">Other Commercial Project</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Project Details & Goals
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Tell me about your business goals, timeline, and deliverables..."
                      className="form-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary form-submit-btn">
                    <span>Send Project Inquiry</span>
                    <Send size={16} />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
