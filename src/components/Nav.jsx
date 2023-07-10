import React from "react";
import "../scss/_nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SwitchLogo from '../assets/SwitchLogo.svg';

const Nav = () => {
  return (
    <nav>
      <div className="wrapper">
      <div className="navContainer">
        <a href="/">
          <img src={SwitchLogo} alt="" className="logo" />
        </a>

        <ul className="navLinks">

          <li className="navList">
            <a href="/" className="navLink">
              Home
            </a>
          </li>

          <li className="navList">
            <a href="/" className="navLink">
              Games
            </a>
          </li>

          {/* <button className="buttonMenu">
            <FontAwesomeIcon icon="bars" />
          </button> */}

          <li className="navCart">
            <a href="/cart">
              <FontAwesomeIcon icon="shopping-cart" />
            </a>
          </li>

        </ul>
      </div>
      </div>
    </nav>
  );
};

export default Nav;
