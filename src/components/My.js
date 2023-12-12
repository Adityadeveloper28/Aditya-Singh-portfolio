import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextTransition, { presets } from "react-text-transition";
import { scrollToComponent } from "./ScrollTo";

import "./My.css";
import myimage from "../components/employee.png";
const TEXTS = ["I AM AN STUDENT", "FULLSTACK DEVELOPER"];
function My() {
  const [index, setIndex] = React.useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);
  const handleLinkClick = (componentId) => {
    scrollToComponent(componentId);
  };
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="container  my">
      <div className="container mb-3">
        <p className="text-warning-emphasis d-flex  head" style={{}}>
          Hey!, I'M ADITYA SINGH
        </p>
      </div>
      <div className="container mb-3">
        <p className="text-white d-flex  tst" style={{}}>
          |
          <TextTransition springConfig={presets.wobbly}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </p>
      </div>
      <div
        className="container text-warning  "
        style={{ fontFamily: "cursive", fontSize: "1rem" }}
      >
        {isSmallScreen && (
          <p
            className=" d-flex justify-content-start"
            style={{ top: "17px", position: "relative" }}
          >
            A dedicated full-stack developer proficient in the MERN stack,
            translating ideas into powerful digital solutions.
          </p>
        )}
        {!isSmallScreen && (
          <p
            className=" d-flex justify-content-center"
            style={{ top: "17px", position: "relative" }}
          >
            A dedicated full-stack developer proficient in the MERN stack,
            translating ideas into powerful digital solutions.
          </p>
        )}
      </div>
      <div className="container " style={{ top: "7px", position: "relative" }}>
        {isSmallScreen && (
          <Link
            className="text-decoration-none"
            onClick={() => handleLinkClick("contact")}
          >
            <button className="btn btn-light ">
              <img className="img" src={myimage} alt="" />
              HIRE ME
            </button>
          </Link>
        )}
        {!isSmallScreen && (
          <Link
            className="text-decoration-none"
            onClick={() => handleLinkClick("contact")}
          >
            <button className="btn btn-light d-flex justify-content-center m-auto">
              <img className="img" src={myimage} alt="" />
              HIRE ME
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default My;
