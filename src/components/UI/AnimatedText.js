import React from "react";
import "./AnimatedText.css";
// https://codepen.io/mattgrosswork/pen/VwprebG
const AnimatedText = () => {
  const classes = ["hero", "glitch", "layers"];
  return (
    <h2 className={classes.join(" ")} data-text="Welcome">
      <span>Welcome</span>
    </h2>
  );
};

export default AnimatedText;
