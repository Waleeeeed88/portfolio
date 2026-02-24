"use client";

import Image from "next/image";
import { personalInfo } from "../data/content";
import { getImagePath } from "../utils/imagePath";
import Reveal from "./Reveal";

const Header = () => {
  const jumpToContact = () => {
    const el = document.getElementById("contact");
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section id="home" className="scroll-mt-24">
      <div className="hero-grid">
        <div>
          <Reveal from="left">
            <p className="hero-greeting">Hi, I&apos;m Walid.</p>
          </Reveal>

          <Reveal from="left" delay={0.1}>
            <h1 className="hero-heading">
              <span className="accent">Software Engineer</span> focused on
              agentic systems, AI model interactions, and cloud infrastructure.
            </h1>
          </Reveal>

          <Reveal from="left" delay={0.15}>
            <div className="hero-edu">
              <Image
                src={getImagePath("lassonde.png")}
                alt="York University – Lassonde School of Engineering"
                width={28}
                height={28}
                className="h-5 w-auto object-contain"
              />
              <span>BEng Software Engineering · York University</span>
            </div>
          </Reveal>

          <Reveal from="left" delay={0.22}>
            <button
              type="button"
              onClick={jumpToContact}
              className="hero-cta"
            >
              Hire Me
              <span className="hero-cta-avatar">
                <Image
                  src={getImagePath("profile.jpg")}
                  alt=""
                  width={32}
                  height={32}
                  className="h-full w-full object-cover object-[50%_15%]"
                />
              </span>
            </button>
          </Reveal>
        </div>

        <Reveal className="hero-photo-wrap" from="right" delay={0.15}>
          <div className="hero-shape hero-shape-1" aria-hidden />
          <div className="hero-shape hero-shape-2" aria-hidden />
          <div className="hero-photo">
            <Image
              src={getImagePath("profile.jpg")}
              alt={personalInfo.name}
              fill
              priority
              className="object-cover object-[50%_15%]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Header;
