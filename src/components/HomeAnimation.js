import React from "react";
import anime from "animejs";
import { useState, useRef, useEffect } from "react";
import "./HomeAnimation.css";
const HomeAnimation = () => {
  const animation = useRef(null);
  useEffect(() => {
    animation.current = anime({
      targets: ".home-flex",
      
    });
  }, []);
  return (
    <div className="home-flex">
      <div style={{ color: "white" }}>Still Working</div>
    </div>
  );
};

export default HomeAnimation;
