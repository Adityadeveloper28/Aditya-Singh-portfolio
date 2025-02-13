import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Link } from "react-scroll";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/adii1203",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/aditya-singh-8467b724a/",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:singhadi280303@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-[#130816] text-white border-t border-gray-800">
      <div className="w-full flex flex-col ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 p-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Aditya Singh
            </h3>
            <p className="text-gray-400">
              Front-end Developer crafting exceptional digital experiences
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-blue-400 hover:underline transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className=" border-t border-gray-800 text-center py-2">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <span>© {currentYear} Built with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by Aditya Singh</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
