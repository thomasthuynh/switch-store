import React from "react";
import { gameData } from "../assets/data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";

const GameInfo = () => {
  return (
    <div className="gamesBody">
      <main id="gamesMain">
        <div className="gamesContainer">
          <div className="wrapper">
            <div className="bookSelectedTop">
              <Link to="/games" className="gamesLink">
                <FontAwesomeIcon icon="arrow-left" /><h2>Games</h2>
              </Link>
            </div>

            <div className="gameSelected">
              <figure className="gameSelectedFigure">
                <img src="https://images.nintendolife.com/3c28307f2fe0a/legend-of-zelda-tears-of-the-kingdom-cover.cover_300x.jpg" alt="" className="bookSelectedImg" />
              </figure>

              <div className="gameSelectedDescription"><h2>The Legend of Zelda: Tears of the Kingdom</h2></div>
            </div>

            <Rating rating={4.5}/>
            <Price salePrice={24.99} originalPrice={49.99}/>

            <div className="gameSummary">
              <h3 className="gameSummaryTitle">Summary</h3>

              <p className="gameSummaryOverview">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, itaque possimus porro enim facilis totam voluptate voluptatibus atque. Quasi, eos reprehenderit ut odit incidunt nihil!
              </p>
            </div>

            <button className="btn">Add to Cart</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GameInfo;
