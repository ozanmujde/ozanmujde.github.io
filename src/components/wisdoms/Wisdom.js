import React, { useState, useRef } from "react";
import anime from "animejs";
import quotes from "../../assets/quotes";
import HighlightedQuote from "./HighlightedQuote";
import "./Wisdom.css";
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
    <div onClick={onClickHandler} className="wisdom__container">
      {isClicked ? (
        <HighlightedQuote text={quote.text} author={quote.author} />
      ) : (
        <HighlightedQuote text="Click here" author="" />
      )}
    </div>
  );
};

export default Wisdom;
