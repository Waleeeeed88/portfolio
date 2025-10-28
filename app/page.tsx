"use client";

import AnimatedBackground from "./components/AnimatedBackground";
import Header from "./components/Header";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative font-sans antialiased text-primary-text bg-dark-bg min-h-screen overflow-x-hidden">
      <AnimatedBackground />

      <div className="container relative mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:px-8">
        <Header />

        <div className="space-y-20">
          <EducationSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
        </div>

        <Footer />
      </div>
    </main>
  );
}
