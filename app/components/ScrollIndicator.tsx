"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #00ff41 0%, #00d9ff 50%, #00e5ff 100%)",
        boxShadow: "0 0 10px rgba(0,255,65,0.5), 0 0 20px rgba(0,217,255,0.3)"
      }}
    />
  );
};

export default ScrollIndicator;