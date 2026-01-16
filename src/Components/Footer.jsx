import React from "react";
import { Container } from "react-bootstrap";
import { BiLogoInstagram } from "react-icons/bi";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <Container>
          <div className="footer-inner">
            <ul>
              <li>
                <TiSocialLinkedin size={25} />
                <span>Linkedin</span>
              </li>
              <li>
                <BiLogoInstagram size={25} />
                <span>Instagram</span>
              </li>
              <li>
                <TiSocialFacebook size={25} />
                <span>Facebook</span>
              </li>
            </ul>
            <p className="footer-yr">Personal Portfolio ©{new Date().getFullYear()}</p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
