import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

const AchievementSection = ({ displayedAchievements }) => {
  const [showAll, setShowAll] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 576);
  const cardContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 576);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const achievementsToDisplay = showAll
    ? displayedAchievements
    : displayedAchievements.slice(0, isSmallScreen ? 3 : 4);

  useEffect(() => {
    if (!showAll) return;
    const handleClickInside = (event) => {
      if (
        cardContainerRef.current &&
        cardContainerRef.current.contains(event.target)
      ) {
        setShowAll(false);
      }
    };
    document.addEventListener("mousedown", handleClickInside);
    return () => document.removeEventListener("mousedown", handleClickInside);
  }, [showAll]);

  const getButtonPosition = () => {
    return {
      position: "absolute",
      left: "50%",
      top: isSmallScreen ? "calc(160px + 100px)" : "calc(100px + 32px)",
      transform: "translateX(-50%)",
      zIndex: 10,
      pointerEvents: "auto",
    };
  };

  return (
    <div style={{ backgroundColor: "#f4f4f4", padding: "3rem 2rem" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "#3C3D37",
          fontFamily: "'Cinzel Decorative', cursive",
        }}
      >
        ACHIEVEMENTS
      </h2>

      <div
        ref={cardContainerRef}
        style={{ position: "relative", width: "100%", margin: "0 auto" }}
      >
        {!showAll && (
          <div style={getButtonPosition()}>
            <Button
              style={{
                ...(isSmallScreen ? { marginTop: "100px" } : { marginTop: "80px" }),
                fontWeight: "initial",
                backgroundColor: "#53667d",
                padding: "10px 20px",
                color: "#fff",
                border: "none",
              }}
              variant="outline-primary"
              onClick={(e) => {
                e.stopPropagation();
                setShowAll(true);
              }}
            >
              Find More
            </Button>
          </div>
        )}

        <Row className="justify-content-center">
          {achievementsToDisplay.map((achievement, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={6}
              className={`mb-4 achievement-card ${
                showAll ? "visible" : index >= 2 ? "blur-active" : ""
              }`}
              style={{ position: "relative" }}
            >
              <Card
                className="h-100 shadow scale-hover-effect"
                style={{
                  borderRadius: "1rem",
                  backgroundColor: "#fff",
                  border: "1px solid #ddd",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  filter: showAll || index < 2 ? "none" : "blur(5px)",
                  position: "relative",
                }}
              >
                <Card.Body
                  style={{
                    display: "flex",
                    alignItems: showAll || index < 2 ? "center" : "flex-start",
                    padding: "1rem",
                  }}
                >
                  <div style={{ flex: "1" }}>
                    <Card.Img
                      variant="top"
                      src={achievement.image}
                      alt={achievement.title}
                      style={{
                        height: "200px",
                        width: "300px",
                        objectFit: "cover",
                        borderRadius: "10px",
                        marginRight: "1rem",
                      }}
                    />
                  </div>
                  <div style={{ flex: "3" }}>
                    <Card.Title
                      style={{
                        fontWeight: "bold",
                        color: "#333",
                        fontSize: "16px",
                      }}
                    >
                      {achievement.title}
                    </Card.Title>
                    <Card.Subtitle
                      className="mb-2 text-muted"
                      style={{ fontSize: "14px", color: "#777" }}
                    >
                      {achievement.subtitle}
                    </Card.Subtitle>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default AchievementSection;
