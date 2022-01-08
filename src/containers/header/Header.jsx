import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import People from "../../assets/img/ai.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header__container section__padding">
      {/* <div className="header__container-sosial-media">
        <div className="header__container-sosial-media-card">
          <span>
            <AiFillGithub />
          </span>
          <span>
            <AiFillInstagram />
          </span>
          <span>
            <AiFillFacebook />
          </span>
          <span>
            <AiFillLinkedin />
          </span>
        </div>
      </div> */}
      <div className="header__container-content">
        <div className="header__container-content-container">
          <div>
            <p>Hello, I'M</p>
            <h1 className="gradient__text">HAJAR ASWAD</h1>
            <h4>Web Developer</h4>
          </div>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p> */}
          {/* <div>
            <button type="button" className="primary">
              Say Hello
            </button>
          </div> */}
        </div>
      </div>
      {/* <img src={People} alt="people" /> */}
    </div>
  );
};

export default Header;
