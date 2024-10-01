// components/Calculator.js
import React from "react";
import { isMobile } from "react-device-detect";

const Component3 = () => {
  return (
    <div style={calculatorStyles}>
      <div
        style={{
          position: "absolute", // Use absolute positioning
          top: isMobile ? "15%" : "40%", // 20% from the top for mobile, 50% for desktop
          left: "50%",
          transform: isMobile ? "translateX(-50%)" : "translate(-50%, -50%)", // Adjust translation for mobile
          zIndex: 1,
          color: "#f0f0f0",
          textAlign: "center",
          padding: "2rem",
          maxWidth: "600px",
          width: "80%", // Ensure it has a reasonable width for mobile
          borderRadius: "10px",
          background: "rgba(30, 30, 30, 0.85)",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h2>Component 3</h2>
        <p>Add a Widget here</p>
      </div>
    </div>
  );
};

const calculatorStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100%",
};

export default Component3;
