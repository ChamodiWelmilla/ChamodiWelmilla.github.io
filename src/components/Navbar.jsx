import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const closeNavbar = () => setExpanded(false);
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== "/") {
        setActiveSection("");
        return;
      }

      const sections = ["home", "about", "projects", "contact"];
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = section;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const separatorStyle = {
    margin: "0 0.5rem",
    display: isMobile ? "none" : "inline",
    color: "#000", 
  };

  const getLinkStyle = (section) => ({
    borderBottom: activeSection === section ? "2px solid #53667d" : "2px solid transparent",
    fontWeight: activeSection === section ? "bold" : "normal",
    transition: "all 0.3s ease",
    margin: isMobile ? "0" : "0 1rem",
  });

  return (
    <Navbar
      expand="lg"
      className="fixed-top outline-animation"
      style={{
        zIndex: 500,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      }}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container fluid className="px-4 px-md-5">
        <span
          className="mx-2 text-black font-semibold"
          style={{
            fontSize: isMobile ? "1rem" : "2rem",
            fontFamily: "'Cinzel Decorative', cursive",
          }}
        >
          WelmillaCN
        </span>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="bg-[#e9ecef]"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className={`me-auto justify-content-${
              isMobile ? "center" : "end"
            } w-100`}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Nav.Link
              as={Link}
              to="/#home"
              className="text-uppercase"
              style={getLinkStyle("home")}
              onClick={closeNavbar}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/#about"
              className="text-uppercase"
              style={getLinkStyle("about")}
              onClick={closeNavbar}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/#projects"
              className="text-uppercase"
              style={getLinkStyle("projects")}
              onClick={closeNavbar}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/#contact"
              className="text-uppercase"
              style={getLinkStyle("contact")}
              onClick={closeNavbar}
            >
              Contact
            </Nav.Link>

            {/* Add the separator only in desktop view */}
            {isMobile ? null : (
              <>
                <span style={separatorStyle}>|</span>
              </>
            )}

            {/* Icons section */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: isMobile ? "1rem" : "0", 
                marginTop: isMobile ? "0.5rem" : "0",
              }}
            >
              <Nav.Link
                href="https://www.linkedin.com/in/chamodi-welmilla"
                target="_blank"
                className="text-uppercase"
                onClick={closeNavbar}
              >
                <FaLinkedin
                  style={{
                    fontSize: "1.5rem",
                    marginLeft: isMobile ? "-40%" : "0",
                  }}
                />
              </Nav.Link>
              <Nav.Link
                href="https://github.com/ChamodiWelmilla"
                target="_blank"
                className="text-uppercase"
                onClick={closeNavbar}
                style={{ paddingRight: 0 }}
              >
                <FaGithub style={{ fontSize: "1.5rem" }} />
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
