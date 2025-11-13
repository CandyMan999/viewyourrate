import React from "react";
import ApplyButton from "../applyButton";
const RatesSectionMobile = () => {
  // Styling for the entire section
  const sectionStyles = {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "0.75rem 0.75rem 1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    boxShadow: "0 -10px 25px rgba(15, 33, 60, 0.12)",
    borderTop: "1px solid rgba(0, 123, 255, 0.15)",
    backdropFilter: "blur(6px)",
    zIndex: 1000,
  };

  // Styling for the top row (header and button)
  const topRowStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: "0.6rem",
    paddingLeft: "0.75rem",
    paddingRight: "0.75rem",
  };

  const headerStyles = {
    color: "#007bff",
    fontSize: "0.8rem", // Slightly smaller font
    fontWeight: "bold",
    textTransform: "uppercase",
  };

  const buttonStyles = {
    padding: "0.45rem 1.1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "999px",
    fontSize: "0.85rem",
    cursor: "pointer",
    marginRight: "0.5rem",
    boxShadow: "0 10px 24px rgba(0, 123, 255, 0.2)",
  };

  // Styling for the rate cards container
  const ratesContainerStyles = {
    display: "flex",
    alignItems: "center",
    overflowX: "auto", // Allow horizontal scrolling
    width: "100%",
    marginLeft: 0,
    marginRight: 0,
    gap: "0.75rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  };

  // Styling for individual rate cards
  const rateCardStyles = {
    minWidth: "120px", // Reduced width
    padding: "0.85rem 1rem",
    border: "1px solid rgba(0, 123, 255, 0.12)",
    borderRadius: "12px",
    backgroundColor: "#fff",
    boxShadow: "0 14px 28px rgba(15, 33, 60, 0.12)",
    textAlign: "center",
    flexShrink: 0, // Prevents the cards from shrinking
  };

  const rateHeaderStyles = {
    fontSize: "0.7rem", // Slightly smaller font
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: "0.3rem", // Reduced margin
  };

  const rateInfoStyles = {
    fontSize: "0.9rem", // Slightly smaller font
    fontWeight: "bold",
    margin: "0.3rem 0", // Reduced margin
    color: "#1f2933",
  };

  const rateDetailsStyles = {
    fontSize: "0.7rem", // Slightly smaller font
    color: "#5b6b82",
  };

  return (
    <div style={sectionStyles}>
      {/* Top Row: Header and Button */}
      <div style={topRowStyles}>
        <div style={headerStyles}>Today's Rates</div>
        <ApplyButton mobile={true} />
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
