import React, { useState } from "react";
import "./SearchRecipe.css";

const SearchRecipe = ({ setSearchTerm }) => {
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
            Find Your Next Healthy Recipe
          </label>
          <div className="search-form-submit">
            <input
              type="text"
              id="recipe-search"
              value={inputValue}
              onChange={handleChange}
              placeholder="Search recipes..."
              className="search-form-input"
            />
            <button className="submit-button">SEARCH</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchRecipe;
