import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { isMobile } from "react-device-detect";

const HeroSection = ({ state, dispatch, onStartPurchase, onStartRefinance }) => {
  const heroStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: isMobile ? "100%" : "90vh", // Use full height for mobile
    background:
      "radial-gradient(circle at 15% 15%, rgba(26, 107, 255, 0.12), transparent 40%), radial-gradient(circle at 80% 5%, rgba(79, 141, 255, 0.18), transparent 35%), #f5f8ff",
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

  // Adjust content styles to be positioned correctly for mobile and desktop
  const contentStyles = {
    position: "absolute",
    top: isMobile ? "30%" : "35%", // Adjust top positioning for mobile
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    color: "#13223a",
    textAlign: "center",
    padding: isMobile ? "1rem" : "1.8rem", // Slightly reduced padding for desktop
    maxWidth: isMobile ? "90%" : "540px", // Reduced width for desktop
    width: "80%",
    borderRadius: "18px",
    background: "#ffffff",
    border: "1px solid #e1e8f5",
    boxShadow: "0 20px 45px rgba(15, 33, 60, 0.18)",
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
    borderRadius: "999px",
    border: "1px solid #1a6bff",
    cursor: "pointer",
    background: "linear-gradient(90deg, #1a6bff 0%, #4c8dff 100%)",
    color: "#f5f8ff",
    boxShadow: "0 14px 34px rgba(26, 107, 255, 0.25)",
  };

  const iconStyles = {
    marginLeft: "0.5rem",
  };

  const handlePurchaseClick = () => {
    if (onStartPurchase) {
      onStartPurchase();
      return;
    }
    dispatch({ type: "SHOW_PRICING_WIDGET", payload: true });
  };

  const handleRefinanceClick = () => {
    if (onStartRefinance) {
      onStartRefinance();
      return;
    }
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
        <p style={{ fontSize: isMobile ? "0.9rem" : "0.95rem", color: "#4b5f84" }}>
          We provide real-time access to premier wholesale lenders, delivering
          wholesale pricing instantly. No Credit Checks, just transparency and
          speed.
        </p>
        <p
          style={{
            fontStyle: "italic",
            fontSize: isMobile ? "0.8rem" : "0.9rem",
            color: "#4b5f84",
          }}
        >
          Get a free custom rate quote in seconds ⟶
        </p>

        {/* Buttons */}
        <div style={buttonContainerStyles}>
          <motion.button style={buttonStyles} onClick={handlePurchaseClick}>
            I'm looking to purchase
            <FiArrowRight style={iconStyles} />
          </motion.button>
          <motion.button
            style={buttonStyles}
            onClick={handleRefinanceClick}
            whileHover={{ scale: 1.05, backgroundColor: "#1a6bff" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
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
            color: "#5f6f8e",
          }}
        >
          No impact on credit score • No hidden costs • No documents required
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
