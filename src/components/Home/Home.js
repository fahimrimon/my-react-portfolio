import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.png";
import About from "../About/About";
import Projects from "../Projects/Projects";
import SocialMedia from "../SocialMedia";
import ContactForm from "./ContactForm";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Fahim Rimon</strong>
              </h1>

              <p className="heading-description blockquote">
                Hi, I'm a dedicated and passionate MERN Stack Developer with experiences in ReactJS, NodeJS, TypeScript. Learning
                React-native for future app development.
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Projects></Projects>
      <About></About>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                {" "}
                Whether you want to get in touch, or talk about a project collaboration.
                <br />
                <strong>Feel free to connect with me</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
      <ContactForm></ContactForm>
    </section>
  );
}

export default Home;
