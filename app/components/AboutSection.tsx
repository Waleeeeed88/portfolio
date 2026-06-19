import { about, personalInfo } from "../data/content";
import { getImagePath } from "../utils/imagePath";
import Reveal from "./Reveal";

const AboutSection = () => {
  const resumePath = getImagePath("fRESUME.pdf");

  return (
    <section id="about" className="about-section scroll-mt-24">
      <Reveal from="left">
        <p className="section-label">About</p>
      </Reveal>

      <Reveal from="right" delay={0.06}>
        <div className="about-content">
          <h2 className="about-heading">{about.heading}</h2>
          <div className="about-copy">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="about-paragraph">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal from="left" delay={0.1}>
        <div className="about-contact">
          <h3 className="about-contact-heading">
            {personalInfo.fullName}, {personalInfo.location}
          </h3>

          <div className="contact-grid">
            {personalInfo.contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="contact-card group"
              >
                <span className="text-xs font-medium text-[var(--text-secondary)] transition-colors group-hover:text-[var(--text-heading)]">
                  {contact.label}
                </span>
                <p className="mono mt-1 text-sm text-[var(--text-heading)]">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>

          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link mt-4"
          >
            R&eacute;sum&eacute;
          </a>
        </div>
      </Reveal>
    </section>
  );
};

export default AboutSection;
