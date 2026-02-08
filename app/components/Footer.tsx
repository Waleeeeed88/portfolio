import { personalInfo } from "../data/content";
import { getImagePath } from "../utils/imagePath";
import Reveal from "./Reveal";

const Footer = () => {
  return (
    <footer id="contact" className="section-block section-theme theme-signal scroll-mt-28">
      <Reveal>
        <article className="panel big-card p-5 sm:p-6">
          <div className="edge-line mb-4" />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-seal mono">Open Signal / Collaboration Channel</p>
              <p className="section-kicker future">Contact</p>
              <h2 className="section-title !mt-1">Something sparked in your mind?</h2>
              <p className="section-copy mt-2">
                I&apos;m always open to interesting engineering conversations, project collaboration, and new opportunities.
              </p>
            </div>

            <a
              href={getImagePath("Jake_s_Resume.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-[rgba(130,91,255,0.42)] bg-[rgba(130,91,255,0.1)] px-4 py-2 text-sm text-[#e1d6ff] transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
            >
              Open Resume
            </a>
          </div>

          <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {personalInfo.contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-lg border border-[rgba(102,211,255,0.24)] px-3 py-3 text-sm text-[#d4e9ff] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(102,211,255,0.44)] hover:text-white"
              >
                <span className="text-xs text-[var(--muted)]">{contact.label}</span>
                <p className="mono mt-1 text-xs">{contact.value}</p>
              </a>
            ))}
          </div>

          <p className="mono mt-5 text-[0.66rem] uppercase tracking-[0.16em] text-[var(--muted)]">
            Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
          </p>
        </article>
      </Reveal>
    </footer>
  );
};

export default Footer;
