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
import win from "../assets/Winner.png";

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
      <h2 className="text-3xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
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
                  className="flex items-center gap-1 sm:gap-3 bg-gray-800/50 p-2 sm:p-4 rounded-lg hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50"
                >
                  {skill.icon}
                  <span className=" text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Achievements Section */}
        <div className="mt-12">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-purple-400">
            Achievements
          </h3>

          {/* Mobile Card Layout */}
          <div className="block md:hidden">
            <div className="bg-gray-800/80  border border-gray-700/50 shadow-xl overflow-hidden">
              {/* Image Section - Top */}
              <div
                className="h-52 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${win})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="h-full bg-black/40"></div>
              </div>

              {/* Content Section */}
              <div className="p-4">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-yellow-400/30 p-2 rounded-full">
                    <Trophy className=" text-yellow-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-md font-bold text-yellow-400 mb-1">
                      Microsoft Learn Student Hackathon
                    </h4>
                  </div>
                </div>

                {/* Achievement Stats */}
                <div className="flex flex-wrap gap-2">
                  <div className="bg-yellow-400/20 px-3 py-1 rounded-full">
                    <span className="text-yellow-400 text-xs font-medium">
                      🏆 1st Place
                    </span>
                  </div>
                  <div className="bg-blue-400/20 px-3 py-1 rounded-full">
                    <span className="text-blue-400 text-xs font-medium">
                      📊 100+ Teams
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop/Tablet Layout */}
          <div className="hidden md:block">
            <div
              className="relative h-[600px]  p-6 md:p-8 rounded-xl border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              style={{
                backgroundImage: `url(${win})`,
                backgroundSize: " cover",
                backgroundPosition: "center 10%",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/40 to-black/85"></div>

              {/* Content */}
              <div className="relative h-full z-10 flex flex-col justify-between">
                {/* Trophy Icon and Title - Top */}
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-400/30 p-3 rounded-full backdrop-blur-sm">
                    <Trophy className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-yellow-400 mb-1">
                      Microsoft Learn Student Hackathon
                    </h4>
                    <p className="text-gray-200 text-sm font-medium">
                      Winner - 1st Position
                    </p>
                  </div>
                </div>

                {/* Achievement Description - Bottom */}
                <div className="mt-auto pt-6 border-t border-gray-400/30">
                  <p className="text-base md:text-lg leading-relaxed text-gray-100 mb-4">
                    Secured{" "}
                    <span className="font-bold text-yellow-400">
                      1st position
                    </span>{" "}
                    out of{" "}
                    <span className="font-bold text-blue-400">100+ teams</span>{" "}
                    for developing{" "}
                    <span className="font-bold text-pink-400">Collab Karo</span>
                    , an innovative influencer platform that connects brands
                    with content creators.
                  </p>

                  {/* Achievement Stats */}
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-yellow-400/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      <span className="text-yellow-400 text-sm font-medium">
                        🏆 1st Place
                      </span>
                    </div>
                    <div className="bg-blue-400/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      <span className="text-blue-400 text-sm font-medium">
                        📊 100+ Teams
                      </span>
                    </div>
                    <div className="bg-pink-400/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      <span className="text-pink-400 text-sm font-medium">
                        💡 Innovation Award
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
