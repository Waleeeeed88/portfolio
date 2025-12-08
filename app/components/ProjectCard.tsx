"use client";

import React from "react";

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
        <h3 className="text-xl font-normal text-accent-cyan group-hover:text-white transition-colors tracking-wide">
          {title}
        </h3>
        {link && (
          <svg
            className="w-5 h-5 text-accent-cyan group-hover:text-white flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        )}
      </div>
      <p className="text-xs font-light text-secondary-text my-3 tracking-wider">{tech}</p>
      <ul className="space-y-2 text-primary-text">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-x-3">
            <svg className="w-4 h-4 mt-1 flex-shrink-0 text-accent-magenta" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-light text-sm">{point}</span>
          </li>
        ))}
      </ul>
    </>
  );

  const cardClasses = "p-6 rounded-xl border border-border-color bg-black/30 backdrop-blur-sm hover:border-electric-blue hover:shadow-[0_0_60px_rgba(0,217,255,0.5)] hover:bg-electric-blue/5 hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col";

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={`${cardClasses} cursor-pointer block`}>
        {CardContent}
      </a>
    );
  }

  return <div className={cardClasses}>{CardContent}</div>;
};

export default ProjectCard;