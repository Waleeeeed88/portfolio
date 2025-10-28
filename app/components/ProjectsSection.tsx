"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/content";

const ProjectsSection = () => {
  return (
    <AnimatedSection>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="text-3xl font-light tracking-wider mb-6 text-accent-purple uppercase"
          style={{
            textShadow: "0 0 20px rgba(112, 0, 255, 0.8), 0 0 40px rgba(112, 0, 255, 0.4)",
          }}
        >
          Projects
        </h2>
      </motion.div>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <ProjectCard
              title={project.title}
              tech={project.tech}
              points={project.points}
              link={project.link}
            />
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;