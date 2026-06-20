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
  from = "up",
  distance = 18,
}: RevealProps) => {
  const reduceMotion = useReducedMotion();
  const axis = from === "up" ? "y" : "x";
  const offset = from === "right" ? distance : -distance;

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? { opacity: 1 }
          : { opacity: 0, [axis]: from === "up" ? distance : offset }
      }
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -8% 0px" }}
      transition={{
        duration: 0.46,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
