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
  );
};

export default ProjectsSection;
