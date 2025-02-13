import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Boxes } from "lucide-react";
import png2 from "../assets/image.png";

function Project() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with React and Tailwind CSS featuring modern design and smooth animations.",
      technologies: ["React", "TailwindCSS", "Framer Motion"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.com",
    },
    {
      title: "E-Commerce Dashboard",
      description:
        "Admin dashboard for managing products, orders, and customer data with real-time updates.",
      technologies: ["Next.js", "Redux", "MongoDB"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://yourdashboard.com",
    },
    {
      title: "Task Management App",
      description:
        "Full-stack task management application with drag-and-drop functionality and team collaboration features.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      github: "https://github.com/yourusername/taskapp",
      live: "https://yourtaskapp.com",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with React and Tailwind CSS featuring modern design and smooth animations.",
      technologies: ["React", "TailwindCSS", "Framer Motion"],
      github: " ",
      live: "https://yourportfolio.com",
    },
    {
      title: "E-Commerce Dashboard",
      description:
        "Admin dashboard for managing products, orders, and customer data with real-time updates.",
      technologies: ["Next.js", "Redux", "MongoDB"],
      github: "http://    ",
      live: "https://yourdashboard.com",
    },
    {
      title: "Task Management App",
      description:
        "Full-stack task management application with drag-and-drop functionality and team collaboration features.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      github: "",
      live: "https://yourtaskapp.com",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen items-center bg-[#130816] text-white flex flex-col "
    >
      <motion.h2
        className="text-5xl font-bold mb-12 mt-15 p-4 text-left bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      <div className="flex w-full">
        <div className="w-1/2 flex justify-center sticky top-0">
          <img
            src={png2}
            alt="Projects"
            className="w-full  rounded-lg shadow-lg"
          />
        </div>
        <div className="w-1/2 p-3 space-y-6 overflow-y-auto h-[800px]  mr-4 customScrollbar">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative backdrop-blur-md border border-white/10 p-6 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <Boxes className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
