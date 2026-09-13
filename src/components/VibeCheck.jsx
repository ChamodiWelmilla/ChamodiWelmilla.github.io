import React from "react";
import { Card, Container } from "react-bootstrap";

function VibeCheck() {
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
            Vibecheck
          </Card.Title>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/VibeCheck.png"}
            alt="Vibecheck"
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
              Validating that AI-generated code strictly adheres to business requirements is currently unpredictable, error-prone, and lacks formal guarantees. Organizations need a deterministic, evidence-backed verification framework that automatically audits LLM-generated workflows against formal specifications to detect hallucinations, ensure process alignment, and guarantee execution safety.
            </Card.Text>

            <Card.Text>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  fontFamily: "'Cinzel Decorative', cursive",
                }}
              >
                Solution Overview
              </span>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "/images/VibeCheckSolution.png"}
                alt="Solution Overview"
                style={{
                  objectFit: "cover",
                  display: "block",
                  margin: "0 auto",
                  marginTop: "3%",
                  maxWidth: isMobile ? "100%" : "60%",
                }}
              />
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
                i. Automated Specification Extraction:{" "}
              </span>
              <br />
              Parses BPMN 2.0 XML specifications to automatically generate Finite Linear Temporal Logic (LTLf) properties, capturing intended business logic with mathematical rigor.
              <br /> <br />
              
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                ii. Multi-Modal Code Verification:{" "}
              </span>
              <br />
              Employs an advanced three-layer engine utilizing Python AST analysis, Z3 symbolic execution, and dynamic tracing to deeply validate the behavior and feasible paths of generated code.
              <br /> <br />
              
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                iii. Formal Equivalence Checking:{" "}
              </span>
              <br />
              Utilizes the C++ SPOT library and NLP-driven semantic matching to reliably prove alignment between generated workflows and their source requirements, outputting a quantifiable compliance certificate.
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
              Streamlit for interactive verification dashboards, orchestration, and compliance reporting
              <br /> <br />
              
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Backend:{" "}
              </span>
              Python (FastAPI, AST), C++ (SPOT, Pybind11), Z3 Theorem Prover, and Sentence-BERT for formal model checking and semantic classification
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default VibeCheck;
