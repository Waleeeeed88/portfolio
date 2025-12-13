"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { skills } from "../data/content";

const majorSkills = [
  { label: "Java", icon: "☕" },
  { label: "TypeScript", icon: "🌀" },
  { label: "Angular", icon: "🧭" },
  { label: "C++", icon: "⚙️" },
];

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
    { title: "Languages", skills: skills.languages, color: "text-electric-blue", bg: "from-electric-blue/10 via-electric-blue/5 to-transparent" },
    { title: "Frameworks & Libraries", skills: skills.frameworks, color: "text-neon-blue", bg: "from-neon-blue/10 via-neon-blue/5 to-transparent" },
    { title: "Testing & Deployment", skills: skills.testing, color: "text-accent-magenta", bg: "from-accent-magenta/10 via-accent-magenta/5 to-transparent" },
    { title: "Developer Tools", skills: skills.tools, color: "text-accent-purple", bg: "from-accent-purple/10 via-accent-purple/5 to-transparent" },
  ];

  return (
    <div id="skills" className="scroll-mt-20">
      <AnimatedSection>
        <h2 className="text-2xl font-light tracking-wide mb-4 text-electric-blue">
          Skills
        </h2>

          <div className="mb-4 p-4 rounded-xl border border-electric-blue/20 bg-gradient-to-r from-electric-blue/10 via-accent-cyan/5 to-transparent">
            <h3 className="text-sm font-semibold text-electric-blue mb-2">Core Stack</h3>
            <div className="flex flex-wrap gap-2">
              {majorSkills.map((item) => (
                <span
                  key={item.label}
                  className="px-3 py-2 text-xs sm:text-sm font-medium rounded-lg border border-electric-blue/40 bg-black/30 text-primary-text flex items-center gap-2 shadow-[0_0_25px_rgba(0,217,255,0.25)]"
                >
                  <span aria-hidden>{item.icon}</span>
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((category) => (
            <div
              key={category.title}
                className="p-4 rounded-lg border border-electric-blue/20 bg-black/20 relative overflow-hidden
                           hover:border-electric-blue hover:shadow-[0_0_50px_rgba(0,217,255,0.4)] hover:bg-electric-blue/5 hover:-translate-y-1 
                           transition-all duration-300"
            >
                <div className={`absolute inset-0 pointer-events-none bg-gradient-to-br ${category.bg}`} aria-hidden />
              <h3 className={`text-sm font-normal mb-2 tracking-wide ${category.color}`}>
                {category.title}
              </h3>
              <motion.div 
                  className="flex flex-wrap gap-1.5 relative z-10"
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

        <div className="mt-4 p-4 rounded-xl border border-accent-purple/30 bg-gradient-to-r from-accent-purple/10 via-electric-blue/5 to-transparent text-sm text-primary-text">
          <p className="font-medium text-electric-blue mb-1">Currently exploring</p>
          <p className="text-secondary-text">
            Diving deeper into low-level C/C++ for STM32 boards and revisiting FPGA workflows; excited about embedded and hardware-software co-design.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default SkillsSection;