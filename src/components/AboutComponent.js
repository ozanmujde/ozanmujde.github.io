import React, { useEffect, useState } from "react";
import "./AboutComponent.css";
import CVPdf from '../assets/Curriculum_Vitae_Latex.pdf';

import Button from "./UI/Button";
const AboutComponent = () => {
  const [cssClasses, setCssClasses] = useState(["about__wrapper"]);
  useEffect(() => {
    setCssClasses((prevClasses) => [...prevClasses, "fade-in"]);
  }, []);
  return (
    <div className={cssClasses.join(" ")}>
      {/* <h3>ABOUT</h3> */}
      <div className="about__header">Let me introduce myself</div>
      <div className="about__information">
        Hello I am Ozan Müjde. I am a senior computer engineering student at the
        TOBB ETU. I am interested in web development,machine learning and neural
        networks.
        <br />
        <br />
        I did an internship at STM which I worked on weak supervision in
        numerous Turkish datasets. I also did another internship at the HAVELSAN
        which I worked on a React based video conference project. I implemented
        a virtual background system etc.
        <br />
        <br />
        You can see my projects on my github account. For example we did a
        mobile React Native project called wlobby which can be thought as a
        tinder for movie enthusiasts where you can se open and join adverts for
        movies then you can chat with other users about everything.
      </div>
      <div>
        <a href={CVPdf} without rel="noopener noreferrer" target="_blank">
          <Button label="Resume">DOWNLOAD RESUME</Button>
        </a>
      </div>
    </div>
  );
};

export default AboutComponent;
