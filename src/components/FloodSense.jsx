import React from "react";
import { Card, Container } from "react-bootstrap";
import ReactPlayer from "react-player/youtube";

function FloodSense() {
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
            FloodSense
          </Card.Title>

          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/FloodSense.png"}
            alt="FloodSense"
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
                Problem Addressed
              </span>
              <br />
              FloodSense addresses major challenges in flood-prone regions,
              including delayed flood warnings, limited real-time visibility of
              water levels, poor coordination during emergencies, and inadequate
              preparedness among communities. These issues often lead to
              property damage, disruption of transport and services, and
              increased risk to human life.
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

              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                i. Real-Time Flood Monitoring:
              </span>
              <br />
              Collects and visualizes rainfall, river/water-level, and related
              environmental indicators to provide live flood-risk awareness for
              affected areas.
              <br />
              <br />

              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                ii. Flood Prediction and Risk Forecasting:
              </span>
              <br />
              Uses machine learning and historical patterns to estimate flood
              likelihood and severity, helping authorities and communities act
              before critical thresholds are reached.
              <br />
              <br />

              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                iii. Geospatial Risk Visualization:
              </span>
              <br />
              Provides map-based insights to identify high-risk zones,
              vulnerable communities, and potential inundation areas for easier
              interpretation and faster decisions.
              <br />
              <br />

              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                iv. Alerts and Early Warning Support:
              </span>
              <br />
              Generates timely flood-risk notifications and warning indicators
              so users can prepare evacuations, protect assets, and reduce
              losses.
              <br />
              <br />

              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                v. Stakeholder-Focused Interfaces:
              </span>
              <br />
              Supports multiple user groups such as residents,
              disaster-management teams, planners, and local authorities with
              clear dashboards and actionable data views.
              <br />
              <br />

              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                vi. Administration and Data Management:
              </span>
              <br />
              Enables platform administrators to manage data sources, model
              updates, monitoring regions, and system reliability for continuous
              operation.
              <br />
              <br />

              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                vii. Analytics and Reporting:
              </span>
              <br />
              Offers trends, charts, and summary reports on rainfall intensity,
              water-level changes, and flood events to support planning, policy,
              and post-event analysis.
              <br />
              <br />

              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                viii. Security and Reliability:
              </span>
              <br />
              Includes authentication and controlled data access to ensure
              secure use of sensitive environmental and community-related
              information.
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
                  url="https://youtu.be/8Mc5PPMSqo8"
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

              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                Data Science & Modeling:
              </span>
              Python (flood prediction, preprocessing, and analysis)
              <br />
              <br />

              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                Notebook-Based Development:
              </span>
              Jupyter Notebook (experimentation, model evaluation, and
              visualization)
              <br />
              <br />

              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                Backend/Integration:
              </span>
              Python-based APIs/services
              <br />
              <br />

              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                Data Storage:
              </span>
              Structured datasets for hydrological and weather-related records
              <br />
              <br />

              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                Deployment/Scalability:
              </span>
              Cloud-ready architecture for continuous monitoring and alerts
              <br />
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default FloodSense;