import { skills } from "../data/content";
import Reveal from "./Reveal";

const categories = [
  { title: "Languages", items: skills.languages, color: "blue" as const },
  { title: "Frameworks", items: skills.frameworks, color: "green" as const },
  { title: "Testing", items: skills.testing, color: "orange" as const },
  { title: "Platforms", items: skills.platforms, color: "purple" as const },
];

const colorMap = {
  blue: "skill-tag-blue",
  green: "skill-tag-green",
  orange: "skill-tag-orange",
  purple: "skill-tag-purple",
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-block scroll-mt-24">
      <Reveal from="left">
        <p className="section-label">Skills</p>
      </Reveal>

      <div className="space-y-6">
        {categories.map((cat, i) => (
          <Reveal
            key={cat.title}
            from={i % 2 === 0 ? "right" : "left"}
            delay={0.06 * i}
          >
            <div>
              <h3 className="mb-3 text-sm font-semibold text-[var(--text-secondary)]">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className={`skill-tag ${colorMap[cat.color]}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
