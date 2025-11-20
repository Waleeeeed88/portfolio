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

      // Get all sections
      const sections = navItems
        .map((item) => {
          const element = document.getElementById(item.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            return {
              id: item.id,
              top: rect.top,
              bottom: rect.bottom,
              offsetTop: element.offsetTop,
            };
          }
          return null;
        })
        .filter(Boolean);

      // Find active section based on viewport center
      const viewportCenter = window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (
          section &&
          section.top <= viewportCenter &&
          section.bottom >= viewportCenter
        ) {
          setActiveSection(section.id);
          break;
        }
      }

      // Fallback: if at bottom of page, set to last section
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        setActiveSection(sections[sections.length - 1]?.id || "skills");
      }
    };

    handleScroll(); // Run on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Increased offset for better positioning
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-dark-bg/80 backdrop-blur-md shadow-[0_4px_20px_rgba(0,217,255,0.1)]"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection("header")}
              className="text-2xl font-bold tracking-wider"
              style={{
                background: "linear-gradient(90deg, #00d9ff 0%, #00ffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              MW
            </motion.button>

            {/* Desktop Nav Items */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-light tracking-wide rounded-lg transition-all duration-300 ${activeSection === item.id
                      ? "text-electric-blue"
                      : "text-secondary-text hover:text-neon-blue"
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(0, 217, 255, 0.15) 0%, rgba(0, 255, 255, 0.15) 100%)",
                        border: "1px solid rgba(0, 217, 255, 0.3)",
                      }}
                      layoutId="activeNav"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-electric-blue"
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-bg/95 backdrop-blur-md border-t border-electric-blue/20"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative w-full text-left px-4 py-3 rounded-lg text-base font-light transition-all duration-300 ${activeSection === item.id
                      ? "text-electric-blue"
                      : "text-secondary-text"
                    }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(0, 217, 255, 0.15) 0%, rgba(0, 255, 255, 0.15) 100%)",
                        borderLeft: "2px solid #00d9ff",
                      }}
                      layoutId="mobileActive"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Bottom border animation with gradient */}
        {isScrolled && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[1px]"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(0, 217, 255, 0.5) 20%, rgba(0, 255, 255, 0.5) 80%, transparent 100%)",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </motion.nav>
    </>
  );
};

export default Navigation;