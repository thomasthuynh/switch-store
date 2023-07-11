import React from 'react'
import "../scss/_footer.scss"
import Logo from "../assets/SwitchLogo.svg"

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="wrapper">
          <a href="/">
            <figure className="footerLogo">
              <img src={Logo} alt="" className="footerLogoImg" />
            </figure>
          </a>

          <div className="footerList">
            <a href="/" className="footerLink">Home</a>
            <a href="#highlights" className="footerLink">About</a>
            <a href="/games" className="footerLink">Games</a>
            <a href="/cart" className="footerLink">Cart</a>
          </div>

          <div className="footerCopyright">
            Copyright Switch Shop 2023
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer