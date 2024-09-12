import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const isMobile = window.innerWidth <= 768;

  const sendEmail = (e) => {
    e.preventDefault();

    const firstName = form.current["first_name"].value;
    const lastName = form.current["last_name"].value;

    let hasError = false;

    if (!firstName) {
      setFirstNameError("First name is required.");
      hasError = true;
    } else {
      setFirstNameError("");
    }

    if (!lastName) {
      setLastNameError("Last name is required.");
      hasError = true;
    } else {
      setLastNameError("");
    }

    if (hasError) {
      return;
    }

    emailjs
      .sendForm("service_bhprfrt", "template_23qntpg", form.current, {
        publicKey: "BOC-44GXnTcSLL6nR",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Container fluid className="contact-page">
      <Row className="align-items-center">
        <Col xs={12} md={6} className="mb-4 mb-md-0">
          <img
            src="/images/Contact.gif"
            alt="Contact"
            className="img-fluid"
            style={{ maxHeight: "150%", width: "auto", paddingLeft: isMobile? "0%": "30%", paddingTop: "10%" }}
          />
        </Col>
        <Col xs={12} md={6}>
          <div
            className="contact-form"
            style={{ paddingRight:isMobile? "0" : "15%", paddingTop: "-8%" }}
          >
            <Form id="contact-form" ref={form} onSubmit={sendEmail}>
              <Row className="mb-3">
                <p
                  className="fade-in"
                  style={{
                    fontSize: "1.5rem",
                    paddingBottom: "2%",
                    fontWeight: "semi-bold",
                    fontFamily: "'Cinzel Decorative', cursive",
                    marginTop: isMobile ? "0" : "7%",
                  }}
                >
                  Thank You For Reaching Us
                </p>
                <Col sm={12} md={6} className="mb-3 mb-md-0">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control placeholder="First name" name="first_name" />
                  {firstNameError && (
                    <div style={{ color: "red", fontSize: "0.9rem" }}>
                      {firstNameError}
                    </div>
                  )}
                </Col>
                <Col sm={12} md={6}>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control placeholder="Last name" name="last_name" />
                  {lastNameError && (
                    <div style={{ color: "red", fontSize: "0.9rem" }}>
                      {lastNameError}
                    </div>
                  )}
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} name="message" />
              </Form.Group>

              <Button
                type="submit"
                className="w-100"
                style={{ fontWeight: "initial", backgroundColor: "#53667d" }}
              >
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          animation: fadeIn 1.5s ease-in-out forwards;
        }
      `}</style>
    </Container>
  );
}

export default Contact;
