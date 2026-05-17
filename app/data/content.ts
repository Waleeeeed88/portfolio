export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export const personalInfo = {
  name: "Walid",
  role: "Software Engineer",
  location: "Toronto, ON",
  summary:
    "Legacy modernization, multi-agent orchestration, and graph-powered AI.",
  contacts: [
    { label: "Phone", value: "437-260-8096", href: "tel:437-260-8096" },
    {
      label: "Email",
      value: "walid40@my.yorku.ca",
      href: "mailto:walid40@my.yorku.ca",
    },
    {
      label: "LinkedIn",
      value: "mohammad-waliduddin",
      href: "https://ca.linkedin.com/in/mohammad-waliduddin-918aa1244",
    },
    {
      label: "GitHub",
      value: "Waleeeeed88",
      href: "https://github.com/Waleeeeed88",
    },
  ] as ContactLink[],
};

export const about = {
  heading: "A bit about me",
  paragraphs: [
    "I've always liked the feeling of working through something tough—especially when it starts out confusing and slowly becomes clear. Engineering, for me, is less about \"just coding\" and more about building something you can trust: making good decisions, thinking through trade-offs, and caring about the small details that make a system feel solid.",
    "Outside of school and side projects, I'm usually on the football pitch, at the gym, or unwinding with a game. I'm also really into Iranian and Mughal history and architecture—there's something grounding about designs that are both beautiful and built to last.",
  ],
};

export const education = {
  institution: "York University",
  school: "Lassonde School of Engineering",
  location: "North York, ON",
  period: "Sep 2022 - Aug 2027 (Expected)",
  degree:
    "BEng in Software Engineering (Focus: Embedded Systems and Data Engineering)",
  gpa: "3.11 / 4.0",
  courses: [
    "EECS 2030 - Advanced OOP",
    "EECS 2011 / 3101 - Data Structures and Algorithms",
    "EECS 3311 - Software Design",
    "EECS 3421 - Database Management Systems",
    "EECS 2032 - Embedded Systems",
    "EECS 3201 - Digital Logic Design",
    "EECS 3482 - Intro to Computer Security",
  ],
};

export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tools: string[];
};

export const experiences: Experience[] = [
  {
    title: "Full Stack Developer Co-op",
    company: "Government of Ontario",
    location: "Toronto, ON",
    period: "Sep 2025 – Present",
    bullets: [
      "Modernized a legacy Angular platform with Docker + devcontainers for reproducible onboarding.",
      "Built Spring Boot + TypeScript web surfaces alongside Angular for citizen-facing services.",
      "Maintained Obsidian-backed knowledge bases as Copilot context while shipping CDIS workflows.",
    ],
    tools: ["Angular", "Spring Boot", "TypeScript", "Docker", "devcontainers", "Obsidian"],
  },
  {
    title: "Software Developer Co-op",
    company: "Canadian Imperial Bank of Commerce",
    location: "Toronto, ON",
    period: "Sep 2024 – Dec 2024",
    bullets: [
      "Python automation across release management and operational reporting.",
      "Owned data pipelines and ETL steps for aggregating source data into analyst-ready outputs.",
      "Cut weekly analyst reporting from hours to minutes end-to-end.",
    ],
    tools: ["Python", "SQL", "ETL", "Jira", "Confluence", "Git"],
  },
];

export type Project = {
  title: string;
  stack: string;
  description: string;
  detail?: string;
  link: string;
  deployed?: boolean;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "REAI",
    stack: "Python · XGBoost · Flask · Docker · GCP Cloud Run",
    featured: true,
    deployed: true,
    description:
      "45K-listing real estate valuation model, Dockerized and live on Cloud Run with autoscaling inference.",
    detail: "Mortgage tooling + model predictions served through a production Flask API — no infrastructure babysitting.",
    link: "https://aires-service-298702215071.us-central1.run.app/",
  },
  {
    title: "CLAI",
    stack: "Python · MCP · OpenRouter · GitHub automation",
    description:
      "Multi-agent coding workflow orchestrated through MCP — autonomous repo creation, code, PRs, and reviews.",
    detail: "Models split across planner, implementer, reviewer, and support roles. MCP tool-calling end-to-end with zero manual hand-offs.",
    link: "https://github.com/Waleeeeed88/CLAI",
  },
  {
    title: "TechYork",
    stack: "Next.js · TypeScript · Tailwind",
    deployed: true,
    description:
      "Full-stack platform for York's engineering tech community — events, membership, and org presence.",
    detail: "Designed, built, and shipped solo from 0 to production at techyork.ca.",
    link: "https://techyork.ca",
  },
];

export type SkillUse = {
  name: string;
  use: string;
};

