"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #00ff41 0%, #00d9ff 50%, #00e5ff 100%)",
        willChange: "transform"
      }}
    />
  );
};

export default ScrollIndicator;