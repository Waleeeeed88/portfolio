"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
}) => {
  return (
    <motion.section
      className={className}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;