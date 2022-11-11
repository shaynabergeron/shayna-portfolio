import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "./../../Assests/home-main.svg";
import Particle from "./../Particle";
import Type from "./Typewriter";

/** Style Sheet Import */
import "./Home.css";
import HomeBottom from "./HomeBottom";

function Home() {
  return (
    <div className="home-section">
      <div fluid id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SHAYNA BERGERON</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <HomeBottom />
    </div>
  );
}

export default Home;
