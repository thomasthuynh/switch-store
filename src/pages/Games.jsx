import React from 'react'
import "../scss/_games.scss";

const Games = () => {
  return (
    <div className="gamesBody">
      <main id="gamesMain">
        <section>
          <div className="gamesContainer">
            <div className="wrapper">
              <div className="gamesHeader">
                <h2 className="gamesHeaderTitle">All Games</h2>
                
                <select id="filter" defaultValue="default">
                  <option value="default" disabled>Sort</option>
                  <option value="lowToHigh">Price, Low to High</option>
                  <option value="highToLow">Price, High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Games