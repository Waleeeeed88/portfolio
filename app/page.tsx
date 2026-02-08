import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <>
      <div aria-hidden className="glow-dot a" />
      <div aria-hidden className="glow-dot b" />

      <Navigation />

      <main className="site-wrap">
        <Header />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <Footer />
      </main>
    </>
  );
}
