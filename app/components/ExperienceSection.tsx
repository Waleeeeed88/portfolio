"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
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
  const CompanyLogo = ({ company }: { company: string }) => {
    const logoMap: Record<string, { src: string; alt: string; bg: string }> = {
      "Government of Ontario": {
        src: getImagePath("ongov.png"),
        alt: "Ontario Government",
        bg: "bg-gradient-to-br from-orange-500 to-orange-600"
      },
      "Ontario Digital Service": {
        src: getImagePath("ongov.png"),
        alt: "Ontario Government",
        bg: "bg-gradient-to-br from-orange-500 to-orange-600"
      },
      "Canadian Imperial Bank of Commerce": {
        src: getImagePath("cibc.png"),
        alt: "CIBC",
        bg: "bg-white"
      },
      "CIBC": {
        src: getImagePath("cibc.png"),
        alt: "CIBC",
        bg: "bg-white"
      }
    };

    const logo = logoMap[company];
    if (!logo) return null;

    return (
      <div className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center ${logo.bg} rounded-xl p-2 sm:p-3 flex-shrink-0 relative overflow-hidden`}
        style={{
          boxShadow: "0 0 20px rgba(0,217,255,0.3), 0 4px 12px rgba(0,0,0,0.4)"
        }}
      >
        <img
          src={logo.src}
          alt={logo.alt}
          className="w-full h-full object-contain"
          style={{
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))"
          }}
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
            if (target.parentElement) {
              const fallback = document.createElement('div');
              fallback.className = 'text-electric-blue font-bold text-sm sm:text-lg text-center';
              fallback.textContent = company.split(' ').map(w => w[0]).join('').slice(0, 3);
              target.parentElement.appendChild(fallback);
            }
          }}
        />
      </div>
    );
  };

  const list: ExperienceItem[] = Array.isArray(experiences) ? (experiences as ExperienceItem[]) : [];

  return (
    <AnimatedSection>
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl sm:text-3xl font-light tracking-wide mb-4 sm:mb-6 text-electric-blue" style={{ textShadow: "0 0 20px rgba(0,217,255,0.5)" }}>
          Experience
        </h2>

        <div className="space-y-4 sm:space-y-6">
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
                className="p-4 sm:p-6 rounded-xl border border-electric-blue/30 bg-black/20 backdrop-blur-sm hover:border-electric-blue/60 hover:shadow-[0_0_25px_rgba(0,217,255,0.3)] transition-all duration-300 group"
                whileHover={{ scale: 1.01 }}
              >
                {/* Header Section - Stack on mobile, row on desktop */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-5 mb-4">
                  {/* Logo and Title Section */}
                  <div className="flex items-start gap-3 sm:gap-5 flex-1 min-w-0">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: expIndex * 0.1 + 0.2, 
                        duration: 0.4,
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10
                        }
                      }}
                    >
                      <motion.div
                        animate={{ 
                          rotate: [0, -2, 2, -2, 2, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                      >
                        <CompanyLogo company={exp.company} />
                      </motion.div>
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-normal text-electric-blue group-hover:text-accent-cyan transition-colors mb-1 break-words" style={{ textShadow: "0 0 10px rgba(0,217,255,0.3)" }}>
                        {title}
                      </h3>
                      <p className="text-sm sm:text-base text-electric-green font-light break-words">{exp.company}</p>
                    </div>
                  </div>

                  {/* Period - Stack below on mobile */}
                  <span className="text-xs sm:text-sm text-accent-cyan flex-shrink-0 self-start sm:self-auto">
                    {exp.period ?? ""}
                  </span>
                </div>

                {/* Points Section */}
                {points.length > 0 && (
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-secondary-text font-light mb-3 sm:mb-4">
                    {points.map((item, i) => (
                      <motion.li
                        key={`${exp.company}-${i}-${item.slice(0, 20)}`}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: expIndex * 0.1 + i * 0.05 }}
                        className="flex items-start gap-2 sm:gap-3"
                      >
                        <motion.span
                          className="text-electric-blue mt-0.5 sm:mt-1 flex-shrink-0 text-lg sm:text-xl"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: i * 0.3,
                            ease: "easeInOut"
                          }}
                        >
                          ▹
                        </motion.span>
                        <span className="text-primary-text leading-relaxed break-words">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}

                {/* Technologies Section */}
                {techs.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                    {techs.map((tech, tIndex) => (
                      <motion.span
                        key={`${exp.company}-${tech}-${tIndex}`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: expIndex * 0.1 + tIndex * 0.03,
                          type: "spring",
                          stiffness: 500,
                          damping: 30
                        }}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -2,
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 10
                          }
                        }}
                        className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-light bg-electric-blue/10 border border-electric-blue/40 rounded text-electric-blue hover:bg-electric-blue/20 hover:border-electric-blue/60 hover:shadow-[0_0_10px_rgba(0,217,255,0.4)] transition-colors duration-300 cursor-pointer break-words"
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