import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { IndustryWork } from "./components/IndustryWork";
import { PersonalProjects } from "./components/PersonalProjects";
import { SkyliveShowcase } from "./components/SkyliveShowcase";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./App.css";

export const App: React.FC = () => {
  return (
    <div className="portfolio-app-root">
      {/* Ambient background glows */}
      <div className="ambient-glow" aria-hidden="true">
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="glow-orb glow-orb-3"></div>
      </div>

      {/* Global Navigation */}
      <Navbar />

      {/* Main Content adhering strictly to exact requested order:
          1. Hero
          2. About Me
          3. Industry Work
          4. Personal Projects
          5. SKYLIVE Interactive Showcase
          6. Experience
          7. Technical Skills
          8. Certifications & Training
          9. Contact
          10. Footer
      */}
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Industry Work (5 Live commercial websites) */}
        <IndustryWork />

        {/* 4. Personal Projects (3 independent projects) */}
        <PersonalProjects />

        {/* 5. SKYLIVE Interactive Showcase */}
        <SkyliveShowcase />

        {/* 6. Experience */}
        <Experience />

        {/* 7. Technical Skills */}
        <Skills />

        {/* 8. Certifications & Training */}
        <Certifications />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
};

export default App;
