import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";

function Atelier() {
  const isMobile = window.innerWidth <= 768;
  return (
    <div
      style={{
        overflowX: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: "5%",
      }}
    >
      <Container fluid style={{ flexGrow: 1 }}>
        <Card className="w-100 h-100 border-0">
          <Card.Title
            style={{
              fontSize: "2rem",
              fontFamily: "'Cinzel Decorative', cursive",
              fontWeight: 600,
              color: "#53667d",
              textAlign: "center",
              marginTop: "2%",
            }}
          >
            WelmillaCN Atelier
          </Card.Title>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/Portfolio.png"}
            alt="Portfolio"
            style={{
              objectFit: "cover",
              display: "block",
              margin: "0 auto",
              marginTop: "5%",
              border: "1px solid black",
              maxWidth: isMobile ? "100%" : "50%",
            }}
          />
          <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
            <Card.Text style={{ marginTop: "7%", marginBottom: "2%" }}>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  fontFamily: "'Cinzel Decorative', cursive",
                }}
              >
                Welcome to my personal portfolio!
              </span>{" "}
              <br />
              This website showcases my journey as a developer and problem
              solver. Built with a modern tech stack, this portfolio is a
              reflection of my passion for building creative, user-centric
              applications and my continuous learning in the ever-evolving field
              of software development.
            </Card.Text>

            <Card.Text
              style={{
                marginTop: "2%",
                marginBottom: "5%",
              }}
            >
              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  fontFamily: "'Cinzel Decorative', cursive",
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
              >
                I ensure
              </div>
              Responsive Design. <br />
              Showcase of Projects. <br />
              Embedded Media. <br />
              Smooth Navigation.
              <br />
            </Card.Text>

            <Card.Text style={{ marginBottom: "5%" }}>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  fontFamily: "'Cinzel Decorative', cursive",
                  textAlign: "justify",
                }}
              >
                Technology Stack
              </span>
              <br />
              This portfolio was built using modern web technologies such as
              React for creating an interactive user interface, and JavaScript
              for interactivity.
              <br />
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Atelier;
