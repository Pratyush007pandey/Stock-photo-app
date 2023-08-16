import React from "react";
import "./Hero.css";

const Hero = (props) => {
  return (
    <div className="hero-area" id="particles-js">
      <div className="hero-detail">{props.children}</div>
    </div>
  );
};

export default Hero;
