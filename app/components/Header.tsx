"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, FileText } from "lucide-react";
import { personalInfo, projects } from "../data/content";
import { getImagePath } from "../utils/imagePath";
import Reveal from "./Reveal";

const quickWins = [
  "Full Stack Co-op @ Government of Ontario",
  "REAI deployed on Cloud Run",
  "Embedded + FPGA systems built and validated",
];

const orbitTags = [
  { label: "Embedded", className: "one" },
  { label: "Cloud", className: "two" },
  { label: "C++", className: "three" },
  { label: "TypeScript", className: "four" },
];

const Header = () => {
  const reduceMotion = useReducedMotion();
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const resumePath = getImagePath("Jake_s_Resume.pdf");
  const topContacts = personalInfo.contacts.filter((contact) => contact.label === "Email" || contact.label === "GitHub");

  return (
    <section id="home" className="section-block section-theme theme-hero !mt-0 scroll-mt-28">
      <article className="panel big-card overflow-hidden">
        <div className="edge-line" />

        <div className="hero-grid px-4 py-5 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
          <div className="space-y-5">
            <Reveal className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#bdd4f8]" delay={0.04}>
              <p className="mono tracking-[0.13em]">{personalInfo.name}</p>
              <p className="mono tracking-[0.11em]">{personalInfo.location}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="hero-title">
                <span className="hero-title-old">{personalInfo.role}</span>
                <span className="hero-title-modern">Ships Real Systems</span>
              </h1>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                {personalInfo.summary}
              </p>
            </Reveal>

            <Reveal className="flex flex-wrap gap-2" delay={0.14}>
              <a
                href={featuredProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(102,211,255,0.44)] bg-[rgba(102,211,255,0.12)] px-4 py-2 text-sm text-[#d9f1ff] transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_0_20px_rgba(102,211,255,0.24)]"
              >
                Launch REAI
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </a>
              <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(130,91,255,0.42)] bg-[rgba(130,91,255,0.12)] px-4 py-2 text-sm text-[#dfd2ff] transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_0_20px_rgba(130,91,255,0.22)]"
              >
                <FileText className="h-3.5 w-3.5" aria-hidden />
                Resume
              </a>
            </Reveal>

            <Reveal className="meat-strip" delay={0.2}>
              {quickWins.map((item) => (
                <p key={item} className="meat-item">
                  {item}
                </p>
              ))}
            </Reveal>

            <Reveal className="flex flex-wrap gap-3 pt-1" delay={0.24}>
              {topContacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mono text-xs tracking-[0.08em] text-[#b7d4f6] transition-colors hover:text-white"
                >
                  {contact.label}: {contact.value}
                </a>
              ))}
            </Reveal>
          </div>

          <Reveal className="portrait-stage" delay={0.15}>
            <motion.div
              className="portrait-core"
              whileHover={reduceMotion ? undefined : { y: -3, rotate: -0.3 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
            >
              <Image
                src={getImagePath("profile.jpg")}
                alt={personalInfo.name}
                fill
                priority
                className="object-cover object-[50%_15%]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[rgba(3,6,14,0.92)] to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-full border border-[rgba(244,190,107,0.36)] bg-[rgba(22,14,5,0.54)] px-2.5 py-1 text-[0.65rem] text-[#f0ddbe]">
                Portrait Module
              </div>
            </motion.div>

            <div className="portrait-ring" />

            {orbitTags.map((tag, index) => (
              <motion.span
                key={tag.label}
                className={`float-chip ${tag.className}`}
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.22 + index * 0.07, ease: "easeOut" }}
              >
                {tag.label}
              </motion.span>
            ))}
          </Reveal>
        </div>
      </article>
    </section>
  );
};

export default Header;
