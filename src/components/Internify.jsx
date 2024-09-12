import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";

function Internify() {
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
            Internify
          </Card.Title>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/Internify.png"}
            alt="CV Tracker"
            style={{
              objectFit: "cover",
              display: "block",
              margin: "0 auto",
              marginTop: "5%",
              maxWidth: isMobile ? "100%" : "50%",
            }}
          />
          <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
            <Card.Text style={{ marginTop: "7%", marginBottom: "5%" }}>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  fontFamily: "'Cinzel Decorative', cursive",
                }}
              >
                Problem Addressed{" "}
              </span>{" "}
              <br />
              The Faculty of Information Technology at the University of
              Moratuwa faced challenges in efficiently managing and tracking
              student CVs.
              <br />
              The existing manual process was time-consuming, prone to errors,
              and lacked a centralized system for storage, updates, and
              retrieval. This led to difficulties in maintaining up-to-date
              records, especially during recruitment and internship periods.
            </Card.Text>

            <Card.Text style={{ marginTop: "5%" }}>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  fontFamily: "'Cinzel Decorative', cursive",
                }}
              >
                Solution Overview
              </span>
              <Card.Text style={{ marginTop: "1%" }}>
                <Row className="justify-content-center">
                  <Col
                    xs={12}
                    md={6}
                    lg={5}
                    className="d-flex flex-column align-items-center"
                  >
                    <Card.Img
                      variant="top"
                      src={
                        process.env.PUBLIC_URL +
                        "/images/InternifyContribution.png"
                      }
                      alt="Gardern Cleaning Tracker Solution"
                      className="equal-img"
                      style={{
                        objectFit: "cover",
                        display: "block",
                        width: "100%",
                        maxHeight: "auto",
                        alignSelf: "center",
                        marginLeft: isMobile ? "-2%" : "23%",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "12px",
                        marginLeft: isMobile ? "-2%" : "23%",
                      }}
                    >
                      -Final Product-
                    </p>
                  </Col>
                  <Col
                    xs={12}
                    md={6}
                    lg={5}
                    className="d-flex flex-column align-items-center"
                  >
                    <a
                      href="https://www.internify.fit/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginTop: isMobile ? "5%" : "27%" }}
                    >
                      {" "}
                      View site{" "}
                    </a>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Text>

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
              i. Centralized CV Repository. <br />
              ii. Validation and Approval Workflow. <br />
              iii. Calculate CGPA. <br />
              iv. Search and Filtering Capabilities. <br />
              v. Analytics and Reporting. <br />
              vi. User-Friendly Interface. <br />
              vii. User Roles and Permissions. <br />
              viii. Data Security and Backup. <br />
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
              React, React Native, Express.js
              <br />
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Internify;
