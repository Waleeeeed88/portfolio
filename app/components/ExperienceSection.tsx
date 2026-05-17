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

      <div className="exp-list">
        {experiences.map((exp, i) => (
          <Reveal
            key={`${exp.company}-${exp.period}`}
            from={i % 2 === 0 ? "left" : "right"}
            delay={0.06 * i}
          >
            <article className="card exp-card">
              <div className="exp-card-top">
                <div className="exp-header">
                  {logoMap[exp.company] && (
                    <Image
                      src={getImagePath(logoMap[exp.company])}
                      alt={exp.company}
                      width={28}
                      height={28}
                      className="exp-icon"
                    />
                  )}
                  <div>
                    <h3 className="exp-title">{exp.title}</h3>
                    <p className="exp-company">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                </div>
                <span className="exp-period mono">{exp.period}</span>
              </div>

              <ul className="exp-bullets">
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="exp-tools">
                {exp.tools.map((tool) => (
                  <span key={tool} className="exp-tool mono">
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
