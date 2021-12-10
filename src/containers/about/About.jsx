import React from "react";
import Heading from "../../components/heading/Heading";

import People from "../../assets/img/people.png";
import Progress from "../../components/progress/Progress";
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
        <Heading title="About Us" subTitle="Why we" />
        <div className="about__container-right__description">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            obcaecati, corporis similique cupiditate omnis sint?
          </p>
        </div>
        <div className="about__container-right__skils-container">
          {/* <Progress title="HTML" width="80" />
          <Progress title="CSS" width="70" /> */}
          <Progress title="Angular JS" width="60" />
          <Progress title="React" width="40" />
          <Progress title="Vue" width="40" />
          <Progress title="MYSQL" width="70" />
          <Progress title="CI" width="70" />
          <Progress title="Larvel" width="60" />
        </div>
      </div>
    </div>
  );
};

export default About;
