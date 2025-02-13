import React from 'react';
import { motion } from "framer-motion";
import { Linkedin, Github, Code, Layout, Monitor } from "lucide-react";
import bg from "../assets/bg.jpeg";
import png from "../assets/Png1.jpg";

const Home = () => {
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const description = "Frontend Developer | React | UI/UX Enthusiast".split("");

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white text-center p-8"
      style={{
        backgroundImage: "url('" + bg + "')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto"> 
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src={png}
            alt="Profile"
            className="w-40 h-40 rounded-full shadow-2xl mb-6 border-4 border-blue-500/30"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="absolute -inset-1 rounded-full blur-md bg-gradient-to-r from-blue-500 to-purple-500 opacity-30"
            animate={{
              scale: [1, 1.02, 1],
              opacity: [0.3, 0.4, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>

        <motion.h1
          className="text-6xl h-20 font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Aditya Singh
        </motion.h1>

        <div className="flex justify-center space-x-1 mt-4 overflow-hidden">
          {description.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterAnimation}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.5,
                delay: 0.5 + index * 0.03
              }}
              className="text-xl font-light"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>

        {/* Skills Icons */}
        <motion.div
          className="flex justify-center gap-6 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex flex-col items-center">
            <Code className="w-6 h-6 text-blue-400" />
            <span className="text-sm mt-1 text-gray-300">React</span>
          </div>
          <div className="flex flex-col items-center">
            <Layout className="w-6 h-6 text-purple-400" />
            <span className="text-sm mt-1 text-gray-300">UI/UX</span>
          </div>
          <div className="flex flex-col items-center">
            <Monitor className="w-6 h-6 text-green-400" />
            <span className="text-sm mt-1 text-gray-300">Frontend</span>
          </div>
        </motion.div>

        <motion.p
          className="text-lg mt-6 text-gray-300 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          Passionate about crafting seamless, user-friendly, and visually
          stunning web experiences. Specialized in modern frontend technologies
          including React, TailwindCSS, and Next.js.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.a
            href="https://linkedin.com/in/aditya-singh-5b87a7253"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3 rounded-lg overflow-hidden bg-transparent cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 ease-out group-hover:scale-105" />
            <span className="relative text-white font-medium flex items-center gap-2">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </span>
          </motion.a>

          <motion.a
            href="https://github.com/Adityadeveloper28"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3 rounded-lg overflow-hidden bg-transparent cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 transition-all duration-300 ease-out group-hover:scale-105" />
            <span className="relative text-white font-medium flex items-center gap-2">
              <Github className="w-5 h-5" />
              GitHub
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;