import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName"> Özcan</span> <br /> Web Developer and
          Designer
        </span>

        <p className="introPara">
          Greetings! I am a front-end developer with a keen enthusiasm for
          crafting engaging and intuitive web experiences. Proficient in
          JavaScript and React, I possess the skills necessary to bring creative
          designs to life with functional and responsive user interfaces.
        </p>
        <Link to="contact" smooth={true} duration={500}>
          <button className="btn">
            <FontAwesomeIcon icon={faBriefcase} /> &nbsp; Hire me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
