import React from "react";
import Button from "./UI/Button";
import RouterButton from "./UI/RouterButton";
import styled from "@emotion/styled";
const Buttons = () => {
  const goToGitHub = (event) => {
    // event.preventDefault();
    console.log("asd");
    window.location.href = "https://github.com/ozanmujde";
  };
  const goToLinkedIn = (event) => {
    // event.preventDefault();
    console.log("asd");
    window.location.href = "https://www.linkedin.com/in/ozanmujde";
  };
  return (
    <ButtonsContainer>
      <Button onClick={goToGitHub}>Github</Button>
      <Button onClick={goToLinkedIn}>LinkedIn</Button>
      <RouterButton to="/about">About</RouterButton>
      <RouterButton to="/wisdomizer">Wisdomizer</RouterButton>
      <RouterButton to="/sorting">Sorting</RouterButton>
    </ButtonsContainer>
  );
};

export default Buttons;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 1007px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
  }
`;
