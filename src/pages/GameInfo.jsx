import React from "react";
import "../scss/_gameInfo.scss";
import { gameData } from "../assets/data";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";

const GameInfo = () => {

  const { id } = useParams();

  const game = gameData.find((title) => {
    return +title.id === +id;
  })

  console.log(game)

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
                  src={game.url}
                  alt=""
                  className="gameSelectedImg"
                />
              </figure>

              <div className="gameSelectedDescription">
                <h2 className="gameSelectedTitle">
                  {game.title}
                </h2>

                <Rating rating={game.rating} className="gameRating" />
                <Price
                  salePrice={game.salePrice}
                  originalPrice={game.originalPrice}
                  className="gamePrice"
                />

                <div className="gameSummary">
                  <h3 className="gameSummaryTitle">Summary</h3>

                  <p className="gameSummaryOverview">
                    {game.overview}
                  </p>
                </div>

                <button className="btn">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        <div className="recommendedBooksContainer">
          <div className="wrapper">
            <div className="gameSelectedTop">
              <h2 className="recommendedBooksTitle">Recommended Books</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GameInfo;
