import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FileDown, Menu, X, AlignRight } from "lucide-react";
import pdf from "../assets/Aditya Singh - resume.pdf";
import { Home, FolderGit2, Code2, Briefcase, Mail } from "lucide-react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);

      // Update active section
      const sections = [
        "home",
        "about",
        "projects",
        "skills",
        "experience",
        "contact",
      ];
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", id: "home", icon: <Home className="w-4 h-4" /> },
    {
      name: "About",
      id: "about",
      icon: <Code2 className="w-4 h-4" />,
    },
    {
      name: "Projects",
      id: "projects",
      icon: <FolderGit2 className="w-4 h-4" />,
    },
    { name: "Skills", id: "skills", icon: <Code2 className="w-4 h-4" /> },
    {
      name: "Work Experience",
      id: "experience",
      icon: <Briefcase className="w-4 h-4" />,
    },
    { name: "Contact", id: "contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 h-1 ${activeSection === "home"
            ? "bg-transparent"
            : "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
          }`}
        style={{ width: `${scrollProgress}%` }}
      />
      <nav
        className={`fixed top-0 left-0 w-full p-4 z-100 transition-all duration-300 ${activeSection === "home"
            ? "bg-transparent"
            : "backdrop-blur-md bg-black/70"
          }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Aditya Singh
          </motion.h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                className={`relative cursor-pointer transition-colors duration-300 flex items-center gap-2
               ${activeSection === item.id
                    ? "text-blue-400"
                    : "text-white hover:text-blue-400"
                  }`}
                onSetActive={() => setActiveSection(item.id)}
              >
                {item.icon}
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400"
                    layoutId="underline"
                  />
                )}
              </Link>
            ))}
          </div>

          <motion.button
            className="hidden   bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-6 py-2 rounded-full text-white font-medium shadow-lg md:flex gap-1 items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(pdf, "_blank")}
          >
            <FileDown className="w-4 h-4" />
            Download CV
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <AlignRight size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md py-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                className={`block py-3 px-4 text-center ${activeSection === item.id ? "text-blue-400" : "text-white"
                  }`}
                onClick={() => setIsMenuOpen(false)}
                onSetActive={() => setActiveSection(item.id)}
              >
                {item.name}
              </Link>
            ))}
            <motion.button
              className="w-11/12 mx-auto flex items-center justify-center mt-6 bg-gradient-to-r from-blue-500 to-purple-500 py-2 px-4 rounded-full shadow-lg text-white font-medium gap-2 transition-transform duration-200 active:scale-95 hover:from-blue-600 hover:to-purple-600"
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(pdf, "_blank")}
            >
              <FileDown className="w-4 h-4" />
              Download CV
            </motion.button>
          </motion.div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
