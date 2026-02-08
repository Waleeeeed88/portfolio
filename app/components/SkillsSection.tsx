import { skills } from "../data/content";
import Reveal from "./Reveal";

const lanes = [
  { title: "Languages", note: "How I write software", items: skills.languages },
  { title: "Frameworks", note: "How I ship products", items: skills.frameworks },
  { title: "Testing", note: "How I catch failures early", items: skills.testing },
  { title: "Platforms", note: "How I run in production", items: skills.platforms },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-block section-theme theme-atlas scroll-mt-28">
      <Reveal>
        <header>
          <p className="section-kicker future">Service Layer</p>
          <h2 className="section-title">Core stack. Fast execution. Reliable output.</h2>
          <p className="section-copy">Stack I use in production.</p>
        </header>
      </Reveal>

      <div className="mt-5 grid gap-3 lg:grid-cols-2">
        {lanes.map((lane, index) => (
          <Reveal key={lane.title} delay={0.04 * index}>
            <article className="panel panel-hover skill-card p-4">
              <div className="mb-2.5 flex items-center justify-between gap-3">
                <h3 className="heritage text-[2rem] font-semibold text-white leading-none">{lane.title}</h3>
                <span className="mono text-[0.65rem] uppercase tracking-[0.12em] text-[#97c8f3]">{lane.items.length} tools</span>
              </div>
              <p className="mono mb-2.5 text-[0.65rem] uppercase tracking-[0.12em] text-[#9fb9da]">{lane.note}</p>

              <div className="flex flex-wrap gap-2">
                {lane.items.map((item) => (
                  <span key={item} className="pill px-2.5 py-1 text-xs">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.12}>
        <article className="panel panel-hover mt-4 p-4 sm:p-5">
          <p className="section-kicker future">Current Direction</p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Going deeper on embedded systems (STM32 + FPGA) while keeping full-stack delivery standards high.
          </p>
        </article>
      </Reveal>
    </section>
  );
};

export default SkillsSection;
