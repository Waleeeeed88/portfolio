export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export const personalInfo = {
  name: "Walid",
  fullName: "Mohammad Waliduddin",
  role: "Software Engineering Student",
  location: "Toronto, ON",
  summary:
    "I am a software engineering student at York University in Toronto.",
  contacts: [
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
  heading: "I like systems that explain themselves",
  paragraphs: [
    "I am drawn to software that makes messy work easier to understand, whether that means cleaner interfaces, better internal tools, or agents that can carry context across a workflow.",
    "Apart from my professional life, I spend time with history, literature, art, and older architecture. I also read and research politics and economics, and I experiment with self-hosted AI models to understand how machines reason through complex human situations.",
  ],
};

export const education = {
  institution: "York University",
  school: "Lassonde School of Engineering",
  location: "North York, ON",
  period: "Sep 2022 - Aug 2027 expected",
  degree: "BEng in Software Engineering",
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
    title: "Software Developer Co-op",
    company: "Government of Ontario",
    location: "Toronto, ON",
    period: "Sep 2025 - Present",
    bullets: [
      "I helped build a design-to-production code workflow using GitHub Copilot and custom agents. It let PMs and BAs prompt implementation-ready code.",
      "I also worked on AI-native legacy modernization from Java 1.8 to Angular and Spring Boot.",
    ],
    tools: ["GitHub Copilot", "Custom agents", "Java 1.8", "Angular", "Spring Boot"],
  },
  {
    title: "Software Developer Co-op",
    company: "Canadian Imperial Bank of Commerce",
    location: "Toronto, ON",
    period: "Sep 2024 - Dec 2024",
    bullets: [
      "Java/Jenkins automation for eight weekly Excel reports, plus specs for name-change and eCIF releases.",
      "Led DB analysis with DB Visualizer, then implemented ETL jobs and data quality checks for warehouse workflows.",
    ],
    tools: ["Java", "Jenkins", "Excel automation", "DB Visualizer", "ETL", "Data quality checks"],
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
    title: "REAI - Real Estate Price Predictor",
    stack: "Python, XGBoost, Flask, Docker",
    featured: true,
    deployed: true,
    description:
      "XGBoost model fine-tuned with Optuna on 50K+ home listings, including location, province, acreage, and other listing parameters.",
    detail: "Served through a Flask API and Docker deployment.",
    link: "https://aires-service-298702215071.us-central1.run.app/",
  },
  {
    title: "Instacart for Agents",
    stack: "TypeScript, npm, Codex plugin, agent workflows",
    description:
      "Published TypeScript API layer for safe Instacart grocery planning with browser agents.",
    detail: "Official npm package with a companion GitHub repo.",
    link: "https://github.com/Waleeeeed88/instacart-for-agents",
  },
  {
    title: "TechYork",
    stack: "Next.js, TypeScript, C#, ASP.NET Core, Neon DB",
    deployed: true,
    description:
      "Built a platform for university students to connect, message, share projects, and apply for jobs.",
    detail: "Live at techyork.ca.",
    link: "https://techyork.ca",
  },
  {
    title: "CLAI - Multi-Agent Coding Workflow",
    stack: "Python, MCP, OpenRouter, GitHub automation",
    description:
      "Specialized coding agents coordinate through APIs to plan, implement, and review project work.",
    detail: "Workflow project for multi-agent coding automation.",
    link: "https://github.com/Waleeeeed88/CLAI",
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
    label: "Backend & Product Engineering",
    blurb: "Frameworks and languages I use for apps, services, and APIs.",
    items: [
      { name: "TypeScript", use: "Backend and product engineering." },
      { name: "Next.js", use: "Backend and product engineering." },
      { name: "React", use: "Backend and product engineering." },
      { name: "Angular", use: "Backend and product engineering." },
      { name: "Java", use: "Backend and product engineering." },
      { name: "Spring Boot", use: "Backend and product engineering." },
      { name: "C#", use: "Backend and product engineering." },
      { name: "ASP.NET Core", use: "Backend and product engineering." },
      { name: "REST APIs", use: "Backend and product engineering." },
      { name: "SQL", use: "Backend and product engineering." },
    ],
  },
  {
    label: "Cloud & Deployment",
    blurb: "What I use to deploy apps and services.",
    items: [
      { name: "Docker", use: "Cloud and deployment." },
      { name: "GCP", use: "Cloud and deployment." },
      { name: "Cloud Run", use: "Cloud and deployment." },
      { name: "AWS", use: "Cloud and deployment." },
      { name: "App Runner", use: "Cloud and deployment." },
      { name: "S3", use: "Cloud and deployment." },
      { name: "Azure", use: "Cloud and deployment." },
      { name: "Firebase", use: "Cloud and deployment." },
      { name: "Neon DB", use: "Cloud and deployment." },
    ],
  },
  {
    label: "Testing & DevOps",
    blurb: "Tools I use before and after deployment to maintain projects.",
    items: [
      { name: "GitHub Actions", use: "Testing and DevOps." },
      { name: "Jenkins", use: "Testing and DevOps." },
      { name: "CI/CD", use: "Testing and DevOps." },
      { name: "Playwright", use: "Testing and DevOps." },
      { name: "Cypress", use: "Testing and DevOps." },
      { name: "Selenium", use: "Testing and DevOps." },
      { name: "Linux", use: "Testing and DevOps." },
    ],
  },
  {
    label: "ML & Data Systems",
    blurb: "How I prepare data for ML models and pipelines.",
    items: [
      { name: "Python", use: "ML and data systems." },
      { name: "pandas", use: "ML and data systems." },
      { name: "scikit-learn", use: "ML and data systems." },
      { name: "XGBoost", use: "ML and data systems." },
      { name: "Optuna", use: "ML and data systems." },
      { name: "Flask", use: "ML and data systems." },
      { name: "SQL", use: "ML and data systems." },
    ],
  },
  {
    label: "AI-Native Workflows",
    blurb:
      "Tools I use for custom workflows to speed up development while maintaining quality.",
    items: [
      { name: "MCP", use: "AI-native workflows." },
      { name: "Codebase specs and graphing", use: "AI-native workflows." },
      { name: "Agent deployment", use: "AI-native workflows." },
      { name: "LLM API integration & implementation", use: "AI-native workflows." },
      { name: "Agent workflows", use: "AI-native workflows." },
    ],
  },
];

export const skills = {
  languages: ["TypeScript", "Java", "C#", "Python", "SQL"],
  frameworks: ["Next.js", "React", "Angular", "Spring Boot", "ASP.NET Core", "Flask"],
  testing: ["GitHub Actions", "Jenkins", "Playwright", "Cypress", "Selenium"],
  platforms: ["Docker", "GCP", "Cloud Run", "AWS", "Azure", "Firebase", "Neon DB"],
};
