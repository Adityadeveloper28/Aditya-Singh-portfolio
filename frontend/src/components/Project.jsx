import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Boxes, Youtube } from "lucide-react";
import png2 from "../assets/image.png";

function Project() {
  const projects = [
    {
      title: "Aditya Singh Portfolio",
      description:
        "Personal portfolio built with React and Tailwind CSS featuring modern design and smooth animations.",
      technologies: ["React", "TailwindCSS", "Framer Motion"],
      github: "https://github.com/Adityadeveloper28/Aditya-Singh-portfolio",
      deploy: "https://adityasingh-three.vercel.app/",
    },
    {
      title: "Food Counter Frontend",
      description:
        "A frontend interface for a food counter application, built with JavaScript for seamless user interaction.",
      technologies: ["JavaScript", "React"],
      github: "https://github.com/Adityadeveloper28/Foodcounter-frontend",
      deploy: "foodcounter-frontend.vercel.app",
    },
    {
      title: "3D Image Slider",
      description:
        "An interactive 3D image slider to experiment with 3D effects in CSS.",
      technologies: ["CSS", "JavaScript"],
      github: "https://github.com/Adityadeveloper28/3d-Image-slider",
      deploy: "3d-image-slider-eight.vercel.app",
    },
    {
      title: "Pizza Hut Website",
      description:
        "A 3D carousel animation project for a pizza-themed website, showcasing interactive UI elements.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Adityadeveloper28/pizza-hut-website-",
      deploy: "pizza-hut-website.vercel.app",
    },
    {
      title: "SaaS Automation Builder",
      description:
        "A Next.js-based automation SaaS builder for streamlining workflow processes.",
      technologies: ["Next.js", "TypeScript"],
      github: "https://github.com/Adityadeveloper28/saas",
      video:
        "https://private-user-images.githubusercontent.com/115808044/384449068-015d6363-f405-44f3-9f64-8d202aac9067.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzk3MTg5MzksIm5iZiI6MTczOTcxODYzOSwicGF0aCI6Ii8xMTU4MDgwNDQvMzg0NDQ5MDY4LTAxNWQ2MzYzLWY0MDUtNDRmMy05ZjY0LThkMjAyYWFjOTA2Ny5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIxNlQxNTEwMzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zMDk3YTIwZTk1ZmQ2OTIzMWJkNmRmODUzYzdhNDRlYjdjZWYwM2IxODNmN2RjMjc1MmMwN2Q2NmVkNTY0NmQ2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.XxvJszWHewBn9ts77IjkLTNhdhdudna5WJ9VyjjzjtU",
    },
    {
      title: "VNPS2024 React Project",
      description:
        "A React-based project for VNPS 2024, incorporating modern UI/UX elements.",
      technologies: ["React", "JavaScript"],
      github: "https://github.com/Adityadeveloper28/VNPS2024-react",
      deploy: "vnps-2024-react.vercel.app",
    },
    {
      title: "Osscillation 2024",
      description:
        "A React-based project for Osscillation 2024, incorporating modern UI/UX elements.",
      technologies: ["React", "JavaScript"],
      github: "https://github.com/Adityadeveloper28/Osscillations2024",
      deploy: "oscillations2024.vercel.app/",
    },
    {
      title: "Finance Landing Page",
      description:
        "An internship assignment project featuring a finance-themed landing page built with HTML and CSS.",
      technologies: ["HTML", "CSS"],
      github: "https://github.com/Adityadeveloper28/finanace-landing-page",
      deploy: "https://finanace-landing-page.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen items-center bg-[#130816] text-white flex flex-col "
    >
      <motion.h2
        className=" text-3xl sm:text-5xl font-bold mb-12 mt-15 p-4 text-left bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      <div className="flex w-full">
        <div className="w-1/2  justify-center sticky top-0 md:block hidden">
          <img
            src={png2}
            alt="Projects"
            className="w-full  rounded-lg shadow-lg "
          />
        </div>
        <div className="w-full md:w-1/2 p-3 space-y-6 overflow-y-auto h-[800px]  mr-4 customScrollbar">
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

                {project.deploy && (
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                )}

                {project.video && !project.deploy && (
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                    <span>Demo Video</span>
                  </a>
                )}

                {project.deploy && project.video && (
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                    <span>Video</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
