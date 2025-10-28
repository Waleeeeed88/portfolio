"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  tech: string;
  points: string[];
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, tech, points, link }) => {
  const CardContent = (
    <>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-normal text-accent-cyan group-hover:text-white transition-colors tracking-wide" style={{ textShadow: '0 0 6px rgba(0, 229, 255, 0.7)' }}>
          {title}
        </h3>
        {link && (
          <motion.svg
            className="w-5 h-5 text-accent-cyan group-hover:text-white transition-colors flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            initial={{ x: 0, y: 0 }}
            whileHover={{ x: 3, y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </motion.svg>
        )}
      </div>
      <p className="text-xs font-light text-secondary-text my-3 tracking-wider">
        {tech}
      </p>
      <ul className="space-y-2 text-primary-text">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-x-3">
            <svg
              className="w-4 h-4 mt-1 flex-shrink-0 text-accent-magenta"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="font-light text-sm">{point}</span>
          </li>
        ))}
      </ul>
    </>
  );

  const cardClasses = "p-6 rounded-xl border border-border-color bg-black/30 backdrop-blur-sm hover:border-accent-cyan/70 hover:shadow-lg hover:shadow-accent-cyan/10 transition-all duration-300 group";

  if (link) {
    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className={`${cardClasses} cursor-pointer block`}
      >
        {CardContent}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={cardClasses}
    >
      {CardContent}
    </motion.div>
  );
};

export default ProjectCard;