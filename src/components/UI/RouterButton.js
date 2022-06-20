import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import classes from "./Button.module.css";

const RouterButton = (props) => {
  return (
    <Button className={classes.button}>
      {props.children}
      <Link to={props.to}>
        {/* <Button className={classes.button}>{props.children}</Button> */}
      </Link>
    </Button>
  );
};

export default RouterButton;
