export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export const personalInfo = {
  name: "Mohammad Waliduddin",
  role: "Engineer",
  location: "Toronto, ON",
  summary:
    "I build production systems across frontend, cloud, and embedded. I optimize for reliability, speed, and clean execution.",
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
  points: string[];
};

export const experiences: Experience[] = [
  {
    title: "Full Stack Developer Co-op",
    company: "Government of Ontario",
    location: "Toronto, ON",
    period: "Sep 2025 - Present",
    points: [
      "Built responsive Angular + TypeScript UI modules that improved task completion and consistency across pages.",
      "Introduced Cypress testing coverage to reduce manual QA effort and improve release confidence.",
      "Integrated Figma design system components with accessibility standards in daily delivery workflows.",
      "Implemented analytics instrumentation to track device usage and user behavior across critical journeys.",
      "Delivered features in agile sprints through planning, reviews, and iterative production feedback.",
    ],
  },
  {
    title: "Software Developer Co-op",
    company: "Canadian Imperial Bank of Commerce",
    location: "Toronto, ON",
    period: "Sep 2024 - Dec 2024",
    points: [
      "Optimized notification delivery with local storage, improving engagement by 10%.",
      "Produced UML class and sequence diagrams that reduced design-phase rework by 12%.",
      "Automated SIC and TCP reporting pipelines with Python, reducing manual effort by 70%.",
      "Supported rollout and incident reduction initiatives, lowering tickets by 20%.",
    ],
  },
];

export type Project = {
  title: string;
  stack: string;
  points: string[];
  link: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "REAI - Real Estate Price Predictor",
    stack: "Python, XGBoost, Flask, Docker, Google Cloud Run, Imagen 4 Ultra",
    featured: true,
    points: [
      "Built a valuation platform using an XGBoost regressor trained on 45,000 listings.",
      "Exposed model inference and mortgage tooling through a production-ready Flask API.",
      "Integrated secure image generation workflows for dynamic property visual previews.",
      "Containerized and deployed on Cloud Run with HTTPS and autoscaling.",
    ],
    link: "https://aires-service-298702215071.us-central1.run.app/",
  },
  {
    title: "YorkU Parking App",
    stack: "Java, SwingWorker, Firebase, Firestore, Cloud Functions, Selenium, JUnit",
    points: [
      "Engineered a real-time parking management app using Java Swing and Firebase services.",
      "Implemented asynchronous workflows for responsive UI and better user throughput.",
      "Automated regression and UI verification with Selenium and JUnit.",
      "Used UML and Git-based collaboration to improve delivery quality.",
    ],
    link: "https://github.com/Waleeeeed88/ParkingApp",
  },
  {
    title: "Home Security System",
    stack: "C++, OpenCV, Raspberry Pi, Real-time Vision, Motion Detection",
    points: [
      "Built a real-time home monitoring loop on Raspberry Pi with continuous camera capture and low-latency motion alerts.",
      "Engineered a frame-difference detection pipeline with blur, thresholding, and contour filtering to reduce noise-triggered false alarms.",
      "Structured the detector as a reusable C++ module so AI classification can be layered in without rewriting the core capture path.",
    ],
    link: "https://github.com/Waleeeeed88/HomeSecuritySystem",
  },
  {
    title: "FPGA Car Parking System",
    stack: "VHDL, SystemVerilog, Intel MAX 10 FPGA, Quartus Prime, ModelSim",
    points: [
      "Implemented a hierarchical parking lot controller on DE10-Lite hardware.",
      "Designed debounced sensor flows and FSM-based entry/exit control.",
      "Verified behavior with simulation and deployed to physical FPGA targets.",
    ],
    link: "https://github.com/Waleeeeed88/CarParkingVerilog",
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
