import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { isMobile } from "react-device-detect";

const HeroSection = ({ state, dispatch }) => {
  const heroStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: isMobile ? "100%" : "90vh",
    position: "relative",
    overflow: "hidden",
    width: "100%",
  };

  const overlayStyles = {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 15% 20%, rgba(59, 130, 246, 0.25), transparent 45%), rgba(6, 11, 24, 0.6)",
    filter: "blur(0)",
  };

  const contentStyles = {
    position: "relative",
    zIndex: 1,
    color: "var(--text-primary)",
    textAlign: "center",
    padding: isMobile ? "1.4rem" : "2rem",
    maxWidth: isMobile ? "92%" : "520px",
    width: "100%",
    borderRadius: "28px",
    background:
      "linear-gradient(145deg, rgba(13, 23, 42, 0.92), rgba(9, 15, 30, 0.88))",
    border: "1px solid var(--border-subtle)",
    boxShadow: "0 28px 60px rgba(8, 18, 35, 0.55)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
  };

  const buttonContainerStyles = {
    marginTop: isMobile ? "1.1rem" : "1.8rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.85rem",
  };

  const buttonStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: isMobile ? "0.85rem 1.1rem" : "1rem 1.3rem",
    borderRadius: "16px",
    border: "1px solid rgba(148, 163, 184, 0.18)",
    cursor: "pointer",
    background: "var(--accent-gradient)",
    color: "#0f172a",
    fontWeight: 600,
    letterSpacing: "0.02em",
    fontSize: isMobile ? "0.95rem" : "1.05rem",
    boxShadow: "0 18px 38px rgba(56, 189, 248, 0.25)",
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
        <h1
          style={{
            fontSize: isMobile ? "1.6rem" : "2.35rem",
            marginBottom: "0.75rem",
          }}
        >
          Unlock Your Best Rate
        </h1>
        <p
          style={{
            fontSize: isMobile ? "0.9rem" : "0.95rem",
            color: "var(--text-secondary)",
            marginBottom: "0.75rem",
          }}
        >
          We provide real-time access to premier wholesale lenders, delivering
          wholesale pricing instantly. No Credit Checks, just transparency and
          speed.
        </p>
        <p
          style={{
            fontStyle: "italic",
            fontSize: isMobile ? "0.82rem" : "0.92rem",
            color: "var(--accent)",
          }}
        >
          Get a free custom rate quote in seconds ⟶
        </p>

        {/* Buttons */}
        <div style={buttonContainerStyles}>
          <motion.button
            style={buttonStyles}
            onClick={handleButtonClick}
            whileHover={{ scale: 1.02, boxShadow: "0 22px 44px rgba(56, 189, 248, 0.35)" }}
            whileTap={{ scale: 0.97 }}
          >
            I'm looking to purchase
            <FiArrowRight style={iconStyles} />
          </motion.button>
          <motion.button
            style={buttonStyles}
            onClick={handleButtonClick}
            whileHover={{ scale: 1.02, boxShadow: "0 22px 44px rgba(56, 189, 248, 0.35)" }}
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
            marginTop: "1.25rem",
            fontSize: isMobile ? "0.78rem" : "0.84rem",
            color: "var(--text-muted)",
            letterSpacing: "0.04em",
          }}
        >
          No impact on credit score • No hidden costs • No documents required
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
