import IMAGES from "../Assets";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GoArrowUpRight } from "react-icons/go";

function CaseStudy() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <section className="casestudy" id="case-study">
        <div className="radial-circle">
          <img src={IMAGES.radia_circle} />
        </div>
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
                    {openIndex !== 0 && (
                      <button
                        className="see-details"
                        onClick={() => setOpenIndex(0)}
                      >
                        <span>See Details</span>
                        <GoArrowUpRight />
                      </button>
                    )}

                    {openIndex === 0 && (
                      <div className="cs-details show">
                        <p>
                          A secure and user-friendly fintech platform designed
                          for seamless financial interactions.
                        </p>

                        <ul>
                          <li>
                            <h6>Problem:</h6>
                            <p>
                              Users struggled to find relevant listings quickly.
                            </p>
                          </li>

                          <li>
                            <h6>Solution:</h6>
                            <p>
                              Built a clean UI, simplified user journeys, and
                              added clear visual hierarchy for better clarity.
                            </p>
                          </li>

                          <li>
                            <h6>Tools:</h6>
                            <p>React, Bootstrap, Figma, Javascript, MySql</p>
                          </li>

                          <li>
                            <h6>Outcome:</h6>
                            <p>
                              Improved user trust, smoother navigation, and
                              responsive across all devices.
                            </p>
                          </li>
                        </ul>
                      </div>
                    )}
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
                    {openIndex !== 1 && (
                      <button
                        className="see-details"
                        onClick={() => setOpenIndex(1)}
                      >
                        <span>See Details</span>
                        <GoArrowUpRight />
                      </button>
                    )}

                    {openIndex === 1 && (
                      <div className="cs-details show">
                        <p>
                          A modern property platform focused on easy discovery
                          and better browsing experience.
                        </p>

                        <ul>
                          <li>
                            <h6>Problem:</h6>
                            <p>
                              Users struggled to filter properties and compare
                              options efficiently.
                            </p>
                          </li>

                          <li>
                            <h6>Solution:</h6>
                            <p>
                              Designed smart filters, structured layouts, and
                              strong CTAs to guide actions.
                            </p>
                          </li>

                          <li>
                            <h6>Tools:</h6>
                            <p>React, Tailwind CSS, Figma, Javascript</p>
                          </li>

                          <li>
                            <h6>Outcome:</h6>
                            <p>
                              Faster property discovery, improved engagement,
                              and fully responsive UI.
                            </p>
                          </li>
                        </ul>
                      </div>
                    )}
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
                    {openIndex !== 2 && (
                      <button
                        className="see-details"
                        onClick={() => setOpenIndex(2)}
                      >
                        <span>See Details</span>
                        <GoArrowUpRight />
                      </button>
                    )}

                    {openIndex === 2 && (
                      <div className="cs-details show">
                        <p>
                          A collaboration platform designed to support teamwork
                          and productivity.
                        </p>

                        <ul>
                          <li>
                            <h6>Problem:</h6>
                            <p>
                              Users faced difficulty managing tasks and
                              communication in one place.
                            </p>
                          </li>

                          <li>
                            <h6>Solution:</h6>
                            <p>
                              Created clear workflows, intuitive dashboards, and
                              simple navigation patterns.
                            </p>
                          </li>

                          <li>
                            <h6>Tools:</h6>
                            <p>React, Bootstrap, Javascript, Figma</p>
                          </li>

                          <li>
                            <h6>Outcome:</h6>
                            <p>
                              Better team coordination, easier task management,
                              and improved overall experience.
                            </p>
                          </li>
                        </ul>
                      </div>
                    )}
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
