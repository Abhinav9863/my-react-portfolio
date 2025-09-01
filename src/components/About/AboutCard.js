import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhinav Vishnu Mohan </span>
            from <span className="purple"> Kollam, Kerala, India.</span>
            <br />
            I am a B.Tech student in Computer Science at VIT Bhopal.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Core member of Mozilla Firefox club
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abhinav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
