import {AppShell} from '@astryxdesign/core/AppShell';
import {AspectRatio} from '@astryxdesign/core/AspectRatio';
import {Badge} from '@astryxdesign/core/Badge';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading} from '@astryxdesign/core/Heading';
import {useClipboard} from '@astryxdesign/core/hooks';
import {Icon} from '@astryxdesign/core/Icon';
import {IconButton} from '@astryxdesign/core/IconButton';
import {Link} from '@astryxdesign/core/Link';
import {HStack, VStack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
import {useToast} from '@astryxdesign/core/Toast';
import {Token} from '@astryxdesign/core/Token';
import {TopNav, TopNavHeading} from '@astryxdesign/core/TopNav';
import {ArrowUp, Briefcase, Copy, FileText, GraduationCap, Hammer, Layers, Mail} from 'lucide-react';
import {
  siAngular,
  siDocker,
  siDotnet,
  siFlask,
  siGithubactions,
  siGithubcopilot,
  siGooglecloud,
  siJenkins,
  siModelcontextprotocol,
  siNeon,
  siNextdotjs,
  siOpenjdk,
  siOptuna,
  siPandas,
  siPython,
  siReact,
  siScikitlearn,
  siSpringboot,
  siTypescript,
  type SimpleIcon,
} from 'simple-icons';
import {EDUCATION, EMAIL, EXPERIENCE, LINKS, PROJECTS, RESUME, STACK, type Project, type Role} from './content';

const asset = (path: string) => import.meta.env.BASE_URL + path;

const SUGGESTIONS = [
  {label: 'Experience', href: '#experience', icon: Briefcase},
  {label: 'Projects', href: '#projects', icon: Hammer},
  {label: 'Stack', href: '#stack', icon: Layers},
  {label: 'Education', href: '#education', icon: GraduationCap},
  {label: 'Contact', href: '#contact', icon: Mail},
];

function Tags({items}: {items: string[]}) {
  return (
    <HStack gap={1} wrap="wrap">
      {items.map(item => (
        <Token key={item} label={item} size="sm" />
      ))}
    </HStack>
  );
}

// Brand marks from simple-icons; anything without one (Microsoft/AWS brands etc.) gets a monogram.
const LOGOS: Record<string, SimpleIcon> = {
  TypeScript: siTypescript,
  Python: siPython,
  Java: siOpenjdk,
  React: siReact,
  'Next.js': siNextdotjs,
  Angular: siAngular,
  'Spring Boot': siSpringboot,
  'ASP.NET Core': siDotnet,
  Flask: siFlask,
  'Neon Postgres': siNeon,
  MCP: siModelcontextprotocol,
  'GitHub Copilot': siGithubcopilot,
  pandas: siPandas,
  'scikit-learn': siScikitlearn,
  Optuna: siOptuna,
  GCP: siGooglecloud,
  Docker: siDocker,
  'GitHub Actions': siGithubactions,
  Jenkins: siJenkins,
};

function StackItem({name}: {name: string}) {
  const icon = LOGOS[name];
  const brand = icon ? `#${icon.hex}` : 'var(--color-accent)';
  return (
    <span className="stack-item" style={{'--brand': brand} as React.CSSProperties}>
      <span className="stack-logo" aria-hidden>
        {icon ? (
          <svg viewBox="0 0 24 24">
            <path d={icon.path} />
          </svg>
        ) : (
          <span className="stack-mono">{(name.match(/[A-Z#]/g) ?? [name[0]]).join('').slice(0, 2)}</span>
        )}
      </span>
      {name}
    </span>
  );
}

function RoleCard({role}: {role: Role}) {
  return (
    <Card padding={5} className="soft-card">
      <VStack gap={4}>
        <HStack gap={4} vAlign="center" justify="between" wrap="wrap">
          <HStack gap={3} vAlign="center">
            <div className="logo-tile">
              <img src={asset(role.logo)} alt={role.logoAlt} />
            </div>
            <VStack gap={0.5}>
              <Heading level={3}>{role.title}</Heading>
              <Text type="supporting">{role.org}</Text>
            </VStack>
          </HStack>
          <Text type="supporting">
            {role.start} · {role.range}
          </Text>
        </HStack>
        {role.summary && (
          <Text as="p" display="block" color="secondary">
            {role.summary}
          </Text>
        )}
        <Tags items={role.tags} />
      </VStack>
    </Card>
  );
}

function ProjectCard({project}: {project: Project}) {
  return (
    <Card padding={0} height="100%" className="soft-card">
      <VStack height="100%">
        <AspectRatio ratio={16 / 10} fit="cover">
          <img src={asset(project.image)} alt={project.imageAlt} />
        </AspectRatio>
        <VStack gap={3} padding={5}>
          <HStack gap={2} justify="between" vAlign="center">
            <Heading level={3}>{project.title}</Heading>
            {project.isLive && <Badge variant="blue" label="Live" className="no-shrink" />}
          </HStack>
          <Text as="p" display="block" color="secondary">
            {project.summary}
          </Text>
          <Tags items={project.tags} />
          <HStack gap={4} wrap="wrap">
            {project.links.map(link => (
              <Link key={link.href} href={link.href} isExternalLink isStandalone>
                {link.label}
              </Link>
            ))}
          </HStack>
        </VStack>
      </VStack>
    </Card>
  );
}

function Section({id, title, children}: {id: string; title: string; children: React.ReactNode}) {
  return (
    <section id={id} className="block split">
      <div className="split-head">
        <Heading level={2} type="display-3">
          {title}
        </Heading>
      </div>
      <div className="split-body">{children}</div>
    </section>
  );
}

export function App() {
  const toast = useToast();
  const {copy} = useClipboard();

  const copyEmail = async () => {
    await copy(EMAIL);
    toast({body: 'Email copied', uniqueID: 'copy-email'});
  };

  return (
    <AppShell
      height="auto"
      variant="surface"
      contentPadding={6}
      topNav={
        <TopNav
          label="Main navigation"
          heading={
            <TopNavHeading
              heading="Walid"
              headingHref="#intro"
              logo={<img src={asset('mw-logo.png')} alt="" className="nav-logo" />}
            />
          }
          endContent={
            <HStack gap={2} vAlign="center">
              <Button
                variant="secondary"
                label="Resume"
                icon={<Icon icon={FileText} />}
                href={asset(RESUME)}
                target="_blank"
                className="pill"
              />
            </HStack>
          }
        />
      }>
      <div className="glow" aria-hidden />
      <VStack gap={10} maxWidth={1440} className="page">
        <section id="intro" className="hero block">
          <VStack gap={6} className="hero-main">
            <span className="status">
              <span className="status-dot" /> Open to co-op &amp; new grad roles
            </span>
            <VStack gap={4}>
              <Heading level={1} type="display-1" className="hero-title">
                Hi, I am Walid,
                <br />
                <span className="accent">I am a software engineer.</span>
              </Heading>
              <Text type="large" as="p" display="block" color="secondary" className="hero-sub">
                Software Engineering student at York University. AI Platform Engineering Intern at Deloitte.
                I work on backend systems, developer tools, and applied AI.
              </Text>
            </VStack>

            <a className="prompt" href={`mailto:${EMAIL}`}>
              <span className="prompt-text">{EMAIL}</span>
              <span className="prompt-send" aria-hidden>
                <ArrowUp size={18} />
              </span>
            </a>

            <HStack gap={2} wrap="wrap">
              {SUGGESTIONS.map(s => (
                <a key={s.href} href={s.href} className="chip">
                  <s.icon size={16} />
                  {s.label}
                </a>
              ))}
            </HStack>
          </VStack>

          <div className="hero-side">
            <div className="now-card">
              <Text type="label" className="eyebrow">
                Currently
              </Text>
              <HStack gap={3} vAlign="center">
                <div className="logo-tile">
                  <img src={asset(EXPERIENCE[0].logo)} alt={EXPERIENCE[0].logoAlt} />
                </div>
                <VStack gap={0.5}>
                  <Text weight="semibold">{EXPERIENCE[0].title}</Text>
                  <Text type="supporting">Deloitte · Toronto</Text>
                </VStack>
              </HStack>
            </div>
            <div className="tile-grid">
              {PROJECTS.slice(0, 4).map(p => (
                <a key={p.title} href="#projects" className="tile">
                  <img src={asset(p.image)} alt={p.imageAlt} />
                  <span className="tile-label">{p.title.split(' · ')[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <Section id="experience" title="Experience">
          <VStack gap={4}>
            {EXPERIENCE.map(role => (
              <RoleCard key={role.title + role.start} role={role} />
            ))}
          </VStack>
        </Section>

        <Section id="projects" title="Projects">
          <Grid columns={{minWidth: 260, max: 4}} gap={4}>
            {PROJECTS.map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </Grid>
        </Section>

        <Section id="stack" title="Stack">
          <Grid columns={{minWidth: 280, max: 3}} gap={4}>
            {STACK.map((group, i) => (
              <Card key={group.label} padding={5} className="soft-card stack-card">
                <VStack gap={4}>
                  <HStack gap={2} vAlign="center" justify="between">
                    <Text weight="semibold">{group.label}</Text>
                    <Text type="label" className="stack-index">
                      {String(i + 1).padStart(2, '0')}
                    </Text>
                  </HStack>
                  <HStack gap={2} wrap="wrap">
                    {group.items.map(item => (
                      <StackItem key={item} name={item} />
                    ))}
                  </HStack>
                </VStack>
              </Card>
            ))}
          </Grid>
        </Section>

        <Section id="education" title="Education">
          <RoleCard role={EDUCATION} />
        </Section>

        <VStack as="section" id="contact" className="block">
          <Card padding={10} className="soft-card contact-card">
            <VStack gap={5}>
              <Heading level={2} type="display-3">
                Contact
              </Heading>
              <Text as="p" display="block" color="secondary" className="hero-sub">
                Open to co-op and new grad roles.
              </Text>
              <HStack gap={2} vAlign="center" wrap="wrap">
                <Button
                  variant="primary"
                  size="lg"
                  label={EMAIL}
                  icon={<Icon icon={Mail} />}
                  href={`mailto:${EMAIL}`}
                  className="pill btn-blue"
                />
                <IconButton
                  variant="ghost"
                  label="Copy email address"
                  tooltip="Copy"
                  icon={<Icon icon={Copy} />}
                  clickAction={copyEmail}
                />
              </HStack>
              <HStack gap={5} wrap="wrap">
                {LINKS.map(link => (
                  <Link key={link.href} href={link.href} isExternalLink isStandalone>
                    {link.label}
                  </Link>
                ))}
                <Link href={asset(RESUME)} isExternalLink isStandalone>
                  Resume
                </Link>
              </HStack>
            </VStack>
          </Card>
        </VStack>

        <Text type="supporting" className="footer">
          Walid · Toronto, ON
        </Text>
      </VStack>
    </AppShell>
  );
}
