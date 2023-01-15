import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const RouterButton = (props) => {
  return (
    <Link to={props.to}>
      <Button >{props.children}</Button>
    </Link>
  );
};

export default RouterButton;
