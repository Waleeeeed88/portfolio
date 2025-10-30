export const personalInfo = {
  name: "Mohammad Waliduddin",
  title: "Software Developer & Engineer | Football Enthusiast",
  contact: [
    { text: "437-260-8096", href: "tel:437-260-8096" },
    { text: "walid40@my.yorku.ca", href: "mailto:walid40@my.yorku.ca" },
    { text: "LinkedIn", href: "https://www.linkedin.com" },
    { text: "Github", href: "https://github.com/Waleeeeed88" },
  ],
};

export const education = {
  institution: "York University",
  location: "North York, ON",
  period: "Sept 2022 – Aug 2026",
  degree: "Bachelors in Software Engineering",
  gpa: "3.0/4.0",
  courses: [
    "Data Structures & Algorithms",
    "Database Systems",
    "Computer Security",
    "Software Design & Architecture",
    "Advanced OOP",
    "Web Development",
    "Cloud Computing",
    "Operating Systems",
    "Computer Networks",
  ],
};

export const experiences = [
  {
    title: "Full Stack Developer Co-op",
    company: "Government of Ontario",
    location: "Toronto, ON",
    period: "September 2025 – Present",
    points: [
      "Developed responsive UI components using Angular and TypeScript, improving user experience and interface consistency.",
      "Implemented automated testing frameworks with Cypress, reducing manual testing effort and improving code reliability.",
      "Collaborated on Sigma design system integration, ensuring adherence to accessibility standards and design guidelines.",
      "Integrated Google Analytics for comprehensive user device tracking and behavior analysis across government applications.",
      "Worked in an Agile environment, participating in sprint planning and code reviews to deliver high-quality solutions.",
    ],
  },
  {
    title: "Software Developer Co-op",
    company: "Canadian Imperial Bank of Commerce",
    location: "Toronto, ON",
    period: "Sept 2024 – Dec 2024",
    points: [
      "Optimized Update Notifications with Local Storage, boosting feature engagement by 10%.",
      "Created UML class and sequence diagrams, decreasing design-phase revisions by 12%.",
      "Automated SIC & TCP Reporting with Python, reducing manual effort by 70% and improving accuracy to 99%.",
      "Led analysis and rollout of system changes, reducing incident tickets by 20% and boosting feature adoption by 18%.",
    ],
  },
];

export const projects = [
  {
    title: "YorkU Parking App",
    tech: "Java | SwingWorker | Firebase | Firestore | Cloud Functions | Git | UML",
    points: [
      "Engineered a real-time parking management system using Java Swing and Firebase.",
      "Leveraged Firebase Cloud Functions for backend logic, enhancing system efficiency by 45%.",
      "Implemented secure user login and asynchronous operations for a responsive UX.",
      "Automated UI and logic testing using Selenium, JUnit, and Randoop.",
    ],
    link: "https://github.com/Waleeeeed88/ParkingApp",
  },
  {
    title: "Treatify (Full-Stack & Chatbot)",
    tech: "React | Node.js | Python | GPT-Neo | PyTorch | GCP | REST APIs",
    points: [
      "Built a React frontend and Node.js backend for UI and AI service orchestration.",
      "Developed a PDF-Parsing API using Google Cloud for medical document processing.",
      "Trained and deployed a 20B-parameter GPT-Neo model on Google Cloud Run.",
      "Achieved 99.8% uptime and sub-100 ms response times for the production model.",
    ],
  },
  {
    title: "FPGA Car Parking System",
    tech: "VHDL | Terasic DE10-Lite FPGA | SystemVerilog | Quartus Prime",
    points: [
      "Implemented a hierarchical parking lot controller on an Intel MAX 10 FPGA.",
      "Designed entry/exit detection using debounced sensor inputs and a finite state machine (FSM).",
      "Verified design via ModelSim simulation and deployed to DE10-Lite hardware.",
    ],
    link: "https://github.com/Waleeeeed88/CarParkingVerilog",
  },
];

export const skills = {
  languages: ["Java", "Python", "C#", "HTML5", "CSS3", "JavaScript", "TypeScript"],
  frameworks: [
    "React.js",
    "Node.js",
    "Express.js",
    "TensorFlow",
    "PyTorch",
    "NumPy",
    "pandas",
    "HuggingFace",
    "Transformers",
    "Axios",
    "REST API",
    "FastAPI",
  ],
  testing: ["JUnit", "Selenium WebDriver", "Randoop", "CircleCI", "Kubernetes"],
  tools: ["Git", "Docker", "GCP", "AWS", "PowerBI", "Confluence", "JIRA"],
};