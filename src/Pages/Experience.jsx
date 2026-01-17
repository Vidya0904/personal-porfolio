import IMAGES from "../Assets";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Experience() {
  return (
    <>
      <section className="experience">
         <div className="radial-circle">
          <img src={IMAGES.radia_circle} />
        </div>
        <Container>
          <div className="exp-heading">
            <div className="exp-inner-heading">
              <h1>Experience</h1>
              <p>
                I have hands-on experience designing and developing responsive
                web interfaces for real-world projects. I’ve worked closely with
                developers and clients to deliver clean, functional, and
                user-focused front-end solutions.
              </p>
            </div>
          </div>
          <Row>
            <Col>
              <div className="exp-main-box">
                <div className="exp-inner-box">
                  <div className="exp-left-box">
                    <div className="exp-index">
                      <span>1</span>
                    </div>
                    <div className="exp-inner-left">
                      <h4>Web App Designer</h4>
                      <h6>Ebrands LLP - Goregaon, Maharashtra</h6>
                    </div>
                  </div>
                  <div className="exp-right-box">
                    <p>Apr 2024 – July 2024</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="exp-main-box">
                <div className="exp-inner-box">
                  <div className="exp-left-box">
                    <div className="exp-index">
                      <span>2</span>
                    </div>
                    <div className="exp-inner-left">
                      <h4>Jr. Web Designer</h4>
                      <h6>
                        Dthrill Software Solutions LLP - Pune, Maharashtra
                      </h6>
                    </div>
                  </div>
                  <div className="exp-right-box">
                    <p>Aug 2022 – Dec 2023</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="exp-main-box">
                <div className="exp-inner-box">
                  <div className="exp-left-box">
                    <div className="exp-index">
                      <span>3</span>
                    </div>
                    <div className="exp-inner-left">
                      <h4>UI Developer (Internship)</h4>
                      <h6>M-SOFTS Development - Bhusawal, Maharashtra</h6>
                    </div>
                  </div>
                  <div className="exp-right-box">
                    <p>Feb 2021 – Aug 2021</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Experience;
