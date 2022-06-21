import React from "react";
import "./Background.css";
const Background = (props) => {
  return (
    <div className="bg__container">
      <div className="website__background">{props.children}</div>
    </div>
  );
};

export default Background;
