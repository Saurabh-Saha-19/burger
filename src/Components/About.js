import React from "react";
import aboutimage from "../images/about.png";

function About() {
  return (
    <div id="about">
      <div className="about-text">
        <h1>UPCOMING EVENTS</h1>
        <p>
          Lorem Ipsum dolar sit awet consectetur adipisicing elit. Ipsa eum cum
          expedita. Voluptas ratione beatae sunt incidunt, in delectus
          dolaremque aliquid, iure tempora ad nobis.
        </p>
        <button>Read</button>
      </div>
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
    </div>
  );
}

export default About;
