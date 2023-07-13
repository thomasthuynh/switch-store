import React from "react";
import "../scss/_nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SwitchLogo from "../assets/SwitchLogo.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="wrapper">
        <div className="navContainer">
          <Link to="/">
            <img src={SwitchLogo} alt="" className="logo" />
          </Link>

          <ul className="navLinks">
            <li className="navList">
              <Link to="/" className="navLink">
                Home
              </Link>
            </li>

            <li className="navList">
              <Link to="/games" className="navLink">
                Games
              </Link>
            </li>

            {/* <button className="buttonMenu">
            <FontAwesomeIcon icon="bars" />
          </button> */}

            <li className="navCart">
              <Link to="/cart">
                <FontAwesomeIcon icon="shopping-cart" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
