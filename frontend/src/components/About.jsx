import React from "react";
import { motion } from "framer-motion";
import png2 from "../assets/Aditya.jpg";

const TypewriterText = () => {
  const text = "Passionate about crafting seamless, user-friendly, and visually stunning web experiences. Specialized in modern frontend technologies including React, TailwindCSS, and Next.js.";
  
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.012 // Adjust this value to control typing speed
      }
    }
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <motion.p
      className="max-w-xl text-xl font-mono font-bold text-white/80 leading-relaxed animate-pulse"
      variants={sentence}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letter}
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};

const About = () => {
  return (
    <div
      id="about"
      className="relative min-h-screen flex items-end justify-center bg-gradient-to-br from-black to-[#1d0b24] overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-[#1d0b24] z-0" />

      {/* Image Section */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
        exit={{ scale: 0.8, opacity: 0, rotate: 15 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, margin: "-100px" }}
        className="relative z-10 group"
      >
        <img
          src={png2}
          alt="Aditya Singh"
          className="w-[500px] h-[800px] object-cover shadow-2xl transition-transform duration-300 group-hover:shadow-purple-500/20"
        />
        <motion.div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>

      {/* Black overlay */}
      <motion.div
        initial={{ opacity: 0, rotate: 15 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: -15 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, margin: "-100px" }}
        className="absolute inset-0 bg-gradient-to-br from-black/50 to-[#1d0b24]/75 z-20"
      />

      {/* Name text with dramatic shadow */}
      <motion.h1
        initial={{ y: 50, opacity: 0, rotate: 15 }}
        whileInView={{ y: 0, opacity: 1, rotate: 0 }}
        exit={{ y: -50, opacity: 0, rotate: -15 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, margin: "-100px" }}
        className="absolute top-8 left-8 text-[12vw] font-bold uppercase text-white leading-none text-left z-30 tracking-tighter"
        style={{
          textShadow: `
            2px 2px 0 #000,
            -2px -2px 0 #000,
            2px -2px 0 #000,
            -2px 2px 0 #000,
            0 2px 0 #000,
            2px 0 0 #000,
            0 -2px 0 #000,
            -2px 0 0 #000,
            4px 4px 8px rgba(0,0,0,0.5)
          `
        }}
      >
        Aditya <br />
        <span
          className="bg-gradient-to-r from-white to-pink-500/50 bg-clip-text text-white"
          style={{
            textShadow: `
              2px 2px 0 rgba(0,0,0,0.8),
              -2px -2px 0 rgba(0,0,0,0.8),
              2px -2px 0 rgba(0,0,0,0.8),
              -2px 2px 0 rgba(0,0,0,0.8),
              0 2px 0 rgba(0,0,0,0.8),
              2px 0 0 rgba(0,0,0,0.8),
              0 -2px 0 rgba(0,0,0,0.8),
              -2px 0 0 rgba(0,0,0,0.8),
              4px 4px 8px rgba(0,0,0,0.5)
            `
          }}
        >
          Singh
        </span>
      </motion.h1>

      {/* Corner decorative lines */}
      <hr className="w-1/5 h-[10px] bg-white border-none absolute top-20 right-3 transform -translate-x-1/2 -translate-y-1/2 z-30" />
      <hr className="w-[10px] h-1/5 bg-white border-none absolute top-20 right-0 transform rotate-180 z-30 -translate-x-41 -translate-y-1" />
      <hr className="w-1/5 h-[10px] bg-white border-none absolute bottom-20 left-50 transform -translate-x-1/2 -translate-y-1/2 z-30" />
      <hr className="w-[10px] h-1/5 bg-white border-none absolute bottom-20 left-51 transform rotate-180 z-30 -translate-x-41 -translate-y-1" />

      {/* Description with dramatic shadow */}
      <motion.div
        initial={{ x: 50, opacity: 0, rotate: 15 }}
        whileInView={{ x: 0, opacity: 1, rotate: 0 }}
        exit={{ x: -50, opacity: 0, rotate: -15 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, margin: "-100px" }}
        className="absolute right-0 text-[10vw] font-bold uppercase text-white leading-none text-left z-50 tracking-tighter"
        style={{
          textShadow: `
            2px 2px 0 #000,
            -2px -2px 0 #000,
            2px -2px 0 #000,
            -2px 2px 0 #000,
            0 2px 0 #000,
            2px 0 0 #000,
            0 -2px 0 #000,
            -2px 0 0 #000,
            4px 4px 8px rgba(0,0,0,0.5)
          `
        }}
      >
        <p className="leading-tight">
          Frontend
          <br />
          Developer
        </p>
      </motion.div>

      {/* Typing effect text */}
      <div className="absolute bottom-25 left-16 z-30">
        <TypewriterText />
      </div>
    </div>
  );
};

export default About;