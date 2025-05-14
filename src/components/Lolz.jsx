import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import ReactPlayer from "react-player/youtube";

function Lolz() {
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
            Lolz
          </Card.Title>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/Lolz.jpg"}
            alt="Lolz"
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
                Problem Addressed{" "}
              </span>{" "}
              <br />
              Users lose access to previously viewed content once they go
              offline, which can hinder the user experience, especially for
              lightweight content like jokes, which users may want to revisit
              without internet access. Lolz addresses that gap by enabling
              offline access to joke content through local data caching. It
              ensures that users can enjoy a consistent and uninterrupted
              experience, even without connectivity.
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
                i. Online Joke Retrieval:{" "}
              </span>
              <br />
              Fetches exactly five jokes via a GET request from a public API.
              <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                ii. Offline Access:{" "}
              </span>
              <br />
              Caches jokes using the shared_preferences package, allowing users
              to access content without internet connectivity.
              <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                iii. Smart Connectivity Handling:{" "}
              </span>
              <br />
              Automatically adapts to system-wide light or dark mode settings,
              ensuring optimal readability and user comfort.
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                <br />
                <br />
                iv. Theme Support:{" "}
              </span>
              <br />
              Users can switch between light and dark modes based on personal
              preference.
              <br />
              <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                v. User-Centric Design:{" "}
              </span>
              <br />
              Simple and intuitive UI for smooth interaction on both Android and
              iOS platforms.
              <br />
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
                Technology Stack
              </div>
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Dart:{" "}
              </span>
              For building the cross-platform mobile application. <br /> <br />
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
                  url="https://youtube.com/shorts/ubXhwlgs6y4?feature=share"
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
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Lolz;