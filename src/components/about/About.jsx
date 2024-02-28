import React from "react";
import "./About.css";
import ME from "../../assets/codeee.jpg";
import { FaAward, FaUsers, FaFolder } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+</small>
            </article>
            <article className="about__card">
              <FaFolder className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
            Hello there! I'm Wafa BEN MILOUD, a dedicated full-stack developer driven by a fervor for crafting innovative digital solutions. Embarking on this exciting journey, I am eager to kickstart my career in this dynamic realm. Proficient in HTML, CSS, and JavaScript, I bring along a skill set that extends to prominent front-end frameworks like React and Vue.js. 
            <br /><br />My journey doesn't stop there—I've delved into the back-end landscape, harnessing the power of Node.js, alongside databases like MongoDB and MySQL.

            <br /><br />Your time is truly appreciated for delving into my introduction. Should you wish to explore further, I invite you to peruse my portfolio showcasing some of the projects I've had the privilege to contribute to. I hold the doors wide open for any feedback or suggestions that could be instrumental in honing my skills and enriching my expertise in this ever-evolving field. 
            <br /><br />Thank you for considering my profile!
          </p>
          <a href="#contact" className="btn">
            {" "}
            Let's Talk !
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
