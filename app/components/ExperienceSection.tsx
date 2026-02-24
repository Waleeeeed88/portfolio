import Image from "next/image";
import { experiences } from "../data/content";
import { getImagePath } from "../utils/imagePath";
import Reveal from "./Reveal";

const logoMap: Record<string, string> = {
  "Government of Ontario": "ongov.png",
  "Canadian Imperial Bank of Commerce": "cibc.png",
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-block scroll-mt-24">
      <Reveal from="left">
        <p className="section-label">Experience</p>
      </Reveal>

      <div className="timeline mt-2">
        {experiences.map((exp, i) => (
          <Reveal
            key={`${exp.company}-${exp.period}`}
            from={i % 2 === 0 ? "left" : "right"}
            delay={0.1 * i}
          >
            <div className="timeline-item">
              <div
                className={`timeline-dot ${i === 0 ? "timeline-dot-active" : ""}`}
              />
              <article className="card">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-heading)]">
                      {exp.title}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-[var(--accent)]">
                      {exp.company} &middot; {exp.location}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <p className="mono shrink-0 whitespace-nowrap text-xs text-[var(--text-secondary)]">
                      {exp.period}
                    </p>
                    {logoMap[exp.company] && (
                      <Image
                        src={getImagePath(logoMap[exp.company])}
                        alt={exp.company}
                        width={80}
                        height={32}
                        className="exp-logo"
                      />
                    )}
                  </div>
                </div>

                <ul className="space-y-1.5">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm text-[var(--text)]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
