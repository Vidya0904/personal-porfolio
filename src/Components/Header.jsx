import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { GoArrowUpRight } from "react-icons/go";
import { TbMenu3 } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <header className={scrolled ? "header scrolled" : "header"}>
        <div className="header-start">
          <Container>
            <section className="header-section">
              <div className="header-top">
                <span>it's me</span>

                {/* Mobile Menu Button */}
                <div
                  className="menu-btn"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? <RxCross2 size={28} /> : <TbMenu3 size={28} />}
                </div>

                {/* <div className="header-right"> */}
                <div className={`header-right ${menuOpen ? "open" : ""}`}>
                  <ul>
                    <li>
                      <a
                        href="#case-study"
                        className="heading-icon"
                        onClick={() => setMenuOpen(false)}
                      >
                        <h6>My Projects</h6>
                        <GoArrowUpRight color="#000" />
                      </a>
                      <p>
                        See all of nice project <br />I have done.
                      </p>
                    </li>
                    <li>
                      <a
                        href="#about-me"
                        className="heading-icon"
                        onClick={() => setMenuOpen(false)}
                      >
                        <h6>About Me</h6>
                        <GoArrowUpRight color="#000" />
                      </a>
                      <p>
                        Learn about my self <br /> What I do.
                      </p>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        className="heading-icon"
                        onClick={() => setMenuOpen(false)}
                      >
                        <h6>Contact Me</h6>
                        <GoArrowUpRight color="#000" />
                      </a>
                      <p>
                        Mobile No.: <br /> +91 9307800435
                      </p>
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
