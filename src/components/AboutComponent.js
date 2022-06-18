import React, { useEffect, useRef, useState } from "react";
import "./AboutComponent.css";
import anime from "animejs";
const AboutComponent = () => {
  const [cssClasses, setCssClasses] = useState(["about__wrapper"]);
  useEffect(() => {
    setCssClasses((prevClasses) => [...prevClasses, "fade-in"]);
  }, []);
  return (
    <div className={cssClasses.join(" ")}>
      <div className="about__header">About Me</div>
      <div className="about__information">
        Hello I am Ozan Müjde. I am a senior computer engineering student at the
        TOBB ETU. I am interested in web development,machine learning and neural
        networks.
        <br />
        <br />
        Mauris ultrices ac odio a finibus. Aliquam vitae semper tellus. Fusce
        tincidunt at sapien vel porta. Curabitur non orci odio. Sed neque lorem,
        placerat eu blandit ac, egestas ac ante. Pellentesque tortor risus,
        ullamcorper at leo a, porttitor gravida sem. Donec est mauris, posuere
        in mollis vitae, mollis a ante. Ut cursus malesuada turpis sit amet
        bibendum. Nullam et feugiat odio. Sed dictum, eros et porta elementum,
        magna augue porta massa, sed facilisis turpis massa ac mi. Ut vel
        commodo tortor. Nulla elementum sit amet neque tempor pharetra.
        Suspendisse et imperdiet nibh, ac volutpat dolor. Maecenas id diam eros.
        Nulla sem nunc, rutrum ac dolor nec, placerat ullamcorper mauris.
        Quisque cursus feugiat commodo. Praesent vehicula nisi mi, in rhoncus
        quam tempor in. Praesent nec vehicula nulla. Pellentesque ut ullamcorper
        posuere lobortis eu velit. Vestibulum id egestas elit. Pellentesque a
        molestie mi.
      </div>
    </div>
  );
};

export default AboutComponent;
