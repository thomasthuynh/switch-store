import React from "react";
import "../scss/_nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Nav = ({ numberOfItems }) => {
  return (
    <nav>
      <div className="wrapper">
        <div className="navContainer">
          <Link to="/">
            <div className="logoContainer">
              <h1 className="logoTitle">VG Shop</h1>
              {<FontAwesomeIcon icon="vr-cardboard" className="logoIcon"/>}
            </div>
          </Link>

          <ul className="navLinks">
            <li className="navList">
              <Link to="/" className="navLink homeLink">
                Home
              </Link>
            </li>

            <li className="navList">
              <Link to="/games" className="navLink gamesLink">
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
              {numberOfItems > 0 && (
                <span className="cartLength">{numberOfItems}</span>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
