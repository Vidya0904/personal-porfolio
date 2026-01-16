import IMAGES from "../Assets";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GoArrowUpRight } from "react-icons/go";

function CaseStudy() {
  return (
    <>
      <section className="casestudy">
        <Container>
          <div className="cs-heading">
            <div className="cs-inner-heading">
              <h1>Case Study</h1>
              <p>
                These case studies showcase how I approach UI design and
                front-end development from concept to execution. Each project
                reflects thoughtful design decisions and clean implementation.
              </p>
            </div>
          </div>
          <div className="cs-main-section">
            <div className="cs-inner-section">
              <Row>
                <Col lg={6} md={12}>
                  <div className="cs-img">
                    <img src={IMAGES.finance} />
                  </div>
                </Col>
                <Col lg={6} md={12}>
                  <div className="cs-col">
                    <button type="button" className="main-btn text-uppercase">
                      Web Design
                    </button>
                    <h3>Fintech Website Design & Development</h3>
                    <button className="see-details">
                      <span>See Details</span>
                      <GoArrowUpRight />
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="cs-inner-section">
              <Row className="flex-column-reverse flex-xl-row">
                <Col lg={6} md={12}>
                  <div className="cs-col">
                    <button type="button" className="main-btn text-uppercase">
                      Web Design
                    </button>
                    <h3>Real Estate Website & Platform UI</h3>
                    <button className="see-details">
                      <span>See Details</span>
                      <GoArrowUpRight />
                    </button>
                  </div>
                </Col>
                <Col lg={6} md={12}>
                  <div className="cs-img">
                    <img src={IMAGES.real_estate} />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="cs-inner-section">
              <Row>
                <Col lg={6} md={12}>
                  <div className="cs-img">
                    <img src={IMAGES.company} />
                  </div>
                </Col>
                <Col lg={6} md={12}>
                  <div className="cs-col">
                    <button type="button" className="main-btn text-uppercase">
                      Web Design
                    </button>
                    <h3>Collaborative Website & Platform UI</h3>
                    <button className="see-details">
                      <span>See Details</span>
                      <GoArrowUpRight />
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default CaseStudy;
