import React, { useRef, useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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
    title: "WelmillaCN Atelier",
    description: "A portfolio website to showcase my projects and skills.",
    image: process.env.PUBLIC_URL + "/images/PortfolioCover.png",
    link: "/atelier",
  },
  {
    id: 4,
    title: "Supply Chain System",
    description: "Integrated Supply Chain System for ColourPlus Pvt (Ltd).",
    image: process.env.PUBLIC_URL + "/images/ManagementSystemCover.png",
    link: "/ManagementSystem",
  },
  {
    id: 5,
    title: "Garden Cleaning Tracker",
    description:
      "A system solution for efficient monitoring and management of maintenance process at University of Moratuwa.",
    image: process.env.PUBLIC_URL + "/images/MaintainanceTrackerCover.png",
    link: "/GardenCleaningTracker",
  },
  {
    id: 6,
    title: "Internify",
    description:
      "A CV tracking system for the Faculty of Information Technology at the University of Moratuwa.",
    image: process.env.PUBLIC_URL + "/images/InternifyCover.png",
    link: "/Internify",
  },
];

// Separate ProjectCard component to handle each card's logic
function ProjectCard({ project }) {
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const cardRef = useRef(null);
  const isMobile = window.innerWidth <= 768;

  // Observe each card for the zoom-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsZoomedIn(true);
            observer.unobserve(cardRef.current); // Unobserve to avoid multiple triggers
          }
        });
      },
      { threshold: 0.2 } // 20% of the card should be visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      className="col-md-6 col-lg-4"
      style={{
        animation: isZoomedIn ? "zoomIn 1.5s ease-out forwards" : "",
      }}
      ref={cardRef}
    >
      <Link to={project.link} className="text-decoration-none">
        <Card className="h-100 shadow scale-hover-effect custom-card-bg border-0 project-card">
          <Card.Img variant="top" src={project.image} className="card-image" />
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title className="mt-4 mb-2" style={{ fontWeight: "bold" }}>
              {project.title}
            </Card.Title>
            <Card.Text className="text-center">{project.description}</Card.Text>
          </Card.Body>
          <div className="overlay">
            <p className="see-more-text">Explore Project</p>
          </div>
        </Card>
      </Link>
    </div>
  );
}

function Projects() {
  const isMobile = window.innerWidth <= 768;

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "fixed",
        }}
      >
        <img
          src="/images/HeartIcon.png"
          alt="heart icon"
          style={{
            width: "200px",
            height: "auto",
          }}
        />
      </div>
      <div className="bg-body-tertiary mt-10">
        <div className="container mt-10">
          <div className="row g-4">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
        <img
          src="/images/working.png"
          alt="working icon"
          style={{
            width: "100%",
            maxWidth: isMobile ? "200%" : "100%",
            height: "auto",
            paddingLeft: isMobile ? "0" : "60%",
          }}
        />
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .roles-container {
            flex-direction: column;
            align-items: center;
          }
        }

        /* Hover animation */
        .project-card {
          position: relative;
          transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
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

        /* Keyframes for zoom-in animation */
        @keyframes zoomIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default Projects;
