"use client";

import Image from "next/image";
import { personalInfo } from "../data/content";
import { getImagePath } from "../utils/imagePath";
import Reveal from "./Reveal";

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQED/8QAHhAAAQQBBQAAAAAAAAAAAAAAAQACAzEhBBESMoH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwCO1DBMQSdqvC38RsnYhIwx8oWEnJaDSpX/2Q==";

const focusTags = [
  "Multi-agent simulations",
  "AI context graphs",
  "Knowledge bases",
  "Java Spring Boot",
  "Docker",
  "Linux containers",
  "Python",
];

const Header = () => {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="hero-grid">
        <div>
          <Reveal from="left">
            <p className="hero-greeting">Hey, I am Walid.</p>
          </Reveal>

          <Reveal from="left" delay={0.06}>
            <h1 className="hero-heading">
              A 4th-year Software Engineering student at{" "}
              <span className="accent">York</span>.
            </h1>
            <p className="hero-specialize">I specialize in the following:</p>
          </Reveal>

          <Reveal from="left" delay={0.1}>
            <div className="hero-focus-row">
              {focusTags.map((tag) => (
                <span
                  key={tag}
                  className="hero-focus-tag"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal from="left" delay={0.14}>
            <div className="hero-edu">
              <Image
                src={getImagePath("lassonde.png")}
                alt="York University – Lassonde School of Engineering"
                width={28}
                height={28}
                className="h-5 w-auto object-contain"
              />
              <span>B.Eng Software Engineering · York University</span>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero-photo-wrap" from="right" delay={0.08}>
          <div className="hero-shape hero-shape-1" aria-hidden />
          <div className="hero-shape hero-shape-2" aria-hidden />
          <div className="hero-photo">
            <Image
              src={getImagePath("profile.jpg")}
              alt={personalInfo.name}
              fill
              priority
              sizes="(max-width: 768px) 260px, 360px"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="object-cover object-[50%_15%]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Header;
