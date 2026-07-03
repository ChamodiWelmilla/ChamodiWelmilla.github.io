import React from "react";
import { Card, Container } from "react-bootstrap";

function TrustMetrics() {
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
            TrustMetrics
          </Card.Title>

          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/TrustMetrics.png"}
            alt="TrustMetrics"
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
              TrustMetrics addresses the challenge of accurately identifying
              potential credit default risk using borrower profile and loan
              attributes. Manual risk assessment can be inconsistent and
              difficult to scale, so this project applies machine learning to
              support faster, data-driven lending decisions.
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
                i. End-to-End Credit Risk Pipeline:
              </span>
              <br />
              Builds a full ML workflow from dataset loading to model evaluation
              for binary default prediction.
              <br />
              <br />

              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                ii. Data Preprocessing and Cleaning:
              </span>
              <br />
              Applies feature selection, label encoding for categorical values,
              outlier removal using z-score filtering, and train-test splitting.
              <br />
              <br />

              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                iii. Feature Scaling for Robust Modeling:
              </span>
              <br />
              Uses StandardScaler to normalize numeric features and improve
              model training stability.
              <br />
              <br />

              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                iv. Baseline and Advanced Model Training:
              </span>
              <br />
              Trains Logistic Regression as a baseline and Support Vector
              Machine (SVM) for higher-performance classification.
              <br />
              <br />

              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                v. Hyperparameter Optimization:
              </span>
              <br />
              Uses GridSearchCV with cross-validation to identify optimal SVM
              parameters (C, gamma, kernel).
              <br />
              <br />

              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                vi. Performance Evaluation:
              </span>
              <br />
              Evaluates models using accuracy score, confusion matrix, and
              classification report (precision, recall, F1-score).
              <br />
              <br />

              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                vii. High Predictive Accuracy:
              </span>
              <br />
              Achieves strong results with optimized SVM (about 98.43% test
              accuracy on the cleaned dataset).
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

              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                Frontend:
              </span>
              Google Colab notebook environment for interactive experimentation
              and result inspection
              <br />
              <br />

              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                Backend:
              </span>
              Python with Pandas and NumPy for preprocessing, and scikit-learn
              for Logistic Regression, SVM, GridSearchCV, and model evaluation
              <br />
              <br />
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default TrustMetrics;