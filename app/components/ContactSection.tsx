import { personalInfo } from "../data/content";
import { getImagePath } from "../utils/imagePath";
import Reveal from "./Reveal";

const ContactSection = () => {
    const resumePath = getImagePath("WalidFresume.pdf");

    return (
        <section id="contact" className="section-block scroll-mt-24">
            <Reveal from="left">
                <p className="section-label">Contact</p>
            </Reveal>

            <Reveal delay={0.06}>
                <h2 className="mb-6 text-2xl font-bold text-[var(--text-heading)] sm:text-3xl">
                    {personalInfo.fullName}, {personalInfo.location}
                </h2>
            </Reveal>

            <Reveal from="right" delay={0.1}>
                <div className="contact-grid">
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
            </Reveal>

            <Reveal delay={0.14}>
                <div className="mt-5 flex items-center gap-4">
                    <a
                        href={resumePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        R&eacute;sum&eacute;
                    </a>
                </div>
            </Reveal>
        </section>
    );
};

export default ContactSection;
