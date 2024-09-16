import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import TypingEffect from "react-typing-effect";
import useInView from "./useInView";

const projects = [
  {
    id: 1,
    title: "LorrySwap",
    description:
      "A Supply Management System for connecting truck drivers and sellers in economic centers.",
    image: process.env.PUBLIC_URL + "/images/LorrySwapCover.png",
    link: "/lorryswap",
  },
  {
    id: 2,
    title: "Weather Whisper",
    description:
      "Indoor weather station to receive observations, and display basic weather conditions through a mobile application.",
    image: process.env.PUBLIC_URL + "/images/WeatherWhisperCover.png",
    link: "/weatherwhisper",
  },
  {
    id: 3,
    title: "Garden Cleaning Tracker",
    description:
      "A system solution for efficient monitoring and management of maintenance process at University of Moratuwa.",
    image: process.env.PUBLIC_URL + "/images/MaintainanceTrackerCover.png",
    link: "/GardenCleaningTracker",
  },
];

function Home() {
  const typingEffectRef = useRef(null);
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const [showMiddleSection, setShowMiddleSection] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const isMobile = window.innerWidth <= 768;
  const middleSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const [middleContentVisible, setMiddleContentVisible] = useState(false);
  const [projectsContentVisible, setProjectsContentVisible] = useState(false);

  // Zoom-in animation effect when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsZoomedIn(true);
            setTimeout(() => setMiddleContentVisible(true), 1500); // Delay showing content after animation
          }
        });
      },
      { threshold: 0.2 }
    );

    if (middleSectionRef.current) {
      observer.observe(middleSectionRef.current);
    }

    return () => {
      if (middleSectionRef.current) {
        observer.unobserve(middleSectionRef.current);
      }
    };
  }, []);

  // Animation effect for middle section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowMiddleSection(true);
            setTimeout(() => setMiddleContentVisible(true), 1500); // Ensure content is shown after animation
          }
        });
      },
      { threshold: 0.2 }
    );

    if (middleSectionRef.current) {
      observer.observe(middleSectionRef.current);
    }

    return () => {
      if (middleSectionRef.current) {
        observer.unobserve(middleSectionRef.current);
      }
    };
  }, []);

  // Animation effect for projects section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowProjects(true);
            setTimeout(() => setProjectsContentVisible(true), 1500); // Ensure content is shown after animation
          }
        });
      },
      { threshold: 0.2 }
    );

    if (projectsSectionRef.current) {
      observer.observe(projectsSectionRef.current);
    }

    return () => {
      if (projectsSectionRef.current) {
        observer.unobserve(projectsSectionRef.current);
      }
    };
  }, []);

  return (
    <div
      className="home-page"
      style={{
        overflowX: "hidden",
        marginTop: isMobile ? "-25%" : "-10%",
      }}
    >
      {/* Define keyframes for animations */}
      <style>
        {`
          @keyframes zoomIn {
            from {
              transform: scale(1);
              opacity: 0;
            }
            to {
              transform: scale(1.05);
              opacity: 1;
            }
          }

          @keyframes fadeInSlideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes wave {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }

          @keyframes moveFromCenter {
            from {
              transform: translateY(50%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @media (max-width: 768px) {
            .home-page {
              margin-top: 0;
            }

            .text-md-left {
              text-align: center !important;
            }

            .project-section {
              padding-left: 5% !important;
              padding-right: 5% !important;
            }
          }

          /* Hover animation */
          .project-card {
            position: relative;
            transform-origin: center center; /* Ensure scaling happens from center */
            overflow: hidden;
            transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
            animation: ${
              showProjects ? "moveFromCenter 1s ease-out forwards" : "none"
            };
          }

          .project-card:hover {
            transform: scale(1.05);
            filter: brightness(0.8);
          }

          .card-image {
            transition: filter 0.3s ease-in-out;
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.6);
            opacity: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-weight: bold;
            transition: opacity 0.3s ease-in-out;
          }

          .project-card:hover .overlay {
            opacity: 1;
          }

          .see-more-text {
            font-size: 1.2rem;
          }

          .middle-section {
            animation: ${
              showMiddleSection ? "moveFromCenter 1s ease-out forwards" : "none"
            };
          }
        `}
      </style>

      <Container fluid className="px-4 px-md-5" style={{ height: "100vh" }}>
        <Row
          className="align-items-center text-center text-md-left"
          style={{
            height: "100%",
            justifyContent: "center",
            marginTop: "5%",
          }}
        >
          <Col xs={12} md={6}>
            <img
              src="/images/HomeMain.png"
              alt="HomeMain"
              style={{
                width: "100%",
                maxWidth: isMobile ? "100%" : "80%",
                marginLeft: isMobile ? "0" : "30%",
                height: "auto",
                animation: "zoomIn 1.5s ease-out forwards",
              }}
            />
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-center"
          >
            <div
              style={{
                fontSize: isMobile ? "1.5rem" : "2.5rem",
                color: "#3C3D37",
                textAlign: "center",
                width: "100%",
                marginTop: isMobile ? "-20%" : "30%",
                marginLeft: isMobile ? "0" : "-10%",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#3C3D37",
                  animation: "fadeInSlideUp 1.5s ease-out forwards",
                }}
              >
                HELLO!
              </p>
              <span
                style={{
                  whiteSpace: "nowrap",
                  animation: "fadeInSlideUp 1.5s ease-out forwards",
                }}
              >
                I'm{" "}
                <span
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: isMobile ? "3rem" : "4rem",
                    color: "#53667d",
                    display: "inline",
                  }}
                >
                  {"Chamodi".split("").map((char, index) => (
                    <span
                      key={index}
                      style={{
                        display: "inline-block",
                        animation: `wave 1.5s ease-in-out ${
                          index * 0.1
                        }s forwards`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
                <img
                  src="/images/Bright.gif"
                  alt="Bright"
                  style={{
                    width: "auto",
                    maxWidth: "7%",
                    height: "auto",
                    marginLeft: "1%",
                    marginTop: "-3rem",
                    animation: `wave 1s ease-in-out 1s forwards`,
                  }}
                />
              </span>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                  textAlign: "center",
                  marginTop: "1rem",
                }}
              >
                I aspire to contribute my abilities and innovative projects
                <br />
                with like-minded professionals to solve complex problems.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row
          className="justify-content-center align-items-center py-5 px-4 px-md-5 "
          style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
        >
          <Col xs={12} md={6} className="text-center">
            <img
              src="/images/HomeMiddle.gif"
              alt="HomeMiddle"
              style={{
                width: "100%",
                maxWidth: isMobile ? "80%" : "50%",
                height: "auto",
                marginTop: isMobile ? "-30%" : "-5",
                marginLeft: isMobile ? "0" : "30%",
              }}
            />
          </Col>
          <Col
            fluid
            className="bg-gray-100 py-5 px-4 px-md-5 middle-section"
            ref={middleSectionRef}
            xs={12}
            md={6}
            style={{
              animation: isZoomedIn ? "zoomIn 1.5s ease-out forwards" : "",
              opacity: middleContentVisible ? 1 : 0, // Hide content until animation completes
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "lighter",
                color: "#3C3D37",
                textAlign: "center",
                marginTop: isMobile ? "-7%" : "5%",
                marginRight: isMobile ? "0" : "20%",
              }}
            >
              <>
                Need a{" "}
                <TypingEffect
                  text={["Designer?", "Full Stack Developer?", "Blog Writer?"]}
                  speed={100}
                  eraseSpeed={50}
                  typingDelay={500}
                  eraseDelay={2000}
                  cursor={"|"}
                  displayTextRenderer={(text, i) => (
                    <span
                      style={{
                        fontFamily: "'Cinzel Decorative', cursive",
                        fontWeight: 600,
                        fontSize: "1.5rem",
                      }}
                    >
                      {text}
                    </span>
                  )}
                />
              </>
              <br />
              <span
                style={{
                  fontWeight: 500,
                  fontSize: "1.2rem",
                  color: "#53667d",
                }}
              >
                I can help you! <br />
                <div
                  style={{
                    fontSize: isMobile ? "14px" : "1rem",
                    color: "#3C3D37",
                    fontWeight: "lighter",
                    lineHeight: "1.5em",
                  }}
                >
                  With a passion for creativity and a focus on delivering
                  quality results, every project is tailored to meet your
                  specific needs.
                  <div style={{ fontWeight: "normal", lineHeight: "2em" }}>
                    Let's collaborate and turn your ideas into reality!
                  </div>
                </div>
              </span>
            </p>
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        className="project-section py-5 text-light"
        style={{
          backgroundColor: "#F5EDED",
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
        ref={projectsSectionRef}
      >
        <Row className="justify-content-center">
          <Col xs={12}>
            <Row className="g-4 justify-content-center my-5">
              {projects.map((project) => (
                <Col key={project.id} xs={12} md={6} lg={4}>
                  <Link to={project.link} className="text-decoration-none">
                    <Card
                      className="h-100 shadow scale-hover-effect project-card"
                      style={{
                        opacity: projectsContentVisible ? 1 : 0,
                        transition: "opacity 0.5s ease-in-out",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={project.image}
                        alt={project.title}
                        className="card-image"
                      />
                      <Card.Body className="p-4">
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                      </Card.Body>
                      <div className="overlay">
                        <span className="see-more-text">Explore More</span>
                      </div>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
            <Row className="justify-content-center mt-4">
              <Col xs="auto">
                <Link to="/projects">
                  <Button
                    style={{
                      fontWeight: "initial",
                      backgroundColor: "#3C3D37",
                      border: "none",
                      width: "200px",
                      fontSize: "1rem",
                    }}
                  >
                    Find More
                  </Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
