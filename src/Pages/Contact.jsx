import React, { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [selectedChips, setSelectedChips] = useState([]);

  const chips = [
    "Frontend Developer",
    "UI/UX Designer",
    "React Developer",
    "Web Designer",
    "Freelance Project",
  ];

  const toggleChip = (chip) => {
    setSelectedChips((prev) =>
      prev.includes(chip)
        ? prev.filter((item) => item !== chip)
        : [...prev, chip],
    );
  };

  return (
    <>
      <section className="contact" id="contact">
        <div className="con-heading">
          <div className="con-inner-heading">
            <h1 className="con-h1">
              <span>Say Hi! </span>and tell me about
            </h1>
            <h1 className="con-h2">your idea</h1>
            <p>Have a nice works? reach out ans let's chat.</p>
          </div>
        </div>
        <Container>
          <div className="con-form-section">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row>
                <Col lg={6} md={12}>
                  <Form.Group className="con-form">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your name"
                    />
                  </Form.Group>
                </Col>
                <Col lg={6} md={12}>
                  <Form.Group className="con-form">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Where I can reply"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="con-form">
                <Form.Label>Company Name:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Your Company or website?"
                />
              </Form.Group>
              <Form.Group className="con-form ">
                <Form.Label>Let’s talk about the opportunity:</Form.Label>
                <br />
                <div className="chips-group">
                  {chips.map((chip, index) => (
                    <label
                      key={index}
                      className={`chip ${
                        selectedChips.includes(chip) ? "active" : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedChips.includes(chip)}
                        onChange={() => toggleChip(chip)}
                        hidden
                      />
                      {chip}
                    </label>
                  ))}
                </div>
              </Form.Group>
              <div className="sendme-btn">
                <button type="submit" className="main-btn">
                  Send Me
                </button>
              </div>
              <p className="sent-btn-txt">
                I'll must get back to you within 24 hours
              </p>
            </Form>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Contact;
