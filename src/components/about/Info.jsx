import React from "react";
import "./about.css";
const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1 Year Working</span>
      </div>
      <div className="about__box">
        <i class="bx bxs-briefcase-alt-2"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">6+ Projects Completed</span>
      </div>
      <div className="about__box">
        <i class="bx bx-support"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