export type SkillGroup = {
  label: string;
  blurb: string;
  items: SkillUse[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    blurb: "What I program in — work co-ops, school, and my own shipping projects.",
    items: [
      { name: "Python", use: "Automation, ETL, CLAI agents, REAI training + APIs." },
      { name: "Java", use: "Spring Boot services and Ontario full-stack delivery." },
      { name: "TypeScript", use: "Type-safe Ontario UIs, TechYork, this site." },
      { name: "C#", use: "ASP.NET Core work on the TechYork platform." },
      { name: "SQL", use: "CIBC reporting — extract, shape, deliver to analysts." },
      { name: "HTML/CSS", use: "Responsive UI polish across portfolio and platform work." },
    ],
  },
  {
    label: "Infra & runtimes",
    blurb: "How I run, pack, and standardize environments so prod matches dev.",
    items: [
      { name: "Linux", use: "Daily driver for backends, containers, and tooling." },
      { name: "Docker", use: "REAI packaged for repeatable Cloud Run deploys." },
      { name: "devcontainers", use: "Ontario: one shared setup on legacy codebases." },
      { name: "Cloud Run", use: "REAI live with autoscaling — minimal ops." },
      { name: "GCP", use: "Cloud Run deployment, validation, rate limiting, monitoring." },
      { name: "Azure DevOps", use: "CIBC notification platform and release workflows." },
      { name: "AWS", use: "Cloud platform foundation from resume technical skills." },
      { name: "Firebase", use: "TechYork member, admin, and platform workflows." },
      { name: "CircleCI", use: "CI checks and release confidence tooling." },
      { name: "Git", use: "Source control, PR flow, and multi-agent repo work." },
    ],
  },
  {
    label: "Agents & LLMs",
    blurb: "Multi-agent workflows, model routing, and coding-agent tooling.",
    items: [
      { name: "Agent Sims", use: "Multi-agent simulations for planning, coding, review, and support." },
      { name: "Orchestration", use: "Six-phase pipeline with specialized models and no hand-offs." },
      { name: "Codex", use: "CodeEcon: Codex-first workflow and coding-agent visibility." },
      { name: "Qwen Code", use: "Coding-agent experiments for implementation and review loops." },
      { name: "OpenRouter", use: "Model routing layer for multi-model agent workflows." },
      { name: "MCP", use: "Autonomous repos, PRs, reviews, and real tool calls." },
      { name: "AI Workflows", use: "Reusable AI-assisted developer workflows and documentation." },
      { name: "Agent Trace", use: "Agent activity, permissions, and task flow made inspectable." },
    ],
  },
  {
    label: "Knowledge & context",
    blurb: "How I wire retrieval and internal docs so AI (and people) stay grounded.",
    items: [
      { name: "Graph RAG", use: "Retrieval that respects relationships, not flat chunks." },
      { name: "Obsidian", use: "Ontario: graph-style notes Copilot can leverage." },
      { name: "Graphify", use: "CodeEcon repo memory for structural codebase awareness." },
      { name: "Serena context", use: "Fallback repo context for multi-agent development." },
      { name: "Engineering docs", use: "Reusable docs that speed onboarding and delivery." },
      { name: "Repo memory", use: "Persistent context for coding-agent workflows." },
    ],
  },
  {
    label: "Web & APIs",
    blurb: "Stacks I use to ship UIs and backends customers actually touch.",
    items: [
      { name: "Angular", use: "Ontario citizen-facing features in production." },
      { name: "Spring Boot", use: "Java APIs alongside the Angular stack." },
      { name: "React", use: "TechYork + components — client-heavy UI." },
      { name: "Next.js", use: "TechYork + this portfolio, full stack in one repo." },
      { name: "ASP.NET Core", use: "TechYork backend architecture and API work." },
      { name: "Node.js", use: "API and platform tooling across full-stack projects." },
      { name: "Express", use: "JavaScript API foundation from resume skills." },
      { name: "Flask", use: "REAI inference + mortgage logic in prod." },
      { name: "FastAPI", use: "Python API foundation for typed service work." },
      { name: "Zod", use: "Validated TechYork APIs for secure member/admin flows." },
      { name: "PostgreSQL", use: "TechYork relational data layer." },
    ],
  },
  {
    label: "Data & ML",
    blurb: "Moving data and training models — CIBC pipelines through REAI.",
    items: [
      { name: "XGBoost", use: "REAI valuation on 45K listings." },
      { name: "ETL", use: "CIBC: source systems → reporting tables on a schedule." },
      { name: "pandas", use: "Features and training tables before model fit." },
      { name: "PySpark", use: "Large-scale data processing from resume technical skills." },
      { name: "Optuna", use: "Bayesian hyperparameter optimization for REAI." },
      { name: "PyTorch", use: "ML experimentation and model-building foundation." },
      { name: "Oracle SQL", use: "Ontario data-quality checks across 4–5 backend pipelines." },
      { name: "Data-quality checks", use: "Validation for production-impacting backend changes." },
      { name: "Rate limiting", use: "REAI production API protection and monitoring." },
    ],
  },
];

/* kept for backward compat with any other consumers */
export const skills = {
  languages: ["Java", "Python", "TypeScript", "JavaScript", "C#", "C++", "SQL"],
  frameworks: ["Angular", "React", "Node.js", "Express", "Flask", "FastAPI", "TensorFlow", "PyTorch"],
  testing: ["Cypress", "JUnit", "Selenium", "Randoop"],
  platforms: ["Docker", "GCP", "AWS", "Firebase", "Git", "Jira", "Confluence"],
};
