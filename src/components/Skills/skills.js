import React from "react";
import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faSquareJs,
  faCss3Alt,
  faHtml5,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import UIDesign from "../../assets/ui-design.png";
import AppDesign from "../../assets/app-design.png";
import WebDesign from "../../assets/website-design.png";

function Skills() {
  return (
    <section id="skills">
      <span className="skillTitle">What do I do?</span>
      <span className="skillDesc">
        As a junior developer, I am passionate about staying up-to-date with the
        latest trends and technologies in the ever-evolving world of web
        development. My goal is to contribute innovative solutions and
        collaborate with teams to build visually appealing and user-friendly
        websites. Eager to learn and grow, I am excited about the prospect of
        contributing my skills to exciting projects and expanding my horizons in
        the dynamic field of front-end development.
        <div className="skillLogos">
          <FontAwesomeIcon
            className="icon"
            icon={faHtml5}
            size="4x"
            style={{ color: "#ffffff" }}
          />
          <FontAwesomeIcon
            className="icon iconCss"
            icon={faCss3Alt}
            size="4x"
            style={{ color: "#ffffff" }}
          />
          <FontAwesomeIcon
            className="icon"
            icon={faReact}
            size="4x"
            spin
            style={{ color: "#ffffff" }}
          />
          <FontAwesomeIcon
            className="icon iconJs"
            icon={faSquareJs}
            size="4x"
            style={{ color: "#ffffff" }}
          />
          <FontAwesomeIcon
            className="icon"
            icon={faSass}
            size="4x"
            style={{ color: "#ffffff" }}
          />
        </div>
        <div className="skillBars">
          <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>UI/UX Design</h2>
              <p>
                I craft visually stunning designs and intuitive interactions. My
                passion lies in creating interfaces that not only look beautiful
                but also feel natural to navigate.
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />

            <div className="skillBarText">
              <h2>React.js Development</h2>
              <p>
                I specialize in crafting dynamic and responsive web applications
                using the magic of React.js. With an eye for detail and a
                passion for clean code, I transform ideas into immersive user
                experiences.
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Javascript Development</h2>
              <p>
                Step into a world of limitless possibilities where creativity
                meets functionality. With my experience of JavaScript, I
                transform static websites into dynamic, interactive experiences.
              </p>
            </div>
          </div>
        </div>
      </span>
    </section>
  );
}

export default Skills;
