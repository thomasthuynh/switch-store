import React from "react";
import "../scss/_nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Nav = ({ numberOfItems }) => {
  const menuOpen = () => {
    document.body.classList += "menuOpen";
  };

  const menuClose = () => {
    document.body.classList.remove("menuOpen");
  };

  return (
    <nav>
      <div className="wrapper">
        <div className="navContainer">
          <Link to="/">
            <div className="logoContainer">
              <h1 className="logoTitle">VG Shop</h1>
              {<FontAwesomeIcon icon="vr-cardboard" className="logoIcon" />}
            </div>
          </Link>

          <div className="menuBackdrop">
            <div className="navTop">
              <button className="buttonMenu" onClick={menuClose}>
                <FontAwesomeIcon icon="xmark" />
              </button>
            </div>

            <ul className="menuLinks">
              <li className="menuList">
                <Link to="/" className="navLink homeLink" onClick={menuClose}>
                  Home
                </Link>
              </li>

              <li className="menuList">
                <Link to="/games" className="navLink" onClick={menuClose}>
                  Games
                </Link>
              </li>

              <li className="menuList">
                <Link to="/cart" className="navLink" onClick={menuClose}>Cart</Link>
              </li>
            </ul>
          </div>

          <ul className="navLinks">
            <li className="navList">
              <Link to="/" className="navLink homeLink">
                Home
              </Link>
            </li>

            <li className="navList">
              <Link to="/games" className="navLink gamesNavLink">
                Games
              </Link>
            </li>

            <li className="navCart">
              <Link to="/cart">
                <FontAwesomeIcon icon="shopping-cart" />
              </Link>
              {numberOfItems > 0 && (
                <span className="cartLength">{numberOfItems}</span>
              )}
            </li>

            <button className="buttonMenu" onClick={menuOpen}>
              <FontAwesomeIcon icon="bars" />
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
