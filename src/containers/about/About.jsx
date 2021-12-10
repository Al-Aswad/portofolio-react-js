import React from "react";
import Heading from "../../components/heading/Heading";

import People from "../../assets/img/people.png";
import "./about.css";

const About = () => {
  return (
    <div className="about__container section__padding">
      <div className="about__container-left">
        <div className="about__container-left__img">
          <img src={People} alt="people" />
        </div>
      </div>
      <div className="about__container-right">
        <Heading />
        <div className="about__container-right__description">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            obcaecati, corporis similique cupiditate omnis sint?
          </p>
        </div>
        <div className="about__container-right__skils-container">
          <div className="about__container-right__skils-container-skill">
            <div className="about__container-right__skils-container-skill-title">
              <h4>HTML</h4>
              <h4>80</h4>
            </div>
            <progress value="80" max="100"></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
