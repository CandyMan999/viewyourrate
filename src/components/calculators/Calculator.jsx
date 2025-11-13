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
      <div
        style={{
          position: "absolute",
          top: isMobile ? "5%" : "40%",
          left: "50%",
          transform: isMobile ? "translateX(-50%)" : "translate(-50%, -50%)",
          zIndex: 1,
          color: "var(--text-primary)",
          textAlign: "center",
          padding: isMobile ? "1.2rem" : "2.25rem",
          maxWidth: isMobile ? "92%" : "560px",
          width: "88%",
          borderRadius: "28px",
          background:
            "linear-gradient(145deg, rgba(13, 23, 42, 0.92), rgba(8, 14, 28, 0.88))",
          border: "1px solid var(--border-subtle)",
          boxShadow: "0 28px 60px rgba(8, 18, 35, 0.55)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      >
        <FaCalculator
          size={isMobile ? 60 : 120} // Smaller icon size for mobile
          style={{ marginBottom: "1rem", color: "var(--accent-strong)" }}
        />
        <h2 style={{ fontSize: isMobile ? "1.5rem" : "2rem" }}>Calculators</h2>
        {/* Buttons */}
        <div style={buttonContainerStyles}>
          <motion.button
            style={{
              ...buttonStyles,
              padding: isMobile ? "0.85rem 1.05rem" : "1rem 1.2rem",
              fontSize: isMobile ? "0.95rem" : "1.05rem",
            }}
            onClick={handleMortgageClick}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 24px 48px rgba(56, 189, 248, 0.32)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25 }}
          >
            Mortgage Calculator
            <FiArrowRight style={iconStyles} />
          </motion.button>
          <p
            style={{
              ...descriptionStyles,
              fontSize: isMobile ? "0.86rem" : "0.95rem",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            🏠 Calculate monthly payments based on loan amount, interest rates,
            and loan term.
          </p>

          <motion.button
            style={{
              ...buttonStyles,
              padding: isMobile ? "0.85rem 1.05rem" : "1rem 1.2rem",
              fontSize: isMobile ? "0.95rem" : "1.05rem",
            }}
            onClick={handleAffordClick}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 24px 48px rgba(56, 189, 248, 0.32)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25 }}
          >
            Affordability Calculator
            <FiArrowRight style={iconStyles} />
          </motion.button>
          <p
            style={{
              ...descriptionStyles,
              fontSize: isMobile ? "0.86rem" : "0.95rem",
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
};

const buttonContainerStyles = {
  marginTop: "1.75rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.9rem",
};

const buttonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  borderRadius: "16px",
  border: "1px solid rgba(148, 163, 184, 0.18)",
  cursor: "pointer",
  background: "var(--accent-gradient)",
  color: "#0f172a",
  fontWeight: 600,
  letterSpacing: "0.02em",
  boxShadow: "0 20px 42px rgba(56, 189, 248, 0.26)",
};

const iconStyles = {
  marginLeft: "0.65rem",
  color: "#0f172a",
};

const descriptionStyles = {
  color: "var(--text-secondary)",
  margin: "0.35rem 0 0.5rem",
};

export default Calculator;
