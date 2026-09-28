import React, { useRef, useState, useEffect } from "react";
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

  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const fullText = "Thank You For Reaching Us";

  useEffect(() => {
    const titleContainer = document.querySelector(".contact-title-container");
    const formContainer = document.querySelector(".contact-form-wrapper");
    const gifContainer = document.querySelector(".contact-gif-wrapper");
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === titleContainer) {
          if (entry.isIntersecting) {
            setIsTyping(true);
          } else {
            setIsTyping(false);
          }
        } else if (entry.target === formContainer || entry.target === gifContainer) {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            entry.target.style.opacity = 1;
          } else {
            entry.target.classList.remove("fade-in");
            entry.target.style.opacity = 0;
          }
        }
      });
    }, { threshold: 0.1 });
    
    if (titleContainer) observer.observe(titleContainer);
    if (formContainer) {
      formContainer.style.opacity = 0;
      observer.observe(formContainer);
    }
    if (gifContainer) {
      gifContainer.style.opacity = 0;
      observer.observe(gifContainer);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isTyping) {
      let index = 0;
      setTypedText(""); 
      const interval = setInterval(() => {
        setTypedText(fullText.substring(0, index + 1));
        index++;
        if (index === fullText.length) {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    } else {
      setTypedText("");
    }
  }, [isTyping]);

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
      <Row className="align-items-center justify-content-center">
        <Col xs={12} md={5} className="mb-4 mb-md-0 d-none d-md-flex justify-content-center">
          <img
            src="/images/Contact.gif"
            alt="Contact"
            className="img-fluid contact-gif-wrapper"
            style={{ maxHeight: "150%", width: "auto", paddingTop: "10%" }}
          />
        </Col>
        <Col xs={12} md={5}>
          <div
            className="contact-form contact-form-wrapper"
            style={{ 
              width: "100%", 
              marginLeft: isMobile ? "0" : "-6rem",
              paddingRight: isMobile ? "0" : "5%",
              padding: isMobile ? "2rem" : "0",
              backgroundImage: isMobile ? "url('/images/Contact.gif')" : "none",
              backgroundSize: isMobile ? "contain" : "auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: isMobile ? "rgba(255, 255, 255, 0.85)" : "transparent",
              backgroundBlendMode: "overlay",
              borderRadius: isMobile ? "15px" : "0",
            }}
          >
            <Form id="contact-form" ref={form} onSubmit={sendEmail}>
              <Row className="mb-3 contact-title-container" style={{ minHeight: "3rem" }}>
                <p
                  className="contact-title"
                  style={{
                    fontSize: "1.5rem",
                    paddingBottom: "2%",
                    fontWeight: "semi-bold",
                    fontFamily: "'Cinzel Decorative', cursive",
                    marginTop: isMobile ? "0" : "7%",
                  }}
                >
                  {typedText}
                  <span className="cursor-blink">|</span>
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

              <div className="text-center mt-4">
                <Button
                  type="submit"
                  style={{ 
                    fontWeight: "bold", 
                    background: "linear-gradient(45deg, #53667d, #F5EDED)",
                    border: "none",
                    color: "white",
                    padding: "0.7rem 4rem",
                    borderRadius: "30px",
                  }}
                >
                  <span style={{
                    background: "linear-gradient(to right, #ffffff 0%, #3C3D37 30%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                    Submit
                  </span>
                </Button>
              </div>
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
        .cursor-blink {
          animation: blink 1s step-end infinite;
          font-weight: 300;
          color: #3C3D37;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </Container>
  );
}

export default Contact;
