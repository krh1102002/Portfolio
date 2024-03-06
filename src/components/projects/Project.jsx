import React from "react";
import { Fade } from "react-awesome-reveal";
import "./project.css";
import projectData from "./data";
const Project = () => {
  return (
    <section className="projects section" id="projects">
      <Fade cascade damping={0.1}>
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">
          Here you will find some of the personal projects that I created.
        </span>
      </Fade>
      <div className="container">
        {projectData.map((item, index) => (
          <Fade key={item.id || index} cascade damping={0.1}>
            <div className="row">
              <div className="col-md-5">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="col-md-7">
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
                      rel="noopener noreferrer"
                    >
                      <button className="btn btn-dark">
                        Live <i className="bx bx-link"></i>
                      </button>
                    </a>
                    <a
                      href={item.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn btn-dark">
                        Code <i className="bx bx-code-alt"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Project;
