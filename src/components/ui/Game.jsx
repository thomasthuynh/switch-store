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
        {new Array(Math.floor(game.rating)).fill(0).map((el, index) => {
          return <FontAwesomeIcon icon="star" key={index} />;
        })}
        {
          !Number.isInteger(game.rating) && <FontAwesomeIcon icon="star-half-alt" />
        }
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
