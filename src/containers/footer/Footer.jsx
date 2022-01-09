import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__logo">
        <h2>Aswad</h2>
      </div>
      <div className="footer__sosial">
        <a href="https://github.com/Al-Aswad" target="_blank">
          Github
        </a>
        <a href="https://web.facebook.com/duri.tech/" target="_blank">
          Facebook
        </a>
        <a
          href="https://www.linkedin.com/in/hajar-aswad-6042b7201/"
          target="_blank"
        >
          Linked
        </a>
        <a href="https://www.instagram.com/aswadwk/" target="_blank">
          Instagram
        </a>
      </div>
      <p>hajaraswadkom@gmail.com</p>
      <p class="copyright">@ 2021 Passoloran. All right reserved</p>
    </div>
  );
};

export default Footer;
