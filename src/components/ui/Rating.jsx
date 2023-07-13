import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({ rating }) => {
  return (
    <div className="gameRating">
      {new Array(Math.floor(rating)).fill(0).map((el, index) => {
        return <FontAwesomeIcon icon="star" key={index} />;
      })}
      {!Number.isInteger(rating) && (
        <FontAwesomeIcon icon="star-half-alt" />
      )}
    </div>
  );
};

export default Rating;
