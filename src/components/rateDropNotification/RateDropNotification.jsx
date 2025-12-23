import React from "react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect"; // Import mobile detection

const RateDropNotification = () => {
  return (
    <div style={isMobile ? mobileContainerStyles : containerStyles}>
      {/* Image Section */}
      <div style={isMobile ? mobileImageContainerStyles : imageContainerStyles}>
        <img
          src="/RatesDropped.png"
          alt="Rates Dropped"
          style={isMobile ? mobileImageStyles : imageStyles}
        />
      </div>

      {/* Text Section */}
      <div style={isMobile ? mobileTextContainerStyles : textContainerStyles}>
        <h4 style={smallHeaderStyles}>RATE WATCHER ALERT</h4>
        <h2 style={isMobile ? mobileLargeHeaderStyles : largeHeaderStyles}>
          Get notified when rates drop
        </h2>
        <p style={isMobile ? mobileDescriptionStyles : descriptionStyles}>
          Never miss a rate drop – experience smarter rate shopping. Our Price
          Drop Alert feature keeps you informed, instantly notifying you when
          prices fall.
        </p>
        <motion.button
          style={isMobile ? mobileButtonStyles : buttonStyles}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.2 }}
          transition={{ duration: 0.3 }}
        >
          Notify me of rate drops
        </motion.button>
      </div>
    </div>
  );
};

// Desktop Styles
const containerStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2rem",
  backgroundColor: "#f8f9fa",
  borderRadius: "10px",
  boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)", // Updated box shadow
  margin: "2rem 0",
};

const imageContainerStyles = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const imageStyles = {
  width: "80%",
  maxWidth: "300px",
};

const textContainerStyles = {
  flex: 1,
  padding: "1rem",
  textAlign: "left",
};

const smallHeaderStyles = {
  color: "#007bff",
  fontSize: "0.9rem",
  fontWeight: "bold",
  textTransform: "uppercase",
};

const largeHeaderStyles = {
  fontSize: "2rem",
  fontWeight: "bold",
  margin: "1rem 0",
  color: "#333",
};

const descriptionStyles = {
  fontSize: "1rem",
  color: "#666",
  marginBottom: "1.5rem",
};

const buttonStyles = {
  padding: "0.75rem 1.5rem",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontSize: "1rem",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
};

// Mobile Styles
const mobileContainerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
  backgroundColor: "#f8f9fa",
  borderRadius: "10px",
  boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)",
  margin: "2rem 0",
  textAlign: "center",
};

const mobileImageContainerStyles = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "1rem",
};

const mobileImageStyles = {
  width: "100%",
  maxWidth: "250px",
};

const mobileTextContainerStyles = {
  padding: "0.5rem",
};

const mobileLargeHeaderStyles = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  margin: "0.5rem 0",
  color: "#333",
};

const mobileDescriptionStyles = {
  fontSize: "0.9rem",
  color: "#666",
  marginBottom: "1rem",
};

const mobileButtonStyles = {
  padding: "0.5rem 1rem",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontSize: "1rem",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
};

export default RateDropNotification;
