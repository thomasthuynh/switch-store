import React from "react";
import "../scss/_featured.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Game from "./ui/Game";
import { gameData } from "../assets/data";

const Featured = () => {

  return (
    <section id="featured">
      <div className="featuredContainer">
        <div className="wrapper">
          <h2 className="featuredTitle">
            Featured <span className="blue">Games</span>
          </h2>

          <div className="games">
            {gameData
              .filter((game) => {
                return game.rating === 5;
              })
              .slice(0, 4)
              .map((game) => {
                return <Game game={game} key={game.id}/>;
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
