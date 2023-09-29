import React, { useState } from "react";
import "../scss/_gameInfo.scss";
import { gameData } from "../assets/data";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import Game from "../components/ui/Game";

const GameInfo = ({ addToCart, cart }) => {
  const { id } = useParams();

  const game = gameData.find((title) => {
    return +title.id === +id;
  });

  const addGameToCart = (game) => {
    addToCart(game);
  };

  const gameExistsInCart = () => {
    return cart.find((game) => +game.id === +id);
  };

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

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
                <img src={game.url} alt="" className="gameSelectedImg" />
              </figure>

              <div className="gameSelectedDescription">
                <h2 className="gameSelectedTitle">{game.title}</h2>

                <Rating rating={game.rating} className="gameRating" />
                <Price
                  salePrice={game.salePrice}
                  originalPrice={game.originalPrice}
                  className="gamePrice"
                />

                <div className="gameSummary">
                  <h3 className="gameSummaryTitle">Summary</h3>

                  <p className="gameSummaryOverview">{game.overview}</p>
                </div>

                {gameExistsInCart() ? (
                  <Link to="/cart">
                    <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addGameToCart(game)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="recommendedGamesContainer">
          <div className="wrapper">
            <div className="recommendedGamesTop">
              <h2 className="recommendedGamesTitle">Recommended Games</h2>
            </div>
            <div className="recommendedGames">
              {gameData
                .filter((game) => {
                  return game.rating === 5 && +game.id !== +id;
                })
                .slice(0, 4)
                .map((game) => {
                  return <Game game={game} key={game.id} />;
                })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GameInfo;
