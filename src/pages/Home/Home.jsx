import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import CTA from "../../components/CTA/CTA";
import CTAWorkout from "../../components/CTAWorkout/CTAWorkout";
import CTARecipe from "../../components/CTARecipe/CTARecipe";
import Review from "../../components/Review/Review";

const Home = () => {
  return (
    <>
      <Hero />
      <CTA />
      <CTAWorkout />
      <CTARecipe />
      <Review />
    </>
  );
};

export default Home;
