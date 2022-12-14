import React, { useEffect, useState } from "react";
import "./AboutComponent.css";
import CVPdf from "../assets/Ozan_Mujde_CV.pdf";

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
        Hello I am Ozan Müjde. I am a computer engineering graduate from
        TOBB ETU. I am interested in web development,machine learning and neural
        networks.
        <br />
        <br />
        I did my last internship at Comodo where I worked as a full stack developer
        on a project where I use Vue.js, NestJs, PostgreSQL, and BigTable. The project was mainly
        about making a BigTable ORM module in NestJs, and creating CRUD operations for that ORM. Where we can
        query, and change BigTable like a SQL database.
        I did an internship at STM which I worked on weak supervision in
        numerous Turkish datasets. I also did another internship at the HAVELSAN
        which I worked on a React based video conference project which implemented
        a virtual background system.
        <br />
        <br />
        You can see my projects on my github account. For example my and my buddies did a
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
