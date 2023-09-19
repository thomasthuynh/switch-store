import React from "react";
import "../scss/_footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="wrapper">
          <Link to="/">
            <figure className="footerLogo">
              {
                <FontAwesomeIcon
                  icon="vr-cardboard"
                  className="footerLogoImg"
                />
              }
            </figure>
          </Link>

          <div className="footerList">
            <Link to="/" className="footerLink">
              Home
            </Link>
            <Link to="/" className="footerLink">
              About
            </Link>
            <Link to="/games" className="footerLink">
              Games
            </Link>
            <Link to="/cart" className="footerLink">
              Cart
            </Link>
          </div>

          <div className="footerCopyright">Copyright &copy; VG Shop 2023</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
