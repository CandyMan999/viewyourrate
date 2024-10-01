// components/PricingWidget.js
import React from "react";
import { motion } from "framer-motion";

const PricingWidget = ({ isVisible, onClose }) => {
  // Animation variants for the widget
  const widgetVariants = {
    hidden: {
      y: "100%", // Start off-screen at the bottom
      opacity: 0,
    },
    visible: {
      y: 0, // Move into view
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      y: "100%", // Animate back to the bottom when closing
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  const overlayStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    backdropFilter: "blur(4px)", // Apply blur effect
  };

  const widgetStyles = {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "12px",
    textAlign: "center",
    width: "80%",
    maxWidth: "400px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
  };

  return (
    <>
      {isVisible && (
        <motion.div
          style={overlayStyles}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={widgetVariants}
        >
          <div style={widgetStyles}>
            <h2 style={{ color: "#007bff" }}>Pricing Widget</h2>
            <button onClick={onClose}>Close</button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default PricingWidget;
