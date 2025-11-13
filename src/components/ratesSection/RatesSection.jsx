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
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "1.25rem 2.5rem",
    display: "flex",
    alignItems: "center",
    boxShadow: "0 -12px 30px rgba(15, 33, 60, 0.12)",
    backdropFilter: "blur(8px)",
    borderTop: "1px solid rgba(0, 123, 255, 0.15)",
    zIndex: 1000,
  };

  const leftContentStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "20%",
    minWidth: "220px",
    gap: "0.4rem",
  };

  const headerStyles = {
    color: "#007bff",
    fontSize: "0.9rem",
    fontWeight: "bold",
    textTransform: "uppercase",
  };

  const titleStyles = {
    fontSize: "1.6rem",
    fontWeight: "bold",
    margin: "0.3rem 0",
    color: "#1f2933",
  };

  const buttonStyles = {
    padding: "0.6rem 1.8rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "999px",
    fontSize: "0.95rem",
    cursor: "pointer",
    boxShadow: "0 12px 24px rgba(0, 123, 255, 0.25)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };

  const ratesContainerStyles = {
    display: "flex",
    alignItems: "center",
    overflowX: "auto",
    width: "100%",
    gap: "1rem",
    marginLeft: 40,
    paddingBottom: "0.5rem",
  };

  const rateCardStyles = {
    minWidth: "200px",
    padding: "1.2rem 1.4rem",
    border: "1px solid rgba(0, 123, 255, 0.12)",
    borderRadius: "14px",
    backgroundColor: "#fff",
    boxShadow: "0 18px 35px rgba(15, 33, 60, 0.12)",
    textAlign: "center",
    position: "relative",
  };

  const rateHeaderStyles = {
    fontSize: "0.8rem",
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: "0.5rem",
    letterSpacing: "0.08em",
  };

  const rateInfoStyles = {
    fontSize: "1.1rem",
    fontWeight: "bold",
    margin: "0.5rem 0",
    color: "#1f2933",
  };

  const rateDetailsStyles = {
    fontSize: "0.85rem",
    color: "#5b6b82",
  };

  const customizeLinkStyles = {
    color: "#007bff",
    fontSize: "0.9rem",
    marginTop: "1.2rem",
    display: "block",
    textDecoration: "none",
    fontWeight: 600,
  };

  const iconStyles = {
    position: "absolute",
    top: "12px",
    right: "12px",
    color: "#007bff",
    fontSize: "1.6rem",
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
        <div style={{ position: "absolute", top: -20, left: "8%" }}>
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
