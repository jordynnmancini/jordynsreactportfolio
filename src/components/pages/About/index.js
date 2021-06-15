import React from "react";
import "./style.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="top-row-container">
        <div className="col-md-6 col-sm-12 about">
          <p>
            Hello there! My name is Jordyn, and I am an aspiring Full-Stack Web Developer in Columbus, OH. I am currently a student in the Ohio State Coding Boot Camp, and will be graduating in July 2021. I've learned a lot so far - with my main focus being Javascript. I have experience in creating and managing RESTful API's using Node.js, mySql/Sequelize, and Mongo DB. I also have experience writing front-end applications using third-party API's. This portfolio of mine showcases some of my favorite projects I've worked on so far using both front-end heavy language and back-end heavy language. Enjoy!
          </p>
        </div>
        <div className="col-md-6 col-sm-12 headshot">
        </div>
      </div>
    </div>
  );
}

export default About;
