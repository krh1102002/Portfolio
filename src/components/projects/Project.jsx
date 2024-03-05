/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./project.css";
import projectData from "./data";
const Project = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">
        Here you will find some of the personal projects that I created.
      </span>
      <div className="container">
        {projectData.map((item, index) => (
          <div className="row" key={index}>
            <div className="col-md-5">
              <img src={item.image} />
            </div>
            <div className="col-md-7 ">
              <div>
                <h3 className="project__title">
                  {index + 1}. {item.title}
                </h3>
                <p className="project__description">{item.description}</p>
                <div className="project__btn">
                  <a
                    href={item.link}
                    target="_blank"
                    className="live__btn"
                    rel="noreferrer"
                  >
                    <button className="btn btn-dark">
                      Live <i className="bx bx-link"></i>
                    </button>
                  </a>
                  <a href={item.gitLink} target="_blank" rel="noreferrer">
                    <button className="btn btn-dark">
                      Code <i className="bx bx-code-alt"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    </section>
  );
};

export default Project;
