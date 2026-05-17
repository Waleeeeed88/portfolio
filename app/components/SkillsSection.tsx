"use client";

import { skillGroups } from "../data/content";
import { motion, useReducedMotion } from "framer-motion";

const SkillsSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section-block scroll-mt-24">
      <motion.p
        className="section-label"
        initial={reduceMotion ? false : { opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        Skills
      </motion.p>

      <div className="skills-groups">
        {skillGroups.map((group, gi) => (
          <motion.article
            key={group.label}
            className="skills-group"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.55,
              delay: 0.06 * gi,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <header className="skills-group-head">
              <h3 className="skills-group-title">{group.label}</h3>
              <p className="skills-group-blurb">{group.blurb}</p>
            </header>
            <div className="skills-tile-grid">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="skill-tile-wrap"
                  tabIndex={0}
                >
                  <div className="skill-tile mono" title={item.use}>
                    {item.name}
                  </div>
                  <div className="skill-tile-pop" role="tooltip">
                    {item.use}
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
