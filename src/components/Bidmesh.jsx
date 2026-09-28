import React from "react";
import { Card, Container } from "react-bootstrap";


function Bidmesh() {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="project-page-wrapper" 
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
            Bidmesh
          </Card.Title>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/BidMesh.png"}
            alt="Bidmesh"
            style={{
              objectFit: "cover",
              display: "block",
              margin: "0 auto",
              marginTop: "5%",
              height: "auto",
              maxWidth: isMobile ? "100%" : "65%",
            }}
          />
          <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
            <Card.Text style={{ marginTop: "7%", marginBottom: "5%", textAlign: "justify" }}>
              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  fontFamily: "'Cinzel Decorative', cursive",
                  textAlign: "center",
                  marginBottom: "1rem"
                }}
              >
                Problem Addressed
              </div>
              High-traffic online auction platforms frequently suffer from data inconsistencies, race conditions (where multiple users attempt to place a bid at the exact same millisecond), and UI latency. Traditional monolithic web applications force users to constantly refresh the page to see the latest price, while heavy, unoptimized image uploads slow down page load times. In a live bidding war, ensuring the strict chronological order of bids, preventing server crashes under heavy load, and maintaining absolute data integrity are critical challenges.
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
                We offer
              </div>
              <div
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
              >
              </div>
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                i. Real-Time Bidding Engine:{" "}
              </span>
              <br />
              Establish a persistent, two-way connection between the server and the client. This allows users to see live bid updates, price changes, and auction countdowns instantly without ever needing to refresh the page, creating a dynamic and engaging bidding war environment.
              <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                ii. Concurrency & Race Condition Prevention:{" "}
              </span>
              <br />
              Ensures that even if thousands of users attempt to bid on the same item simultaneously, the system securely locks the transaction, processes the highest bid, and strictly eliminates any overlapping or fraudulent race conditions.
              <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                iii. High-Throughput Event Streaming:{" "}
              </span>
              <br />
              The backend consumes these messages sequentially and asynchronously, allowing the platform to maintain high throughput and reliability without blocking the main application threads.
              <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                iv. Serverless Cloud Image Optimization:{" "}
              </span>
              <br />
              Provides a lightning-fast user experience by offloading heavy image processing to the cloud. This automatically triggers a serverless AWS Lambda function that compresses and resizes the image in milliseconds before delivering it to the frontend.
              <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                v. User Roles and Interfaces:{" "}
              </span>
              <br />
              For Bidders, the platform offers an interactive dashboard to view active auctions, place real-time bids, and track the remaining time on items. For Administrators, the platform provides a management interface to securely create new auctions, upload item images, monitor bidding activity, and securely delete or end auctions, which triggers automated cleanup processes in the cloud.
              <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                vi. Fault-Tolerant Data Persistence:{" "}
              </span>
              <br />
              Incorporates idempotency checks and optimistic locking to guarantee fault-tolerant data integrity, ensuring no financial data is ever lost during a server outage.
              <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                vii. Performance Validation:{" "}
              </span>
              <br />
              The entire concurrency model is aggressively stress-tested using Artillery load testing, simulating 75+ concurrent virtual users firing simultaneous bids to validate 100% data accuracy and system stability under severe load.
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
                Frontend:{" "}
              </span>
              React and TypeScript.
              <br /> <br />
              
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Backend:{" "}
              </span>
              Java and Spring Boot, Apache Kafka and WebSocket.
              <br /> <br />

              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Database & Caching:{" "}
              </span>
              PostgreSQL paired with Redis.
              <br /> <br />

              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Cloud and Infrastructure:{" "}
              </span>
              AWS S3, AWS Lambda and Docker.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Bidmesh;
