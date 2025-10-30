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
          className="text-2xl font-light tracking-wide mb-4 text-primary-text"
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