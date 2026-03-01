import { ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "../data/content";
import Reveal from "./Reveal";

const ProjectsSection = () => {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const others = projects.filter((p) => p.title !== featured.title);

  return (
    <section id="projects" className="section-block scroll-mt-24">
      <Reveal from="left">
        <p className="section-label">Projects</p>
      </Reveal>

      <Reveal from="left" delay={0.06}>
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
          <p className="mono mt-1 text-xs text-[var(--text-secondary)]">
            {featured.stack}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text)]">
            {featured.description}
          </p>

          <a
            href={featured.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link project-link-featured mt-4"
          >
            Launch {featured.title}
            <ArrowRight className="h-4 w-4" />
          </a>
        </article>
      </Reveal>

      <div className="project-grid mt-3">
        {others.map((project, i) => (
          <Reveal key={project.title} from="right" delay={0.06 + 0.05 * i}>
            <article className="card project-card">
              <h3 className="text-lg font-bold text-[var(--text-heading)]">
                {project.title}
              </h3>
              <p className="mono mt-1 text-xs text-[var(--text-secondary)]">
                {project.stack}
              </p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text)]">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link mt-3"
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
