import IMAGES from "../Assets";
import React, { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";

function Contact() {
  const [validated, setValidated] = useState(false);
  const [selectedChips, setSelectedChips] = useState([]);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    // Browser validation check
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Chips validation (at least one required)
    if (selectedChips.length === 0) {
      alert("Please select at least one option.");
      return;
    }

    setLoading(true);

    const formData = new FormData(form);
    formData.append("services", selectedChips.join(", "));

    try {
      const res = await fetch("https://formspree.io/f/mreepqpe", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      console.log("Status:", res.status);
      setTimeout(() => setStatus(""), 3000);

      if (res.ok) {
        setStatus("success");
        form.reset();
        setSelectedChips([]);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      setStatus("error");
    }

    setLoading(false);
  };

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
            <h1 className="con-h2">
              <img src={IMAGES.arrow} className="con-arrow" />
              your idea
            </h1>
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
                      name="name"
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
                      name="email"
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
                  name="company"
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
                        // name="services"
                        value={chip}
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
                <button type="submit" className="main-btn" disabled={loading}>
                  {loading ? "Sending..." : "Send Me"}
                </button>
              </div>

              {status === "success" && (
                <p style={{ color: "green" }}>
                  Message sent successfully. Thank you!
                </p>
              )}

              {status === "error" && (
                <p style={{ color: "red" }}>
                  Something went wrong. Please try again.
                </p>
              )}

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
