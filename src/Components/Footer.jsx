import React from "react";
import { Container } from "react-bootstrap";
import { BiLogoInstagram } from "react-icons/bi";
import { TiSocialLinkedin } from "react-icons/ti";
import { LiaGithub } from "react-icons/lia";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <Container>
          <div className="footer-inner">
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
            <p className="footer-yr">
              Personal Portfolio ©{new Date().getFullYear()}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
