import React from "react";
import "./Portfolio.css";
import COT from "../../assets/cot.png";
import BrainGym from "../../assets/brainGym.png";
import Go from "../../assets/gov.png";
import BLOG from "../../assets/blogapp.png";
import MedApp from "../../assets/medapp.png";
import quiz from "../../assets/quiz.png";
import math from "../../assets/math.png";
import elec from "../../assets/election.PNG";
import cow from "../../assets/coworking.png";

const data = [
  {
    id: 1,
    image: quiz,
    title: "MERNQuiz",
    description:
      "Welcome to MERNQuiz. Our platform is perfect for beginners and experts alike who want to test their knowledge and learn new things about this technology stack.",
    code: "https://github.com/wafabenmiloud/quiz",
    demo: "https://quiz-p9dl.onrender.com/",
    skills: ["HTML", "CSS", "React JS", "Node JS", "MongoDB"],
  },
  {
    id: 2,
    image: BrainGym,
    title: "CourseBridge",
    description:
      "CourseBridge is a platform designed to bridge the gap between students and the latest courses and industry news.",
    code: "https://github.com/wafabenmiloud/brainGym",
    demo: "https://brain-gym.vercel.app/",
    skills: ["HTML", "CSS", "React JS"],
  },
  {
    id: 3,
    image: Go,
    title: "Govact",
    description:
      "Hammam Lif Connect is a community-driven platform that aims to connect the residents of Hammam Lif with their local municipality. ",
    code: "https://github.com/wafabenmiloud/Govact",
    demo: "https://govact.onrender.com/",
    skills: ["HTML", "CSS", "React JS", "Node JS", "MongoDB"],
  },
  {
    id: 4,
    image: BLOG,
    title: "CodeQuery",
    description:
      "CodeQuery is a platform where programmers from all around the world can come together to share and solve programming challenges, ask and answer questions, and collaborate on projects.",
    code: "https://github.com/wafabenmiloud/blogApp",
    demo: "https://blog-xj3p.onrender.com/",
    skills: ["HTML", "CSS", "React JS", "Node JS", "MongoDB"],
  },
  {
    id: 5,
    image: MedApp,
    title: "HealthBook.",
    description:
      "HealthBook is a comprehensive appointment booking platform that connects patients with their preferred doctors.",
    code: "https://github.com/wafabenmiloud/medapp",
    demo: "",
    skills: ["Flutter", "Node JS", "MongoDB"],
  },
  {
    id: 6,
    image: COT,
    title: "IoT Innovate",
    description:
      "Welcome to IoT Innovate, the collaborative hub for IoT developers around the world. Join our community today and be a part of the IoT revolution!",
    code: "https://github.com/wafabenmiloud/cot",
    demo: "https://cot.vercel.app/",
    skills: ["HTML", "CSS", "JavaScript","Bootstrap"],
  },
  {
    id: 7,
    image: cow,
    title: "Coworking Space",
    description:
      "",
    code: "https://github.com/wafabenmiloud/CoworkingApp",
    demo: "",
    skills: ["Flutter", "MySQL"],
  },
  {
    id: 8,
    image: elec,
    title: "Elections Game",
    description:
      "",
    code: "https://github.com/wafabenmiloud/ElectionGame",
    demo: "",
    skills: ["Flutter", "Sqlite"],
  },
  {
    id: 9,
    image: math,
    title: "Mathotop",
    description:
      "",
    code: "https://github.com/wafabenmiloud/math",
    demo: "",
    skills: ["HTML", "CSS", "React JS", "Node JS", "MongoDB"],
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="portfolio__container">
        {data.map(
          ({ id, image, title, description, code, demo, skills, video }) => {
            return (
              <div key={id} className="card">
                <div className="img">
                    <img src={image} alt=""/>
                </div>
               <div className="text">
               <div className="title__content">
                  <h3>{title}</h3>
                  <hr className="divider" />
                </div>
                <p className="desc__content">{description}</p>
                <div>
                  <ul className="tags">
                    {skills.map((skill, index) => {
                      return (
                        <li className="tag" key={index}>
                          {skill}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <ul className="content">
                  <a href={code} className="btn" target="_blank">
                    Code Source
                  </a>
                  <a href={demo} className="btn" target="_blank">
                    Live Demo
                  </a>
                </ul>
               </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
