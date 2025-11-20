"use client";

import { motion, Variants } from "framer-motion";
import { personalInfo, education } from "../data/content";
import MW2019Logo from "./MW2019Logo";
import { getImagePath } from "../utils/imagePath";

const Header = () => {
  const interests = [
    { label: "Coding", colorClass: "text-electric-blue border-electric-blue/30 hover:border-electric-blue/60 hover:shadow-[0_0_15px_rgba(0,217,255,0.3)]" },
    { label: "Gaming", colorClass: "text-neon-blue border-neon-blue/30 hover:border-neon-blue/60 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]" },
    { label: "Football", colorClass: "text-accent-cyan border-accent-cyan/30 hover:border-accent-cyan/60 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]" },
    { label: "Technology", colorClass: "text-accent-purple border-accent-purple/30 hover:border-accent-purple/60 hover:shadow-[0_0_15px_rgba(112,0,255,0.3)]" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Wrap the single education object in an array to map over it
  const educationList = [education];

  return (
    <header className="flex flex-col gap-8 w-full relative z-10">
      {/* Main Header Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="text-center lg:text-left flex-1"
        >
          <div className="mb-4 flex justify-center lg:justify-start">
            <MW2019Logo />
          </div>

          <motion.h2
            className="text-4xl sm:text-5xl font-light tracking-wide mb-2"
            style={{
              background: "linear-gradient(90deg, #00d9ff 0%, #00ffff 50%, #0066ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {personalInfo.name}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl sm:text-2xl text-electric-blue font-light mb-4 max-w-md"
          >
            Software Developer & Engineer
          </motion.p>

          {/* Interests & Hobbies */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-4"
          >
            <p className="text-base text-electric-blue mb-2 font-light">Interests & Hobbies:</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.label}
                  variants={itemVariants}
                  className={`px-4 py-2 bg-electric-blue/10 border rounded-md text-base font-light transition-all duration-300 cursor-default ${interest.colorClass}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  style={{
                    background: "linear-gradient(135deg, rgba(0, 217, 255, 0.08), rgba(0, 255, 255, 0.08))"
                  }}
                >
                  {interest.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 text-base mb-4"
          >
            <button onClick={() => scrollToSection("projects")} className="text-electric-blue hover:text-neon-blue transition-colors underline decoration-electric-blue/50 hover:decoration-neon-blue/50">
              Projects
            </button>
            <span className="text-accent-cyan">•</span>
            <button onClick={() => scrollToSection("skills")} className="text-electric-blue hover:text-neon-blue transition-colors underline decoration-electric-blue/50 hover:decoration-neon-blue/50">
              Skills
            </button>
            <span className="text-accent-cyan">•</span>
            <button onClick={() => scrollToSection("experience")} className="text-electric-blue hover:text-neon-blue transition-colors underline decoration-electric-blue/50 hover:decoration-neon-blue/50">
              Experience
            </button>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 text-base"
          >
            {personalInfo.contact.map((link, index) => (
              <motion.a
                key={`${link.text}-${index}`}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-accent-cyan hover:text-neon-blue transition-colors underline decoration-accent-cyan/50 hover:decoration-neon-blue/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {link.text}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            className="w-40 h-52 sm:w-48 sm:h-64 rounded-lg p-0.5"
            style={{
              background: "linear-gradient(135deg, rgba(0,217,255,0.4) 0%, rgba(0,255,255,0.4) 50%, rgba(0,102,255,0.4) 100%)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(0,217,255,0.6), 0 0 80px rgba(0,255,255,0.3)",
              transition: { duration: 0.3 }
            }}
          >
            <div className="w-full h-full rounded-lg overflow-hidden relative"
              style={{
                background: "linear-gradient(135deg, rgba(0,217,255,0.15), rgba(10,10,10,0.9))"
              }}
            >
              <img
                src={getImagePath("profile.jpg")}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Education Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.5 }} className="w-full">
        <h3 className="text-2xl font-light tracking-wide mb-3 text-electric-blue" style={{ textShadow: "0 0 20px rgba(0,217,255,0.5)" }}>
          Education
        </h3>
        <div className="space-y-3">
          {educationList.map((edu, index) => (
            <motion.div
              key={`${edu.degree}-${edu.institution}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="p-5 rounded-lg border border-electric-blue/20 backdrop-blur-sm hover:border-electric-blue/60 hover:shadow-[0_0_20px_rgba(0,217,255,0.2)] transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(0,217,255,0.08), rgba(0,255,255,0.05), rgba(10,10,10,0.4))"
              }}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-normal text-primary-text">{edu.degree}</h4>
                  <p className="text-base text-electric-blue font-light">{edu.institution}</p>
                </div>
                <span className="text-sm text-accent-cyan">{edu.period}</span>
              </div>
              {edu.gpa && <p className="text-base text-electric-blue font-light">GPA: {edu.gpa}</p>}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Header;