import { ExternalLink, Rocket } from "lucide-react";
import { projects } from "../data/content";
import Reveal from "./Reveal";

const ProjectsSection = () => {
  const featured = projects.find((project) => project.featured) ?? projects[0];
  const others = projects.filter((project) => project.title !== featured.title);

  return (
    <section id="projects" className="section-block section-theme theme-lab scroll-mt-28">
      <Reveal>
        <header>
          <p className="section-kicker future">Featured Works</p>
          <h2 className="section-title">Projects that prove execution</h2>
          <p className="section-copy">Start here. This is the strongest work.</p>
        </header>
      </Reveal>

      <div className="project-grid mt-6">
        <Reveal delay={0.04}>
          <article className="panel panel-hover p-5 sm:p-6">
            <div className="edge-line mb-4" />
            <p className="mono text-[0.68rem] uppercase tracking-[0.14em] text-[#9fd6ff]">Flagship</p>
            <h3 className="heritage mt-2 text-3xl font-semibold text-white">{featured.title}</h3>
            <p className="mono mt-2 text-[0.72rem] leading-relaxed text-[#a7caef]">{featured.stack}</p>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {featured.points.slice(0, 3).map((point) => (
                <div key={point} className="rounded-xl border border-[rgba(102,211,255,0.24)] bg-[rgba(7,14,30,0.62)] px-3 py-2.5">
                  <p className="text-sm leading-relaxed text-[var(--muted)]">{point}</p>
                </div>
              ))}
            </div>

            <a
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-[rgba(102,211,255,0.45)] bg-[rgba(102,211,255,0.12)] px-4 py-2 text-sm text-[#ddf2ff] transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_0_20px_rgba(102,211,255,0.22)]"
            >
              <Rocket className="h-4 w-4" aria-hidden />
              Launch REAI
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="panel p-5 sm:p-6">
            <p className="section-kicker future">Embedded Lens</p>
            <h3 className="heritage mt-2 text-2xl font-semibold">Embedded focus</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              I build deterministic systems under real hardware constraints.
            </p>

            <div className="mt-4 space-y-2">
              <div className="rounded-lg border border-[rgba(130,91,255,0.3)] bg-[rgba(130,91,255,0.08)] px-3 py-2 text-sm text-[#d9ccff]">
                Home Security System: motion pipeline designed for low false alarms.
              </div>
              <div className="rounded-lg border border-[rgba(102,211,255,0.24)] bg-[rgba(102,211,255,0.08)] px-3 py-2 text-sm text-[#ccecff]">
                FPGA Parking Controller: finite-state logic verified before hardware deploy.
              </div>
            </div>
          </aside>
        </Reveal>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {others.map((project, index) => (
          <Reveal key={project.title} delay={0.04 * index}>
            <article className={`panel panel-hover p-4 sm:p-5 ${index === 0 ? "xl:col-span-2" : ""}`}>
              <h3 className="heritage text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mono mt-2 text-[0.7rem] leading-relaxed text-[#a7caef]">{project.stack}</p>

              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--muted)]">
                {project.points.slice(0, 2).map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#66d3ff]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[rgba(102,211,255,0.34)] px-3 py-1.5 text-xs text-[#d5ecff] transition-colors hover:text-white"
              >
                Open Project
                <ExternalLink className="h-3 w-3" aria-hidden />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
