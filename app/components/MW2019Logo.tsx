"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const MW2019Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
      whileHover={{ 
        scale: 1.1,
        transition: { duration: 0.3 }
      }}
      className="relative"
    >
      <motion.div
        animate={{ 
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="w-24 h-24 sm:w-32 sm:h-32"
      >
        <Image
          src="/mw-logo.png"
          alt="MW Logo"
          width={128}
          height={128}
          className="w-full h-full object-contain"
          priority
          style={{
            filter: "drop-shadow(0 0 20px rgba(0,255,65,0.6)) drop-shadow(0 0 40px rgba(0,217,255,0.4))"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default MW2019Logo;