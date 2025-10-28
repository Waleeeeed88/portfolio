"use client";

import { motion } from "framer-motion";
import { personalInfo } from "../data/content";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-20 pt-8 border-t border-border-color text-center text-secondary-text font-light"
    >
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="text-sm"
      >
        Built with Next.js, Tailwind CSS, and Framer Motion
      </motion.p>
      <p className="mt-2 text-xs">© 2025 {personalInfo.name}</p>
    </motion.footer>
  );
};

export default Footer;