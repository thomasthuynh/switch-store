import React from "react";
import "../scss/_explore.scss"

const Explore = () => {
  return (
    <section id="explore">
      <div className="exploreContainer">
        <div className="wrapper">
          <h2 className="exploreTitle">
            Explore More <span className="blue">Games</span>
          </h2>
          <a href="/">
            <button className="btn">Explore Games</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Explore;
