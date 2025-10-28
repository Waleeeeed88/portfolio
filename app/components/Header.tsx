"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "../data/content";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between mb-16 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center sm:text-left flex-1"
      >
        <motion.h1
          className="text-5xl font-light tracking-wider text-accent-cyan"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            textShadow: "0 0 30px rgba(0, 229, 255, 0.8), 0 0 60px rgba(0, 229, 255, 0.4)",
          }}
        >
          {personalInfo.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-4 text-lg text-electric-blue font-light tracking-wide"
        >
          {personalInfo.title}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 flex flex-wrap justify-center sm:justify-start gap-4 text-sm font-light"
        >
          {personalInfo.contact.map((link, index) => (
            <motion.a
              key={link.text}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-secondary-text hover:text-electric-blue transition-colors px-3 py-1.5 rounded-lg border border-border-color hover:border-electric-blue/50 bg-black/20"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.text}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
        className="relative"
      >
        <motion.div
          className="w-48 h-64 rounded-2xl bg-gradient-to-br from-accent-cyan via-electric-blue to-accent-magenta p-0.5 shadow-2xl"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 40px rgba(0, 229, 255, 0.6), 0 0 80px rgba(0, 229, 255, 0.3)",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-full rounded-2xl bg-dark-bg overflow-hidden relative">
            <Image src="/profile.jpg" alt={personalInfo.name} fill className="object-cover" priority />
          </div>
        </motion.div>

        <motion.div
          className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-accent-cyan rounded-tl-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        />
        <motion.div
          className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-electric-blue rounded-br-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        />

        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-electric-blue rounded-full"
            style={{
              top: `${10 + i * 25}%`,
              left: i % 2 === 0 ? "-8px" : "auto",
              right: i % 2 === 1 ? "-8px" : "auto",
            }}
            animate={{
              y: [-8, 8, -8],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>
    </header>
  );
};

export default Header;