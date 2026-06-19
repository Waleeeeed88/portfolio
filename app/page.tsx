import Header from "./components/Header";
import Navigation from "./components/Navigation";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import NeuralField3D from "./components/NeuralField3D";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="site-wrap">
        <Header />
        <NeuralField3D />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
    </>
  );
}
