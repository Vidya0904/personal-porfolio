import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { GoArrowUpRight } from "react-icons/go";

function Header() {
   const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="gradient"></div>
      <span className="line1"></span>
      <span className="line2"></span>
      <header  className={scrolled ? "header scrolled" : "header"}>
        <div className="header-start">
          <Container>
            <section className="header-section">
              <div className="header-top">
                <span>it's me</span>
                <div className="header-right">
                  <ul>
                    <li>
                      <div className="heading-icon">
                        <h6>My Projects</h6>
                        <GoArrowUpRight />
                      </div>
                      <p>
                        See all of nice project <br />I have done.
                      </p>
                    </li>
                    <li>
                      <div className="heading-icon">
                        <h6>About Me</h6>
                        <GoArrowUpRight />
                      </div>
                      <p>
                        Learn about my self <br /> What I do.
                      </p>
                    </li>
                    <li>
                      <div className="heading-icon">
                        <h6>Contact Me</h6>
                        <GoArrowUpRight />
                      </div>
                      <p>vidyajaywant2000@gmail.com</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </Container>
        </div>
      </header>
    </>
  );
}

export default Header;
