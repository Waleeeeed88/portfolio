export interface Role {
  start: string;
  range: string;
  logo: string;
  logoAlt: string;
  title: string;
  org: string;
  summary: string;
  tags: string[];
}

export interface Project {
  title: string;
  image: string;
  imageAlt: string;
  isLive?: boolean;
  summary: string;
  tags: string[];
  links: {label: string; href: string}[];
}

export const EMAIL = 'walid40@my.yorku.ca';
export const RESUME = 'MWUI.pdf';

export const NAV = [
  {id: 'intro', label: 'Intro'},
  {id: 'experience', label: 'Experience'},
  {id: 'education', label: 'Education'},
  {id: 'projects', label: 'Projects'},
  {id: 'stack', label: 'Stack'},
  {id: 'contact', label: 'Contact'},
] as const;

export const EXPERIENCE: Role[] = [
  {
    start: '2026',
    range: 'Sep — Dec',
    logo: 'deloitte.svg',
    logoAlt: 'Deloitte logo',
    title: 'AI Platform Engineering Intern',
    org: 'Deloitte Canada · Toronto, ON',
    summary:
      "On the Innovation CoE, the team that builds internal tooling for Deloitte's Strategy, Risk & Transactions practice. The work is AI software on Azure — retrieval pipelines, agents, and document and image understanding that consultants use on client engagements.",
    tags: ['Azure OpenAI', 'Azure AI Search', 'Document Intelligence', 'Python', 'React', 'SQL'],
  },
  {
    start: '2025',
    range: 'Sep — Aug 2026',
    logo: 'ongov.png',
    logoAlt: 'Government of Ontario logo',
    title: 'Software Developer Co-op',
    org: 'Government of Ontario · Toronto, ON',
    summary:
      'Built a Copilot workflow that turns design specs into working code, so PMs and BAs can get a prototype without waiting on a developer. Also moved legacy Java 1.8 services onto Angular and Spring Boot.',
    tags: ['GitHub Copilot', 'Custom agents', 'Java 1.8', 'Angular', 'Spring Boot'],
  },
  {
    start: '2024',
    range: 'Sep — Dec',
    logo: 'cibc.png',
    logoAlt: 'CIBC logo',
    title: 'Software Developer Co-op',
    org: 'Canadian Imperial Bank of Commerce · Toronto, ON',
    summary:
      'Automated eight weekly Excel reports with Java and Jenkins. Wrote ETL jobs and data quality checks for the warehouse.',
    tags: ['Java', 'Jenkins', 'Excel automation', 'DB Visualizer', 'ETL'],
  },
];

export const EDUCATION: Role = {
  start: '2022',
  range: '— 2027 exp.',
  logo: 'lassonde.png',
  logoAlt: 'Lassonde School of Engineering logo',
  title: 'B.Eng, Software Engineering',
  org: 'York University, Lassonde School of Engineering · GPA 3.11 / 4.0',
  summary: '',
  tags: [
    'Advanced OOP',
    'Data Structures & Algorithms',
    'Software Design',
    'Databases',
    'Embedded Systems',
    'Digital Logic',
    'Computer Security',
  ],
};

export const PROJECTS: Project[] = [
  {
    title: 'REAI · Home price predictor',
    image: 'project-reai.png',
    imageAlt: 'REAI real estate price predictor screenshot',
    isLive: true,
    summary:
      'Predicts what a house should sell for, trained on 50,000+ listings. XGBoost tuned with Optuna, served through a Flask API on Railway.',
    tags: ['Python', 'XGBoost', 'Flask', 'Docker'],
    links: [{label: 'aires.up.railway.app', href: 'https://aires.up.railway.app/'}],
  },
  {
    title: 'Instacart for Agents',
    image: 'project-instacart.png',
    imageAlt: 'Instacart for Agents package screenshot',
    summary:
      'A TypeScript package that lets browser agents put together an Instacart order without going off script. Published on npm.',
    tags: ['TypeScript', 'npm', 'Codex plugin', 'Agent workflows'],
    links: [
      {label: 'npm', href: 'https://www.npmjs.com/package/instacart-for-agents'},
      {label: 'GitHub', href: 'https://github.com/Waleeeeed88/instacart-for-agents'},
    ],
  },
  {
    title: 'TechYork',
    image: 'project-techyork.png',
    imageAlt: 'TechYork platform screenshot',
    isLive: true,
    summary: 'A place for York students to share projects, message each other, and find jobs.',
    tags: ['Next.js', 'TypeScript', 'C#', 'ASP.NET Core', 'Neon DB'],
    links: [{label: 'techyork.ca', href: 'https://techyork.ca'}],
  },
  {
    title: 'CLAI · Multi-agent coding',
    image: 'project-clai.png',
    imageAlt: 'CLAI multi-agent workflow screenshot',
    summary: "Coding agents that split up a task, write the code, and review each other's work over MCP.",
    tags: ['Python', 'MCP', 'OpenRouter', 'GitHub automation'],
    links: [{label: 'GitHub', href: 'https://github.com/Waleeeeed88/CLAI'}],
  },
];

export const STACK: {label: string; items: string[]}[] = [
  {label: 'Languages', items: ['TypeScript', 'Python', 'Java', 'C#', 'SQL']},
  {label: 'Frontend', items: ['React', 'Next.js', 'Angular']},
  {label: 'Backend & data', items: ['Spring Boot', 'ASP.NET Core', 'Flask', 'Neon Postgres']},
  {label: 'AI & agents', items: ['Azure OpenAI', 'Azure AI Search', 'MCP', 'GitHub Copilot']},
  {label: 'ML', items: ['pandas', 'scikit-learn', 'XGBoost', 'Optuna']},
  {label: 'Cloud & DevOps', items: ['Azure', 'AWS', 'GCP', 'Docker', 'GitHub Actions', 'Jenkins', 'Playwright']},
];

export const LINKS = [
  {label: 'LinkedIn', href: 'https://ca.linkedin.com/in/mohammad-waliduddin-918aa1244'},
  {label: 'GitHub', href: 'https://github.com/Waleeeeed88'},
];
