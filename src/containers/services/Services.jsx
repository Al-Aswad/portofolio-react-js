import React from "react";
import { Heading } from "../../components";
import Pc from "../../assets/icons/pc.png";
import "./services.css";

const Services = () => {
  return (
    <div className="service__container section__padding">
      <div className="service__container__heading">
        <Heading title="Service" subTitle="We can help you for" />
      </div>
      <div className="service__container-content">
        <div className="service__container-content__card">
          <img src={Pc} alt="pc" />
          <div className="service__container-content__card-content">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              autem ad deserunt.
            </p>
          </div>
        </div>
        <div className="service__container-content__card">
          <img src={Pc} alt="pc" />
          <div className="service__container-content__card-content">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              autem ad deserunt.
            </p>
          </div>
        </div>
        <div className="service__container-content__card">
          <img src={Pc} alt="pc" />
          <div className="service__container-content__card-content">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              autem ad deserunt.
            </p>
          </div>
        </div>
        <div className="service__container-content__card">
          <img src={Pc} alt="pc" />
          <div className="service__container-content__card-content">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              autem ad deserunt.
            </p>
          </div>
        </div>
        <div className="service__container-content__card">
          <img src={Pc} alt="pc" />
          <div className="service__container-content__card-content">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              autem ad deserunt.
            </p>
          </div>
        </div>
        <div className="service__container-content__card">
          <img src={Pc} alt="pc" />
          <div className="service__container-content__card-content">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              autem ad deserunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
