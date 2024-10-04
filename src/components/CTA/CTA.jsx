import React from "react";
import exercise3 from "../../assets/exercise3.jpg";
import recipe6 from "../../assets/recipe6.jpg";
import { Link } from "react-router-dom";
import "./CTA.css";

const CTA = () => {
  return (
    <div className="section-padding flex-center cta">
      <div className="cta-title">
        <h2 className="h2-text">Transform Your Body and Fuel Your Life</h2>
      </div>
      <div className="cta-container">
        <div className="cta-workout">
          <div className="cta-workout-img">
            <img src={exercise3} alt="exercise" />
          </div>
          <div className="cta-workout-content">
            <h5 className="h5-text">
              Workouts to help you move better and feel stronger.
            </h5>
            <p className="p-alegreya">
              Find workouts that match your fitness level and goals. From
              strength to cardio, our expert-designed plans keep you motivated
              and moving forward.
            </p>
            <button className="primary-button">
              <Link to="workout">Explore Workouts</Link>
            </button>
          </div>
        </div>
        <div className="cta-recipe">
          <div className="cta-recipe-img">
            <img src={recipe6} alt="recipe" />
          </div>
          <div className="cta-recipe-content">
            <h5 className="h5-text">
              Delicious recipes to fuel your fitness journey.
            </h5>
            <p className="p-alegreya">
              Fuel your body with nutritious, delicious recipes. Whether you
              need a quick meal or post-workout snack, we've got you covered.
            </p>
            <button className="primary-button">
              <Link to="recipe">Discover Recipes</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
