import IMAGES from "../Assets";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

function Services() {
  const services = [
    {
      id: 1,
      service_img: IMAGES.ux_design_black,
      service_heading: "Website Design (UI/UX)",
      service_para:
        "I design clean, user-friendly and responsive website layouts. I focus on structure, spacing, colors and typography so that the site feels easy to read and easy to use.",
    },
    {
      id: 2,
      service_img: IMAGES.front_end,
      service_heading: "Frontend Development",
      service_para:
        "I convert designs into working web pages using HTML, CSS, JavaScript, Bootstrap, Tailwind and React. I build responsive layouts that work across devices and browsers.",
    },
    {
      id: 3,
      service_img: IMAGES.website_redesign,
      service_heading: "Website Redesign & Improvements",
      service_para:
        "I update existing websites to look modern, improve alignment, spacing, fonts, colors and overall visual consistency. I also fix layout issues and broken UI.",
    },
    {
      id: 4,
      service_img: IMAGES.landing_page,
      service_heading: "Landing Page Design",
      service_para:
        "I design and build high-quality landing pages for portfolios, products, businesses and personal brands.",
    },
    {
      id: 5,
      service_img: IMAGES.responsive_design,
      service_heading: "Responsive Fixes (Mobile & Tablet)",
      service_para:
        "I fix websites that look good on desktop but break on mobile, making sure everything adjusts smoothly.",
    },
    {
      id: 6,
      service_img: IMAGES.ui_enhacement,
      service_heading: "UI Enhancements & Animations",
      service_para:
        "I add subtle transitions, hover effects and micro-animations to make the interface feel smooth and engaging.",
    },
    {
      id: 7,
      service_img: IMAGES.performance,
      service_heading: "Website Performance & UI Review",
      service_para:
        "I review websites for design issues, accessibility, readability, spacing, color contrast and provide improvement suggestions.",
    },
    {
      id: 8,
      service_img: IMAGES.wordpress,
      service_heading: "WordPress Website Setup & Customization",
      service_para:
        "I install, customize and style WordPress themes, and adjust layouts according to requirements.",
    },
  ];

  const [index, setIndex] = useState(0);
  const perPage = 3;

  // show-all toggle
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? services : services.slice(index, index + perPage);

  function next() {
    if (showAll) return;

    const nextIndex = index + perPage;

    if (nextIndex >= services.length) {
      setIndex(0);
    } else {
      setIndex(nextIndex);
    }
  }

  const [flipped, setFlipped] = useState({});
  const toggleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <>
      <section className="services">
        <Container>
          <div className="services-heading">
            <Row className="align-items-center">
              <Col lg={4}>
                <h6>My Services ?</h6>
                <h1>
                  What I'm <br /> Offering
                </h1>
              </Col>
              <Col lg={6}>
                <p className="pe-5">
                  I develop responsive, visually consistent web interfaces
                  focused on usability and performance. I help businesses
                  enhance their online presence through clean layouts,
                  accessible design, and reliable front-end development.
                </p>
              </Col>
              <Col lg={2}>
                <button
                  type="button"
                  className="main-btn text-uppercase"
                  onClick={() => setShowAll(true)}
                >
                  All Service
                </button>
              </Col>
            </Row>
          </div>
        </Container>

        <div className="services-box-section">
          <Container>
            <Row>
              {!showAll && (
                <Col lg={2}>
                  <div
                    className="scroll-down"
                    onClick={next}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="scroll-down-icon">
                      <IoIosArrowRoundBack size={40} />
                    </div>
                    <span className="text-uppercase">Scroll Down</span>
                  </div>
                </Col>
              )}
              <Col lg={showAll ? 12 : 10}>
                <Row className="services-animated" key={index}>
                  {visible.map((item, i) => (
                    <Col lg={4} md={6} key={item.id}>
                      <div className="services-box-main">
                        <div
                          className={`flip-card ${
                            flipped[item.id] ? "flipped" : ""
                          }`}
                        >
                          <div className="flip-inner">
                            {/* FRONT */}
                            <div className="services-box flip-front">
                              <img src={item.service_img} width="50" />
                              <h4>{item.service_heading}</h4>

                              <button
                                type="button"
                                className="text-uppercase"
                                onClick={() => toggleFlip(item.id)}
                              >
                                Read More{" "}
                                <span>
                                  <IoArrowForward size={16} />
                                </span>
                              </button>
                            </div>

                            {/* BACK */}
                            <div className="flip-back services-box">
                              <p>{item.service_para}</p>

                              <button
                                type="button"
                                className="text-uppercase text-white"
                                onClick={() => toggleFlip(item.id)}
                              >
                                <span>
                                  <IoArrowBack size={16} />
                                </span>
                                Go Back
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Services;
