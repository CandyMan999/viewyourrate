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
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 42px rgba(56, 189, 248, 0.26)",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.25 }}
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
  background:
    "linear-gradient(150deg, rgba(15, 23, 42, 0.95), rgba(8, 14, 28, 0.9))",
  borderRadius: "32px",
  border: "1px solid var(--border-subtle)",
  boxShadow: "0 26px 60px rgba(8, 18, 35, 0.55)",
  margin: "3rem 0",
  color: "var(--text-primary)",
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
  color: "var(--accent)",
  fontSize: "0.85rem",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.18em",
};

const largeHeaderStyles = {
  fontSize: "2.2rem",
  fontWeight: 700,
  margin: "1rem 0",
  color: "var(--text-primary)",
};

const descriptionStyles = {
  fontSize: "0.98rem",
  color: "var(--text-secondary)",
  marginBottom: "1.75rem",
  lineHeight: 1.6,
};

const buttonStyles = {
  padding: "0.85rem 1.65rem",
  background: "var(--accent-gradient)",
  color: "#0f172a",
  border: "1px solid rgba(148, 163, 184, 0.18)",
  borderRadius: "999px",
  fontSize: "0.95rem",
  fontWeight: 600,
  cursor: "pointer",
  transition: "transform 0.2s ease",
  boxShadow: "0 18px 40px rgba(56, 189, 248, 0.25)",
};

// Mobile Styles
const mobileContainerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1.5rem",
  background:
    "linear-gradient(150deg, rgba(15, 23, 42, 0.95), rgba(8, 14, 28, 0.9))",
  borderRadius: "28px",
  border: "1px solid var(--border-subtle)",
  boxShadow: "0 24px 55px rgba(8, 18, 35, 0.55)",
  margin: "2.5rem 0",
  textAlign: "center",
  color: "var(--text-primary)",
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
  fontWeight: 700,
  margin: "0.75rem 0",
  color: "var(--text-primary)",
};

const mobileDescriptionStyles = {
  fontSize: "0.86rem",
  color: "var(--text-secondary)",
  marginBottom: "1.2rem",
  lineHeight: 1.5,
};

const mobileButtonStyles = {
  padding: "0.65rem 1.25rem",
  background: "var(--accent-gradient)",
  color: "#0f172a",
  border: "1px solid rgba(148, 163, 184, 0.18)",
  borderRadius: "999px",
  fontSize: "0.92rem",
  fontWeight: 600,
  cursor: "pointer",
  transition: "transform 0.2s ease",
  boxShadow: "0 16px 36px rgba(56, 189, 248, 0.22)",
};

export default RateDropNotification;
