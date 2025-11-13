import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

const AffordabilityCalc = ({ isVisible, onClose }) => {
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
    backgroundColor: "rgba(4, 8, 18, 0.75)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
  };

  const widgetStyles = {
    background:
      "linear-gradient(160deg, rgba(13, 23, 42, 0.96), rgba(6, 11, 24, 0.9))",
    padding: "2.25rem",
    borderRadius: "26px",
    textAlign: "center",
    width: "80%",
    maxWidth: "420px",
    boxShadow: "0 36px 80px rgba(8, 18, 35, 0.55)",
    position: "relative",
    border: "1px solid var(--border-subtle)",
    color: "var(--text-primary)",
  };

  const closeIconStyles = {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "1.5rem",
    color: "var(--text-primary)",
    cursor: "pointer",
    backgroundColor: "rgba(15, 23, 42, 0.75)",
    borderRadius: "50%",
    padding: "5px",
    border: "1px solid var(--border-subtle)",
    boxShadow: "0 18px 38px rgba(8, 18, 35, 0.45)",
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
            <h2 style={{ color: "var(--text-primary)", marginBottom: "1rem" }}>
              Affordability Calculator
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.95rem",
                marginBottom: "1.5rem",
              }}
            >
              Explore how much home fits your budget with real-time mortgage
              assumptions.
            </p>
            <button
              onClick={onClose}
              style={{
                padding: "0.75rem 1.5rem",
                background: "var(--accent-gradient)",
                color: "#0f172a",
                border: "1px solid rgba(148, 163, 184, 0.18)",
                borderRadius: "999px",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 16px 36px rgba(56, 189, 248, 0.25)",
              }}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AffordabilityCalc;
