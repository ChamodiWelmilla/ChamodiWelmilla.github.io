import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";

function GardenCleaningTracker() {
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
            Garden Cleaning Tracker
          </Card.Title>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/MaintainanceTracker.png"}
            alt="Maintainance Tracker"
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
              Maintaining the cleanliness and upkeep of large gardens, such as
              those at the University of Moratuwa, presents several challenges.
              <br />
              The absence of a systematic approach leads to inefficiencies,
              Inconsistent Maintenance, Resource Mismanagement, Lack of
              Accountability, Unclear Priorities, Time-Consuming Processes.
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
                        "/images/MaintainanceTrackerSolution.png"
                      }
                      alt="Gardern Cleaning Tracker Solution"
                      className="equal-img"
                      style={{
                        objectFit: "cover",
                        display: "block",
                        width: "100%",
                        maxWidth: isMobile ? "50%" : "100%",
                        height: "auto",
                        alignSelf: isMobile ? "left" : "center",
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
                      href="https://ecmm.uom.lk/signin"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginTop: isMobile ? "5%" : "70%" }}
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
              i.Automated Scheduling and Task Assignment. <br />
              ii. Real-Time Tracking and Monitoring. <br />
              iii.Accountability and Reporting. <br />
              iv. Resource Optimization and Management. <br />
              v. Priority-Based Maintenance. <br />
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

export default GardenCleaningTracker;
