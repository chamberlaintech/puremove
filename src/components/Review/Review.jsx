import React from "react";
import "./Review.css";
import { reviews } from "../../constants/data";
import ReviewCard from "../ReviewCard/ReviewCard";

const Review = () => {
  return (
    <div className="section-padding review">
      <div className="review-title">
        <h2 className="h2-text">What Our Members Are Saying</h2>
      </div>
      <div className="reviews">
        {reviews.map((review) => {
          return (
            <ReviewCard
              key={review.id}
              image={review.image}
              name={review.name}
              text={review.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Review;
