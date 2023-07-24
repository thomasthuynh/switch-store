import React from "react";
import "../scss/_gameInfo.scss";
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
            <div className="gameSelectedTop">
              <Link to="/games" className="gamesLink">
                <FontAwesomeIcon icon="arrow-left" className="arrowLeft" />
                <h2>Games</h2>
              </Link>
            </div>

            <div className="gameSelected">
              <figure className="gameSelectedFigure">
                <img
                  src="https://images.nintendolife.com/3c28307f2fe0a/legend-of-zelda-tears-of-the-kingdom-cover.cover_300x.jpg"
                  alt=""
                  className="gameSelectedImg"
                />
              </figure>

              <div className="gameSelectedDescription">
                <h2 className="gameSelectedTitle">The Legend of Zelda: Tears of the Kingdom</h2>

                <Rating rating={4.5} className="gameRating"/>
                <Price salePrice={24.99} originalPrice={49.99} className="gamePrice"/>

                <div className="gameSummary">
                  <h3 className="gameSummaryTitle">Summary</h3>

                  <p className="gameSummaryOverview">
                  The adventure is yours to create in the Legend of Zelda: Tears of the Kingdom for Nintendo Switch. In this sequel to The Legend of Zelda: Breath of the Wild, you’ll decide your own path through sprawling landscapes and mysterious islands floating in the vast skies. Can you harness the power of Link’s new abilities to fight back against the malevolent forces that threaten the kingdom?
                  </p>
                </div>

                <button className="btn">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GameInfo;
