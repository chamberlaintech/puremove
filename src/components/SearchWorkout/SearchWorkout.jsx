import React, { useState } from "react";
import "./SearchWorkout.css";

const SearchWorkout = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-section">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-form-control">
          <label htmlFor="name" className="h4-text">
            Find Your Perfect Workout
          </label>
          <div className="search-form-submit">
            <input
              type="text"
              id="name"
              value={inputValue}
              onChange={handleChange}
              className="search-form-input"
              placeholder="Search for workouts..."
            />
            <button className="submit-button">SEARCH</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchWorkout;
