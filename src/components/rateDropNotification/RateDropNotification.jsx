import React from "react";
import { motion } from "framer-motion";
import RatesDropped from "../../pics/RatesDropped.png"; // Adjust path based on your project structure
import { isMobile } from "react-device-detect"; // Import mobile detection

const RateDropNotification = () => {
  return (
    <div style={isMobile ? mobileContainerStyles : containerStyles}>
      {/* Image Section */}
      <div style={isMobile ? mobileImageContainerStyles : imageContainerStyles}>
        <img
          src={RatesDropped}
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
  padding: "2.5rem",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  borderRadius: "20px",
  boxShadow: "0 28px 55px rgba(15, 33, 60, 0.14)",
  margin: "2.5rem 0",
  border: "1px solid rgba(0, 123, 255, 0.12)",
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
  fontSize: "2.1rem",
  fontWeight: "bold",
  margin: "1rem 0",
  color: "#1f2933",
};

const descriptionStyles = {
  fontSize: "1.05rem",
  color: "#516379",
  marginBottom: "1.5rem",
  lineHeight: 1.7,
};

const buttonStyles = {
  padding: "0.8rem 1.8rem",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "999px",
  fontSize: "0.95rem",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  boxShadow: "0 18px 32px rgba(0, 123, 255, 0.25)",
};

// Mobile Styles
const mobileContainerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1.5rem",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  borderRadius: "18px",
  boxShadow: "0 24px 48px rgba(15, 33, 60, 0.14)",
  margin: "2.5rem 0",
  textAlign: "center",
  border: "1px solid rgba(0, 123, 255, 0.12)",
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
  fontSize: "1.65rem",
  fontWeight: "bold",
  margin: "0.75rem 0",
  color: "#1f2933",
};

const mobileDescriptionStyles = {
  fontSize: "0.95rem",
  color: "#516379",
  marginBottom: "1.1rem",
  lineHeight: 1.6,
};

const mobileButtonStyles = {
  padding: "0.6rem 1.4rem",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "999px",
  fontSize: "0.95rem",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  boxShadow: "0 16px 28px rgba(0, 123, 255, 0.22)",
};

export default RateDropNotification;
