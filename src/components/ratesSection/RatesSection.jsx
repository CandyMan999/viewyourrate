import React from "react";
import { FaChartLine } from "react-icons/fa";
import applyButton from "../applyButton";
import ApplyButton from "../applyButton";

const RatesSection = ({ dispatch }) => {
  const sectionStyles = {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: "1rem 2rem",
    display: "flex",

    alignItems: "center",
    boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  };

  const leftContentStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "20%",
  };

  const headerStyles = {
    color: "#007bff",
    fontSize: "0.9rem",
    fontWeight: "bold",
    textTransform: "uppercase",
  };

  const titleStyles = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "0.5rem 0",
  };

  const buttonStyles = {
    padding: "0.5rem 1.5rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "0.9rem",
    cursor: "pointer",
  };

  const ratesContainerStyles = {
    display: "flex",
    alignItems: "center",
    overflowX: "auto", // Enable horizontal scrolling
    width: "100%",
    marginLeft: 40,
  };

  const rateCardStyles = {
    minWidth: "200px",
    marginRight: "1rem",
    padding: "1rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    position: "relative",
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

  const customizeLinkStyles = {
    color: "#007bff",
    fontSize: "0.9rem",
    marginTop: "1rem",
    display: "block",
    textDecoration: "none",
  };

  const iconStyles = {
    position: "absolute",
    top: "10px",
    right: "10px",
    color: "#007bff",
    fontSize: "1.5rem",
  };
  const handleButtonClick = () => {
    dispatch({ type: "SHOW_PRICING_WIDGET", payload: true });
  };

  return (
    <div style={sectionStyles}>
      <div style={leftContentStyles}>
        <div style={headerStyles}>Today's Rates</div>
        <h2 style={titleStyles}>View Rates</h2>
        <button onClick={handleButtonClick} style={buttonStyles}>
          Compare
        </button>
      </div>

      {/* Rates Container with Horizontal Scroll */}
      <div style={ratesContainerStyles}>
        {/* Example Rate Card */}
        <div style={{ position: "absolute", top: -10, left: "8%" }}>
          <ApplyButton />
        </div>
        <div style={rateCardStyles}>
          <FaChartLine style={iconStyles} />
          <div style={rateHeaderStyles}>PURCHASE</div>
          <div style={rateInfoStyles}>5.625% / 5.699%</div>
          <div style={rateDetailsStyles}>30 Yr Fixed</div>
          <div style={rateDetailsStyles}>Points: 0.547</div>
          <a href="#" style={customizeLinkStyles}>
            Customize this rate ➝
          </a>
        </div>

        {/* Additional Rate Cards */}
        <div style={rateCardStyles}>
          <FaChartLine style={iconStyles} />
          <div style={rateHeaderStyles}>PURCHASE</div>
          <div style={rateInfoStyles}>4.750% / 4.885%</div>
          <div style={rateDetailsStyles}>15 Yr Fixed</div>
          <div style={rateDetailsStyles}>Points: 0.654</div>
          <a href="#" style={customizeLinkStyles}>
            Customize this rate ➝
          </a>
        </div>

        <div style={rateCardStyles}>
          <FaChartLine style={iconStyles} />
          <div style={rateHeaderStyles}>PURCHASE</div>
          <div style={rateInfoStyles}>5.000% / 5.772%</div>
          <div style={rateDetailsStyles}>FHA Loan</div>
          <div style={rateDetailsStyles}>Points: 0.503</div>
          <a href="#" style={customizeLinkStyles}>
            Customize this rate ➝
          </a>
        </div>

        <div style={rateCardStyles}>
          <FaChartLine style={iconStyles} />
          <div style={rateHeaderStyles}>PURCHASE</div>
          <div style={rateInfoStyles}>5.000% / 5.255%</div>
          <div style={rateDetailsStyles}>VA Loan</div>
          <div style={rateDetailsStyles}>Points: 0.565</div>
          <a href="#" style={customizeLinkStyles}>
            Customize this rate ➝
          </a>
        </div>
      </div>
    </div>
  );
};

export default RatesSection;
