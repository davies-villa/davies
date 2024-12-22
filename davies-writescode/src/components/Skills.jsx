import React, { useEffect, useRef } from "react";
import "animate.css";
import "./Skills.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJs,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaDatabase,
  FaSass,
} from "react-icons/fa";

const Skills = () => {
  // Create refs to store skill points for IntersectionObserver
  const skillRefs = useRef([]);

  // Add the observer logic to track skills entering the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            target.classList.add("animate__animated", "animate__slideInUp");
            target.classList.remove("animate__slideOutDown");
          } else {
            target.classList.add("animate__slideOutDown");
          }
        });
      },
      { threshold: 0.2 } // Trigger the animation when 20% of the element is in view
    );

    // Observe each skill point
    skillRefs.current.forEach((el) => observer.observe(el));

    // Clean up observer on unmount
    return () => {
      skillRefs.current.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="skills-container">
      <div className="skills-wrapper">
        <div className="skills-graph">
          {/* Top Row */}
          <div className="skill-point react-skill" ref={(el) => (skillRefs.current[0] = el)}>
            <div className="bubble bg-white text-blue-500">
              <FaReact size={25} />
            </div>
            <div className="skill-name text-blue-500">React</div>
          </div>

          <div className="skill-point html-skill" ref={(el) => (skillRefs.current[1] = el)}>
            <div className="bubble bg-white text-red-500">
              <FaHtml5 size={25} />
            </div>
            <div className="skill-name text-red-500">HTML5</div>
          </div>

          <div className="skill-point css-skill" ref={(el) => (skillRefs.current[2] = el)}>
            <div className="bubble bg-white text-yellow-500">
              <FaCss3Alt size={25} />
            </div>
            <div className="skill-name text-yellow-500">CSS3</div>
          </div>

          {/* Center Row */}
          <div className="skill-point nodejs-skill" ref={(el) => (skillRefs.current[3] = el)}>
            <div className="bubble bg-white text-green-500">
              <FaNodeJs size={25} />
            </div>
            <div className="skill-name text-green-500">Node.js</div>
          </div>

          <div className="skill-point js-skill" ref={(el) => (skillRefs.current[4] = el)}>
            <div className="bubble bg-white text-purple-500">
              <FaJs size={25} />
            </div>
            <div className="skill-name text-purple-500">JavaScript</div>
          </div>

          <div className="skill-point python-skill" ref={(el) => (skillRefs.current[5] = el)}>
            <div className="bubble bg-white text-gray-500">
              <FaPython size={25} />
            </div>
            <div className="skill-name text-gray-500">Python</div>
          </div>

          <div className="skill-point git-skill" ref={(el) => (skillRefs.current[6] = el)}>
            <div className="bubble bg-white text-orange-500">
              <FaGitAlt size={25} />
            </div>
            <div className="skill-name text-orange-500">Git</div>
          </div>

          {/* Bottom Row */}
          <div className="skill-point figma-skill" ref={(el) => (skillRefs.current[7] = el)}>
            <div className="bubble bg-white text-pink-500">
              <FaFigma size={25} />
            </div>
            <div className="skill-name text-pink-500">Figma</div>
          </div>

          <div className="skill-point database-skill" ref={(el) => (skillRefs.current[8] = el)}>
            <div className="bubble bg-white text-teal-500">
              <FaDatabase size={25} />
            </div>
            <div className="skill-name text-teal-500">Database</div>
          </div>

          <div className="skill-point sass-skill" ref={(el) => (skillRefs.current[9] = el)}>
            <div className="bubble bg-white text-pink-600">
              <FaSass size={25} />
            </div>
            <div className="skill-name text-pink-600">Sass</div>
          </div>
        </div>

        {/* Text Section */}
        <div className="skills-description">
          <h2>Skills</h2>
          <p>
            My skills are displayed on a proficiency graph, showing their impact
            and growth over time. I specialize in front-end and back-end
            technologies, building intuitive and responsive applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
