// components/Calculator.js
import React from "react";
import { isMobile } from "react-device-detect";

const Component2 = () => {
  return (
    <div style={calculatorStyles}>
      <div
        style={{
          position: "absolute", // Use absolute positioning
          top: isMobile ? "5%" : "40%", // 20% from the top for mobile, 50% for desktop
          left: "50%",
          transform: isMobile ? "translateX(-50%)" : "translate(-50%, -50%)", // Adjust translation for mobile
          zIndex: 1,
          color: "var(--text-primary)",
          textAlign: "center",
          padding: isMobile ? "1.2rem" : "2.1rem",
          maxWidth: isMobile ? "92%" : "560px",
          width: "88%", // Ensure it has a reasonable width for mobile
          borderRadius: "28px",
          background:
            "linear-gradient(145deg, rgba(13, 23, 42, 0.92), rgba(8, 14, 28, 0.88))",
          border: "1px solid var(--border-subtle)",
          boxShadow: "0 28px 60px rgba(8, 18, 35, 0.55)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      >
        <h2>Component 2</h2>
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

export default Component2;
