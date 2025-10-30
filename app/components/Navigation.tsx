"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("header");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "header", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-bg/95 backdrop-blur-md border-b border-electric-green/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-2.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("header")}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span
              className="text-xl font-black tracking-tighter"
              style={{
                color: "#3a3a3a",
                textShadow: "0 0 10px rgba(0, 0, 0, 0.5), 0 2px 5px rgba(0, 0, 0, 0.5)",
                fontFamily: "'Arial Black', sans-serif",
              }}
            >
              MW
            </span>
          </motion.button>

          {/* Desktop Navigation - Moved to Right */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className={`relative px-4 py-2 rounded-md font-light text-sm transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-electric-green"
                    : "text-secondary-text"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #00e5ff 0%, #00ff41 100%)",
                      boxShadow: "0 0 10px rgba(0, 229, 255, 0.8), 0 0 20px rgba(0, 255, 65, 0.6)",
                    }}
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 rounded-md -z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ 
                    opacity: 1,
                    background: "linear-gradient(135deg, rgba(0, 229, 255, 0.1) 0%, rgba(0, 255, 65, 0.1) 100%)",
                    boxShadow: "0 0 20px rgba(0, 229, 255, 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-electric-green p-1.5"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 pb-3 space-y-1"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`w-full px-3 py-2 rounded-md font-light text-sm transition-all text-left relative overflow-hidden ${
                  activeSection === item.id
                    ? "text-electric-green"
                    : "text-secondary-text"
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {/* Mobile active/hover background */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute inset-0 rounded-md"
                    style={{
                      background: "linear-gradient(90deg, rgba(0, 229, 255, 0.15) 0%, rgba(0, 255, 65, 0.15) 100%)",
                      borderLeft: "2px solid #00ff41",
                    }}
                    layoutId="mobileActive"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>

      {/* Bottom border animation with gradient */}
      {isScrolled && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px]"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(0, 229, 255, 0.5) 20%, rgba(0, 255, 65, 0.5) 80%, transparent 100%)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.nav>
  );
};

export default Navigation;