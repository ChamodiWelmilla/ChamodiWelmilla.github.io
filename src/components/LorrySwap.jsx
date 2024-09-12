import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import ReactPlayer from "react-player/youtube";

function LorrySwap() {
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
            LorrySwap
          </Card.Title>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/LorrySwap.png"}
            alt="LorrySwap"
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
              The project targets inefficiencies in agricultural markets, such
              as oversupply, waste of perishable goods, and traffic congestion
              due to poorly coordinated truck arrivals. Another key issue is the
              underutilization of trucks, which often return empty after
              delivering goods, leading to resource inefficiencies.
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
                src={process.env.PUBLIC_URL + "/images/LorrySwapSolution.png"}
                alt="Solution Overview"
                style={{
                  objectFit: "cover",
                  display: "block",
                  margin: "0 auto",
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
              <p>Our solution involve with two mobile apps and two websites.</p>
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                i. Real-Time Inventory Management:{" "}
              </span>
              <br />
              Allows farmers to get an idea of current supply and demand in each
              economic centers, leads to reduce oversupply. Pre-Order
              methodology enables sellers to view available goods on a given day
              and economic center orders through the system, reducing
              operational inefficiencies.
              <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                ii. Transportation and Logistics Optimization:{" "}
              </span>
              <br />
              Provides a tracking system to monitor the location of trucks,
              reducing traffic congestion in market areas and enabling better
              coordination. Optimized Truck Utilization helps truck drivers find
              additional trips that align with their planned routes, minimizing
              empty return trips and optimizing resource use. Route Optimization
              suggests optimal routes for truck drivers based on starting point,
              destination, and other parameters, improving overall
              transportation efficiency.
              <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                iii. User Roles and Interfaces:{" "}
              </span>
              <br />
              For divers allow creates routes and receive suggestions for rides
              based on those routes. Send and receive ride requests from other
              users, manage route details, and track real-time ride status.
              <br />
              For cargo finders allow search for available drivers, send
              requests, and track the status of their cargo. For market
              <br />
              Sellers/Resellers allow manage inventory by adding, updating, or
              deleting items in the virtual market. View available items for
              specific dates and economic center orders accordingly.
              <br />
              For farmers/suppliers allow add items to the inventory management
              and manage orders from market sellers. Owner Interface: Manage
              fleet operations by adding or deleting vehicles and assigning
              drivers.
              <br />
              <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                iv. Administration and Management:{" "}
              </span>
              <br />
              For admins allow manage user roles and permissions, including
              verifying and validating new drivers, vehicles through a website.
              Oversee the entire platform, including user feedback, ride
              history, and operational metrics.
              <br />
              <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                v. Communication and Collaboration:{" "}
              </span>
              <br />
              Integrated inbuilt communication platform for users to coordinate
              and discuss directly within the application.
              <br />
              Push Notifications allow real-time order updates, updates on
              driver location, and other critical information.
              <br />
              <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                vi. Security and Compliance:{" "}
              </span>
              <br />
              User Authentication and Authorization: Secure login system using
              email and password, with different access levels based on user
              roles. Data Privacy Compliance: Adherence to relevant data privacy
              regulations, ensuring the protection of user data.
              <br />
              <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                vii. Review and Rating System:{" "}
              </span>
              <br />
              Users can submit reviews and ratings for drivers and
              farmers/suppliers, which are displayed on the their profiles.
              <br />
              <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                viii. Analytics and Reporting:{" "}
              </span>
              <br />
              Allows to view supply and demand across the platform using graphs{" "}
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
              Built with React Native to ensure a responsive and engaging user
              interface across multiple platforms. <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Backend:{" "}
              </span>
              Powered by Flask, a Python web framework, known for its simplicity
              and flexibility.
              <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Database:{" "}
              </span>
              Utilizes SQL for structured and efficient data handling,
              particularly suited for the dynamic nature of supply chains.
              <br /> <br />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Cloud Infrastructure:{" "}
              </span>
              Hosted on Microsoft Azure, chosen for its scalability, security,
              and comprehensive suite of services.
              <br />
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
                  url="https://youtu.be/XgO-Qhg_kxs"
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

            <Card.Text style={{ marginBottom: "5%", marginTop: "7%" }}>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  fontFamily: "'Cinzel Decorative', cursive",
                }}
              >
                Achievements:
              </span>
              <br />I am proud to
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                {" "}
                lead{" "}
              </span>{" "}
              the development of this project.
              <br /> As a team, we won the{" "}
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                {" "}
                1st runner-up
              </span>{" "}
              and
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Most Innovative Team
              </span>{" "}
              award in Hackventure1.0 organized by the University of Kelaniya.
              <Card.Text style={{ marginTop: "3%" }}>
                <Row className="justify-content-center">
                  <Col
                    xs={12}
                    md={6}
                    lg={5}
                    className="d-flex flex-column align-items-center mb-3"
                  >
                    <Card.Img
                      variant="top"
                      src={process.env.PUBLIC_URL + "/images/RunnerUp.jpg"}
                      alt="Runner Up"
                      className="equal-img"
                      style={{
                        objectFit: "cover",
                        display: "block",
                        width: "100%",
                        maxHeight: "300px",
                      }}
                    />
                    <p style={{ fontSize: "12px" }}>
                      -Celebrating Runner-up achievement-
                    </p>
                  </Col>
                  <Col
                    xs={12}
                    md={6}
                    lg={5}
                    className="d-flex flex-column align-items-center mb-3"
                  >
                    <Card.Img
                      variant="top"
                      src={
                        process.env.PUBLIC_URL + "/images/MostInnovative.jpg"
                      }
                      alt="Most Innovative Team"
                      className="equal-img"
                      style={{
                        objectFit: "cover",
                        display: "block",
                        width: "100%",
                        maxHeight: "300px",
                      }}
                    />
                    <p style={{ fontSize: "12px" }}>
                      -Celebrating Most Innovative Team achievement-
                    </p>
                  </Col>
                  <Col
                    xs={12}
                    className="d-flex flex-column align-items-center mb-3"
                  >
                    <Card.Img
                      variant="top"
                      src={process.env.PUBLIC_URL + "/images/FinalDay.jpg"}
                      alt="Presenting on Final Day"
                      className="equal-img"
                      style={{
                        objectFit: "cover",
                        display: "block",
                        maxWidth: "500px",
                        maxHeight: "auto",
                      }}
                    />
                    <p style={{ fontSize: "12px" }}>
                      -Presentation during Final-
                    </p>
                  </Col>
                </Row>
              </Card.Text>
              <Row className="justify-content-center">
                <Col
                  xs={12}
                  md={6}
                  lg={5}
                  className="d-flex flex-column align-items-center mb-3"
                >
                  <Card.Img
                    variant="top"
                    src={process.env.PUBLIC_URL + "/images/SemiFinal.jpg"}
                    alt="Runner Up"
                    className="equal-img"
                    style={{
                      objectFit: "cover",
                      display: "block",
                      width: "50%",
                      maxHeight: "auto",
                      alignSelf: "center",
                      marginLeft: "23%",
                    }}
                  />
                  <p style={{ fontSize: "12px", marginLeft: "23%" }}>
                    -Presentation during Semi Final-
                  </p>
                </Col>
                <Col
                  xs={12}
                  md={6}
                  lg={5}
                  className="d-flex flex-column align-items-center mb-3"
                >
                  <Card.Img
                    variant="top"
                    src={process.env.PUBLIC_URL + "/images/SemiFinalDay.jpg"}
                    alt="Most Innovative Team"
                    className="equal-img"
                    style={{
                      objectFit: "cover",
                      display: "block",
                      width: "auto",
                      maxHeight: "300px",
                    }}
                  />
                  <p style={{ fontSize: "12px" }}>-Team DevDynasty-</p>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default LorrySwap;
