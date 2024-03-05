import React from "react";
import "./scrollUp.css";
import resume from "../../assets/resume.pdf";
const ScrollUp = () => {
  return (
    <a href={resume} download className="scrollup">
      <i className="bx bx-download scrollup__icon"></i>
      <p className="scrollup-text">My Resume</p>
    </a>
  );
};

export default ScrollUp;
