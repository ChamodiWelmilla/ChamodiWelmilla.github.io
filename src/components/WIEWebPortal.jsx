import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import ReactPlayer from "react-player/youtube";

function WIEWebPortal() {
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
            IEEE WIE UoM Web Portal
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
              The IEEE WIE Student Branch at the University of Moratuwa lacked a
              centralized and dynamic online presence to showcase its
              initiatives, achievements, and opportunities. This made it
              challenging for members, collaborators, and prospective
              participants to stay updated or access important resources. The
              official website bridges that gap by offering a centralized,
              accessible, and engaging platform to represent WIE's identity and
              activities effectively.
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
                i. Centralized Information Hub:{" "}
              </span>
              <br />
              Provides up-to-date details on events, initiatives, projects, and
              committee members of IEEE WIE UoM.
              <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                ii. Member Recognition:{" "}
              </span>
              <br />
              Highlights member achievements, awards, and contributions to
              foster motivation and visibility.
              <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                iii. Event Showcases:{" "}
              </span>
              <br />
              Features past and upcoming events with image galleries, write-ups,
              and quick access to registration links.
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                <br />
                <br />
                iv. Seamless Navigation:{" "}
              </span>
              <br />
              Designed with a responsive and intuitive layout for easy browsing
              across all devices.
              <br />
              <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                v. Collaboration Ready:{" "}
              </span>
              <br />
              Offers contact details, partnership opportunities, and forms for
              those interested in working with the WIE community.
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
                React:{" "}
              </span>
              For building the cross-platform mobile application. <br /> <br />
            </Card.Text>

            {/* <div
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
            </div> */}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default WIEWebPortal;
