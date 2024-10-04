import React from "react";
import hero from "../../assets/hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="section-padding hero">
      <div className="hero-text">
        <h1 className="h1-text">Elevate Your Fitness and Flavor</h1>
        <p className="p-alegreya">
          Welcome to PureMove, where fitness meets nourishment. Whether you’re
          embarking on a new health journey or looking to enhance your current
          routine, we offer expert workout plans and delicious, nutrient-packed
          recipes designed to support your goals. Join us and transform your
          lifestyle with clarity, purpose, and the joy of healthy living. Let's
          move forward together with PureMove!
        </p>
      </div>
      <div className="hero-img">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
