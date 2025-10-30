"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-green via-accent-cyan to-electric-blue z-[60]"
      style={{ scaleX: scrollProgress / 100, transformOrigin: "left" }}
      initial={{ scaleX: 0 }}
    />
  );
};

export default ScrollIndicator;