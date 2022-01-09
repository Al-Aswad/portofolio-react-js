import React from "react";
import { Heading } from "../../components";

import "./experience.css";

const Experience = () => {
  return (
    <div className="experience__container section__padding" id="experience">
      <div className="experience__container">
        <Heading title="Experience" subTitle="Work Experience" />
      </div>
      <div className="experience__container-content">
        <section id="cd-timeline" class="cd-container">
          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-movie">1</div>
            <div class="cd-timeline-content">
              <h2>Web Developer</h2>
              <p>
                The beginning of my career as a web developer started at Tauhid
                Production
              </p>
              <span class="cd-date">
                <h5>Web Developer</h5>
                <h4>Tauhid Production</h4>
                <p>2019 - 2019</p>
              </span>
            </div>
          </div>
          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-movie">2</div>
            <div class="cd-timeline-content">
              <h2>Web Developer</h2>
              <p>
                The next most enjoyable journey continued in the logistics
                company, here I learned a lot about the world of work and
                programming
              </p>
              <span class="cd-date">
                <h5>Web Developer</h5>
                <h4>IDExpress(SULSELBATARA)</h4>
                <p>2019 - 2020</p>
              </span>
            </div>
          </div>
          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-movie">3</div>
            <div class="cd-timeline-content">
              <h2>Web Developer</h2>
              <p>
                With high motivation to learn, I leave my comfort zone to seek
                new challenges and learn new things at PT Galesong Group
              </p>
              <span class="cd-date">
                <h5>Web Developer</h5>
                <h4>PT SINAR GALESONG</h4>
                <p>2020 - 2022</p>
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
