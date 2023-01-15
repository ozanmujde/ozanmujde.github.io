import React from "react";
import RouterButton from "../components/UI/RouterButton";
import styled from "@emotion/styled";
import Doodle from "../assets/MessyDoodle.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';

//add lazy loading for the image to improve performance

const NotFound = () => {
  return (
    <NotFoundContainer>
      <LazyLoadImage height={"40%"}  width={"100%"} src={Doodle} alt="Doodle" />
      <NotFoundText>It seems like you are in<br></br> the wrong url</NotFoundText>
      <RouterButton to="/">Go to Home</RouterButton>
    </NotFoundContainer>
  );
};

const  NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  `;
const NotFoundText = styled.h2`
  font-size: 2rem;
  --glow-color: rgb(217, 176, 255);
  --glow-spread-color: rgba(191, 123, 255, 0.781);
  --enhanced-glow-color: rgb(231, 206, 255);
  --container-color: rgb(101, 62, 137);
  text-shadow: 0 0 .5em var(--glow-color);
  color:var(--glow-color) ;
  padding: 1rem;
`;




export default NotFound;
