import React, { useState } from "react";
import SearchRecipe from "../../components/SearchRecipe/SearchRecipe";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { recipes } from "../../constants/data";
import "./Recipe.css";

const Recipe = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.ing1
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.ing2.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="recipe-page section-padding">
      <h2 className="h2-text">Recipes</h2>
      <SearchRecipe setSearchTerm={setSearchTerm} />
      <div
        className={`recipe-list ${
          filteredRecipes.length === 0 ? "no-results" : ""
        }`}
      >
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))
        ) : (
          <h4 className="h4-text">No recipes found</h4>
        )}
      </div>
    </div>
  );
};

export default Recipe;
