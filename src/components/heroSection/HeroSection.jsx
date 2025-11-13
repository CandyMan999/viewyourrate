import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { isMobile } from "react-device-detect";

const HeroSection = ({ state, dispatch }) => {
  const heroStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: isMobile ? "100%" : "90vh",
    padding: isMobile ? "3rem 1.5rem" : "4rem 2rem",
    background:
      "linear-gradient(135deg, rgba(0, 123, 255, 0.12), rgba(255, 255, 255, 0.95))",
  };

  // Adjust content styles to be positioned correctly for mobile and desktop
  const contentStyles = {
    width: "100%",
    maxWidth: isMobile ? "95%" : "560px",
    color: "#1f2933",
    textAlign: "center",
    padding: isMobile ? "1.5rem" : "2.5rem",
    borderRadius: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    boxShadow: "0 25px 55px rgba(15, 33, 60, 0.18)",
    border: "1px solid rgba(0, 123, 255, 0.15)",
  };

  const buttonContainerStyles = {
    marginTop: isMobile ? "1rem" : "1.8rem", // Reduced margin for desktop
  };

  const buttonStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: isMobile ? "0.85rem 1.25rem" : "1rem 1.5rem",
    margin: "0.6rem 0",
    fontSize: isMobile ? "1rem" : "1.1rem",
    borderRadius: "12px",
    border: "1px solid rgba(0, 123, 255, 0.2)",
    cursor: "pointer",
    background: "#007bff",
    color: "#fff",
    boxShadow: "0 15px 30px rgba(0, 123, 255, 0.25)",
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
      {/* Content */}
      <div style={contentStyles}>
        <h1
          style={{
            fontSize: isMobile ? "1.8rem" : "2.5rem",
            marginBottom: "0.75rem",
          }}
        >
          Unlock Your Best Rate
        </h1>
        <p style={{ fontSize: isMobile ? "0.95rem" : "1.05rem", color: "#425466" }}>
          We provide real-time access to premier wholesale lenders, delivering
          wholesale pricing instantly. No Credit Checks, just transparency and
          speed.
        </p>
        <p
          style={{
            fontStyle: "italic",
            fontSize: isMobile ? "0.85rem" : "0.95rem",
            color: "#007bff",
          }}
        >
          Get a free custom rate quote in seconds ⟶
        </p>

        {/* Buttons */}
        <div style={buttonContainerStyles}>
          <motion.button
            style={buttonStyles}
            onClick={handleButtonClick}
            whileHover={{ scale: 1.02, backgroundColor: "#0066d6" }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            I'm looking to purchase
            <FiArrowRight style={iconStyles} />
          </motion.button>
          <motion.button
            style={buttonStyles}
            onClick={handleButtonClick}
            whileHover={{ scale: 1.02, backgroundColor: "#0066d6" }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            I'm looking to refinance
            <FiArrowRight style={iconStyles} />
          </motion.button>
        </div>

        {/* Additional Info */}
        <div
          style={{
            marginTop: "1.5rem",
            fontSize: isMobile ? "0.85rem" : "0.95rem",
            color: "#60718d",
          }}
        >
          No impact on credit score • No hidden costs • No documents required
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
