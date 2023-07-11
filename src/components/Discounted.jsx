import React from "react";
import "../scss/_discounted.scss";
import { games } from "../assets/data";
import Game from "./ui/Game";

const Discounted = () => {
  return (
    <section id="discounted">
      <div className="discountedContainer">
        <div className="wrapper">
          <h2 className="discountedTitle">
            Discounted <span className="blue">Games</span>
          </h2>

          <div className="discountedGames">
            {games
              .filter((game) => {
                return game.salePrice > 0;
              })
              .map((game) => {
                return <Game game={game} key={game.id} />;
              })
              .slice(0, 8)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;
