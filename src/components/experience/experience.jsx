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
        "efined one of the core Kelp Global module's user experiences, ensuring intuitive interactionand increased user satisfaction.",
        "Identified and fixed critical bugs within the module, leading to enhanced system reliability andsmoother user experiences",
      ],
    },
    {
      name: "DFIIE",
      role: "Frontend Developer Intern",
      start: "May 2023",
      end: "Aug 2024",
      imgSrc: dfiie,
      shortDescriptions: [
        "Architected DFIIE's website, combining leadership with expertise in design and development to enhance the digital platform",
        "nnovated a platform within the website, spotlighting startups and fueling their journey by connecting them with DFIIE’s mission and resources.",
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
        "Led the development and design team in creating innovative products for Suvidha Mahila Mandal, showcasing leadership and project execution skills",
        "Acquired comprehensive knowledge in project and team management, enhancing operational efficiency and teamwork during the internship",
        "Mastered diverse aspects of product development, from concept to deployment, contributing to significant learning and growth in a environment",
      ],
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
