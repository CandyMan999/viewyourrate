import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

const MortgageCalc = ({ isVisible, onClose }) => {
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
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    WebkitFilter: "blur(5px)",
    MozFilter: "blur(5px)",
    OFilter: "blur(5px)",
    msFilter: "blur(5px)",
    filter: "blur(5px)",
  };

  const widgetStyles = {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "12px",
    textAlign: "center",
    width: "80%",
    maxWidth: "400px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
    position: "relative", // Needed for the close button
  };

  const closeIconStyles = {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "1.5rem",
    color: "#fff",
    cursor: "pointer",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "50%",
    padding: "5px",
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          style={overlayStyles}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={widgetVariants}
        >
          {/* Close Icon */}
          <FiX style={closeIconStyles} onClick={onClose} />

          <motion.div style={widgetStyles}>
            <h2 style={{ color: "#007bff" }}>Mortgage Calc</h2>
            <button onClick={onClose}>Close</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MortgageCalc;
