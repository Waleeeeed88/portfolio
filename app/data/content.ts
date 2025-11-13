export const personalInfo = {
  name: "Mohammad Waliduddin",
  title: "Engineeering student",
  contact: [
    { text: "437-260-8096", href: "tel:437-260-8096" },
    { text: "walid40@my.yorku.ca", href: "mailto:walid40@my.yorku.ca" },
    { text: "LinkedIn", href: "https://ca.linkedin.com/in/mohammad-waliduddin-918aa1244" },
    { text: "Github", href: "https://github.com/Waleeeeed88" },
  ],
};

export const education = {
  institution: "York University",
  location: "North York, ON",
  period: "Sept 2022 – Aug 2027 (Expected)",
  degree: "Bachelors in Software Engineering",
  gpa: "3.11/4.0",
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
    title: "REAI (Real Estate Price Predictor)",
    tech: "Python | XGBoost | Flask | Docker | Google Cloud Run | Imagen 4 Ultra",
    points: [
      "Built a full real-estate valuation platform using an XGBoost regressor trained on a 45,000-home dataset, achieving ~97.5% RMSE-normalized accuracy.",
      "Converted the model into a production-ready Flask REST API with endpoints for price prediction and a comprehensive mortgage calculator.",
      "Integrated Google Imagen 4 Ultra through a secure service-account workflow to generate dynamic, high-fidelity property visuals for users.",
      "Containerized the application with Docker and deployed it on Google Cloud Run, configuring HTTPS and autoscaling for reliable, low-latency inference.",
    ],
    link: "https://aires-service-298702215071.us-central1.run.app/",
  },
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