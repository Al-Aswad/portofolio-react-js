import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

// BEM -> Block Element Modifier

const Menu = () => (
  <>
    <a href="#">Home</a>
    <a href="#">About Us</a>
    <a href="#">Service</a>
    <a href="#">Why Us</a>
    <a href="#">Project</a>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar__container ">
      <div className="navbar__container-links">
        <div className="navbar__container-logo">
          <h1>Passoloran</h1>
        </div>
        <div className="navbar__container-links_container">
          <Menu />
        </div>
      </div>
      <div className="navbar__conatiner-link-contact">
        <button type="button">Contact Us</button>
      </div>
      <div className="navbar__container-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar__container-menu-container scale-up-center">
            <div className="navbar__container-menu-links">
              <Menu />
            </div>
            <div className="navbar__container-menu-contact">
              <button type="button">Contact Us</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
