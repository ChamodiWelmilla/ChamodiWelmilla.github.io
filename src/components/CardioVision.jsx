import React from "react";
import { Card, Container } from "react-bootstrap";
import ReactPlayer from "react-player/youtube";

function CardioVision() {
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
            CardioVision
          </Card.Title>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/CardioVision.png"}
            alt="CardioVision"
            style={{
              objectFit: "cover",
              display: "block",
              margin: "0 auto",
              marginTop: "5%",
              height: "auto",
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
                Problem Addressed
              </span>{" "}
              <br />
              Traditional cardiovascular risk assessment often relies on rigid, manual evaluations that can overlook subtle patterns across different patient vitals. Healthcare providers and individuals need a fast, data-driven, and accessible solution that analyzes complex metrics in real-time to proactively identify health risks and encourage early intervention.
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
                i. AI‑Powered Clustering Analysis:{" "}
              </span>
              <br />
              Utilizes unsupervised machine learning (K-Means) via scikit-learn to accurately categorize patient vitals into distinct cardiovascular risk profiles based on historical data.
              <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                ii. Real‑Time Interactive Assessment:{" "}
              </span>
              <br />
              Provides a seamless user experience through a modern, responsive web interface, instantly translating complex medical data into clear, actionable health advice.
              <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                iii. Scalable Automated Backend:{" "}
              </span>
              <br />
              Employs a robust Flask REST API to bridge the machine learning pipeline with the frontend, ensuring reliable data processing and seamless predictive reporting.
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
                marginTop: "2%"
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
                  url="https://youtu.be/_iKTSVxGju8"
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
              <p style={{ fontSize: "14px", marginTop: "10px" }}>-Demonstration-</p>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default CardioVision;
