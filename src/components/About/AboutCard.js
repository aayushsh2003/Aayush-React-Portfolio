import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
  
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aayush Sharma </span>
            from <span className="purple">Jaipur, India.</span>
            <br />
            I am currently Student.
            <br />
            
            I have completed my Schooling from <span className="purple">Kendriya Vidyalaya No.5 Jaipur, Rajasthan.</span>
            <br />
            I am studying B.Tech from <span className="purple">Poornima College of Engineering.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Tech Videos
            </li>
            <li className="about-activity">
              <ImPointRight /> Studying 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aayush Sharma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
