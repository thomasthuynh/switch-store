import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const Game = ({ game }) => {
  return (
    <div className="game">
      <Link to="/games/1">
        <figure className="gameImageContainer">
          <img src={game.url} alt="" />
        </figure>
      </Link>

      <div className="gameTitle">
        <Link to="/games/1">{game.title}</Link>
      </div>

      <Rating rating={game.rating}/>
      <Price salePrice={game.salePrice} originalPrice={game.originalPrice}/>
    </div>
  );
};

export default Game;
