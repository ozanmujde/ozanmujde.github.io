import React from "react";
import "./Background.css";
const Background = (props) => {
  return <div className='website__background'>{props.children}</div>;
};

export default Background;
