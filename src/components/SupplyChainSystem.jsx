import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";

function ManagementSystem() {
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
            Supply Chain System
          </Card.Title>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/ManagementSystem.png"}
            alt="ColourPlus"
            style={{
              objectFit: "cover",
              display: "block",
              margin: "0 auto",
              marginTop: "5%",
              maxWidth: isMobile ? "100%" : "50%",
            }}
          />
          <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
            <Card.Text
              style={{
                marginTop: "7%",
                marginBottom: "5%",
                textAlign: "justify",
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
                We Offer
              </div>
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                <p style={{ fontWeight: "normal" }}>
                  We are currently developing a comprehensive system tailored
                  specifically for{" "}
                  <span className="fw-bold">
                    Colour Plus Printing System (PVT) LTD
                  </span>
                  , empowering their operations to efficiently manage clients
                  like Hydramani, Inqube, and Vogue, with streamlined workflows
                  for printing, chemical management, and customer service.
                </p>
                <br />
                i. Comprehensive Management System:{" "}
              </span>
              <br />
              A single platform to manage all aspects of the business, from
              customer sample requests, employee attendance, payroll, chemical
              store, and supplier management, all integrated to ensure smooth
              operations.
              <br />
              <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                ii. Enhanced Productivity and Efficiency:{" "}
              </span>
              <br />
              By automating key processes and reducing manual effort, we help
              businesses improve their productivity, enabling employees to focus
              on more strategic tasks rather than mundane administrative work.
              <br />
              <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                iii. Scalability and Customization:{" "}
              </span>
              <br />
              Client can grow as business expands, and customizable to fit the
              unique requirements of their business, whether it's a focus on
              chemical management, customer interaction, or employee oversight.
              <br />
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
              React, Node.js
              <br />
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default ManagementSystem;
