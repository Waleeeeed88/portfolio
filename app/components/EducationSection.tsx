"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { education } from "../data/content";

const EducationSection = () => {
  return (
    <AnimatedSection>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="text-3xl font-light tracking-wider mb-6 text-accent-magenta uppercase"
          style={{
            textShadow: "0 0 20px rgba(240, 0, 255, 0.8), 0 0 40px rgba(240, 0, 255, 0.4)",
          }}
        >
          Education
        </h2>
      </motion.div>
      <motion.div
        className="p-6 rounded-xl border border-accent-purple/30 bg-black/20 backdrop-blur-sm hover:border-accent-purple/60 transition-all duration-300 relative overflow-hidden"
        whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(112, 0, 255, 0.3)" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "linear-gradient(90deg, rgba(240, 0, 255, 0.1), rgba(112, 0, 255, 0.1))",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <h3 className="text-xl font-normal text-electric-blue relative z-10 tracking-wide">
          {education.institution}
        </h3>
        <p className="text-secondary-text mt-2 relative z-10 font-light">
          {education.location} | {education.period}
        </p>
        <p className="mt-3 text-base font-light text-primary-text relative z-10">
          {education.degree} <span className="text-accent-cyan">GPA: {education.gpa}</span>
        </p>
        <motion.div
          className="mt-4 p-4 bg-black/30 rounded-lg border border-border-color relative z-10"
          whileHover={{ borderColor: "rgba(0, 229, 255, 0.3)" }}
        >
          <span className="font-normal text-accent-magenta tracking-wide">Relevant Courses</span>
          <p className="mt-2 text-primary-text leading-relaxed font-light text-sm">
            {education.courses.join(" • ")}
          </p>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
};

export default EducationSection;