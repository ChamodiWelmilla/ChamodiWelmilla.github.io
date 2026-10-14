import React from "react";
import { Card, Container } from "react-bootstrap";

function FlowBridge() {
  const isMobile = window.innerWidth <= 768;

  return (
    <div
      className="project-page-wrapper"
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
            FlowBridge
          </Card.Title>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/FlowBridge.png"}
            alt="FlowBridge"
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
                Problem Addressed
              </div>
              Enterprise B2B trade networks exchange thousands of critical documents like invoices and purchase orders every day. Traditional synchronous pipelines often suffer from network timeouts and cascading failures when partner systems experience downtime. Additionally, manual verification struggles to catch duplicate billing and mismatched line items. 
              FlowBridge addresses these challenges by guaranteeing zero document loss, eliminating unauthorized billing, and ensuring strict end-to-end auditability across partner networks.
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

              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                i. Asynchronous Ingestion & Event-Driven Processing:{" "}
              </span>
              <br />
              Decouples document submission from background processing using asynchronous message queues. Incoming documents receive an instant tracking ID and are processed in the background, sustaining high ingestion throughput without blocking client requests.
              <br /> <br />

              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                ii. Automated Validation & Fraud Prevention:{" "}
              </span>
              <br />
              Enforces transactional integrity by automatically verifying document line items and checking buyer credit limits to instantly quarantine unauthorized or duplicate billing.
              <br /> <br />

              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                iii. Low-Latency Inter-Service Communication:{" "}
              </span>
              <br />
              Implements high-speed binary Remote Procedure Calls (RPC) between internal microservices, enabling millisecond schema validation and coordination while maintaining public-facing APIs for external partner integration.
              <br /> <br />

              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                iv. 6-Stage Finite State Machine & Audit Trail:{" "}
              </span>
              <br />
              Enforces deterministic lifecycle transitions from initial submission to final delivery, recording an immutable, timestamped audit log of every state change for complete enterprise compliance.
              <br /> <br />

              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                v. Dead-Letter Queue (DLQ) Error Quarantine:{" "}
              </span>
              <br />
              Isolates failing, corrupted, or invalid documents into a quarantined dead-letter queue, ensuring zero transaction loss during downstream outages and allowing administrators to inspect errors and safely trigger reprocessing.
              <br /> <br />

              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                vi. Multi-Enterprise Isolation & Role-Based Access Control:{" "}
              </span>
              <br />
              Secures all platform endpoints with strict tenant data partitioning and role-based access control, ensuring enterprises can only access, sign, or review documents where they are designated participants.
              <br /> <br />

              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                vii. Synchronized Dashboard & Deep Observability:{" "}
              </span>
              <br />
              Delivers an intuitive tracking dashboard that keeps document states synchronized in real-time without constant page polling, accompanied by deep observability into system health, throughput, and request latency distributions.
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
              Java and Spring Boot, REST APIs, gRPC and Protocol Buffers, RabbitMQ.
              <br /> <br />

              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Database & Persistence:{" "}
              </span>
              PostgreSQL and Spring Data JPA.
              <br /> <br />

              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                DevOps & Observability:{" "}
              </span>
              Docker, Docker Compose and Prometheus.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default FlowBridge;
