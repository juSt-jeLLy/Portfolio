"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { IconType } from 'react-icons';


import {
  SiTypescript,
  SiJavascript,
  SiSolidity,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGithub,
  SiLinkedin,
  SiGmail,
  SiX,
} from "react-icons/si";
import {
  BsDatabase,
  BsCodeSquare,
  BsGearFill,
  BsHddNetwork,
  BsPhone,
} from "react-icons/bs";

export default function Home() {
  const introRef = useRef<HTMLElement>(null);
  const techRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { name: "Home", ref: introRef },
    { name: "Tech Stack", ref: techRef },
    { name: "Projects", ref: projectsRef },
  ];

  interface TechItem {
    name: string;
    icon: IconType;
    color: string;
  }

  interface TechStack {
    [key: string]: TechItem[];
  }

  const techStack: TechStack = {
    languages: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Solidity", icon: SiSolidity, color: "#363636" },
    ],
    frontend: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    backend: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
    ],
    databases: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Tableland", icon: BsDatabase, color: "#FF4154" },
    ]
  };
  const projects = [
    {
      title: "HireFree",
      description:
        "A revolutionary blockchain-based application with smart contract integration",
      tech: ["React", "Solidity", "Node.js"],
      demoLink: "https://hirefree.vercel.app/",
      githubLink: "https://github.com/juSt-jeLLy/hirefree",
    },
    {
      title: "GreenHarvest",
      description: "Full-stack social media platform with real-time updates",
      tech: ["Next.js", "Socket.io", "MongoDB"],
      demoLink: "https://stuble.vercel.app/",
      githubLink: "https://github.com/juSt-jeLLy/Stuble",
    },
  ];
  // Add this line after the existing refs
const [activeCategory, setActiveCategory] = useState<string>(Object.keys(techStack)[0]);
  const contacts = [
    {
      name: "GitHub",
      icon: SiGithub,
      link: "https://github.com/juSt-jeLLy",
      color: "#333",
    },
    {
      name: "LinkedIn",
      icon: SiLinkedin,
      link: "https://www.linkedin.com/in/yagnesh-markana-72aa10204/",
      color: "#0077B5",
    },
    {
      name: "Email",
      icon: SiGmail,
      link: "mailto:yagneshpatel931@gmail.com",
      color: "#EA4335",
    },
    {
      name: "Phone",
      icon: BsPhone,
      link: "tel:+91 9409664725",
      color: "#4CAF50",
    },
    {
      name: "X",
      icon: SiX,
      link: "https://x.com/Yagneshh28",
      color: "#000000",
    },
  ];

  return (
    <>
      {/* Enhanced Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo/Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              YM
            </motion.div>

            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.ref)}
                  className="relative group px-4 py-2"
                >
                  <span className="relative z-10 text-gray-600 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.name}
                  </span>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Theme Toggle or Additional Actions can go here */}
          </div>
        </div>
      </motion.nav>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-gray-950 dark:via-slate-900 dark:to-zinc-900 pt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-7xl mx-auto px-4 py-16"
        >
          {/* Hero Section */}
          <motion.section
            ref={introRef}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-20 relative pt-24"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse" />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
              />
            </div>

            {/* Main content with enhanced animations */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.h1
                className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Yagnesh Markana
              </motion.h1>

              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl text-gray-600 dark:text-gray-300 mb-8">
                  Full Stack Developer
                </h2>
              </motion.div>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Building innovative solutions with modern web technologies and
                  blockchain integration.
                </p>
              </motion.div>

              {/* Contact info with hover effects */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex justify-center gap-8 mb-12"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg"
                >
                  <SiGmail className="w-5 h-5 text-[#EA4335]" />
                  <span className="text-lg">yagneshpatel931@gmail.com</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg"
                >
                  <BsPhone className="w-5 h-5 text-[#4CAF50]" />
                  <span className="text-lg">+91 9409664725</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-24 h-24">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-full h-full bg-gradient-to-b from-blue-500/20 to-transparent rounded-full blur-xl"
              />
            </div>
          </motion.section>

          {/* Contact Links */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex justify-center gap-8 mb-20"
          >
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.name}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <contact.icon
                  className="w-6 h-6"
                  style={{ color: contact.color }}
                />
                <span>{contact.name}</span>
              </motion.a>
            ))}
          </motion.section>
          {/* Tech Stack Section */}
          <motion.section ref={techRef} className="py-20">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Tech Stack
            </motion.h2>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.keys(techStack).map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>

            {/* Tech Icons Grid */}
            <motion.div layout className="relative min-h-[400px]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto"
              >
                {techStack[activeCategory as keyof typeof techStack].map(
                  (tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.3 },
                      }}
                      className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="flex flex-col items-center gap-4">
                        <tech.icon
                          className="w-12 h-12 transition-all duration-300 group-hover:transform group-hover:scale-110"
                          style={{ color: tech.color }}
                        />
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="font-medium text-sm text-center group-hover:text-blue-600 dark:group-hover:text-blue-400"
                        >
                          {tech.name}
                        </motion.span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  )
                )}
              </motion.div>
            </motion.div>
          </motion.section>
          {/* Projects Section */}
          <motion.section
            ref={projectsRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                    translateY: -5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  viewport={{ once: true }}
                  className="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg cursor-pointer relative overflow-hidden"
                >
                  {/* Project Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <h3 className="text-2xl font-bold mb-4 relative z-10 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 relative z-10">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-4 relative z-10">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      Source Code
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>    </>
  );
}


