import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="section-padding about">
      <div className="about-heading">
        <h2 className="h2-text">Welcome to PureMove!</h2>
        <p className="p-alegreya">
          At PureMove, we believe that a healthy lifestyle is the foundation of
          a happy and fulfilling life. Whether you’re just starting your fitness
          journey or you're a seasoned athlete, we’re here to support you every
          step of the way. Our mission is simple: to inspire and empower you to
          move better, eat healthier, and live your best life.
        </p>
      </div>
      <div className="about-content">
        <div className="about-content-text">
          <h3 className="h3-text">Our Vision</h3>
          <p className="p-alegreya">
            We envision a world where everyone has access to the tools,
            knowledge, and motivation needed to lead a healthy lifestyle.
            PureMove is more than just a website—it’s a community of like-minded
            individuals who are passionate about fitness and wellness. We strive
            to make fitness and healthy living accessible, enjoyable, and
            sustainable for everyone.
          </p>
        </div>
        <div className="about-content-text">
          <h3 className="h3-text">What We Offer</h3>
          <p className="p-alegreya">
            At PureMove, we offer a wide range of workout routines designed to
            suit every fitness level and goal. Whether you’re looking to build
            strength, increase flexibility, or improve your endurance, our
            expertly curated workouts will help you achieve your goals. We
            understand that eating well is a key part of living well, which is
            why we’ve also created a collection of nutritious recipes that fuel
            your body and satisfy your taste buds. From quick and easy meals to
            indulgent yet healthy treats, our recipes make healthy eating a joy.
          </p>
        </div>
        <div className="about-content-text">
          <h3 className="h3-text">Our Values</h3>
          <p className="p-alegreya">
            Inclusivity is at the heart of PureMove. We’re here for everyone,
            regardless of where you are in your fitness journey. We’re committed
            to making health and fitness simple and accessible, focusing on
            straightforward, effective workouts and easy-to-follow recipes.
            Empowerment is another core value for us. We’re here to help you
            take control of your health and fitness, build confidence in your
            abilities, and make lasting, positive changes.
          </p>
        </div>
        <div className="about-content-text">
          <h3 className="h3-text">Join the PureMove Community</h3>
          <p className="p-alegreya">
            PureMove is more than just a website—it’s a community. We’re here to
            inspire and support you as you work toward your fitness and wellness
            goals. Whether you’re here to find a new workout, discover a healthy
            recipe, or read up on the latest wellness tips, we’re glad to have
            you with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
