import React from "react";
import {scrollToComponent} from "./ScrollTo";
import { Link } from "react-router-dom";
import "./My.css"
import Home from "./Home";
function Navbar() {
  const handleLinkClick = (componentId) => {
    scrollToComponent(componentId);
  };
  return (
    <div className="container-fluid  z-3 fixed-top mt-2 ">
      <nav className="navbar  navbar-expand-lg navbar-dark  rounded p-1 ">
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand">
          <img src="../A (1).png" alt="Logo" width="30" height="24" className ="d-inline-block align-text-top"/>

          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ marginLeft: "auto" }}
            >
              <li className="nav-item ms-2">
                <Link to="/" className="nav-link" onClick={() => handleLinkClick("my")}>
                  <button type="button" class="btn text-white  ">
                    Home
                  </button>
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link  className="nav-link" onClick={() => handleLinkClick("Projects")}>
                  <button type="button" class="btn text-white">
                    Projects
                  </button>
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link  className="nav-link"onClick={() => handleLinkClick("skill")}>
                  <button type="button" class="btn  text-white ">
                    Skills
                  </button>
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link  className="nav-link"onClick={() => handleLinkClick("contact")} >
                  <button type="button" class="btn text-white ">
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
