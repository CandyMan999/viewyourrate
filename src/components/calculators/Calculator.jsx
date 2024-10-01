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
        <h2>Mortgage Calculators</h2>
        {/* Buttons */}
        <div style={buttonContainerStyles}>
          <motion.button
            style={buttonStyles}
            onClick={handleMortgageClick}
            whileHover={{ scale: 1.05, backgroundColor: "#0056b3" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Mortgage Calculator
            <FiArrowRight style={iconStyles} />
          </motion.button>
          <p style={descriptionStyles}>
            🏠 Calculate monthly payments based on loan amount, interest rates,
            and loan term.
          </p>

          <motion.button
            style={buttonStyles}
            onClick={handleAffordClick}
            whileHover={{ scale: 1.05, backgroundColor: "#0056b3" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Affordability Calculator
            <FiArrowRight style={iconStyles} />
          </motion.button>
          <p style={descriptionStyles}>
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
  marginTop: "2rem",
};

const buttonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "1rem",
  margin: "0.5rem 0",
  fontSize: "1.2rem",
  borderRadius: "10px",
  border: "none",
  cursor: "pointer",
  background: "#007bff",
  color: "#fff",
  boxShadow: "0 2px 12px white",
};

const iconStyles = {
  marginLeft: "0.5rem",
};

const descriptionStyles = {
  fontSize: "1rem",
  color: "#ccc",
  margin: "0.5rem 0 1.5rem",
  textAlign: "left",
};

export default Calculator;
