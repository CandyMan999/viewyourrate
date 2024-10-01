import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { isMobile } from "react-device-detect";

const HeroSection = ({ state, dispatch }) => {
  const heroStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    overflow: "hidden",
  };

  const overlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  // Adjust content styles to be positioned correctly for mobile
  const contentStyles = {
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

  // Handle button clicks to show the PricingWidget
  const handleButtonClick = () => {
    dispatch({ type: "SHOW_PRICING_WIDGET", payload: true });
  };

  return (
    <div style={heroStyles}>
      {/* Background overlay */}
      <div style={overlayStyles}></div>

      {/* Content */}
      <div style={contentStyles}>
        <h1>Unlock Your Best Rate</h1>
        <p>
          We provide real-time access to premier wholesale lenders, delivering
          wholesale pricing instantly. No Credit Checks, just transparency and
          speed.
        </p>
        <p style={{ fontStyle: "italic" }}>
          Get a free custom rate quote in seconds ⟶
        </p>

        {/* Buttons */}
        <div style={buttonContainerStyles}>
          <motion.button
            style={buttonStyles}
            onClick={handleButtonClick}
            whileHover={{ scale: 1.05, backgroundColor: "#0056b3" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            I'm looking to purchase
            <FiArrowRight style={iconStyles} />
          </motion.button>
          <motion.button
            style={buttonStyles}
            onClick={handleButtonClick}
            whileHover={{ scale: 1.05, backgroundColor: "#0056b3" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            I'm looking to refinance
            <FiArrowRight style={iconStyles} />
          </motion.button>
        </div>

        {/* Additional Info */}
        <div style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#ccc" }}>
          No impact on credit score • No hidden costs • No documents required
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
