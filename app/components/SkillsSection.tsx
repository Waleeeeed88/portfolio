"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SkillBadge from "./SkillBadge";
import { skills } from "../data/content";

const SkillsSection = () => {
  const categories = [
    { title: "Languages", skills: skills.languages, color: "text-accent-cyan" },
    { title: "Frameworks & Libraries", skills: skills.frameworks, color: "text-electric-blue" },
    { title: "Testing & Deployment", skills: skills.testing, color: "text-accent-magenta" },
    { title: "Developer Tools", skills: skills.tools, color: "text-accent-purple" },
  ];

  return (
    <AnimatedSection>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="text-3xl font-light tracking-wider mb-8 text-neon-blue uppercase"
          style={{
            textShadow: "0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.4)",
          }}
        >
          Technical Skills
        </h2>
      </motion.div>
      <div className="space-y-8">
        {categories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
          >
            <h4 className={`text-lg font-normal tracking-wide ${category.color} mb-4 uppercase`}>
              {category.title}
            </h4>
            <div className="flex flex-wrap">
              {category.skills.map((skill, index) => (
                <SkillBadge key={skill} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default SkillsSection;