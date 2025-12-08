"use client";

import AnimatedBackground from "./components/AnimatedBackground";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";
import ScrollIndicator from "./components/ScrollIndicator";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <ScrollIndicator />
      <Navigation />
      {/* Increased pt to 24 to clear the fixed nav bar so the head isn't cut off */}
      <main className="min-h-screen px-4 sm:px-6 lg:px-8 pt-24 pb-12 max-w-7xl mx-auto">
        <div className="space-y-16">
          <section id="header">
            <Header />
          </section>

          <section id="experience">
            <ExperienceSection />
          </section>

          <section id="projects">
            <ProjectsSection />
          </section>

          <section id="skills">
            <SkillsSection />
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
