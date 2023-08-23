import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import profileimage from "./2023-2024-Behance.png";
const About = () => {
  return (
    <section id="about" className="about">
      <Container>
        <Row>
          <Col md={6}>
            <h1>About Me</h1>
            <br />
            <h3>
              Hello im Ahmed Magdy and i am a UI/UX Designer | Intern @
              Information Technology Institute | Junior FrontEnd Developer
            </h3>
            <br />
            <br />
            <p style={{ textAlign: "left" }}>
              Hello! I am working as a graphic designer for the last 6+ years
              and have exceptional knowledge in developing graphics, audio and
              visual images for product illustrations, logos and websites. I am
              passionate about development especially in the field of FrontEnd
              development, with high skills in Js and HTML & CSS. eager to learn
              every day new things about the development world and focus on
              learning the frameworks nowadays React. As I'm studying UI / UX
              for about 4 years, I've worked with many clients from all over the
              world besides working as a Graphic Designer in many countries
            </p>
            <br />
            <div className="Buttons"  style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <a
                href="https://www.linkedin.com/in/ahmed-magdy-3a2118211/"
                placeholder="LinkedIn Account"
              >
                <button className="btn btn-primary" style={{marginRight:"12px"}}>Linkedin</button>
              </a>
              <a
                href="https://www.behance.net/ahmedjunior"
                placeholder="Behance Account"
              >
                <button className="btn btn-primary" style={{marginRight:"12px"}}>Behance</button>
              </a>
              <a
                href="https://github.com/Magdy78"
                placeholder="Github Account"
              >
                <button className="btn btn-primary" style={{marginRight:"12px"}}>Github</button>
              </a>
            </div>
          </Col>
          <Col md={6}>
            <img src={profileimage} alt="About Us" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
