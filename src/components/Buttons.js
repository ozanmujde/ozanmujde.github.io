import React from "react";
import Button from "./UI/Button";
import RouterButton from "./UI/RouterButton";
const Buttons = () => {
  const goToGitHub = (event) => {
    // event.preventDefault();
    console.log('asd');
    window.location.href = "https://github.com/ozanmujde";
  };
  const goToLinkedIn = (event) => {
    // event.preventDefault();
    console.log('asd');
    window.location.href = "https://www.linkedin.com/in/ozanmujde";
  };
  return (
    <div>
      <Button onClick={goToGitHub}>Github</Button>
      <Button onClick={goToLinkedIn}>LinkedIn</Button>
      <RouterButton to="/about">About</RouterButton>
      <RouterButton to="/wisdomizer">Wisdomizer</RouterButton>
    </div>
  );
};

export default Buttons;
