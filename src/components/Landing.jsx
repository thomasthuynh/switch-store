import React from "react";
import "../scss/_landing.scss";
import UndrawGame from "../assets/UndrawGame.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="headerContainer">
          <div className="headerDescription">
            <h1>Level up your savings to play more and spend less</h1>
            <h2>Find your next game here at <span className="blue">Switch Shop</span></h2>
            <Link to="" id="features">
              <button className="btn">Browse games</button>
            </Link>
          </div>
          <figure className="headerImageWrapper">
            <img src={UndrawGame} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
