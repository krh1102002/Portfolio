import React from "react";
import "./experience.css";
import suvidha from "../../assets/suvidha.jpeg";
import kelp from "../../assets/kelpglobal_logo.jpeg";
import metlife from "../../assets/metlife.jpg";
import dfiie from "../../assets/dfiie logo.jpg";

const ExperienceSection = () => {
  const ExperienceData = [
    {
      name: "KELP GLOBAL",
      role: "Software Developer Intern",
      start: "Oct 2023",
      end: "Feb 2024",
      imgSrc: kelp,
      shortDescriptions: [
        "Delved into the development of cutting-edge software solutions, enhancing the company's product suite with features that promote user engagement and operational excellence",
        " Demonstrated exceptional problem-solving skills by identifying and addressing software bugs, and improving system performance and stability.",
      ],
    },
    {
      name: "DFIIE",
      role: "Frontend Developer Intern",
      start: "May 2023",
      end: "Aug 2024",
      imgSrc: dfiie,
      shortDescriptions: [
        "Develop a detailed DFIIE website showcasing its purposes, visions, and services.",
        "Include information about its future ambitions and objectives.",
        "Provide a platform for startups to display their ventures.",
      ],
    },
    {
      name: "Suvidha Mahila Mandal",
      role: "Frontend Developer Intern",
      start: "Dec 2022",
      end: "Jan 2023",
      imgSrc: suvidha,
      shortDescriptions: [
        "Lead the development of a strategic website redesign and ensuring that we deliver high-quality results.",
        " Our task is to create a responsive frontend of the website.",
        "The period of internship provided intensive knowledge of team management through hands-on experience working with other team members.",
      ],
    },
    {
      name: "MetLife Foundation",
      role: "Frontend Developer Intern",
      start: "Apr 2022",
      end: "May 2022",
      imgSrc: metlife,
      shortDescriptions: ["lorem23", "lorem24", "lorem22"],
    },
  ];

  return (
    <section id="experience">
      <h2 className="section__title">Where I&apos;ve worked</h2>
      <span className="section__subtitle">My Experience</span>
      <div className="timeline">
        {ExperienceData.map((exper, index) => (
          <div
            className={`container1 ${
              index % 2 === 0 ? "left-container" : "right-container"
            }`}
            key={index}
          >
            <img src={exper.imgSrc} alt={`${exper.name} logo`} />
            <div className="text-box">
              <h2>
                {exper.role}, {exper.name}
              </h2>
              <small>
                {exper.start} - {exper.end}
              </small>
              <ol style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                {exper.shortDescriptions.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ol>
              <span
                className={`${
                  index % 2 === 0
                    ? "left-container-arrow"
                    : "right-container-arrow"
                }`}
              ></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
