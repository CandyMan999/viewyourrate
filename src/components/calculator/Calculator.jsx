import React from "react";
import { isMobile } from "react-device-detect";
import { FaCalculator } from "react-icons/fa"; // Importing the calculator icon

const Calculator = () => {
  return (
    <div style={calculatorStyles}>
      <div
        style={{
          position: "absolute",
          top: isMobile ? "15%" : "40%",
          left: "50%",
          transform: isMobile ? "translateX(-50%)" : "translate(-50%, -50%)",
          zIndex: 1,
          color: "#f0f0f0",
          textAlign: "center",
          padding: "2rem",
          maxWidth: "600px",
          width: "80%",
          borderRadius: "10px",
          background: "rgba(30, 30, 30, 0.85)",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
        }}
      >
        <FaCalculator
          size={isMobile ? 80 : 120}
          style={{ marginBottom: "1rem" }}
        />{" "}
        {/* Big calculator icon */}
        <h2>Mortgage Calculator</h2>
        <p>
          Quickly estimate your monthly mortgage payments, interest rates, and
          more!
        </p>
        <p>- Interest Rates: Find the best rates to suit your needs.</p>
        <p>- Down Payment: Calculate your required upfront payment.</p>
        <p>- Loan Terms: Choose from 15, 20, or 30-year terms.</p>
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

export default Calculator;
