import React from "react";
import { FiCheckCircle, FiTrendingDown } from "react-icons/fi";
import { isMobile } from "react-device-detect";
import BeatMyEstimateButton from "./BeatMyEstimateButton";

const BeatMyEstimateSection = () => {
  const containerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: isMobile ? "100%" : "90vh",
    padding: "2rem 1.5rem",
  };

  const cardStyles = {
    width: "100%",
    maxWidth: "760px",
    backgroundColor: "rgba(15, 23, 42, 0.85)",
    border: "1px solid rgba(148, 163, 184, 0.18)",
    borderRadius: "20px",
    padding: isMobile ? "1.6rem" : "2.4rem",
    color: "#f8fafc",
    boxShadow: "0 24px 60px rgba(2, 6, 23, 0.6)",
    backdropFilter: "blur(16px)",
  };

  const featureStyles = {
    display: "grid",
    gap: "0.75rem",
    marginTop: "1.5rem",
  };

  const featureItemStyles = {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    backgroundColor: "rgba(15, 23, 42, 0.55)",
    borderRadius: "12px",
    padding: "0.75rem 1rem",
    color: "#e2e8f0",
  };

  return (
    <div style={containerStyles}>
      <div style={cardStyles}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <FiTrendingDown size={22} color="#38bdf8" />
          <span
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#7dd3fc",
            }}
          >
            Beat My Estimate
          </span>
        </div>
        <h2 style={{ marginTop: "0.85rem", fontSize: isMobile ? "1.6rem" : "2.2rem" }}>
          Upload your Loan Estimate and see if we can beat it.
        </h2>
        <p style={{ color: "#cbd5f5", fontSize: "1rem" }}>
          We will parse your Loan Estimate and recreate the same scenario to look for
          a better offer with identical terms and pricing assumptions.
        </p>

        <div style={featureStyles}>
          {[
            "Upload a PDF or image of your Loan Estimate.",
            "We match the same loan scenario you already have.",
            "If we can beat it, we show you the improved offer.",
          ].map((item) => (
            <div key={item} style={featureItemStyles}>
              <FiCheckCircle color="#22c55e" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "1.6rem", display: "flex", justifyContent: "center" }}>
          <BeatMyEstimateButton mobile={isMobile} />
        </div>
        <p
          style={{
            marginTop: "1rem",
            fontSize: "0.85rem",
            color: "#94a3b8",
            textAlign: "center",
          }}
        >
          Nothing is stored permanently — we only read the document to match your terms.
        </p>
      </div>
    </div>
  );
};

export default BeatMyEstimateSection;
