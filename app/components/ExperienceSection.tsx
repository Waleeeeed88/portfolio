"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { experiences } from "../data/content";

const ExperienceSection = () => {
  return (
    <AnimatedSection>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="text-3xl font-light tracking-wider mb-6 text-electric-blue uppercase"
          style={{
            textShadow: "0 0 20px rgba(0, 217, 255, 0.8), 0 0 40px rgba(0, 217, 255, 0.4)",
          }}
        >
          Experience
        </h2>
      </motion.div>
      <div className="space-y-8">
        {experiences.map((job, jobIndex) => (
          <motion.div
            key={job.title}
            className="p-6 rounded-xl border border-accent-cyan/30 bg-black/20 backdrop-blur-sm hover:border-accent-cyan/60 transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 229, 255, 0.3)" }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: jobIndex * 0.2 }}
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.1), transparent)",
              }}
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <h3 className="text-xl font-normal text-accent-cyan relative z-10 tracking-wide">
              {job.title}
            </h3>
            <p className="text-secondary-text mt-2 relative z-10 font-light text-sm">
              {job.company} | {job.location} | {job.period}
            </p>
            <ul className="mt-4 space-y-3 text-primary-text relative z-10">
              {job.points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 font-light text-sm"
                >
                  <motion.span
                    className="text-electric-blue text-base mt-1"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    ▹
                  </motion.span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default ExperienceSection;