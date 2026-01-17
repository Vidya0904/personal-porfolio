import IMAGES from "../Assets";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PiGraduationCapFill } from "react-icons/pi";

function About() {
  return (
    <>
      <section className="about" id="about-me">
        <Container>
          <div className="about-heading">
            <div className="about-inner-heading">
              <h1>About Me</h1>
              <p>
                I’m a dedicated Frontend Developer with a strong focus on
                building responsive, user-friendly web applications. I enjoy
                transforming design concepts into clean, functional interfaces
                and continuously improving my skills.
              </p>
            </div>
          </div>
          <div className="about-inner-section">
            <Row>
              <Col lg={6}>
                <div className="about-left-inner">
                  <img src={IMAGES.graduation_cap} className="graduation-cap" />
                  <h4>Skills</h4>
                  <p>
                    I enjoy diving into and learning new things. Here's a list
                    of technologies I've worked with
                  </p>
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Bootsrap5</li>
                    <li>Javascript</li>
                    <li>JQuery</li>
                    <li>MySql</li>
                    <li>MsSql</li>
                    <li>Tailwind Css</li>
                    <li>React + Vite</li>
                    <li>Material URL</li>
                    <li>Figma</li>
                  </ul>
                </div>
              </Col>
              <Col lg={6}>
                <div className="about-right-inner">
                  <h4>Education</h4>
                  <ul>
                    <li>
                      <PiGraduationCapFill size={22} className="edu-cap" />
                      <p className="edu-date">Jan 2021 – Aug 2022</p>
                      <h6>
                        KCES's Institute of Management & Research, Jalgaon
                      </h6>
                      <p className="edu-deg">
                        Master of Computer Application (MCA)
                      </p>
                      <span>89%</span>
                    </li>
                    <li>
                      <PiGraduationCapFill size={22} className="edu-cap" />
                      <p className="edu-date">Jan 2021 – Aug 2022</p>
                      <h6>
                        KCES's Institute of Management & Research, Jalgaon
                      </h6>
                      <p className="edu-deg">
                        Master of Computer Application (MCA)
                      </p>
                      <span>89%</span>
                    </li>
                    <li>
                      <PiGraduationCapFill size={22} className="edu-cap" />
                      <p className="edu-date">Jan 2021 – Aug 2022</p>
                      <h6>
                        KCES's Institute of Management & Research, Jalgaon
                      </h6>
                      <p className="edu-deg">
                        Master of Computer Application (MCA)
                      </p>
                      <span>89%</span>
                    </li>
                    <li>
                      <PiGraduationCapFill size={22} className="edu-cap" />
                      <p className="edu-date">Jan 2021 – Aug 2022</p>
                      <h6>
                        KCES's Institute of Management & Research, Jalgaon
                      </h6>
                      <p className="edu-deg">
                        Master of Computer Application (MCA)
                      </p>
                      <span>89%</span>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default About;
