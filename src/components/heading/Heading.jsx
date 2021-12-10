import React from "react";

import "./heading.css";

const Heading = ({ title, subTitle }) => {
  return (
    <div className="heading">
      <h4>{title}</h4>
      <h1>{subTitle}</h1>
      <div />
    </div>
  );
};

export default Heading;
