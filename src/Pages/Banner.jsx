import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TfiDownload } from "react-icons/tfi";
import { TiSocialLinkedin } from "react-icons/ti";
import { BiLogoInstagram } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { LiaGithub } from "react-icons/lia";
import IMAGES from "../Assets";

function Banner() {
  return (
    <>
      <section className="hero-section">
        <Container>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <section className="hero-l-section">
                <div className="hand-greeting">
                  <img src={IMAGES.hand} width="40px" className="hand-img" />
                  <p className="greeting">
                    Hello! <span>I'm Vidya</span>
                  </p>
                </div>
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
                  <a href="#contact" className="main-btn">
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
                  <img src={IMAGES.curve_solid} className="curve-solid" />
                  <img src={IMAGES.curve_hallow} className="curve-hallow" />
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
              <img src={IMAGES.star2} width="25px" />
              <span>Web App Design</span>
            </li>
            <li>
              <img src={IMAGES.star2} width="25px" />
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
                    <a href="https://www.linkedin.com/in/vidya-sonawane-233486207">
                      <TiSocialLinkedin size={20} />
                      <span>Linkedin</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Vidya0904">
                      <LiaGithub size={20} />
                      <span>Github</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/dads_angel_9400?igsh=NWswNGloeXQ4bnE4">
                      <BiLogoInstagram size={20} />
                      <span>Instagram</span>
                    </a>
                  </li>
                </ul>
              </Col>
              <Col lg={6}>
                <div className="banner-mail">
                  <a href="mailto:vidyajaywant2000@gmail.com">
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
