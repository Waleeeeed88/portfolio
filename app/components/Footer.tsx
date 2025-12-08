"use client";

import { personalInfo } from "../data/content";

const Footer = () => {
  return (
    <footer className="mt-8 pt-4 border-t border-border-color text-center text-secondary-text font-light">
      <p className="text-xs">
        Built with Next.js & Tailwind CSS • © 2025 {personalInfo.name}
      </p>
    </footer>
  );
};

export default Footer;