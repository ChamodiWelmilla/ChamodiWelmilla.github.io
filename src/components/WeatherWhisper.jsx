import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import ReactPlayer from "react-player/youtube";

function WeatherWhisper() {
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
            Weather Whisper
          </Card.Title>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/WeatherWhisper.png"}
            alt="Weather Whisper"
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
              The challenge is the lack of accessible and accurate real-time
              weather data tailored to specific locations. This gap can lead to
              poor planning, safety risks, and inefficiencies in various
              sectors.
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
                        "/images/WeatherWhisperSolution.jpeg"
                      }
                      alt="Weather Whisper Solution"
                      className="equal-img"
                      style={{
                        objectFit: "cover",
                        display: "block",
                        width: "50%",
                        height: "auto",
                        maxWidth: isMobile ? "50%" : "100%",
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
                    <Card.Img
                      variant="top"
                      src={process.env.PUBLIC_URL + "/images/PCB.jpeg"}
                      alt="PCB Design"
                      className="equal-img"
                      style={{
                        objectFit: "cover",
                        display: "block",
                        width: "auto",
                        maxWidth: isMobile ? "80%" : "100%",
                        maxHeight: "300px",
                      }}
                    />
                    <p style={{ fontSize: "12px" }}>-PCB Design-</p>
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
              Weather Whisper is an innovative weather station that combines
              advanced hardware with a user-friendly mobile application to
              deliver real-time weather updates. Our solution provides
              hyper-local, accurate, and timely weather information, ensuring
              users are always informed about the conditions that matter most to
              them.
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
                  url="https://youtu.be/XVydrLcr-9c"
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

            <Card.Text style={{ marginBottom: "5%" }}>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  fontFamily: "'Cinzel Decorative', cursive",
                  textAlign: "justify",
                }}
              >
                Sensors Used
              </span>
              <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                DHT22:{" "}
              </span>
              Measures temperature and humidity with high accuracy. <br />{" "}
              <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                BH1750:{" "}
              </span>
              Provides precise light intensity data.
              <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                BMP180:{" "}
              </span>
              Tracks barometric pressure for forecasting weather changes.
              <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Raindrop Sensor:{" "}
              </span>
              Detects and measures rainfall intensity.
              <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Hall Effect Sensor:{" "}
              </span>
              Monitors wind speed by detecting changes in magnetic fields.
              <br /> <br />
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default WeatherWhisper;
