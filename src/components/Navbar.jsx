import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const closeNavbar = () => setExpanded(false);
  const isMobile = window.innerWidth <= 768;

  const separatorStyle = {
    margin: "0 0.5rem",
    display: isMobile ? "none" : "inline",
    color: "#000", // color for the separator
   
  };

  return (
    <Navbar
      expand="lg"
      className="fixed-top outline-animation bg-light"
      style={{ zIndex: 500 }}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
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
              to="/"
              className="text-uppercase"
              onClick={closeNavbar}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className="text-uppercase"
              onClick={closeNavbar}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="text-uppercase"
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
                marginLeft: isMobile ? "1rem" : "0", // Adjust margin for mobile view
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
