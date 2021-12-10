import React from "react";
import "./progress.css";

const Progress = ({ title, width }) => {
  return (
    <div className="progress__container-right__skils-container-skill">
      <div className="progress__container-right__skils-container-skill-title">
        <h6>{title}</h6>
        <h6>{width}%</h6>
      </div>
      <div className="progress__container-right__progress">
        <div style={{ width: `${width}.%` }}></div>
      </div>
    </div>
  );
};

export default Progress;
