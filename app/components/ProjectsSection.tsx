import { ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "../data/content";
import Reveal from "./Reveal";

const ProjectsSection = () => {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const highlight = projects.find((p) => p.highlight);
  const others = projects.filter(
    (p) => p.title !== featured.title && !p.highlight
  );

  return (
    <section id="projects" className="section-block scroll-mt-24">
      <Reveal from="left">
        <p className="section-label">Projects</p>
      </Reveal>

      <Reveal from="left" delay={0.08}>
        <article className="card card-featured">
          <div className="featured-bar" />

          <div className="flex flex-wrap items-center gap-3">
            <span className="mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
              Featured
            </span>
            <span className="live-badge mono text-xs font-medium text-[var(--green)]">
              <span className="live-dot" />
              Live
            </span>
          </div>

          <h3 className="mt-3 text-2xl font-bold text-[var(--text-heading)]">
            {featured.title}
          </h3>
          <p className="mono mt-2 text-sm text-[var(--green)]">
            {featured.stack}
          </p>

          <ul className="mt-4 space-y-2">
            {featured.points.map((point) => (
              <li
                key={point}
                className="flex gap-2 text-sm text-[var(--text)]"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <a
            href={featured.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link project-link-featured mt-4"
          >
            Launch REAI
            <ArrowRight className="h-4 w-4" />
          </a>
        </article>
      </Reveal>

      <div className="projects-bento mt-3">
        {highlight && (
          <Reveal from="left" delay={0.1} className="bento-highlight">
            <article className="card card-highlight flex h-full flex-col py-4 px-5">
              <div className="highlight-bar" />

              <span className="mono text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--green)]">
                Highlight
              </span>

              <h3 className="mt-1.5 text-lg font-bold text-[var(--text-heading)]">
                {highlight.title}
              </h3>
              <p className="mono mt-1 text-xs text-[var(--accent)]">
                {highlight.stack}
              </p>

              <ul className="mt-2.5 flex-1 space-y-1">
                {highlight.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-[0.82rem] text-[var(--text)]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--green)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <a
                href={highlight.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link mt-3"
              >
                View CLAI
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </article>
          </Reveal>
        )}

        {others.map((project, i) => (
          <Reveal
            key={project.title}
            from="right"
            delay={0.14 + 0.08 * i}
            className="bento-small"
          >
            <article className="card flex h-full flex-col">
              <h3 className="text-lg font-bold text-[var(--text-heading)]">
                {project.title}
              </h3>
              <p className="mono mt-1.5 text-xs text-[var(--accent)]">
                {project.stack}
              </p>

              <ul className="mt-3 flex-1 space-y-1.5">
                {project.points.slice(0, 2).map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm text-[var(--text)]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link mt-4"
              >
                View Project
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
