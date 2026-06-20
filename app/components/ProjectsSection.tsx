"use client";

import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/content";
import { motion, useReducedMotion } from "framer-motion";

const ProjectsSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="section-block scroll-mt-24">
      <motion.p
        className="section-label"
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        Projects
      </motion.p>

      <div className="project-list">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-row"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
            transition={{
              duration: 0.42,
              delay: 0.03 * i,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="project-num mono">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="project-body">
              <div className="project-row-head">
                <h3 className="project-row-title">{project.title}</h3>
                {project.deployed && (
                  <span className="project-row-live mono">
                    <span className="live-dot" />
                    deployed
                  </span>
                )}
              </div>
              <p className="project-row-stack mono">{project.stack}</p>
              <p className="project-row-desc">{project.description}</p>
              {project.detail && (
                <p className="project-row-detail mono">{project.detail}</p>
              )}
            </div>

            <span className="project-row-action">
              <span
                className={`project-row-action-label mono ${
                  project.deployed ? "project-row-action-label--live" : ""
                }`}
              >
                {project.deployed ? "Live" : "Repo"}
              </span>
              <ArrowUpRight
                className="project-row-arrow"
                size={18}
                strokeWidth={1.8}
              />
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
