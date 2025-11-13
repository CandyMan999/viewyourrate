// components/Calculator.js
import React from "react";
import { isMobile } from "react-device-detect";

const Component2 = () => {
  return (
    <div style={containerStyles}>
      <div style={cardStyles}>
        <h2 style={titleStyles}>Component 2</h2>
        <p style={subtitleStyles}>Add a Widget here</p>
      </div>
    </div>
  );
};

const containerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100%",
  padding: "2rem 1rem",
  background:
    "linear-gradient(140deg, rgba(0, 123, 255, 0.08), rgba(255, 255, 255, 0.95))",
};

const cardStyles = {
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  borderRadius: "20px",
  border: "1px solid rgba(0, 123, 255, 0.15)",
  boxShadow: "0 25px 55px rgba(15, 33, 60, 0.18)",
  padding: "2.5rem",
  maxWidth: "520px",
  width: "100%",
  textAlign: "center",
};

const titleStyles = {
  fontSize: isMobile ? "1.8rem" : "2.1rem",
  color: "#1f2933",
  marginBottom: "0.75rem",
};

const subtitleStyles = {
  fontSize: isMobile ? "1rem" : "1.05rem",
  color: "#52637d",
  margin: 0,
};

export default Component2;
