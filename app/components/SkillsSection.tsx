"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { skills } from "../data/content";

const SkillsSection = () => {
  const coreTechnologies = [
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", proficiency: "Expert" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", proficiency: "Expert" },
    { name: "GCP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", proficiency: "Advanced" },
    { name: "Spring", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", proficiency: "Intermediate" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", proficiency: "Intermediate" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", proficiency: "Expert" },
  ];

  const categories = [
    { title: "Languages", skills: skills.languages, color: "text-electric-blue", borderColor: "border-electric-blue/30 hover:border-electric-blue/60" },
    { title: "Frameworks & Libraries", skills: skills.frameworks, color: "text-neon-blue", borderColor: "border-neon-blue/30 hover:border-neon-blue/60" },
    { title: "Testing & Deployment", skills: skills.testing, color: "text-accent-magenta", borderColor: "border-accent-magenta/30 hover:border-accent-magenta/60" },
    { title: "Developer Tools", skills: skills.tools, color: "text-accent-purple", borderColor: "border-accent-purple/30 hover:border-accent-purple/60" },
  ];

  return (
    <div id="skills" className="scroll-mt-20">
      <AnimatedSection>
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 50, damping: 20 }}>
          <h2 className="text-3xl font-light tracking-wide mb-6 text-electric-blue" style={{ textShadow: "0 0 20px rgba(0,217,255,0.5)" }}>
            Skills
          </h2>

          {/* Core Technologies */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mb-6">
            <h3 className="text-xl font-light tracking-wide mb-4 text-electric-blue" style={{ textShadow: "0 0 15px rgba(0,217,255,0.4)" }}>
              Core Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {coreTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05, y: -3, boxShadow: "0 0 25px rgba(0,217,255,0.4)" }}
                  className="flex flex-col items-center gap-3 p-4 rounded-lg border border-electric-blue/20 bg-electric-blue/5 backdrop-blur-sm hover:border-electric-blue/60 hover:bg-electric-blue/10 transition-all duration-300 cursor-pointer group"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,217,255,0.08), rgba(0,255,255,0.05), rgba(10,10,10,0.4))"
                  }}
                >
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all" />
                  </div>
                  <div className="text-center">
                    <p className="text-base font-normal text-electric-blue group-hover:text-neon-blue transition-colors">{tech.name}</p>
                    <p className="text-sm text-accent-cyan font-light">{tech.proficiency}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* All Skills Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + categoryIndex * 0.1 }}
                className={`p-5 rounded-xl border backdrop-blur-sm transition-all duration-300 ${category.borderColor}`}
                style={{
                  background: "linear-gradient(135deg, rgba(0,217,255,0.08), rgba(0,255,255,0.05), rgba(10,10,10,0.4))"
                }}
              >
                <h3 className={`text-lg font-normal mb-4 tracking-wide ${category.color}`} style={{ textShadow: "0 0 10px rgba(0,217,255,0.3)" }}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      whileHover={{ scale: 1.05, y: -2, boxShadow: "0 0 10px rgba(0,217,255,0.3)" }}
                      className="inline-block px-3 py-1.5 text-sm font-light tracking-wide border border-accent-cyan/30 rounded-full text-accent-cyan hover:text-electric-blue hover:border-electric-blue/50 transition-all duration-300 cursor-pointer"
                      style={{
                        background: "linear-gradient(135deg, rgba(0,217,255,0.1), rgba(0,255,255,0.05))"
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatedSection>
    </div>
  );
};

export default SkillsSection;