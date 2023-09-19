import React from "react";
import "../scss/_explore.scss"
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <section id="explore">
      <div className="exploreContainer">
        <div className="wrapper">
          <h2 className="exploreTitle">
            Explore More <span className="blue">Games</span>
          </h2>
          <Link to="/games">
            <button className="btn">Explore Games</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Explore;
