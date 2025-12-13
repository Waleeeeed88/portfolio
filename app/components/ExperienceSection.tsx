"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experiences } from "../data/content";
import { getImagePath } from "../utils/imagePath";

type ExperienceItem = {
  company: string;
  title?: string;
  position?: string;
  period?: string;
  points?: string[];
  description?: string[];
  technologies?: string[];
};

const ExperienceSection = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = prefersReducedMotion
    ? undefined
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.05, when: "beforeChildren" },
        },
      };

  const cardVariants = prefersReducedMotion
    ? undefined
    : {
        hidden: { opacity: 0, y: 6 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.18, ease: "easeOut" as const },
        },
      };
  const CompanyLogo = ({ company }: { company: string }) => {
    const logoMap: Record<string, { src: string; alt: string; bg: string }> = {
      "Government of Ontario": { src: getImagePath("ongov.png"), alt: "Ontario Government", bg: "bg-gradient-to-br from-orange-500 to-orange-600" },
      "Ontario Digital Service": { src: getImagePath("ongov.png"), alt: "Ontario Government", bg: "bg-gradient-to-br from-orange-500 to-orange-600" },
      "Canadian Imperial Bank of Commerce": { src: getImagePath("cibc.png"), alt: "CIBC", bg: "bg-white" },
      "CIBC": { src: getImagePath("cibc.png"), alt: "CIBC", bg: "bg-white" },
    };

    const logo = logoMap[company];
    if (!logo) return null;

    return (
      <div
        className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center ${logo.bg} rounded-xl p-2 flex-shrink-0`}
        style={{
          boxShadow: "0 0 15px rgba(0, 217, 255, 0.25), 0 4px 8px rgba(0, 0, 0, 0.3)"
        }}
      >
        <img
          src={logo.src}
          alt={logo.alt}
          className="w-full h-full object-contain"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
    );
  };

  const list: ExperienceItem[] = Array.isArray(experiences) ? (experiences as ExperienceItem[]) : [];

  return (
    <section>
      <h2 className="text-2xl font-light tracking-wide mb-6 text-electric-blue">
        Experience
      </h2>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        variants={containerVariants}
        initial={containerVariants ? "hidden" : undefined}
        whileInView={containerVariants ? "visible" : undefined}
        viewport={{ once: true, amount: 0.2 }}
      >
        {list.map((exp, expIndex) => {
          const title = exp.title ?? exp.position ?? "";
          const points = Array.isArray(exp.points) ? exp.points : Array.isArray(exp.description) ? exp.description : [];
          const techs = Array.isArray(exp.technologies) ? exp.technologies : [];

          return (
            <motion.div
              key={`${exp.company}-${title}-${expIndex}`}
              variants={cardVariants}
              className="p-6 rounded-xl border border-electric-blue/20 bg-black/20 
                         hover:border-electric-blue hover:shadow-[0_0_60px_rgba(0,217,255,0.5)] hover:bg-electric-blue/5 hover:-translate-y-1 
                         transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-start gap-4 mb-4">
                <CompanyLogo company={exp.company} />
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-normal text-electric-blue leading-tight mb-1">{title}</h3>
                  <p className="text-sm text-secondary-text mb-1">{exp.company}</p>
                  <span className="text-xs text-accent-cyan inline-block px-2 py-0.5 rounded bg-electric-blue/5 border border-electric-blue/10">
                    {exp.period ?? ""}
                  </span>
                </div>
              </div>

              {points.length > 0 && (
                <ul className="space-y-2 text-sm text-primary-text font-light flex-grow mb-4">
                  {points.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-electric-blue mt-1 flex-shrink-0 text-xs">▹</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {techs.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-electric-blue/10">
                  {techs.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-2 py-1 text-xs font-light bg-electric-blue/10 border border-electric-blue/30 rounded text-electric-blue"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default ExperienceSection;