import React from "react";
import { FaArrowUp, FaArrowDown, FaChartLine } from "react-icons/fa";
import ApplyButton from "../applyButton";

const RatesSection = ({ dispatch, state }) => {
  const handleButtonClick = () => {
    dispatch({ type: "SHOW_PRICING_WIDGET", payload: true });
  };

  const getChangeIcon = (change) => {
    if (!change) return null;
    if (change.includes("-"))
      return <FaArrowDown color="green" style={{ marginLeft: 6 }} />;
    if (change.includes("+"))
      return <FaArrowUp color="red" style={{ marginLeft: 6 }} />;
    return null;
  };

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
    overflowX: "auto",
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

  return (
    <div style={sectionStyles}>
      {/* Left Sidebar Content */}
      <div style={leftContentStyles}>
        <div style={headerStyles}>Today's Rates</div>
        <h2 style={titleStyles}>View Rates</h2>
        <button onClick={handleButtonClick} style={buttonStyles}>
          Customize
        </button>
      </div>

      {/* Rates Container */}
      <div style={ratesContainerStyles}>
        {/* Bring back original Apply Button Location */}
        <div style={{ position: "absolute", top: -10, left: "8%" }}>
          <ApplyButton />
        </div>

        {/* Dynamic Cards */}
        {state?.mortgageRates?.map((rateObj, idx) => (
          <div key={idx} style={rateCardStyles}>
            <FaChartLine style={iconStyles} />
            <div style={rateHeaderStyles}>PURCHASE</div>
            <div style={rateInfoStyles}>{rateObj.rate}</div>
            <div style={rateDetailsStyles}>{rateObj.rateType}</div>
            <div style={rateDetailsStyles}>
              Change:{" "}
              <span
                style={{
                  color: rateObj.change.includes("-") ? "green" : "red",
                }}
              >
                {rateObj.change} {getChangeIcon(rateObj.change)}
              </span>
            </div>
            <div style={rateDetailsStyles}>Points: {rateObj.points}</div>
            <a href="#" style={customizeLinkStyles}>
              Customize this rate ➝
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatesSection;
