import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TfiDownload } from "react-icons/tfi";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { BiLogoInstagram } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import IMAGES from "../Assets";

function Banner() {
  return (
    <>
      <section className="hero-section">
        <Container>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <section className="hero-l-section">
                <img src={IMAGES.hand} width="40px" className="hand-img" />
                <p className="greeting">
                  Hello! <span>I'm Vidya</span>
                </p>
                <p className="profile">
                  <span>Web Designer</span>{" "}
                  <img src={IMAGES.star} width="33px" />
                </p>
                <div className="summary">
                  <p>
                    Creative <b>Frontend Developer</b> focused on building{" "}
                    <b>responsive, accessible, and user-friendly</b> interfaces.
                    Experienced with <b>modern tools</b>, clean layouts, and
                    improving overall usability.
                  </p>
                  <ul className="summary-points">
                    <li>
                      Frontend interfaces must feel authentic and trustworthy.
                    </li>
                    <li>
                      User challenges should be solved with elegant solutions.
                    </li>
                    <li>Designs should evolve based on user feedback.</li>
                  </ul>
                </div>
                <div className="pair-btn">
                  <a href="#" className="main-btn">
                    Let's Talk
                  </a>
                  <a
                    href={`${import.meta.env.BASE_URL}asset/VIDYA_RESUME.pdf`}
                    download
                    className="dwnld-cv"
                  >
                    Download CV <TfiDownload />
                  </a>
                </div>
              </section>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <section className="hero-r-section">
                <div className="my-frame">
                  <div className="hello-round">Hello</div>
                  <img
                    className="my-img"
                    src={IMAGES.myimg}
                    width="450px"
                    height="670px"
                  />
                  <img
                    src={IMAGES.curve_solid}
                    width="100px"
                    height="40px"
                    className="curve-solid"
                  />
                  <img
                    src={IMAGES.curve_hallow}
                    width="100px"
                    height="40px"
                    className="curve-hallow"
                  />
                </div>
              </section>
            </Col>
          </Row>
        </Container>
        <section className="profile-names">
          <ul>
            <li>
              <img src={IMAGES.star2} width="25px" />
              <span>Web Design</span>
            </li>
            <li>
              <img src={IMAGES.star2} width="25px" />
              <span>Front End Development</span>
            </li>
            <li>
              <img src={IMAGES.star2} width="20px" />
              <span>Web App Design</span>
            </li>
            <li>
              <img src={IMAGES.star2} width="20px" />
              <span>UI/UX Design</span>
            </li>
          </ul>
        </section>
        <section className="banner-social">
          <Container>
            <Row>
              <Col lg={6}>
                <ul>
                  <li>
                    <TiSocialLinkedin size={20} />
                    <span>Linkedin</span>
                  </li>
                  <li>
                    <BiLogoInstagram size={20} />
                    <span>Instagram</span>
                  </li>
                  <li>
                    <TiSocialFacebook size={20} />
                    <span>Facebook</span>
                  </li>
                </ul>
              </Col>
              <Col lg={6}>
                <div className="banner-mail">
                  <a href="#">
                    <MdOutlineEmail size={20} />
                    <span>vidyajaywant2000@gmail.com</span>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </section>
    </>
  );
}

export default Banner;
