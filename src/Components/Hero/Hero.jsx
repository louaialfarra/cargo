import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="heroContainer">
      <Header />
      <div className="caption">
        <h1>Your Cargo, Our Priority. Request a Free Consultation.</h1>
        <button>Call to Action</button>
      </div>
    </div>
  );
};

export default Hero;
