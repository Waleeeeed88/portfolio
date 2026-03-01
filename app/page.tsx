import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="site-wrap">
        <Header />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <Footer />
      </main>
    </>
  );
}
