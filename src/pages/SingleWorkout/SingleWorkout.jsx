import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { exercises } from "../../constants/data";
import WorkoutCard from "../../components/WorkoutCard/WorkoutCard";
import { PiBarbellFill } from "react-icons/pi";
import { GiBiceps } from "react-icons/gi";
import "./SingleWorkout.css";

const SingleWorkout = () => {
  const { id } = useParams();
  const [randomExercises, setRandomExercises] = useState([]);
  const exercise = exercises.find((r) => r.id === id);

  const getRandomExercises = () => {
    const filteredExercises = exercises.filter((r) => r.id !== id);

    const shuffled = filteredExercises.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  useEffect(() => {
    setRandomExercises(getRandomExercises());
  }, [id]);

  if (!exercise) {
    return (
      <div className="section-padding">
        <h2 className="h2-text">No exercises found</h2>
      </div>
    );
  }

  return (
    <div className="section-padding single-workout-page">
      <div className="single-workout-heading">
        <div className="single-workout-heading-img">
          <img src={exercise.image} alt="workout" />
        </div>
        <div className="single-workout-heading-text">
          <h2 className="h2-text">{exercise.title}</h2>
          <p className="p-alegreya">{exercise.desc}</p>
          <div className="single-workout-heading-logos">
            <div className="single-workout-heading-logos-frst">
              <GiBiceps />
              <span className="footer-subheading">{exercise.target}</span>
            </div>
            <div className="single-workout-heading-logos-scnd">
              <PiBarbellFill />
              <span className="footer-subheading">{exercise.equipment}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="random-workouts">
        <h3 className="h3-text">More Workouts</h3>
        <div className="random-workouts-content">
          {randomExercises.map((randomExercise) => (
            <WorkoutCard
              key={randomExercise.id}
              id={randomExercise.id}
              title={randomExercise.title}
              image={randomExercise.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleWorkout;
