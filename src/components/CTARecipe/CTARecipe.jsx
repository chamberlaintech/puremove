import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./CTARecipe.css";
import { recipes } from "../../constants/data";
import { Link } from "react-router-dom";

const CTARecipe = () => {
  const selectedRecipes = recipes.slice(0, 3);
  return (
    <div className="cta-recipe section-padding flex-center">
      <div className="cta-recipe-title">
        <h2 className="h2-text">Top Workouts to Maximize Your Results</h2>
      </div>
      <div className="recipes">
        {selectedRecipes.map((recipe) => {
          return (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
            />
          );
        })}
      </div>
      <div className="cta-recipe-button">
        <button className="secondary-button">
          <Link to="recipe">View More Workouts</Link>
        </button>
      </div>
    </div>
  );
};

export default CTARecipe;
