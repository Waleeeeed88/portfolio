"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getImagePath } from "../utils/imagePath";

type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const reduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-30% 0px -54% 0px",
        threshold: 0.1,
      },
    );

    for (const item of navItems) {
      const node = document.getElementById(item.id);
      if (node) observer.observe(node);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.title = "mw2019 go";
  }, []);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const root = document.documentElement;
      const top = window.scrollY;
      const max = root.scrollHeight - window.innerHeight;
      const percent = max > 0 ? (top / max) * 100 : 0;
      setScrollProgress(Number(percent.toFixed(2)));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const jumpToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    const y = target.getBoundingClientRect().top + window.scrollY - 86;

    window.scrollTo({
      top: y,
      behavior: reduceMotion ? "auto" : "smooth",
    });

    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2 pt-2 sm:px-4 sm:pt-3">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="panel overflow-hidden">
          <div className="edge-line" />

          <nav className="flex items-center justify-between px-3 py-2.5 sm:px-4" aria-label="Main navigation">
            <button
              type="button"
              onClick={() => jumpToSection("home")}
              className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-[rgba(244,190,107,0.32)] bg-[rgba(22,14,5,0.28)] transition-colors hover:border-[rgba(102,211,255,0.45)]"
              aria-label="Go to home"
            >
              <Image src={getImagePath("mw2019-alt.svg")} alt="MW2019 logo" width={24} height={24} className="h-6 w-6 object-contain" />
            </button>

            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => jumpToSection(item.id)}
                    className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                      isActive ? "text-white" : "text-[#9caecc] hover:text-[#d8ecff]"
                    }`}
                  >
                    {isActive ? <motion.span layoutId="nav-pill" className="pill absolute inset-0" transition={{ type: "spring", stiffness: 420, damping: 34 }} /> : null}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="rounded-lg border border-[rgba(102,211,255,0.32)] p-2 text-[#c5eeff] md:hidden"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isMenuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </svg>
            </button>
          </nav>

          <AnimatePresence initial={false}>
            {isMenuOpen ? (
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                animate={reduceMotion ? undefined : { opacity: 1, height: "auto" }}
                exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="space-y-1 overflow-hidden border-t border-[rgba(102,211,255,0.2)] px-3 pb-3 pt-2 md:hidden"
              >
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => jumpToSection(item.id)}
                      className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                        isActive
                          ? "bg-[rgba(102,211,255,0.14)] text-[#e6f4ff]"
                          : "text-[#9caecc] hover:bg-[rgba(102,211,255,0.07)] hover:text-[#e6f4ff]"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </motion.div>
            ) : null}
          </AnimatePresence>

          <motion.div
            className="h-[2px] bg-gradient-to-r from-[#65d5ff] via-[#7563ff] to-[#66d5ff]"
            animate={{ width: `${scrollProgress}%` }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.22, ease: "easeOut" }}
          />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
