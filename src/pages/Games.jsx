import React, { useEffect, useState } from "react";
import "../scss/_games.scss";
import Game from "../components/ui/Game";
import { gameData } from "../assets/data";

const Games = () => {
  const [games, setGames] = useState(gameData);

  const filterGames = (filter) => {
    if (filter === "lowToHigh") {
      setGames(
        games
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      );
    }

    if (filter === "highToLow") {
      setGames(
        games
          .slice()
          .sort(
            (a, b) =>
              (b.salePrice || b.originalPrice) -
              (a.salePrice || a.originalPrice)
          )
      );
    }

    if (filter === "rating") {
      setGames(games.slice().sort((a, b) => (b.rating) - (a.rating)))
    }


  };

  return (
    <div className="gamesBody">
      <main id="gamesMain">
        <section>
          <div className="gamesContainer">
            <div className="wrapper">
              <div className="gamesHeader">
                <h2 className="gamesHeaderTitle">All Games</h2>
                <select
                  id="filter"
                  defaultValue="default"
                  onChange={(e) => filterGames(e.target.value)}
                >
                  <option value="default" disabled>
                    Sort
                  </option>
                  <option value="lowToHigh">Price, Low to High</option>
                  <option value="highToLow">Price, High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>

              <div className="games">
                {games.map((game) => {
                  return <Game game={game} key={game.id} />;
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Games;
