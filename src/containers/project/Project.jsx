import React from "react";
import { Heading } from "../../components";
import projectImg from "../../assets/img/project.png";
import "./project.css";

const Project = () => {
  return (
    <div className="project__container section__padding" id="project">
      <Heading title="Project" subTitle="Latest Project" />
      <div className="project__container-content__container">
        <div className="project__container-content">
          <div className="project__card">
            <img src={projectImg} alt="project" />
          </div>
          <h4>HR(Payroll)</h4>
          <p>2020</p>
        </div>
        <div className="project__container-content">
          <div className="project__card">
            <img src={projectImg} alt="project" />
          </div>
          <h4>HR(Payroll)</h4>
          <p>2020</p>
        </div>
        <div className="project__container-content">
          <div className="project__card">
            <img src={projectImg} alt="project" />
          </div>
          <h4>HR(Payroll)</h4>
          <p>2020</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
