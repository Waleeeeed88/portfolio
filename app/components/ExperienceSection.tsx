import Image from "next/image";
import { experiences } from "../data/content";
import { getImagePath } from "../utils/imagePath";
import Reveal from "./Reveal";

const logos: Record<string, { src: string; alt: string }> = {
  "Government of Ontario": { src: "ongov.png", alt: "Government of Ontario" },
  "Canadian Imperial Bank of Commerce": { src: "cibc.png", alt: "CIBC" },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-block section-theme theme-ledger scroll-mt-28">
      <Reveal>
        <header>
          <p className="section-kicker future">Past Experience</p>
          <h2 className="section-title">Real teams. Real outcomes.</h2>
          <p className="section-copy">Only the strongest impact points shown below.</p>
        </header>
      </Reveal>

      <div className="timeline mt-6 space-y-4">
        {experiences.map((experience, index) => {
          const logo = logos[experience.company];

          return (
            <Reveal key={`${experience.company}-${experience.period}`} delay={0.06 * index}>
              <article className="panel panel-hover ledger-card timeline-item p-4 sm:p-5">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <p className="entry-stamp mono">Entry {(index + 1).toString().padStart(2, "0")}</p>
                    <h3 className="heritage text-2xl font-semibold text-white">{experience.title}</h3>
                    <p className="mt-1 text-sm text-[#95c7f5]">{experience.company}</p>
                    <p className="mono mt-1 text-xs text-[var(--muted)]">
                      {experience.location} | {experience.period}
                    </p>
                  </div>

                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-[rgba(102,211,255,0.3)] bg-[rgba(8,18,37,0.85)] p-1.5">
                    {logo ? (
                      <Image
                        src={getImagePath(logo.src)}
                        alt={logo.alt}
                        width={44}
                        height={44}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <span className="mono text-[0.65rem] text-[#d4e9ff]">{experience.company.slice(0, 2)}</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-2 text-sm leading-relaxed text-[var(--muted)]">
                  {experience.points.slice(0, 3).map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#66d3ff]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
