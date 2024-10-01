// components/RatesSectionMobile.js
import React from "react";

const RatesSectionMobile = () => {
  // Styling for the entire section
  const sectionStyles = {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Set opacity for background
    paddingTop: "1rem",
    paddingBottom: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  };

  // Styling for the top row (header and button)
  const topRowStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: "1rem",
    paddingLeft: "1rem",
  };

  const headerStyles = {
    color: "#007bff",
    fontSize: "0.9rem",
    fontWeight: "bold",
    textTransform: "uppercase",
  };

  const buttonStyles = {
    padding: "0.5rem 1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "0.9rem",
    cursor: "pointer",
    marginRight: "1rem",
  };

  // Styling for the rate cards container
  const ratesContainerStyles = {
    display: "flex",
    alignItems: "center",
    overflowX: "auto", // Allow horizontal scrolling
    width: "100%",
    marginLeft: "0",
    marginRight: "0",
  };

  // Styling for individual rate cards
  const rateCardStyles = {
    minWidth: "150px",
    marginRight: "1rem",
    padding: "1rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fff", // Keep cards fully opaque
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    flexShrink: 0, // Prevents the cards from shrinking
  };

  const rateHeaderStyles = {
    fontSize: "0.8rem",
    fontWeight: "bold",
    color: "#666",
    marginBottom: "0.5rem",
  };

  const rateInfoStyles = {
    fontSize: "1rem",
    fontWeight: "bold",
    margin: "0.5rem 0",
  };

  const rateDetailsStyles = {
    fontSize: "0.8rem",
    color: "#666",
  };

  return (
    <div style={sectionStyles}>
      {/* Top Row: Header and Button */}
      <div style={topRowStyles}>
        <div style={headerStyles}>Today's Rates</div>
        <button style={buttonStyles}>Compare</button>
      </div>

      {/* Second Row: Rate Cards */}
      <div style={ratesContainerStyles}>
        {/* Example Rate Card */}
        <div style={rateCardStyles}>
          <div style={rateHeaderStyles}>PURCHASE</div>
          <div style={rateInfoStyles}>5.625% / 5.699%</div>
          <div style={rateDetailsStyles}>30 Yr Fixed</div>
        </div>

        {/* Additional Rate Cards */}
        <div style={rateCardStyles}>
          <div style={rateHeaderStyles}>PURCHASE</div>
          <div style={rateInfoStyles}>4.750% / 4.885%</div>
          <div style={rateDetailsStyles}>15 Yr Fixed</div>
        </div>

        <div style={rateCardStyles}>
          <div style={rateHeaderStyles}>PURCHASE</div>
          <div style={rateInfoStyles}>5.000% / 5.772%</div>
          <div style={rateDetailsStyles}>FHA Loan</div>
        </div>

        <div style={rateCardStyles}>
          <div style={rateHeaderStyles}>PURCHASE</div>
          <div style={rateInfoStyles}>5.000% / 5.255%</div>
          <div style={rateDetailsStyles}>VA Loan</div>
        </div>
      </div>
    </div>
  );
};

export default RatesSectionMobile;
