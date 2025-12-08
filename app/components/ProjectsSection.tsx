"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/content";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const ProjectsSection = () => {
  return (
    <AnimatedSection>
      <h2 className="text-2xl font-light tracking-wide mb-4 text-primary-text">
        Projects
      </h2>
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={itemVariants}>
            <ProjectCard
              title={project.title}
              tech={project.tech}
              points={project.points}
              link={project.link}
            />
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
};

export default ProjectsSection;