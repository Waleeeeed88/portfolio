"use client";

import { motion } from "framer-motion";
import { getImagePath } from "../utils/imagePath";

const MW2019Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative w-24 h-24 sm:w-32 sm:h-32"
    >
      <img
        src={getImagePath("mw-logo.png")}
        alt="MW Logo"
        className="w-full h-full object-contain"
        style={{
          filter: "drop-shadow(0 0 20px rgba(0,255,65,0.6)) drop-shadow(0 0 40px rgba(0,217,255,0.4))"
        }}
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
    </motion.div>
  );
};

export default MW2019Logo;