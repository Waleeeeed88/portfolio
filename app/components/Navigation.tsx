"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { getImagePath } from "../utils/imagePath";

const Navigation = () => {
  const reduceMotion = useReducedMotion();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <>
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="nav-outer">
        <nav className="nav-pill" aria-label="Main navigation">
          <button
            type="button"
            onClick={() => jumpTo("home")}
            className="nav-name"
            aria-label="Walid home"
          >
            <Image
              src={getImagePath("mw-logo.png")}
              alt=""
              width={48}
              height={18}
              className="nav-logo"
              priority
            />
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
