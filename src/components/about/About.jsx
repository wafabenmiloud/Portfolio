import React from "react";
import "./About.css";
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
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            👋 Hello! I'm Wafa Ben Miloud, a passionate full-stack developer who specializes in building web and mobile applications. With a love for coding, I bring ideas to life using user-friendly interfaces. <br /><br />

            🌐 Whether it’s building a backend system, creating a responsive frontend, or designing an interface, I’m your go-to person.<br /><br />

            💻 As a full-stack developer, I am comfortable working with a variety of technologies, from front-end languages ​​like HTML, CSS and JavaScript (with frameworks like React and Vue.js) to back-end technologies like Node.js, Express and MongoDB and SQL and other databases. Additionally, I have experience developing mobile applications using frameworks like React Native and Flutter. <br /><br />
            ✨ Let's collaborate and turn your vision into reality! Whether you're looking to build a stunning website or a sleek mobile app, I'm here to make it happen.
            <br /><br />  <a href="#contact" className="btn">
            {" "}
            Let's Talk !
          </a>
          </p>
       
        </div>
      </div>
    </section>
  );
};

export default About;
