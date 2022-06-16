import React from "react";
import "./Background.css";
const Background = (props) => {
  return <div className="website-background">{props.children}</div>;
};

export default Background;
