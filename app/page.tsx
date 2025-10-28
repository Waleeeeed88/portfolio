"use client";

import { motion } from "framer-motion";
import ProjectCard from "./components/ProjectCard";
import AnimatedSection from "./components/AnimatedSection";
import AnimatedBackground from "./components/AnimatedBackground";
import SkillBadge from "./components/SkillBadge";
import Image from "next/image";

export default function Home() {
  const projects = [
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

  const languages = ["Java", "Python", "C#", "HTML5", "CSS3", "JavaScript", "TypeScript"];
  const frameworks = [
    "React.js", "Node.js", "Express.js", "TensorFlow", "PyTorch", 
    "NumPy", "pandas", "HuggingFace", "Transformers", "Axios", "REST API", "FastAPI"
  ];
  const testing = ["JUnit", "Selenium WebDriver", "Randoop", "CircleCI", "Kubernetes"];
  const tools = ["Git", "Docker", "GCP", "AWS", "PowerBI", "Confluence", "JIRA"];

  return (
    <main className="relative font-sans antialiased text-primary-text bg-dark-bg min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      
      <div className="container relative mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col sm:flex-row items-center justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center sm:text-left flex-1"
          >
            <motion.h1 
              className="text-5xl font-light tracking-wider text-accent-cyan"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ 
                textShadow: '0 0 30px rgba(0, 229, 255, 0.8), 0 0 60px rgba(0, 229, 255, 0.4)',
              }}
            >
              Mohammad Waliduddin
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-4 text-lg text-electric-blue font-light tracking-wide"
            >
              Software Developer & Engineer
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-6 flex flex-wrap justify-center sm:justify-start gap-4 text-sm font-light"
            >
              {[
                { text: "437-260-8096", href: "tel:437-260-8096" },
                { text: "walid40@my.yorku.ca", href: "mailto:walid40@my.yorku.ca" },
                { text: "LinkedIn", href: "https://www.linkedin.com" },
                { text: "Github", href: "https://github.com/Waleeeeed88" },
              ].map((link, index) => (
                <motion.a
                  key={link.text}
                  href={link.href}
                  target={link.href.startsWith('http') ? "_blank" : undefined}
                  rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="text-secondary-text hover:text-electric-blue transition-colors px-3 py-1.5 rounded-lg border border-border-color hover:border-electric-blue/50 bg-black/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.text}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
            className="relative"
          >
            <motion.div 
              className="w-48 h-64 rounded-2xl bg-gradient-to-br from-accent-cyan via-electric-blue to-accent-magenta p-0.5 shadow-2xl"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(0, 229, 255, 0.6), 0 0 80px rgba(0, 229, 255, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full rounded-2xl bg-dark-bg overflow-hidden relative">
                <Image
                  src="/profile.jpg"
                  alt="Mohammad Waliduddin"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
            
            {/* Decorative corner accents */}
            <motion.div
              className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-accent-cyan rounded-tl-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            />
            <motion.div
              className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-electric-blue rounded-br-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            />
            
            {/* Subtle floating particles */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-electric-blue rounded-full"
                style={{
                  top: `${10 + i * 25}%`,
                  left: i % 2 === 0 ? '-8px' : 'auto',
                  right: i % 2 === 1 ? '-8px' : 'auto',
                }}
                animate={{
                  y: [-8, 8, -8],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </header>

        <div className="space-y-20">
          {/* Education Section */}
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="text-3xl font-light tracking-wider mb-6 text-accent-magenta uppercase"
                style={{ 
                  textShadow: '0 0 20px rgba(240, 0, 255, 0.8), 0 0 40px rgba(240, 0, 255, 0.4)',
                }}
              >
                Education
              </h2>
            </motion.div>
            <motion.div 
              className="p-6 rounded-xl border border-accent-purple/30 bg-black/20 backdrop-blur-sm hover:border-accent-purple/60 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(112, 0, 255, 0.3)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(90deg, rgba(240, 0, 255, 0.1), rgba(112, 0, 255, 0.1))',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <h3 className="text-xl font-normal text-electric-blue relative z-10 tracking-wide">
                York University
              </h3>
              <p className="text-secondary-text mt-2 relative z-10 font-light">
                North York, ON | Sept 2022 – Aug 2026
              </p>
              <p className="mt-3 text-base font-light text-primary-text relative z-10">
                Bachelors in Software Engineering <span className="text-accent-cyan">GPA: 3.0/4.0</span>
              </p>
              <motion.div 
                className="mt-4 p-4 bg-black/30 rounded-lg border border-border-color relative z-10"
                whileHover={{ borderColor: "rgba(0, 229, 255, 0.3)" }}
              >
                <span className="font-normal text-accent-magenta tracking-wide">Relevant Courses</span>
                <p className="mt-2 text-primary-text leading-relaxed font-light text-sm">
                  Data Structures & Algorithms • Database Systems • Computer Security •
                  Software Design & Architecture • Advanced OOP • Web Development • 
                  Cloud Computing • Operating Systems • Computer Networks
                </p>
              </motion.div>
            </motion.div>
          </AnimatedSection>

          {/* Experience Section */}
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="text-3xl font-light tracking-wider mb-6 text-electric-blue uppercase"
                style={{ 
                  textShadow: '0 0 20px rgba(0, 217, 255, 0.8), 0 0 40px rgba(0, 217, 255, 0.4)',
                }}
              >
                Experience
              </h2>
            </motion.div>
            <div className="space-y-8">
              {[
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
                {
                  title: "Software Intern",
                  company: "Bait Al Aseel",
                  location: "Kuwait",
                  period: "May 2023 – Aug 2023",
                  points: [
                    "Utilized SQL for efficient data management and manipulation.",
                    "Collaborated with the IT team to meet project deadlines and keep sales data up to date.",
                  ],
                },
              ].map((job, jobIndex) => (
                <motion.div 
                  key={job.title}
                  className="p-6 rounded-xl border border-accent-cyan/30 bg-black/20 backdrop-blur-sm hover:border-accent-cyan/60 transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 229, 255, 0.3)" }}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: jobIndex * 0.2 }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.1), transparent)',
                    }}
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  
                  <h3 className="text-xl font-normal text-accent-cyan relative z-10 tracking-wide">
                    {job.title}
                  </h3>
                  <p className="text-secondary-text mt-2 relative z-10 font-light text-sm">
                    {job.company} | {job.location} | {job.period}
                  </p>
                  <ul className="mt-4 space-y-3 text-primary-text relative z-10">
                    {job.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 font-light text-sm"
                      >
                        <motion.span 
                          className="text-electric-blue text-base mt-1"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        >
                          ▹
                        </motion.span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Projects Section */}
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="text-3xl font-light tracking-wider mb-6 text-accent-purple uppercase"
                style={{ 
                  textShadow: '0 0 20px rgba(112, 0, 255, 0.8), 0 0 40px rgba(112, 0, 255, 0.4)',
                }}
              >
                Projects
              </h2>
            </motion.div>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <ProjectCard
                    title={project.title}
                    tech={project.tech}
                    points={project.points}
                    link={project.link}
                  />
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Technical Skills Section */}
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="text-3xl font-light tracking-wider mb-8 text-neon-blue uppercase"
                style={{ 
                  textShadow: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.4)',
                }}
              >
                Technical Skills
              </h2>
            </motion.div>
            <div className="space-y-8">
              {[
                { title: "Languages", skills: languages, color: "text-accent-cyan" },
                { title: "Frameworks & Libraries", skills: frameworks, color: "text-electric-blue" },
                { title: "Testing & Deployment", skills: testing, color: "text-accent-magenta" },
                { title: "Developer Tools", skills: tools, color: "text-accent-purple" },
              ].map((category, catIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                >
                  <h4 className={`text-lg font-normal tracking-wide ${category.color} mb-4 uppercase`}>
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap">
                    {category.skills.map((skill, index) => (
                      <SkillBadge key={skill} skill={skill} index={index} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-border-color text-center text-secondary-text font-light"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-sm"
          >
            Built with Next.js, Tailwind CSS, and Framer Motion
          </motion.p>
          <p className="mt-2 text-xs">© 2025 Mohammad Waliduddin</p>
        </motion.footer>
      </div>
    </main>
  );
}
