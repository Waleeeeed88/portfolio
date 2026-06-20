"use client";

import Image from "next/image";
import { personalInfo } from "../data/content";
import { getImagePath } from "../utils/imagePath";
import Reveal from "./Reveal";

const focusTags = [
  "Agent workflows",
  "Machine learning",
  "Product UX",
  "Linux systems",
];

const Header = () => {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="hero-grid">
        <div>
          <Reveal from="left">
            <h1 className="hero-heading">
              <span>Hi, I&apos;m Walid.</span>
              <span>
                I am a software engineering student at{" "}
                <span className="accent">York University</span> in Toronto.
              </span>
            </h1>
          </Reveal>

          <Reveal from="left" delay={0.06}>
            <p className="hero-specialize">My areas of interest are</p>
          </Reveal>

          <Reveal from="left" delay={0.1}>
            <div className="hero-focus-row">
              {focusTags.map((tag) => (
                <span key={tag} className="hero-focus-tag">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal from="left" delay={0.14}>
            <div className="hero-edu">
              <Image
                src={getImagePath("lassonde.png")}
                alt="York University - Lassonde School of Engineering"
                width={28}
                height={28}
                className="h-5 w-auto object-contain"
              />
              <span>B.Eng Software Engineering - York University</span>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero-photo-wrap" from="right" delay={0.08}>
          <div className="hero-photo">
            <Image
              src={getImagePath("profile.jpg")}
              alt={personalInfo.name}
              fill
              priority
              sizes="(max-width: 768px) 260px, 360px"
              className="object-cover object-[50%_15%]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Header;
