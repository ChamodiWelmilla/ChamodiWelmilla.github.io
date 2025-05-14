import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { achievements } from "../data/Achievements";
import AchievementSection from "../components/Achievements";
import ExperienceSection from "../components/ExperienceSection";
import { experiences } from "../data/Experience";

function About() {
  const isMobile = window.innerWidth <= 768;
  const rolesRef = useRef(null);
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (rolesRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("flip");
              entry.target.style.opacity = 1;
            }
          });
        },
        { threshold: 0.5 }
      );

      const roleItems = rolesRef.current.querySelectorAll(".role-item img");
      roleItems.forEach((item) => {
        item.style.opacity = 0;
        observer.observe(item);
      });

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    const timelineDots = document.querySelectorAll(".timeline-dot");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("bounce");
            entry.target.style.opacity = 1;
          }
        });
      },
      { threshold: 0.5 }
    );

    timelineDots.forEach((dot) => {
      dot.style.opacity = 0;
      observer.observe(dot);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timelineItems = document.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            entry.target.style.opacity = 1;
          }
        });
      },
      { threshold: 0.5 }
    );

    timelineItems.forEach((item) => {
      item.style.opacity = 0;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const experienceRef = useRef(null);

  useEffect(() => {
    const experienceItems =
      experienceRef.current.querySelectorAll(".experience-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            entry.target.style.opacity = 1;
          }
        });
      },
      { threshold: 0.5 }
    );

    experienceItems.forEach((item) => {
      item.style.opacity = 0;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cardRef = document.querySelectorAll(".card-zoom");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsZoomedIn(true);
            entry.target.style.opacity = 1;
          }
        });
      },
      { threshold: 0.5 }
    );

    cardRef.forEach((ref) => observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  const displayedAchievements = showAll
    ? achievements
    : achievements.slice(0, 2);

  return (
    <Container fluid className="contact-page" style={{ paddingTop: "3%" }}>
      <Row style={{ marginBottom: "4%" }}>
        <Col xs={12} md={6} className="mb-6 mb-md-0">
          <img
            src="/images/About.png"
            alt="artist"
            style={{
              width: "100%",
              maxWidth: isMobile ? "70%" : "80%",
              height: "auto",
              marginLeft: isMobile ? "10%" : "25%",
              paddingLeft: "10%",
              boxSizing: "border-box",
              position: "relative",
            }}
          />
        </Col>
        <Col xs={12} md={6}>
          <div
            className="fade-in"
            style={{
              fontSize: "2rem",
              color: "#3C3D37",
              textAlign: "center",
              marginBottom: "1rem",
              lineHeight: "1.5",
              border: "2px solid #53667d",
              padding: "2rem",
              borderRadius: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              maxWidth: "90%",
              boxSizing: "border-box",
              opacity: "0.9",
              marginLeft: isMobile ? "6%" : "-10%",
              marginTop: isMobile ? "-2%" : "37%",
            }}
          >
            <p
              style={{
                fontSize: isMobile ? "14px" : "1rem",
                margin: "1rem 0",
                padding: 0,
                color: "#53667d",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              I am a third-year Information Technology undergraduate in Sri
              Lanka,
              <br />
              currently building a strong foundation in IT systems, programming,
              and technical problem-solving. <br />I am committed to applying my
              knowledge in practical settings <br /> and continually enhancing
              my expertise in the ever-evolving tech industry.
            </p>
          </div>
        </Col>
      </Row>
      <div
        ref={experienceRef}
        style={{ backgroundColor: "#f8f8f8", padding: "2rem 0" }}
      >
        <ExperienceSection isMobile={isMobile} experiences={experiences} />
      </div>
      <div>
        <Row
          style={{
            boxSizing: "border-box",
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontWeight: "semi-bold",
              fontSize: isMobile ? "24px" : "2rem",
              textAlignLast: "center",
              marginBottom: "2rem",
              color: "#3C3D37",
              fontFamily: "'Cinzel Decorative', cursive",
              paddingTop: "8%",
              textAlign: "center",
            }}
            className="education-title"
          >
            EDUCATION
          </p>

          <div
            className="timeline-container"
            style={{
              position: "relative",
              margin: "0 auto",
              padding: "2rem 0",
              marginTop: "2rem",
            }}
          >
            <div
              className="timeline"
              style={{
                position: "absolute",
                width: "2px",
                backgroundColor: "#53667d",
                left: "50%",
                top: 0,
                bottom: 0,
                height: isMobile ? "20rem" : "80%",
              }}
            ></div>

            <div
              className="timeline-item"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                marginBottom: "4rem",
                position: "relative",
                opacity: 0,
              }}
            >
              <div
                className="timeline-dot"
                style={{
                  position: "absolute",
                  width: "15px",
                  height: "15px",
                  backgroundColor: "#53667d",
                  borderRadius: "50%",
                  marginTop: "1rem",
                  left: "calc(50% - 7px)",
                  top: 0,
                  opacity: 0,
                }}
              ></div>

              <div
                className="education-text"
                style={{
                  textAlign: "right",
                  width: "50%",
                  paddingRight: "2rem",
                }}
              >
                <p style={{ fontSize: "20px", margin: 0 }}>
                  University of Moratuwa
                </p>
                <span style={{ fontSize: "12px" }}>
                  Expected Graduation: 2026 <br /> SGPA: 3.69 (L2S1)
                </span>
              </div>

              <div
                className="col-md-6 col-lg-4 card-zoom"
                style={{
                  animation: isZoomedIn ? "zoomIn 1.5s ease-out forwards" : "",
                  opacity: 0,
                }}
              >
                <img
                  src="/images/UniversityLogo.png"
                  alt="University"
                  className="zoom-in"
                  style={{
                    width: "120%",
                    maxWidth: "55px",
                    height: "auto",
                    marginLeft: "1rem",
                  }}
                />
              </div>
            </div>

            <div
              className="timeline-item"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                marginBottom: "6rem",
                position: "relative",
                opacity: 0,
              }}
            >
              <div
                className="timeline-dot"
                style={{
                  position: "absolute",
                  width: "15px",
                  height: "15px",
                  backgroundColor: "#53667d",
                  borderRadius: "50%",
                  marginTop: isMobile ? "2rem" : "1rem",
                  left: "calc(50% - 7px)",
                  top: 0,
                  opacity: 0,
                }}
              ></div>

              <div
                className="col-md-6 col-lg-4 card-zoom"
                style={{
                  animation: isZoomedIn ? "zoomIn 1.5s ease-out forwards" : "",
                  opacity: 0,
                }}
              >
                <img
                  src="/images/SchoolLogo.png"
                  alt="Secondary"
                  className="zoom-in"
                  style={{
                    width: "100%",
                    maxWidth: "40px",
                    height: "auto",
                    marginRight: "1rem",
                    marginTop: isMobile ? "-50%" : "-4%",
                    marginLeft: isMobile ? "-3%" : "87%",
                  }}
                />
              </div>

              <div
                className="education-text"
                style={{
                  textAlign: "left",
                  width: "50%",
                  paddingLeft: "2rem",
                }}
              >
                <p style={{ fontSize: "20px", margin: 0 }}>
                  Devi Balika Vidyalaya
                </p>
                <span style={{ fontSize: "12px" }}>
                  GCE (A/L) 2019 <br /> GCE (O/L) : 2015
                </span>
              </div>
            </div>
          </div>
        </Row>
      </div>
      {/* <div>
        <AchievementSection displayedAchievements={achievements} />
      </div>{" "} */}
      <div style={{ backgroundColor: "#f8f8f8" }}>
        <p
          style={{
            fontWeight: "semi-bold",
            fontSize: isMobile ? "24px" : "2rem",
            padding: isMobile ? "0 10%" : "0 20%",
            marginTop: "2rem",
            textAlign: "center",
            marginBottom: "1rem",
            color: "#3C3D37",
            fontFamily: "'Cinzel Decorative', cursive",
          }}
        >
          <img
            src="/images/Box.gif"
            alt="Box"
            style={{
              width: "100%",
              maxWidth: isMobile ? "30%" : "20%",
              height: "auto",
            }}
          />
          Out of the Box.. You can find me as
        </p>
        <div
          className="roles-container"
          style={{
            display: "flex",
            justifyContent: isMobile ? "center" : "space-between",
            textAlign: "center",
            padding: "0 7%",
            boxSizing: "border-box",
            gap: "2rem",
            marginTop: "2rem",
            flexDirection: isMobile ? "column" : "row",
          }}
          ref={rolesRef}
        >
          <div
            className="role-item"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: "1",
              marginBottom: "2rem",
            }}
          >
            <img
              src="/images/GraphicDesignerrr.png"
              alt="graphic designer"
              style={{
                width: "100%",
                maxWidth: "175px",
                height: "auto",
                borderRadius: "50%",
                marginBottom: "1rem",
                opacity: 0,
              }}
            />
            <p
              style={{
                margin: 0,
                fontSize: "16px",
                fontWeight: "semi-bold",
                fontFamily: "'Cinzel Decorative', cursive",
                border: "1px solid #53667d",
              }}
            >
              a Graphic Designer
            </p>
            <p
              style={{
                marginTop: "0.5rem",
                fontSize: "14px",
                color: "#53667d",
              }}
            >
              I have a passion for graphic design, where I blend creativity and
              technical skills to produce visually appealing designs.
            </p>
          </div>

          <div
            className="role-item"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: "1",
              marginBottom: "2rem",
            }}
          >
            <img
              src="/images/Volunteer.jpeg"
              alt="volunteer"
              style={{
                width: "100%",
                maxWidth: "175px",
                height: "auto",
                borderRadius: "50%",
                marginBottom: "1rem",
                opacity: 0,
              }}
            />
            <p
              style={{
                margin: 0,
                fontSize: "16px",
                fontWeight: "semi-bold",
                fontFamily: "'Cinzel Decorative', cursive",
                border: "1px solid #53667d",
              }}
            >
              a Volunteer
            </p>
            <p
              style={{
                marginTop: "0.5rem",
                fontSize: "14px",
                color: "#53667d",
              }}
            >
              I actively participate in volunteer work to give back to the
              community and support various causes.
            </p>
          </div>

          <div
            className="role-item"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: "1",
              marginBottom: "2rem",
            }}
          >
            <img
              src="/images/Artist.jpg"
              alt="artist"
              style={{
                width: "100%",
                maxWidth: "175px",
                height: "auto",
                borderRadius: "50%",
                marginBottom: "1rem",
                opacity: 0,
              }}
            />
            <p
              style={{
                margin: 0,
                fontSize: "16px",
                fontWeight: "semi-bold",
                fontFamily: "'Cinzel Decorative', cursive",
                border: "1px solid #53667d",
              }}
            >
              an Artist
            </p>
            <p
              style={{
                marginTop: "0.5rem",
                fontSize: "14px",
                color: "#53667d",
              }}
            >
              I express my creativity and emotions through various forms of art,
              bringing my ideas to life with passion and precision.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .roles-container {
            flex-direction: column;
            align-items: center;
          }

          .timeline {
            height: 50%;
          }

          .education-title {
            font-size: 1.5rem;
          }
        }

        .education-item img {
          transition: transform 0.3s ease-in-out;
        }

        .education-item img:hover {
          transform: scale(1.05);
        }

        .role-item img {
          transition: transform 0.3s ease-in-out;
          transform: perspective(1000px) rotateY(0deg);
        }

        .role-item img.flip {
          animation: flipTwice 1.5s ease-in-out forwards;
        }

        .role-item img:hover:not(.flip) {
          transform: scale(1.05);
        }

        .timeline-dot {
          animation: bounce 1.5s infinite;
        }

        .fade-in {
          opacity: 0;
          animation: fadeIn 1.5s ease-in-out forwards;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: #53667d;
          }
        }

        .zoom-in {
          animation: zoomIn 1.5s ease-in-out forwards;
        }

        @keyframes zoomIn {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes flipTwice {
          0% {
            transform: perspective(1000px) rotateY(0deg);
          }
          50% {
            transform: perspective(1000px) rotateY(180deg);
          }
          100% {
            transform: perspective(1000px) rotateY(360deg);
          }
        }

        .role-item p:hover {
          transform: scale(1.05);
          color: #53667d;
          transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
        }
      `}</style>{" "}
    </Container>
  );
}

export default About;
