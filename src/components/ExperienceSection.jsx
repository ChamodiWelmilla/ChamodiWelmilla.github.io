import React from "react";

const ExperienceSection = ({ isMobile, experiences = [] }) => {
  return (
    <div style={{ marginTop: "2rem", textAlign: "center" }}>
      <p
        style={{
          fontWeight: "semi-bold",
          fontSize: isMobile ? "24px" : "2rem",
          marginBottom: "2rem",
          color: "#3C3D37",
          fontFamily: "'Cinzel Decorative', cursive",
        }}
      >
        EXPERIENCE
      </p>

      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        {experiences.map((exp, index) => (
          <li
            key={index}
            className="experience-item"
            style={{
              marginBottom: "1.5rem",
              opacity: 0, // initial opacity for fade-in
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <p style={{ margin: 0, fontSize: "1.1rem", fontWeight: "bold" }}>
              {exp.title}
            </p>
            <p
              style={{ margin: 0, fontSize: "1rem" }}
              dangerouslySetInnerHTML={{ __html: exp.company }}
            ></p>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "#555" }}>
              {exp.duration}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceSection;
