import React from "react";
import "./ReviewCard.css";

const ReviewCard = ({ name, text, image }) => {
  return (
    <div className="review-card">
      <img src={image} alt={name} />
      <p className="p-alegreya">"{text}"</p>
      <div className="reviewer-name">
        <h5 className="h5-text">- {name}</h5>
      </div>
    </div>
  );
};

export default ReviewCard;
