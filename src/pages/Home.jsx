import React, { useRef, useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import TypingEffect from "react-typing-effect";

import ProjectSection from "../components/ProjectSection";
import ProjectSectionData from "../data/ProjectSection";
import About from "./About";

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsZoomedIn(true);
            setTimeout(() => setMiddleContentVisible(true), 1500);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowMiddleSection(true);
            setTimeout(() => setMiddleContentVisible(true), 1500);
          } else {
            setShowMiddleSection(false);
            setMiddleContentVisible(false);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowProjects(true);
            setTimeout(() => setProjectsContentVisible(true), 1500);
          } else {
            setShowProjects(false);
            setProjectsContentVisible(false);
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
      <style>
        {`
          @keyframes fadeInSlideRight {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

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
              src="/images/HomeMain.jpg"
              alt="HomeMain"
              style={{
                width: "100%",
                maxWidth: isMobile ? "100%" : "80%",
                marginLeft: isMobile ? "0" : "10%",
                height: "auto",
                animation: "fadeInSlideRight 1.5s ease-out forwards",
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
                marginTop: isMobile ? "-20%" : "10%",
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
                Need a <TypingEffect
                  text={["Designer?", "Full Stack Developer?", "Blog Writer?"]}
                  speed={100}
                  eraseSpeed={50}
                  typingDelay={500}
                  eraseDelay={2000}
                  cursor={"|"}
                  displayTextRenderer={(text) => (
                    <span style={{ fontFamily: "'Cinzel Decorative', cursive", fontWeight: 600 }}>
                      {text}
                    </span>
                  )}
                /><br />
                I can help you!<br />
                With a passion for creativity and a focus on delivering quality results, every project is tailored to meet your specific needs.<br />
                Let's collaborate and turn your ideas into reality!
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <div 
        id="about" 
        style={{ 
          paddingTop: isMobile ? "5rem" : "4rem", 
          marginTop: isMobile ? "5rem" : "-3rem" 
        }}
      >
        <About>
          <Container
            id="projects"
            fluid
            className="project-section py-5 text-light"
            style={{
              backgroundColor: "#F5EDED",
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
            ref={projectsSectionRef}
          >
            <p
              style={{
                fontWeight: "semi-bold",
                fontSize: isMobile ? "24px" : "2rem",
                color: "#3C3D37",
                fontFamily: "'Cinzel Decorative', cursive",
                textAlign: "center",
              }}
            >
              FEATURED PROJECTS
            </p>
            <ProjectSection projects={ProjectSectionData} />
          </Container>
        </About>
      </div>
    </div>
  );
}

export default Home;
