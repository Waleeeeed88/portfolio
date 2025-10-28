"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
  index: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, index }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 0 20px rgba(0, 229, 255, 0.6)",
      }}
      className="inline-block px-4 py-2 m-1 text-xs font-light tracking-wide bg-black/40 border border-accent-cyan/50 
                 rounded-full text-electric-blue hover:bg-accent-cyan/10 hover:border-electric-blue 
                 transition-all duration-300 cursor-pointer"
    >
      {skill}
    </motion.span>
  );
};

export default SkillBadge;