import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6llo54q",
        "template_gkf0jvn",
        form.current,
        "0RhUVx2nHKR5FEArh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    if (name.length === 0) {
      setError(true);
      setShowSuccess(false);
    }

    if (email.length === 0) {
      setError(true);
      setShowSuccess(false);
    }

    if (message.length === 0) {
      setError(true);
      setShowSuccess(false);
    }
  };

  return (
    <section className="contactPage">
      <div className="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <div className="hideContact">
          <span className="contactDesc">
            Please fill out the form below to discuss any work opportunities.
          </span>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              className="name"
              name="from_name"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
            />
            {error && name.length <= 0 ? <label>Name is required</label> : ""}

            <input
              type="email"
              className="email"
              name="from_email"
              placeholder="Your E-Mail"
              onChange={(e) => setEmail(e.target.value)}
            />

            {error && email.length <= 0 ? (
              <label>E-mail is required</label>
            ) : (
              ""
            )}
            <textarea
              className="msg"
              name="message"
              rows="5"
              placeholder="Your Message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            {error && message.length <= 0 ? (
              <label>Message is required</label>
            ) : (
              ""
            )}
            <div className="popup" id="popup">
              <button
                type="submit"
                value="Send"
                className="submitBtn"
                onClick={() => setShowSuccess(true)}
              >
                Submit
              </button>
              {showSuccess ? (
                <div className="popupMsg">
                  <h1>Thanks!</h1>
                  <p>Your message has been successfully sent!</p>
                </div>
              ) : null}
            </div>
          </form>
        </div>
        <div className="links">
          <a href="https://www.linkedin.com/in/%C3%B6zcan-mirzanli-934759254/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="link"
              size="4x"
              style={{ color: "#ffffff" }}
            />
          </a>
          <a href="https://github.com/ozcanmirzanli">
            <FontAwesomeIcon
              icon={faGithubSquare}
              className="link"
              size="4x"
              style={{ color: "#ffffff" }}
            />{" "}
          </a>
          <a href="https://www.instagram.com/secondheartbat/">
            <FontAwesomeIcon
              icon={faSquareInstagram}
              className="link"
              size="4x"
              style={{ color: "#ffffff" }}
            />{" "}
          </a>
          &nbsp;
        </div>
      </div>
    </section>
  );
};

export default Contact;
