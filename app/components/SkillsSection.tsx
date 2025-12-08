"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { skills } from "../data/content";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.02 },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.2 }
  },
};

const SkillsSection = () => {
  const categories = [
    { title: "Languages", skills: skills.languages, color: "text-electric-blue" },
    { title: "Frameworks & Libraries", skills: skills.frameworks, color: "text-neon-blue" },
    { title: "Testing & Deployment", skills: skills.testing, color: "text-accent-magenta" },
    { title: "Developer Tools", skills: skills.tools, color: "text-accent-purple" },
  ];

  return (
    <div id="skills" className="scroll-mt-20">
      <AnimatedSection>
        <h2 className="text-2xl font-light tracking-wide mb-4 text-electric-blue">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="p-4 rounded-lg border border-electric-blue/20 bg-black/20 
                         hover:border-electric-blue hover:shadow-[0_0_50px_rgba(0,217,255,0.4)] hover:bg-electric-blue/5 hover:-translate-y-1 
                         transition-all duration-300"
            >
              <h3 className={`text-sm font-normal mb-2 tracking-wide ${category.color}`}>
                {category.title}
              </h3>
              <motion.div 
                className="flex flex-wrap gap-1.5"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    className="px-2 py-1 text-xs font-light border border-accent-cyan/30 rounded text-accent-cyan hover:border-electric-blue/50 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default SkillsSection;