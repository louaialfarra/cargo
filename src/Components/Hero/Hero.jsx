import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="heroContainer">
      <Header />
      <div className="caption">
        <h1>"Your Shippment is our Priority"</h1>
        <button>Call to Action</button>
      </div>
      <div>hello Hero</div>
    </div>
  );
};

export default Hero;
