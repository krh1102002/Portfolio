import React from "react";
import "./scrollUp.css";
import downloadgif from "../../assets/Download.gif";
import resume from "../../assets/resume.pdf";

const ScrollUp = () => {
  return (
    <a href={resume} download className="scrollup">
      <img
        src={downloadgif}
        alt="Download"
        className="scrollup__icon"
        style={{ width: "24px", height: "24px" }}
      />
      <p className="scrollup-text">My Resume</p>
    </a>
  );
};

export default ScrollUp;
