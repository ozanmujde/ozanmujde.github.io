import React, { Fragment } from "react";
import Buttons from "../components/Buttons";
import AnimatedText from "../components/UI/AnimatedText";
import styled from "@emotion/styled";
const Home = () => {
  return (
    <HomeContainer>
      <AnimatedText />
      <Buttons />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  @media (max-width: 1007px) {
    height: auto;
  }
`;

// display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//   }
