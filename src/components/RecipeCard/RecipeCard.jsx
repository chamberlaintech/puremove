import React from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.css";

const RecipeCard = ({ image, title, id }) => {
  return (
    <Link to={`/recipe/${id}`} className="recipe-card">
      <div>
        <img src={image} alt={title} />
        <h4 className="h4-text">{title}</h4>
      </div>
    </Link>
  );
};

export default RecipeCard;
