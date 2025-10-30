"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const MW2019Logo = () => {
  return (
    <motion.div
      className="relative inline-block"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <Image
          src="/mw-logo.png"
          alt="MW Logo"
          width={240}
          height={144}
          className="w-40 sm:w-48 md:w-56 h-auto"
          style={{
            filter: "drop-shadow(0 3px 0px rgba(0, 0, 0, 0.9)) drop-shadow(0 8px 15px rgba(0, 0, 0, 0.5))",
          }}
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default MW2019Logo;