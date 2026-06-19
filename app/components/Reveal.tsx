"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: Direction;
  distance?: number;
};

const Reveal = ({
  children,
  className,
  delay = 0,
}: RevealProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.28,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
