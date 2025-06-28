import React from "react";
import png2 from "../assets/Aditya.jpg";
import { User } from "lucide-react";

const About = () => {
  return (
    <div className="bg-[#1a1023] about  flex flex-col md:flex-row items-center md:items-start max-w-screen w-full p-8 md:p-12 border border-gray-700/50">
      {/* Image Section */}
      <div className="w-full hover:border hover:border-white bg-black rounded-2xl relative md:w-1/3 flex-shrink-0 flex justify-center md:justify-start mb-8 md:mb-0 group">
        <img
          src={png2}
          alt="Aditya Singh"
          style={{
            objectPosition: "center 40%"
          }}
          className="h-96 w-full object-cover rounded-2xl shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:border-2 group-hover:border-white group-hover:-translate-x-6 group-hover:-translate-y-5 transform"
        />
        <div
          className="absolute w-full h-full bg-[#1a1023] opacity-50 rounded-2xl group-hover:border-2 group-hover:border-white transition-all duration-300 group-hover:scale-105 group-hover:-translate-x-6 group-hover:-translate-y-5 transform"
        ></div>
      </div>
      {/* Content Section */}
      <div className="w-full md:w-2/3 md:pl-12 flex flex-col justify-center">
        <h2 className="text-lg font-semibold tracking-widest mb-2 flex items-center gap-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          <User className="w-6 h-6 text-purple-400" />
          <span className="border-b-2 border-purple-400 pb-1">ABOUT ME</span>
        </h2>
        <p className="text-white text-base font-semibold mb-1">
          <span className="text-purple-400 font-bold">Hello! I am Aditya Singh</span>
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
          I'm a Creative Frontend Developer
        </h3>
        <p className="text-gray-300 mb-2 text-sm md:text-base">
          I'm very passionate and dedicated to my work. With 2+ years experience as a professional Frontend Developer, I have acquired the skills necessary to build great and premium websites.
        </p>
        <p className="text-gray-400 mb-6 text-xs md:text-sm">
          I specialize in crafting seamless, user-friendly, and visually stunning web experiences. My expertise includes React, TailwindCSS, and Next.js. I love turning complex problems into simple, beautiful, and intuitive designs.
        </p>
        <div className="flex gap-4 mt-2">
          <a
            href="/assets/Aditya Singh - resume.pdf"
            download
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-2 px-6 rounded transition-colors duration-200 shadow-md border border-purple-400"
          >
            DOWNLOAD CV
          </a>
          <a
            href="#contact"
            className="border-2 border-purple-400 text-purple-400 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white font-bold py-2 px-6 rounded transition-colors duration-200 shadow-md"
          >
            HIRE ME
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;