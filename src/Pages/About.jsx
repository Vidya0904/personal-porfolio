import IMAGES from "../Assets";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PiGraduationCapFill } from "react-icons/pi";

function About() {
  return (
    <>
      <section className="about" id="about-me">
        <div className="radial-circle">
          <img src={IMAGES.radia_circle} />
        </div>
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
                    <li>
                      <span>HTML5</span>
                    </li>
                    <li>
                      <span>CSS3</span>
                    </li>
                    <li>
                      <span>Bootsrap5</span>
                    </li>
                    <li>
                      <span>Javascript</span>
                    </li>
                    <li>
                      <span>JQuery</span>
                    </li>
                    <li>
                      <span>MySql</span>
                    </li>
                    <li>
                      <span>MsSql</span>
                    </li>
                    <li>
                      <span>Tailwind Css</span>
                    </li>
                    <li>
                      <span>React + Vite</span>
                    </li>
                    <li>
                      <span>Material URL</span>
                    </li>
                    <li>
                      <span>Figma</span>
                    </li>
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
                      <p className="edu-date">Aug 2017 – Nov 2020</p>
                      <h6>
                        Bhusawal Arts, Science and P. O. Nahata Commerce
                        College, Bhusawal
                      </h6>
                      <p className="edu-deg">
                        Bachelor of Computer Application (BCA)
                      </p>
                      <span>88.96%</span>
                    </li>
                    <li>
                      <PiGraduationCapFill size={22} className="edu-cap" />
                      <p className="edu-date">Jun 2015 – Feb 2017</p>
                      <h6>Smt. P. K. Kotecha Ladies College, Bhusawal</h6>
                      <p className="edu-deg">
                        Higher Secondary Certificate (HSC)
                      </p>
                      <span>61.08%</span>
                    </li>
                    <li>
                      <PiGraduationCapFill size={22} className="edu-cap" />
                      <p className="edu-date">Mar 2015</p>
                      <h6>Smt. P. K. Kotecha High School, Bhusawal</h6>
                      <p className="edu-deg">
                        Secondary School Certificate (SSC)
                      </p>
                      <span>78.60%</span>
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
