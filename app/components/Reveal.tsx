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

const getInitial = (from: Direction, distance: number) => {
  switch (from) {
    case "left":
      return { opacity: 0, x: -distance, y: 0 };
    case "right":
      return { opacity: 0, x: distance, y: 0 };
    case "up":
    default:
      return { opacity: 0, x: 0, y: distance };
  }
};

const Reveal = ({
  children,
  className,
  delay = 0,
  from = "up",
  distance = 50,
}: RevealProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 1 } : getInitial(from, distance)}
      whileInView={
        reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }
      }
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.72,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
