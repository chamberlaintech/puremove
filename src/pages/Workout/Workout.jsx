import React, { useState } from "react";
import SearchWorkout from "../../components/SearchWorkout/SearchWorkout";
import WorkoutCard from "../../components/WorkoutCard/WorkoutCard";
import { exercises } from "../../constants/data";
import "./Workout.css";

const Workout = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredExercises = exercises.filter(
    (exercise) =>
      exercise.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exercise.target.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exercise.equipment.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="workout-page section-padding">
      <h2 className="h2-text">Workouts</h2>
      <SearchWorkout setSearchTerm={setSearchTerm} />
      <div
        className={`workout-list ${
          filteredExercises.length === 0 ? "no-results" : ""
        }`}
      >
        {filteredExercises.length > 0 ? (
          filteredExercises.map((exercise) => (
            <WorkoutCard key={exercise.id} {...exercise} />
          ))
        ) : (
          <h4 className="h4-text">No workouts found</h4>
        )}
      </div>
    </div>
  );
};

export default Workout;
