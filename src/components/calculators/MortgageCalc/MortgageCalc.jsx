import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

const MortgageCalc = ({ isVisible, onClose }) => {
  const widgetRef = useRef(null);
  const [loading, setLoading] = useState(true);

  // Animation for modal
  const widgetVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      y: "100%",
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
    padding: "1.5rem",
  };

  const widgetStyles = {
    background:
      "linear-gradient(160deg, rgba(13, 23, 42, 0.96), rgba(6, 11, 24, 0.9))",
    padding: "2.5rem",
    borderRadius: "32px",
    textAlign: "center",
    width: "100%",
    maxWidth: "1100px",
    minHeight: "700px",
    boxShadow: "0 40px 85px rgba(8, 18, 35, 0.6)",
    position: "relative",
    overflow: "hidden",
    border: "1px solid var(--border-subtle)",
    color: "var(--text-primary)",
  };

  const closeIconStyles = {
    position: "absolute",
    top: "16px",
    right: "16px",
    fontSize: "1.5rem",
    color: "var(--text-primary)",
    cursor: "pointer",
    backgroundColor: "rgba(15, 23, 42, 0.75)",
    borderRadius: "50%",
    padding: "8px",
    zIndex: 10,
    border: "1px solid var(--border-subtle)",
    boxShadow: "0 18px 40px rgba(8, 18, 35, 0.45)",
  };

  useEffect(() => {
    if (!isVisible) return;

    setLoading(true);
    widgetRef.current.innerHTML = ""; // Clear previous widget

    const container = document.createElement("div");
    container.className = "mcalculator";
    container.setAttribute(
      "data-calc",
      "https://www.mtgcalcs.com/calculators/widget.php?selectedCalculators=%7B%22conventional%22%3Atrue%7D&selectedColors=%7B%22mainBgColor%22%3A%22%23ffffff%22%2C%22resultsBgColor%22%3A%22%23f05c22%22%2C%22sliderPrimaryColor%22%3A%22%23f05c22%22%2C%22sliderSecondaryColor%22%3A%22%23dddddd%22%2C%22sliderHandleColor%22%3A%22%23f05c22%22%2C%22mainTextColor%22%3A%22%23373a3c%22%2C%22resultsTextColor%22%3A%22%23ffffff%22%2C%22titleDefaultColor%22%3A%22%23777777%22%2C%22titleActiveColor%22%3A%22%23333333%22%2C%22titleActiveUnderlineColor%22%3A%22%23ffffff%22%7D&conventionalInputs=%7B%22mcalc-conventional-purchase-price%22%3A%22250000%22%2C%22mcalc-conventional-down-payment-percent%22%3A%225%22%2C%22mcalc-conventional-interest-rate%22%3A%225%22%2C%22mcalc-conventional-loan-term%22%3A%2230%22%2C%22mcalc-conventional-annual-tax-percent%22%3A%220%22%2C%22mcalc-conventional-annual-insurance%22%3A%220%22%2C%22mcalc-conventional-mortgage-insurance-rate%22%3A%220%22%2C%22mcalc-conventional-monthly-hoa%22%3A%220%22%7D"
    );
    container.setAttribute("data-width", "1100");

    widgetRef.current.appendChild(container);

    const script = document.createElement("script");
    script.src = "https://www.mtgcalcs.com/calculators/js/embed.js";
    script.async = true;
    widgetRef.current.appendChild(script);

    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("resize")); // force reflow
      setLoading(false); // reveal widget
    }, 1000); // show loader for 4 seconds

    return () => {
      clearTimeout(timer);
      widgetRef.current.innerHTML = "";
    };
  }, [isVisible]);

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
          <motion.div style={widgetStyles}>
            <FiX style={closeIconStyles} onClick={onClose} />
            <h2
              style={{
                color: "var(--text-primary)",
                marginBottom: "1.5rem",
                fontSize: "2rem",
              }}
            >
              Mortgage Calculator
            </h2>

            {loading && (
              <div
                style={{
                  paddingTop: "200px",
                  fontSize: "1.1rem",
                  color: "var(--text-secondary)",
                }}
              >
                <div className="spinner" />
                Loading calculator...
              </div>
            )}

            <div
              ref={widgetRef}
              style={{
                width: "100%",
                height: loading ? "0px" : "70vh",
                opacity: loading ? 0 : 1,
                display: "block",
                overflow: "scroll",
              }}
            />

            <button
              onClick={onClose}
              style={{
                marginTop: "2rem",
                padding: "0.75rem 1.6rem",
                background: "var(--accent-gradient)",
                color: "#0f172a",
                border: "1px solid rgba(148, 163, 184, 0.18)",
                borderRadius: "999px",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 18px 40px rgba(56, 189, 248, 0.25)",
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

export default MortgageCalc;
