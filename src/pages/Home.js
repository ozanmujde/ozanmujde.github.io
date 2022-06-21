import React, { Fragment } from "react";
import classes from "./Home.module.css";
import Buttons from "../components/Buttons";
import Background from "../components/UI/Background";
import HomeAnimation from "../components/HomeAnimation";
import AnimatedText from "../components/UI/AnimatedText";
const Home = () => {
  return (
    <Background>
      <div className={classes["home-flex"]}>
        {/* <HomeAnimation /> */}
        <AnimatedText />
        {/* <div style={{ color: "white" }}>Still Working</div> */}
        <Buttons />
      </div>
    </Background>
  );
};

export default Home;
