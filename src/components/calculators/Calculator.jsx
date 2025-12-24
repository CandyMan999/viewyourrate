import React from "react";
import { isMobile } from "react-device-detect";
import { FaCalculator } from "react-icons/fa"; // Importing the calculator icon
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Calculator = ({ dispatch }) => {
  // Handle button clicks to show the PricingWidget

  const handleAffordClick = () => {
    dispatch({ type: "SHOW_AFFORDABILTY_CALCULATOR", payload: true });
  };

  const handleMortgageClick = () => {
    dispatch({ type: "SHOW_MORTGAGE_CALCULATOR", payload: true });
  };

  return (
    <div style={calculatorStyles}>
      <div style={overlayStyles}></div>
      <div
        style={{
          position: "absolute",
          top: isMobile ? "12%" : "35%",
          left: "50%",
          transform: isMobile ? "translateX(-50%)" : "translate(-50%, -50%)",
          zIndex: 1,
          color: "#f8fafc",
          textAlign: "center",
          padding: isMobile ? "1.2rem" : "2rem", // Reduced padding for mobile
          maxWidth: isMobile ? "92%" : "600px", // Adjusted width for mobile
          width: "80%",
          borderRadius: "18px",
          background: "rgba(15, 23, 42, 0.85)",
          border: "1px solid rgba(148, 163, 184, 0.18)",
          boxShadow: "0 24px 60px rgba(2, 6, 23, 0.6)",
          backdropFilter: "blur(14px)",
        }}
      >
        <FaCalculator
          size={isMobile ? 56 : 96} // Smaller icon size for mobile
          style={{ marginBottom: "1rem", color: "#38bdf8" }}
        />
        <h2 style={{ fontSize: isMobile ? "1.6rem" : "2.2rem" }}>
          Calculators
        </h2>
        <p style={subtitleStyles}>
          Explore quick tools to estimate monthly payments or affordability.
        </p>
        {/* Buttons */}
        <div style={buttonContainerStyles}>
          <motion.button
            style={{
              ...buttonStyles,
              padding: isMobile ? "0.55rem 1rem" : "0.45rem 1.1rem",
              fontSize: isMobile ? "0.85rem" : "0.78rem",
            }}
            onClick={handleMortgageClick}
            whileHover={{
              y: -2,
              boxShadow: "0 16px 26px rgba(56, 189, 248, 0.28)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Mortgage Calculator
            <FiArrowRight style={iconStyles} />
          </motion.button>
          <p
            style={{
              ...descriptionStyles,
              fontSize: isMobile ? "0.9rem" : "1rem",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            🏠 Calculate monthly payments based on loan amount, interest rates,
            and loan term.
          </p>

          <motion.button
            style={{
              ...buttonStyles,
              padding: isMobile ? "0.55rem 1rem" : "0.45rem 1.1rem",
              fontSize: isMobile ? "0.85rem" : "0.78rem",
            }}
            onClick={handleAffordClick}
            whileHover={{
              y: -2,
              boxShadow: "0 16px 26px rgba(56, 189, 248, 0.28)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Affordability Calculator
            <FiArrowRight style={iconStyles} />
          </motion.button>
          <p
            style={{
              ...descriptionStyles,
              fontSize: isMobile ? "0.9rem" : "1rem",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            💰 Assess your budget and find out how much house you can afford.
          </p>
        </div>
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
  position: "relative",
  overflow: "hidden",
  background:
    "radial-gradient(circle at 18% 20%, rgba(56, 189, 248, 0.18), transparent 42%), radial-gradient(circle at 80% 10%, rgba(52, 211, 153, 0.18), transparent 38%), #070c1a",
};

const overlayStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
};

const buttonContainerStyles = {
  marginTop: "2rem",
};

const buttonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  margin: "0.5rem 0",
  borderRadius: "999px",
  border: "none",
  fontWeight: 600,
  cursor: "pointer",
  background: "linear-gradient(135deg, #60a5fa, #38bdf8)",
  color: "#0f172a",
  boxShadow: "0 10px 20px rgba(56, 189, 248, 0.22)",
};

const iconStyles = {
  marginLeft: "0.5rem",
};

const subtitleStyles = {
  fontSize: isMobile ? "0.9rem" : "1rem",
  color: "#cbd5f5",
  margin: "0.4rem 0 0",
};

const descriptionStyles = {
  color: "#94a3b8",
  margin: "0.5rem 0 1.5rem",
};

export default Calculator;
