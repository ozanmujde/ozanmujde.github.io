import React, { useState, useRef } from "react";
import anime from "animejs";
import quotes from "../../assets/quotes";
import HighlightedQuote from "./HighlightedQuote";
import styled from "@emotion/styled";
const Wisdom = () => {
  const animation = useRef(null);
  const starterIndex = Math.floor(Math.random() * quotes.length);
  const [quote, setQuote] = useState(quotes[starterIndex]);
  const [isClicked, setIsClicked] = useState(false);
  const onClickHandler = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === quote.id);
    const randomQuote = quotes[randomIndex];
    let newQuote = { ...quote };
    animation.current = anime({
      targets: newQuote,
      id: randomQuote.id,
      easing: "linear",
      duration: 2000,
      round: 1,
      update: function () {
        setQuote(quotes[newQuote.id]);
      },
    });
    setIsClicked(true);
  };
  return (
    <QuoteContainer onClick={onClickHandler}>
      {isClicked ? (
        <HighlightedQuote text={quote.text} author={quote.author} />
      ) : (
        <HighlightedQuote text="Click here" author="" />
      )}
    </QuoteContainer>
  );
};

export default Wisdom;

const QuoteContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
