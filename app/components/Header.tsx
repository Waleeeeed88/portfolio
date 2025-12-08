"use client";

import { motion } from "framer-motion";
import { personalInfo, education } from "../data/content";
import { getImagePath } from "../utils/imagePath";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    // Changed justify-between to justify-start to push the right box left
    // Increased gap to lg:gap-24 to maintain some separation but keep it closer than before
    <header className="flex flex-col lg:flex-row items-center justify-start gap-10 lg:gap-24 w-full relative z-10">
      
      {/* Left Side: Profile Info */}
      <div className="flex flex-col items-center lg:items-start flex-shrink-0">
        {/* Profile Picture - Expanded Size */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="relative mb-6"
        >
          {/* Increased size to show entire face better */}
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            <motion.div
              className="absolute -inset-3 rounded-full border border-electric-blue/40 border-dashed"
              style={{ willChange: "transform" }} // Performance Hint
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-1 rounded-full border border-electric-blue/20"
              style={{ willChange: "transform" }} // Performance Hint
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <div 
              className="w-full h-full rounded-full overflow-hidden border-2 border-electric-blue bg-black/50 relative z-10"
              style={{
                boxShadow: "0 0 40px rgba(0, 217, 255, 0.4), inset 0 0 20px rgba(0, 217, 255, 0.2)",
                willChange: "transform" // Performance Hint
              }}
            >
              <img
                src={getImagePath("profile.jpg")}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-[50%_15%]"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.src = getImagePath("mw-logo.png");
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" as const }}
          className="text-center lg:text-left"
        >
          <h1
            className="text-4xl sm:text-5xl font-light tracking-wide mb-1"
            style={{
              background: "linear-gradient(90deg, #00d9ff 0%, #00ffff 50%, #0066ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {personalInfo.name}
          </h1>

          <p className="text-xl text-electric-blue font-light mb-3">
            Engineer
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm mb-5">
            {personalInfo.contact.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-accent-cyan hover:text-electric-blue transition-colors hover:scale-105 transform duration-200"
              >
                {item.text}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
            <button onClick={() => scrollToSection("experience")} className="text-electric-blue hover:text-neon-blue transition-colors underline decoration-electric-blue/50 hover:decoration-electric-blue">
              Experience
            </button>
            <span className="text-accent-cyan/50">•</span>
            <button onClick={() => scrollToSection("projects")} className="text-electric-blue hover:text-neon-blue transition-colors underline decoration-electric-blue/50 hover:decoration-electric-blue">
              Projects
            </button>
            <span className="text-accent-cyan/50">•</span>
            <button onClick={() => scrollToSection("skills")} className="text-electric-blue hover:text-neon-blue transition-colors underline decoration-electric-blue/50 hover:decoration-electric-blue">
              Skills
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right Side: Education Card - Stronger Hover Effect */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="w-full lg:w-[500px] flex-shrink-0 mt-8 lg:mt-0"
      >
        <div 
          className="p-6 rounded-xl border border-electric-blue/30 bg-black/20 backdrop-blur-sm 
                     hover:border-electric-blue hover:shadow-[0_0_60px_rgba(0,217,255,0.5)] hover:bg-electric-blue/5 hover:-translate-y-1 
                     transition-all duration-300 cursor-default"
          style={{
            boxShadow: "0 0 20px rgba(0, 217, 255, 0.15), inset 0 0 20px rgba(0, 217, 255, 0.05)",
            willChange: "transform, box-shadow" // Performance Hint
          }}
        >
          <div className="flex flex-col gap-5">
            <div 
              className="h-24 px-6 flex items-center justify-center rounded bg-white w-full"
              style={{
                boxShadow: "0 0 15px rgba(0, 217, 255, 0.2)"
              }}
            >
              <img
                src={getImagePath("lassonde.png")}
                alt="Lassonde School of Engineering"
                className="h-full w-auto object-contain"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerText = "York U | Lassonde";
                }}
              />
            </div>
            <div className="text-center lg:text-left space-y-1">
              <h3 className="text-xl font-normal text-electric-blue">{education.degree}</h3>
              <p className="text-base text-secondary-text">{education.institution}</p>
              
              <div className="flex justify-between items-center mt-3 border-t border-electric-blue/20 pt-3 mb-2">
                <p className="text-sm text-accent-cyan">GPA: {education.gpa}</p>
                <span className="text-sm text-accent-cyan">{education.period}</span>
              </div>

              {/* Added Courses Section */}
              <div className="pt-2">
                <p className="text-sm text-electric-blue mb-2 font-medium">Relevant Courses:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1.5 text-sm text-primary-text font-light text-left">
                  {education.courses.map((course, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-electric-blue mt-1 flex-shrink-0 text-xs">▹</span>
                      <span className="leading-relaxed text-xs sm:text-sm">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;