import React from "react";
import "../scss/_highlights.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="highlightsContainer">
        <div className="wrapper">
          <h2 className="highlightsTitle">
            Why choose <span className="blue">VG Shop?</span>
          </h2>
          <div className="highlightContainer">

            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Easy and Quick"
              para="Get access to the game you purchased instantly"
            />

            <Highlight
              icon={<FontAwesomeIcon icon="gamepad" />}
              title="1000+ Games"
              para="Nintendo Switch games from all your favourite categories"
            />

            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              title="Affordable"
              para="Get your hands on popular titles for as little as $10"
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
