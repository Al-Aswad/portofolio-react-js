import React from "react";
import { Heading } from "../../components";
import ide24mks from "../../assets/img/hride24.png";
import sro from "../../assets/img/sro.png";
import cp from "../../assets/img/cphyundaigalesong.png";
import "./project.css";

const Project = () => {
  return (
    <div className="project__container section__padding" id="project">
      <Heading title="Project" subTitle="Latest Project" />
      <div className="project__container-content__container">
        <div className="project__container-content">
          <div className="project__card">
            <img src={ide24mks} alt="project" />
          </div>
          <div class="project__desc">
            <h4>HR(Payroll)</h4>
            <p>2020</p>
          </div>
        </div>
        <div className="project__container-content">
          <div className="project__card">
            <img src={sro} alt="project" />
          </div>
          <div class="project__desc">
            <h4>SRO(Service Relation)</h4>
            <p>2020</p>
          </div>
        </div>
        <div className="project__container-content">
          <div className="project__card">
            <img src={cp} alt="project" />
          </div>
          <div class="project__desc">
            <h4>Company Profile Hyundai Galesong</h4>
            <p>2021</p>
          </div>
        </div>
        {/* <div className="project__container-content">
          <div className="project__card">
            <img src={sro} alt="project" />
          </div>
          <h4>SRO(Service Relation)</h4>
          <p>2020</p>
        </div>
        <div className="project__container-content">
          <div className="project__card">
            <img src={cp} alt="project" />
          </div>
          <h4>Company Profile Hyundai Galesong</h4>
          <p>2021</p>
        </div> */}
      </div>
    </div>
  );
};

export default Project;
