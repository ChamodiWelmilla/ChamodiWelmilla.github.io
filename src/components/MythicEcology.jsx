import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import ReactPlayer from "react-player/youtube";

function MythicEcology() {
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
            Mythic Ecology
          </Card.Title>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/MythicEcology.png"}
            alt="Mythic Ecology"
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
              In the complex, data-rich world of fantasy settings, creators, and
              game masters face a major challenge in maintaining consistency,
              predicting outcomes, and planning narrative elements. There is a
              lack of a centralized, rule-based computational system to manage
              the classification, relationships, and vulnerabilities of
              fictional magical creatures, artifacts, and arcane rituals. This
              makes it difficult to maintain world coherence, balance threat
              levels, and consistently derive logical countermeasure strategies
              or successful ritual plans based on established ecological and
              magical rules.
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
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                i. Threat Analysis & Countermeasure Derivation:{" "}
              </span>
              <br />
              Provides instant, rule-based countermeasure strategies for any
              cataloged creature, automatically calculating threat level and
              primary weaknesses.
              <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                ii. Dynamic Ritual Success Scoring:{" "}
              </span>
              <br />
              Calculates the numerical success probability (0-100%) for any
              ritual by analyzing the complex compatibility between the ritual's
              alignment, the location's influence, the moon phase's boost, and
              the availability of the required artifacts.
              <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                iii. Creature Relationship Discovery:{" "}
              </span>
              <br />
              Allows users to query the database to discover creature
              co-dependencies and relationships by filtering entities across
              multiple attributes (Habitat, Alignment, Threat Level).
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                <br />
                <br />
                iv. Structured Ritual Planning:{" "}
              </span>
              <br />
              Generates a step-by-step execution plan for a ritual, including
              required ingredients, environmental checks, and necessary threat
              mitigation steps for local entities.
              <br />
              <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                v. Scalable and Secure Logic:{" "}
              </span>
              <br />
              Separates core rule logic into a robust Python backend, ensuring
              data integrity and consistency across all front-end queries.
              <br />
            </Card.Text>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                objectFit: "contain",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "600px",
                height: "400px",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "56.25%",
                }}
              >
                <ReactPlayer
                  url="https://youtu.be/v3I6Hrp2p9w"
                  controls={true}
                  width="100%"
                  height="100%"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    border: "1px solid black",
                  }}
                />
              </div>
              <p style={{ fontSize: "14px" }}>-Demonstration-</p>
            </div>

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
                Technology Stack
              </div>
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Frontend:{" "}
              </span>
              HTML, CSS, and JavaScript utilizing the native Fetch API to send
              requests to the Flask backend and dynamically update the User
              Interface (UI) with the calculated results <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Backend:{" "}
              </span>
              Python with the Flask framework, providing a lightweight RESTful
              API to execute complex logic and calculations. <br /> <br />
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default MythicEcology;
