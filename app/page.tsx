"use client";

import AnimatedBackground from "./components/AnimatedBackground";
import Header from "./components/Header";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main className="max-w-5xl mx-auto px-6 relative z-10">
        <section id="header" className="min-h-[70vh] flex items-center justify-center py-20">
          <Header />
        </section>

        <div className="space-y-8 pb-8">
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
