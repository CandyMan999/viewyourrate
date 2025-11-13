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
          ...cardStyles,
          padding: isMobile ? "1.5rem" : "2.5rem",
          gap: isMobile ? "1rem" : "1.5rem",
        }}
      >
        <FaCalculator
          size={isMobile ? 60 : 120}
          style={{ color: "#007bff" }}
        />
        <h2
          style={{
            fontSize: isMobile ? "1.8rem" : "2.2rem",
            color: "#1f2933",
            margin: 0,
          }}
        >
          Calculators
        </h2>
        {/* Buttons */}
        <div style={buttonContainerStyles}>
          <motion.button
            style={{
              ...buttonStyles,
              padding: isMobile ? "0.85rem 1.1rem" : "1rem 1.4rem",
              fontSize: isMobile ? "1rem" : "1.1rem",
            }}
            onClick={handleMortgageClick}
            whileHover={{ scale: 1.02, backgroundColor: "#0066d6" }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            Mortgage Calculator
            <FiArrowRight style={iconStyles} />
          </motion.button>
          <p
            style={{
              ...descriptionStyles,
              fontSize: isMobile ? "0.95rem" : "1rem",
              textAlign: "left",
            }}
          >
            🏠 Calculate monthly payments based on loan amount, interest rates,
            and loan term.
          </p>

          <motion.button
            style={{
              ...buttonStyles,
              padding: isMobile ? "0.85rem 1.1rem" : "1rem 1.4rem",
              fontSize: isMobile ? "1rem" : "1.1rem",
            }}
            onClick={handleAffordClick}
            whileHover={{ scale: 1.02, backgroundColor: "#0066d6" }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            Affordability Calculator
            <FiArrowRight style={iconStyles} />
          </motion.button>
          <p
            style={{
              ...descriptionStyles,
              fontSize: isMobile ? "0.95rem" : "1rem",
              textAlign: "left",
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
  padding: "2rem 1rem",
  background:
    "linear-gradient(145deg, rgba(0, 123, 255, 0.08), rgba(255, 255, 255, 0.95))",
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
  borderRadius: "10px",
  border: "1px solid rgba(0, 123, 255, 0.2)",
  cursor: "pointer",
  background: "#007bff",
  color: "#fff",
  boxShadow: "0 18px 32px rgba(0, 123, 255, 0.25)",
};

const iconStyles = {
  marginLeft: "0.5rem",
};

const descriptionStyles = {
  color: "#52637d",
  margin: "0.5rem 0 1.5rem",
};

const cardStyles = {
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  borderRadius: "20px",
  border: "1px solid rgba(0, 123, 255, 0.15)",
  boxShadow: "0 25px 55px rgba(15, 33, 60, 0.18)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "left",
  maxWidth: "620px",
  width: "100%",
};

export default Calculator;
