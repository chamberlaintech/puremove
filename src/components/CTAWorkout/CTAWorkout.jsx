import React from "react";
import WorkoutCard from "../WorkoutCard/WorkoutCard";
import "./CTAWorkout.css";
import { exercises } from "../../constants/data";
import { Link } from "react-router-dom";

const CTAWorkout = () => {
  const selectedExercises = exercises.slice(0, 3);

  return (
    <div className="cta-workout section-padding flex-center">
      <div className="cta-workout-title">
        <h2 className="h2-text">Top Workouts to Maximize Your Results</h2>
      </div>
      <div className="workouts">
        {selectedExercises.map((exercise) => {
          return (
            <WorkoutCard
              id={exercise.id}
              key={exercise.id}
              title={exercise.title}
              image={exercise.image}
            />
          );
        })}
      </div>
      <div className="cta-workout-button">
        <button className="secondary-button">
          <Link to="workout">View More Workouts</Link>
        </button>
      </div>
    </div>
  );
};

export default CTAWorkout;
