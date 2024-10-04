import React from "react";
import { Link } from "react-router-dom";
import "./WorkoutCard.css";

const WorkoutCard = ({ image, title, id }) => {
  return (
    <Link to={`/workout/${id}`} className="workout-card">
      <div>
        <img src={image} alt={title} />
        <h4 className="h4-text">{title}</h4>
      </div>
    </Link>
  );
};

export default WorkoutCard;
