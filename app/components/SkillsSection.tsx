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
    { title: "Languages", skills: skills.languages, color: "text-electric-green", borderColor: "border-electric-green/30 hover:border-electric-green/60" },
    { title: "Frameworks & Libraries", skills: skills.frameworks, color: "text-electric-blue", borderColor: "border-electric-blue/30 hover:border-electric-blue/60" },
    { title: "Testing & Deployment", skills: skills.testing, color: "text-accent-magenta", borderColor: "border-accent-magenta/30 hover:border-accent-magenta/60" },
    { title: "Developer Tools", skills: skills.tools, color: "text-accent-purple", borderColor: "border-accent-purple/30 hover:border-accent-purple/60" },
  ];

  return (
    <AnimatedSection>
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-light tracking-wide mb-4 text-electric-green" style={{ textShadow: "0 0 20px rgba(0,255,65,0.5)" }}>
          Skills
        </h2>

        {/* Core Technologies */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mb-6">
          <h3 className="text-lg font-light tracking-wide mb-3 text-electric-blue" style={{ textShadow: "0 0 15px rgba(0,217,255,0.4)" }}>
            Core Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {coreTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -3, boxShadow: "0 0 25px rgba(0,217,255,0.4)" }}
                className="flex flex-col items-center gap-2 p-3 rounded-lg border border-electric-green/20 bg-black/30 backdrop-blur-sm hover:border-electric-green/60 hover:bg-black/40 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-normal text-electric-blue group-hover:text-electric-green transition-colors">{tech.name}</p>
                  <p className="text-xs text-accent-cyan font-light">{tech.proficiency}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + categoryIndex * 0.1 }}
              className={`p-4 rounded-xl border bg-black/20 backdrop-blur-sm transition-all duration-300 ${category.borderColor}`}
            >
              <h3 className={`text-base font-normal mb-3 tracking-wide ${category.color}`} style={{ textShadow: "0 0 10px rgba(0,217,255,0.3)" }}>
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
                    className="inline-block px-2.5 py-1 text-xs font-light tracking-wide bg-black/40 border border-accent-cyan/30 rounded-full text-accent-cyan hover:text-electric-blue hover:border-electric-blue/50 hover:bg-black/50 transition-all duration-300 cursor-pointer"
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
  );
};

export default SkillsSection;