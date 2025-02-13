import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import WorkExperience from "./components/WorkExperience";
import Footer from "./components/Footer";
import About from "./components/About";
import ToptoBottom from "./button/ToptoBottom";
import CustomCursor from "./button/CustomCursor";
function App() {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />
      <CustomCursor />

      {/* Sections */}
      <Home />
      <About />
      <Project />

      <Skills />
      <WorkExperience />
      <Contact />
      <ToptoBottom />
      <Footer />
    </div>
  );
}

export default App;
