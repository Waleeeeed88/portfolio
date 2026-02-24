import { personalInfo } from "../data/content";
import { getImagePath } from "../utils/imagePath";
import Reveal from "./Reveal";

const Footer = () => {
  const resumePath = getImagePath("Jake_s_Resume.pdf");

  return (
    <footer id="contact" className="section-block scroll-mt-24 pb-8">
      <Reveal from="left">
        <p className="section-label">Contact</p>
      </Reveal>

      <Reveal delay={0.06}>
        <h2 className="mb-6 text-2xl font-bold text-[var(--text-heading)] sm:text-3xl">
          Let&apos;s build something together.
        </h2>
      </Reveal>

      <Reveal from="right" delay={0.12}>
        <div className="card">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {personalInfo.contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={
                  contact.href.startsWith("http") ? "_blank" : undefined
                }
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group rounded-lg border border-[var(--border)] px-4 py-3 transition-all duration-200 hover:border-[var(--accent)] hover:-translate-y-1"
              >
                <span className="text-xs font-medium text-[var(--text-secondary)] transition-colors group-hover:text-[var(--accent)]">
                  {contact.label}
                </span>
                <p className="mono mt-1 text-sm text-[var(--text-heading)]">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="mono text-xs text-[var(--text-secondary)]">
              Built with Next.js &middot; TypeScript &middot; Tailwind
            </p>
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Resume
            </a>
          </div>
        </div>
      </Reveal>
    </footer>
  );
};

export default Footer;
