import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectsSection = ({ projects }) => {
  const projectsSectionRef = useRef(null);
  const [projectsContentVisible, setProjectsContentVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (projectsSectionRef.current) {
        const sectionTop =
          projectsSectionRef.current.getBoundingClientRect().top;
        const sectionHeight = projectsSectionRef.current.offsetHeight;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - sectionHeight / 3) {
          setProjectsContentVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      fluid
      className="project-section py-0 text-light"
      style={{
        backgroundColor: "transparent",
        paddingLeft: "0",
        paddingRight: "0",
      }}
      ref={projectsSectionRef}
    >
      <Row className="justify-content-center">
        <Col xs={12}>
          <Row className="g-4 justify-content-center mt-0 mb-4">
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
                  className="project-card"
                  style={{
                    fontWeight: "bold",
                    background: "linear-gradient(45deg, #53667d, #3C3D37)",
                    border: "none",
                    padding: "0.7rem 4rem",
                    borderRadius: "30px",
                    fontSize: "1rem",
                  }}
                >
                  <span style={{
                    background: "linear-gradient(to right, #ffffff 0%, #a0a0a0 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                    Find More
                  </span>
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsSection;
