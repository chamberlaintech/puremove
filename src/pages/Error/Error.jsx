import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-page section-padding">
      <div className="error-container">
        <h2 className="h2-text">Uuuupss... Something went wrong</h2>
        <Link to="/" className="primary-button">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
