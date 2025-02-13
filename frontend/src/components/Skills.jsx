import React, { useState } from "react";
import {
  Code2,
  Palette,
  Database,
  Globe,
  Layout,
  Server,
  Github,
  Terminal,
  Smartphone,
  Trophy,
  CircleX,
} from "lucide-react";
import win from "../assets/Winner.png"

function Skills() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", icon: <Globe className="w-6 h-6" /> },
        { name: "CSS3", icon: <Palette className="w-6 h-6" /> },
        { name: "JavaScript", icon: <Code2 className="w-6 h-6" /> },
        { name: "TailwindCSS", icon: <Palette className="w-6 h-6" /> },
        { name: "React.js", icon: <Layout className="w-6 h-6" /> },
        { name: "Next.js", icon: <Layout className="w-6 h-6" /> },
        { name: "React Native", icon: <Smartphone className="w-6 h-6" /> },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: <Server className="w-6 h-6" /> },
        { name: "MongoDB", icon: <Database className="w-6 h-6" /> },
        { name: "Express.js", icon: <Server className="w-6 h-6" /> },
        { name: "Flask", icon: <Server className="w-6 h-6" /> },
      ],
    },
    {
      category: "Tools & Version Control",
      skills: [
        { name: "Git", icon: <Github className="w-6 h-6" /> },
        { name: "VS Code", icon: <Terminal className="w-6 h-6" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen p-10 bg-[#130816] text-white">
      <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Skills & Technologies
      </h2>

      <div className="max-w-6xl mx-auto">
        {skillsData.map((category, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              {category.category}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50"
                >
                  {skill.icon}
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Achievements Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold mb-6 text-purple-400">
            Achievements
          </h3>
          <div className="flex items-center gap-4 bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
            <Trophy className="w-8 h-8 text-yellow-400" />
            <p className="text-lg">
              Secured <span className="font-bold text-yellow-400">1st position</span>
              &nbsp; out of 100+ teams in the
              <span className="font-bold text-blue-400"> Microsoft Learn Student Hackathon</span>
              &nbsp; for developing <span className="font-bold text-pink-400">Collab Karo</span>,
              an innovative influencer platform.
            </p>
            <button
              className="ml-auto px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              View
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-3 right-3 text-white text-5xl bg-black rounded-full cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              <CircleX className="w-8 h-8" />
            </button>
            <img
              src={win}
              alt="Achievement"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Skills;
