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
    "I build agentic systems, AI pipelines, and cloud infrastructure. I optimize for reliability, speed, and clean execution.",
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
  description: string;
};

export const experiences: Experience[] = [
  {
    title: "Full Stack Developer Co-op",
    company: "Government of Ontario",
    location: "Toronto, ON",
    period: "Sep 2025 - Present",
    description:
      "Working within CDIS on infant data monitoring, front-end development in Angular, and data pipeline design for citizen-facing services.",
  },
  {
    title: "Software Developer Co-op",
    company: "Canadian Imperial Bank of Commerce",
    location: "Toronto, ON",
    period: "Sep 2024 - Dec 2024",
    description:
      "Part of ECIF Solutions Delivery — focused on automation, release management, and streamlining reporting pipelines in Python.",
  },
];

export type Project = {
  title: string;
  stack: string;
  description: string;
  link: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "REAI",
    stack: "Python · XGBoost · Flask · Docker · Cloud Run",
    featured: true,
    description:
      "ML-powered real estate valuation platform trained on 45K listings, containerized and live on GCP. Exposes model inference and mortgage tooling through a production-ready Flask API with autoscaling.",
    link: "https://aires-service-298702215071.us-central1.run.app/",
  },
  {
    title: "CLAI",
    stack: "Python · Claude · GPT · Gemini · MCP",
    description:
      "Multi-agent CLI orchestrator where three LLMs collaborate on a 6-phase dev pipeline with autonomous GitHub workflows. Agents create repos, branches, PRs, and code reviews through MCP-based tool calling.",
    link: "https://github.com/Waleeeeed88/CLAI",
  },
  {
    title: "YorkU Parking",
    stack: "Java · Firebase · Firestore · Selenium",
    description:
      "Real-time campus parking app with async workflows, live availability, and automated test coverage. Built with Java Swing and Firebase, verified end-to-end with Selenium and JUnit.",
    link: "https://github.com/Waleeeeed88/ParkingApp",
  },
  {
    title: "Home Security",
    stack: "C++ · OpenCV · Raspberry Pi",
    description:
      "Embedded vision system with motion detection, noise filtering, and a modular architecture for AI classification. Runs a continuous capture loop on Raspberry Pi with low-latency contour-based alerts.",
    link: "https://github.com/Waleeeeed88/HomeSecuritySystem",
  },
];

export const skills = {
  languages: ["Java", "Python", "TypeScript", "JavaScript", "C#", "C++", "SQL"],
  frameworks: [
    "Angular",
    "React",
    "Node.js",
    "Express",
    "Flask",
    "FastAPI",
    "TensorFlow",
    "PyTorch"
  ],
  testing: ["Cypress", "JUnit", "Selenium", "Randoop",],
  platforms: ["Docker", "GCP", "AWS", "Firebase", "Git", "Jira", "Confluence"],
};
