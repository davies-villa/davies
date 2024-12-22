import React from "react";
import "./AboutMe.css";
import daviesImage from "../assets/davies.png";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        {/* Text Section */}
        <div className="about-description">
          <h2>About Me</h2>
          <p>
            I am a passionate developer with experience in building intuitive,
            responsive, and user-friendly applications. I specialize in front-end
            and back-end technologies, focusing on delivering high-quality projects 
            that meet user needs and provide seamless user experiences.
          </p>
        </div>

        {/* Image Section with Overlay Circles */}
        <div className="about-image">
          <img src={daviesImage} alt="Davies" className="profile-image" />

          {/* Overlay Circles with Details */}
          <div className="info-circle" style={{ top: "30%", left: "5%" }}>
            <span>🎓</span>
            <p className="text-[10px]">Front-End Web Development</p>
          </div>

          <div className="info-circle" style={{ top: "50%", right: "20%" }}>
            <span>💻</span>
            <p className="text-[10px]">Web Development</p>
          </div>

          <div className="info-circle" style={{ bottom: "0%", left: "15%" }}>
            <span>⚽</span>
            <p className="text-[10px]">Tottenham</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
