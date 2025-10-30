"use client";

import { motion } from "framer-motion";
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
  const CompanyLogo = ({ company }: { company: string }) => {
    const logoMap: Record<string, { src: string; alt: string; bg: string }> = {
      "Government of Ontario": {
        src: "/ongov.png",
        alt: "Ontario Government",
        bg: "bg-gradient-to-br from-orange-500 to-orange-600"
      },
      "Ontario Digital Service": {
        src: "/ongov.png",
        alt: "Ontario Government",
        bg: "bg-gradient-to-br from-orange-500 to-orange-600"
      },
      "Canadian Imperial Bank of Commerce": {
        src: "/cibc.png",
        alt: "CIBC",
        bg: "bg-white"
      },
      "CIBC": {
        src: "/cibc.png",
        alt: "CIBC",
        bg: "bg-white"
      }
    };

    const logo = logoMap[company];
    if (!logo) return null;

    return (
      <div className={`w-20 h-20 flex items-center justify-center ${logo.bg} rounded-xl p-3 flex-shrink-0 relative overflow-hidden`}
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
              fallback.className = 'text-electric-blue font-bold text-lg text-center';
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
        <h2 className="text-3xl font-light tracking-wide mb-6 text-electric-blue" style={{ textShadow: "0 0 20px rgba(0,217,255,0.5)" }}>
          Experience
        </h2>

        <div className="space-y-6">
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
                className="p-6 rounded-xl border border-electric-blue/30 bg-black/20 backdrop-blur-sm hover:border-electric-blue/60 hover:shadow-[0_0_25px_rgba(0,217,255,0.3)] transition-all duration-300 group"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-5 flex-1">
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

                    <div className="flex-1">
                      <h3 className="text-xl font-normal text-electric-blue group-hover:text-accent-cyan transition-colors mb-1" style={{ textShadow: "0 0 10px rgba(0,217,255,0.3)" }}>
                        {title}
                      </h3>
                      <p className="text-base text-electric-green font-light">{exp.company}</p>
                    </div>
                  </div>
                  <span className="text-sm text-accent-cyan whitespace-nowrap">{exp.period ?? ""}</span>
                </div>

                {points.length > 0 && (
                  <ul className="space-y-3 text-base text-secondary-text font-light mb-4">
                    {points.map((item, i) => (
                      <motion.li
                        key={`${exp.company}-${i}-${item.slice(0, 20)}`}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: expIndex * 0.1 + i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <motion.span
                          className="text-electric-blue mt-1 flex-shrink-0 text-xl"
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
                        <span className="text-primary-text">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}

                {techs.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
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
                        className="px-3 py-1.5 text-sm font-light bg-electric-blue/10 border border-electric-blue/40 rounded text-electric-blue hover:bg-electric-blue/20 hover:border-electric-blue/60 hover:shadow-[0_0_10px_rgba(0,217,255,0.4)] transition-colors duration-300 cursor-pointer"
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