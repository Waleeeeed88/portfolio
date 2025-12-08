"use client";

import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Simplified gradient orbs - reduced from 6 to 3, using CSS for blur */}
      <motion.div
        className="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent-cyan/15 rounded-full"
        style={{ 
          filter: "blur(80px)",
          willChange: "transform",
          transform: "translateZ(0)"
        }}
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent-magenta/15 rounded-full"
        style={{ 
          filter: "blur(80px)",
          willChange: "transform",
          transform: "translateZ(0)"
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-electric-blue/10 rounded-full"
        style={{ 
          filter: "blur(60px)",
          willChange: "transform",
          transform: "translateZ(0)"
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;