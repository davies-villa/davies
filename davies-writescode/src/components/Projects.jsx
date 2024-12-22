import React from "react";
import "./Projects.css";
import project1 from "../assets/tumapics.png";
import project2 from "../assets/Zambezicover.png";
import project3 from "../assets/tumapics.png";
import logo1 from "../assets/Tumalogo.png";
import logo2 from "../assets/Zambezi Giants.svg";
import logo3 from "../assets/tottenham.png";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-wrapper">
        {/* Text Section */}
        <div className="projects-description">
          <h2>My Projects</h2>
          <p>
            Here are some of the projects I've worked on recently. I focus on creating
            engaging, user-friendly, and high-quality applications that deliver results.
          </p>
        </div>

        {/* Project Cards */}
        <div className="projects-cards">
          {/* Left Peeking Card */}
          <div className="project-card left">
            <img src={project1} alt="Project 1" />
            <div className="gradient-overlay"></div>
            <div className="app-logo">
              <img src={logo1} alt="Logo 1" />
            </div>
            <div className="card-content">
              <h3>TumaBloggers</h3>
              <p>Responsive landing page for a tech startup.</p>
            </div>
          </div>

          {/* Center Main Card */}
          <div className="project-card center">
            <img src={project2} alt="Project 2" />
            <div className="gradient-overlay"></div>
            <div className="app-logo">
              <img src={logo2} alt="Logo 2" />
            </div>
            <div className="card-content">
              <h3>Zambezi Giants</h3>
              <p>Full-stack web application with React and Node.js.</p>
            </div>
          </div>

          {/* Right Peeking Card */}
          <div className="project-card right">
            <img src={project3} alt="Project 3" />
            <div className="gradient-overlay"></div>
            <div className="app-logo">
              <img src={logo3} alt="Logo 3" />
            </div>
            <div className="card-content">
              <h3>Eguswini Safaris</h3>
              <p>E-commerce platform with a seamless shopping experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
