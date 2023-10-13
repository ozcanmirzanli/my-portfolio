import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import menu from "../../assets/menu.png";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <Link
        to="intro"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="desktopMenu">
        <Link
          to="intro"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          to="skills"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          to="works"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-30}
          duration={500}
          className="desktopMenuListItem"
        >
          Contact
        </Link>
      </div>
      <Link to="contact" smooth={true} offset={-50} duration={500}>
        <button className="desktopMenuBtn">
          <FontAwesomeIcon className="msgBtn" size="xl" icon={faEnvelope} />
          &nbsp; Contact Me
        </button>
      </Link>

      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          to="intro"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          to="skills"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          to="works"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </Link>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
