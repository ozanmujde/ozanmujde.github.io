import React, { Fragment } from "react";
import classes from "./Home.module.css";
import Buttons from "../components/Buttons";
import Background from "../components/UI/Background";
const Home = () => {
  return (
    <Background>
      <div className={classes["home-flex"]}>
        <div style={{ color: "white" }}>Still Working</div>
        <Buttons />
      </div>
    </Background>
  );
};

export default Home;
