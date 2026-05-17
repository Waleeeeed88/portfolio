import Header from "./components/Header";
import Navigation from "./components/Navigation";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import NeuralNet from "./components/NeuralNet";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="site-wrap">
        <Header />
        <NeuralNet />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
    </>
  );
}
