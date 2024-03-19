import React from "react";
import "./footer.css";
import socialData from "./data";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container  container">
        <div className="row">
          <div className="col-md-9">
            <div className="footer__title">
              <h1 className="footer__title-name mb-md-3 mb-3">Kunal Hulke</h1>
              <p className="footer__description">
                Full Stack Web Developer dedicated to building impactful web
                solutions that drive product success. Expert in seamless
                front-end and back-end integration for enhanced user
                experiences.
              </p>
            </div>
          </div>
          <div className="col-md-3 social_link">
            <div className="footer__social">
              <h1 className="footer__title-name mb-md-3 mt-4 mt-md-0">
                Socials
              </h1>
              {socialData.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="footer__social-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class={item.iconName}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <span className="footer__copy">
          &#169; Copyright. Made by &nbsp;
          <strong>Kunal Hulke</strong>.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
