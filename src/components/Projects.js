import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./My.css";
function Projects() {
  return (
    <div className="container-fluid mt-5 ">
      <hr className="text-white"></hr>

      <h1 className="text-white text-center PR p-2">
        MY PROJECTS{" "}
      </h1>
      <hr className="text-light"></hr>
      <div className="container mt-3 ">
      <p className="text-white text-center p-2 para">
        I'm a passionate web developer skilled in crafting visually appealing
        and user-friendly websites. With a strong understanding of both frontend
        and backend, I bring a keen eye for detail to deliver seamless and
        engaging web experiences.
      </p></div>
      <div className="container mb-5">
        <div className="row m-auto p-2 mt-5 ">
          <div className="col mb-4 d-flex justify-content-center">
            <div className="card  " style={{ width: "20rem" }}>
              <div className="card-body">
                <h3 className="prh">Expert_cv generator</h3>
                <hr></hr>
                <p>
                  here an basic mern website to create an cv for the
                   employees from different sectors to create there cv with signin and signup options
                </p>
                <Link className="btn btn-dark" to="https://combative-goat-toga.cyclic.app/">
                  click to visit &rarr;
                </Link>
              </div>
            </div>
          </div>
          <div className="col  mb-4 d-flex justify-content-center">
            <div className="card " style={{ width: "20rem" }}>
              <div className="card-body">
                <h3 className="prh">Food Counter website </h3>
                <hr></hr>
                <p>
                 Here an website calculate your total calories consumed with interactive cards 
                display with several data.
                </p>
                <Link className="btn btn-dark" to="https://foodcounter-frontend.vercel.app/">
                  click to visit &rarr;
                </Link>
              </div>
            </div>
          </div>
          <div className="col  mb-4 d-flex justify-content-center">
            <div className="card  " style={{ width: "20rem" }}>
              <div className="card-body">
                <h3 className="prh">Pizza hut clone </h3>
                <hr></hr>
                <p>
                  Pure Html CSS and Javascript  for developing an website and also 3d card carousel animation application.
                </p>
                <Link className="btn btn-dark" to="https://pizza-hut-website.vercel.app/">
                  click to visit &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Link className="btn btn-light " to="https://github.com/Adityadeveloper28">
            {" "}
            click here visit more projects &rarr;{" "}
          </Link>
        </div>
      </div>
      <hr className="text-white"></hr>
    </div>
  );
}

export default Projects;
