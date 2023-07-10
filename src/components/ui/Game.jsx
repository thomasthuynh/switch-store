import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Game = ({ game }) => {
  return (
    <div className="game">
      <a href="/">
        <figure className="gameImageContainer">
          <img src={game.url} alt="" />
        </figure>
      </a>

      <div className="gameTitle">
        <a href="">{game.title}</a>
      </div>

      <div className="gameRating">
        {new Array(5).fill(0).map((el, index) => {
          return <FontAwesomeIcon icon="star" key={index} />;
        })}
      </div>

      <div className="gamePrice">
        {game.salePrice ? (
          <div>
            <span className="gamePriceNormal">${game.originalPrice}</span>$
            {game.salePrice}
          </div>
        ) : (
          <div>${game.originalPrice}</div>
        )}
      </div>
    </div>
  );
};

export default Game;
