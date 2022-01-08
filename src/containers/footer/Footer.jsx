import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__logo">
        <h2>Aswad</h2>
      </div>
      <div className="footer__sosial">
        <a href="#">Github</a>
        <a href="#">Facebook</a>
        <a href="#">Linked</a>
        <a href="#">Instagram</a>
      </div>
      <p>hajaraswadkom@gmail.com</p>
      <p class="copyright">@ 2021 Passoloran. All right reserved</p>
    </div>
  );
};

export default Footer;
