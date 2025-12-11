import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import ReactPlayer from "react-player/youtube";

function FaceSync() {
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
            FaceSync
          </Card.Title>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/FaceSync.png"}
            alt="FaceSync"
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
              Traditional attendance tracking methods are time‑consuming,
              error‑prone, and vulnerable to manipulation. Institutions and
              organizations need a reliable, automated solution that ensures
              accuracy, reduces administrative overhead, and integrates
              seamlessly with modern digital workflows.
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
                i. Real‑Time Facial Recognition:{" "}
              </span>
              <br />
              Captures and verifies identities using OpenCV, ensuring fast and
              accurate attendance marking.
              <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                ii. Machine Learning‑Driven Verification:{" "}
              </span>
              <br />
              Employs scikit‑learn KNN classifier to match faces against stored
              datasets for high recognition accuracy.
              <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                iii. Automated Attendance Logging:{" "}
              </span>
              <br />
              Records attendance directly into CSV files, enabling structured
              and tamper‑proof record keeping.
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
                  url="https://youtu.be/nP3sOEVDNvE"
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
              Streamlit / Flask for dashboards and reporting <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Backend:{" "}
              </span>
              Python with OpenCV and scikit‑learn for recognition and
              classification <br /> <br />
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default FaceSync;
