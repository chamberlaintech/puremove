import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { recipes } from "../../constants/data";
import "./SingleRecipe.css";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const SingleRecipe = () => {
  const { id } = useParams();
  const [randomRecipes, setRandomRecipes] = useState([]);
  const recipe = recipes.find((r) => r.id === id);

  const getRandomRecipes = () => {
    const filteredRecipes = recipes.filter((r) => r.id !== id);

    const shuffled = filteredRecipes.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  useEffect(() => {
    setRandomRecipes(getRandomRecipes());
  }, [id]);

  if (!recipe) {
    return (
      <div className="section-padding">
        <h2 className="h2-text">Recipe not found</h2>
      </div>
    );
  }

  return (
    <div className="single-recipe-page section-padding">
      <h2 className="h2-text">{recipe.title}</h2>
      <div className="single-recipe-img">
        <img src={recipe.image} alt="image" />
      </div>
      <div className="single-recipe-content">
        <div className="single-recipe-content-ing">
          <h5 className="h5-text">Ingredients</h5>
          <ul className="p-alegreya">
            {Object.values(recipe.ingredients).map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="single-recipe-content-method">
          <h5 className="h5-text">Method</h5>
          <p className="p-alegreya">{recipe.instructions}</p>
        </div>
      </div>
      <div className="random-recipes">
        <h3 className="h3-text">More Recipes</h3>
        <div className="random-recipes-content">
          {randomRecipes.map((randomRecipe) => (
            <RecipeCard
              key={randomRecipe.id}
              title={randomRecipe.title}
              image={randomRecipe.image}
              id={randomRecipe.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
