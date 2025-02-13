import React from "react";
import { motion } from "framer-motion";
import { Building2, Calendar, ArrowRight, Circle } from "lucide-react";

function WorkExperience() {
  const experiences = [
    {
      company: "Tryest Infotech Private Ltd",
      role: "Front-End Developer Intern",
      duration: "August 2024 - Present",
      location: "India",
      responsibilities: [
        "Designed and developed responsive web and mobile interfaces using React, React Native, HTML, CSS, and JavaScript",
        "Improved platform scalability and responsiveness by collaborating with senior developers",
        "Optimized code quality and resolved performance bottlenecks",
        "Contributed to the creation of interactive UI components",
        "Implemented agile development practices enhancing user experience and project delivery efficiency",
      ],
      skills: [
        "React",
        "React Native",
        "HTML",
        "CSS",
        "JavaScript",
        "Figma",
        "Redux",
        "Flask",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-[#130816] text-white py-20 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and achievements
          </p>
        </motion.div>

        <div className="relative ">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 h-full w-1 bg-blue-400/20" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex mb-12"
            >
              {/* Timeline Node */}
              <div className="absolute left-4.5 transform -translate-x-1/2 w-8 h-8">
                <div className="w-full h-full rounded-full bg-blue-400/20 flex items-center justify-center">
                  <Circle
                    className="w-3 h-3 text-blue-400"
                    fill="currentColor"
                  />
                </div>
              </div>

              {/* Content Card */}
              <div
                className={`w-full ${
                  index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                }`}
              >
                <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm border border-gray-800">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-blue-400/20 rounded-lg">
                      <Building2 className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-400">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-gray-300">{exp.company}</p>
                      <div className="flex items-center gap-2 text-gray-400 mt-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4 ml-4">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
