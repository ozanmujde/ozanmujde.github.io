import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import classes from "./Button.module.css";

const RouterButton = (props) => {
  return (
    <Link to={props.to}>
      <Button className={classes.button}>{props.children}</Button>
    </Link>
  );
};

export default RouterButton;
