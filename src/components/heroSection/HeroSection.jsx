import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { isMobile } from "react-device-detect";

const HeroSection = ({ state, dispatch }) => {
  const heroStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: isMobile ? "100%" : "90vh", // Use full height for mobile
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
    background:
      "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.28), transparent 55%), " +
      "radial-gradient(circle at 80% 15%, rgba(56, 189, 248, 0.2), transparent 50%)",
  };

  // Adjust content styles to be positioned correctly for mobile and desktop
  const contentStyles = {
    position: "absolute",
    top: isMobile ? "30%" : "35%", // Adjust top positioning for mobile
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    color: "#e2e8f0",
    textAlign: "center",
    padding: isMobile ? "1rem" : "1.8rem", // Slightly reduced padding for desktop
    maxWidth: isMobile ? "90%" : "540px", // Reduced width for desktop
    width: "80%",
    borderRadius: "10px",
    background:
      "linear-gradient(135deg, rgba(7, 12, 26, 0.9), rgba(15, 23, 42, 0.82))",
    boxShadow: "0 18px 48px rgba(7, 11, 23, 0.5)",
    border: "1px solid rgba(148, 163, 184, 0.18)",
    backdropFilter: "blur(10px)",
  };

  const buttonContainerStyles = {
    marginTop: isMobile ? "1rem" : "1.8rem", // Reduced margin for desktop
  };

  const buttonStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: isMobile ? "0.75rem" : "0.9rem", // Slightly reduced padding for desktop
    margin: "0.5rem 0",
    fontSize: isMobile ? "1rem" : "1.1rem", // Reduced font size for desktop
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(135deg, #2563eb, #1d4ed8, #38bdf8)",
    color: "#f8fafc",
    boxShadow: "0 16px 36px rgba(37, 99, 235, 0.35)",
    textShadow: "0 1px 2px rgba(15, 23, 42, 0.45)",
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
        <h1 style={{ fontSize: isMobile ? "1.5rem" : "2.25rem" }}>
          Unlock Your Best Rate
        </h1>
        <p style={{ fontSize: isMobile ? "0.9rem" : "0.95rem" }}>
          We provide real-time access to premier wholesale lenders, delivering
          wholesale pricing instantly. No Credit Checks, just transparency and
          speed.
        </p>
        <p
          style={{
            fontStyle: "italic",
            fontSize: isMobile ? "0.8rem" : "0.9rem",
          }}
        >
          Get a free custom rate quote in seconds ⟶
        </p>

        {/* Buttons */}
        <div style={buttonContainerStyles}>
          <motion.button
            style={buttonStyles}
            onClick={handleButtonClick}
            whileHover={{ scale: 1.05, filter: "brightness(1.08)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25 }}
          >
            I'm looking to purchase
            <FiArrowRight style={iconStyles} />
          </motion.button>
          <motion.button
            style={buttonStyles}
            onClick={handleButtonClick}
            whileHover={{ scale: 1.05, filter: "brightness(1.08)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25 }}
          >
            I'm looking to refinance
            <FiArrowRight style={iconStyles} />
          </motion.button>
        </div>

        {/* Additional Info */}
        <div
          style={{
            marginTop: "1rem",
            fontSize: isMobile ? "0.8rem" : "0.85rem", // Slightly reduced font size for desktop
            color: "#ccc",
          }}
        >
          No impact on credit score • No hidden costs • No documents required
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
