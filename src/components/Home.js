import React from "react";
import Navbar from "./Navbar";
import My from "./My";
import Projects from "./Projects";
import "./My.css";
import Skill from "./Skill"
import Last from './Last'
import Contact from "./Contact";
import { ToastContainer } from "react-toastify";

function Home() {
  return (
    <>
      <Navbar/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="MY" id="my">
        <My />
      </div>
      <div className="pro" id="Projects">
        <Projects />
      </div>
      <div className="skill" id="skill">
        <Skill />
      </div>
      <div className="contact mt-5" id="contact">
        <Contact />
      </div>
      <Last />
    </>
  );
}

export default Home;
