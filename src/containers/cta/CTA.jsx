import React from "react";

import "./cta.css";

const CTA = () => {
  return (
    <div className="cta__container section__padding">
      <div className="cta__container-content">
        <div className="cta-content">
          <h2>Lets Work Together</h2>
          <p>tell me what's your problem we solve it together</p>
        </div>
        <div className="cta-button">
          <a
            target="_blank"
            href="https://wa.link/wcukrz"
            type="button"
            // className="primary"
          >
            Say Hello
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
