import React, { useState, useEffect } from "react";
import "../../scss/_game.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const Game = ({ game }) => {
  const [img, setImg] = useState();

  useEffect(() => {
    const image = new Image();
    image.src = game.url;

    image.onload = () => {
      setTimeout(() => {
          setImg(image);
      }, 300);
    };
  });

  return (
    <div className="game">
      {img ? (
        <div>
          <Link to={`/games/${game.id}`}>
            <figure className="gameImageContainer">
              <img src={game.url} alt="" />
            </figure>
          </Link>

          <div className="gameTitle">
            <Link to={`/games/${game.id}`}>{game.title}</Link>
          </div>

          <Rating rating={game.rating} />
          <Price
            salePrice={game.salePrice}
            originalPrice={game.originalPrice}
          />
        </div>
      ) : (
        <div className="skeletonContainer">
          <div className="gameImgSkeleton"></div>
          <div className="skeleton gameTitleSkeleton"></div>
          <div className="skeleton gameRatingSkeleton"></div>
          <div className="skeleton gamePriceSkeleton"></div>
        </div>
      )}
    </div>
  );
};

export default Game;
