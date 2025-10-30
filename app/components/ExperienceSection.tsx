"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { experiences } from "../data/content";

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
  const companyLogos: Record<string, string> = {
    "Ontario Digital Service": "https://www.ontario.ca/themes/custom/ontario_theme/images/ontario-logo.svg",
    CIBC: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/CIBC_logo.svg/2560px-CIBC_logo.svg.png",
  };

  const list: ExperienceItem[] = Array.isArray(experiences) ? (experiences as ExperienceItem[]) : [];

  return (
    <AnimatedSection>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-light tracking-wide mb-4 text-electric-blue" style={{ textShadow: "0 0 20px rgba(0,217,255,0.5)" }}>
          Experience
        </h2>

        <div className="space-y-4">
          {list.map((exp, expIndex) => {
            const title = exp.title ?? exp.position ?? "";
            const points = Array.isArray(exp.points) ? exp.points : Array.isArray(exp.description) ? exp.description : [];

            const techs = Array.isArray(exp.technologies) ? exp.technologies : [];

            return (
              <motion.div
                key={`${exp.company}-${title}-${expIndex}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: expIndex * 0.1 }}
                className="p-5 rounded-xl border border-electric-blue/30 bg-black/20 backdrop-blur-sm hover:border-electric-blue/60 hover:shadow-[0_0_25px_rgba(0,217,255,0.3)] transition-all duration-300 group"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-4 flex-1">
                    {/* Company Logo */}
                    {companyLogos[exp.company] && (
                      <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-2 flex-shrink-0 relative shadow-[0_0_15px_rgba(0,217,255,0.2)]">
                        <Image
                          src={companyLogos[exp.company]}
                          alt={`${exp.company} logo`}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain"
                          unoptimized
                        />
                      </div>
                    )}

                    <div>
                      <h3
                        className="text-lg font-normal text-electric-blue group-hover:text-accent-cyan transition-colors"
                        style={{ textShadow: "0 0 10px rgba(0,217,255,0.3)" }}
                      >
                        {title}
                      </h3>
                      <p className="text-sm text-electric-green font-light">{exp.company}</p>
                    </div>
                  </div>
                  <span className="text-xs text-accent-cyan whitespace-nowrap">{exp.period ?? ""}</span>
                </div>

                {points.length > 0 && (
                  <ul className="space-y-2 text-sm text-secondary-text font-light">
                    {points.map((item, i) => (
                      <motion.li
                        key={`${exp.company}-${i}-${item.slice(0, 20)}`}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: expIndex * 0.1 + i * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <motion.span
                          className="text-electric-blue mt-1 flex-shrink-0 text-base"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        >
                          ▹
                        </motion.span>
                        <span className="text-primary-text">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}

                {techs.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {techs.map((tech, tIndex) => (
                      <motion.span
                        key={`${exp.company}-${tech}-${tIndex}`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: expIndex * 0.1 + tIndex * 0.03 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-2 py-1 text-xs font-light bg-electric-blue/10 border border-electric-blue/40 rounded text-electric-blue hover:bg-electric-blue/20 hover:border-electric-blue/60 hover:shadow-[0_0_10px_rgba(0,217,255,0.4)] transition-all duration-300 cursor-pointer"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

export default ExperienceSection;