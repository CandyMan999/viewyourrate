import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiX } from "react-icons/fi";

const downPaymentOptions = [0, 5, 10, 15, 20, 25, 30, 40];
const occupancyOptions = [
  "Primary Residence",
  "Secondary Home",
  "Investment Property",
];
const propertyTypeOptions = [
  "Single Family",
  "Condominium",
  "Townhome",
  "Multi-Family",
];
const states = ["CA", "CO", "FL", "NY", "TX", "WA"];

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);

/** DotToggle — pill-style Yes/No control with circular dots */
const DotToggle = ({
  label,
  value, // "Yes" | "No"
  onChange,
  yesText = "Yes",
  noText = "No",
}) => {
  const basePill = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.55rem 0.9rem",
    borderRadius: "999px",
    border: "1px solid #d7deeb",
    backgroundColor: "#ffffff",
    color: "#13223a",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.15s ease",
    userSelect: "none",
  };

  const activePill = {
    ...basePill,
    borderColor: "#1a6bff",
    backgroundColor: "#eef5ff",
    boxShadow: "0 0 0 3px rgba(26,107,255,0.12)",
  };

  const Dot = ({ active }) => (
    <span
      aria-hidden
      style={{
        width: 18,
        height: 18,
        borderRadius: "50%",
        border: `2px solid ${active ? "#1a6bff" : "#9fb3d6"}`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.15s ease",
        background: "#fff",
      }}
    >
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: active ? "#1a6bff" : "transparent",
          transition: "all 0.15s ease",
        }}
      />
    </span>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <label style={{ fontWeight: 600, color: "#1a3b6d" }}>{label}</label>
      <div
        style={{ display: "flex", gap: "0.75rem" }}
        role="radiogroup"
        aria-label={label}
      >
        {/* Yes */}
        <button
          type="button"
          role="radio"
          aria-checked={value === "Yes"}
          onClick={() => onChange("Yes")}
          style={value === "Yes" ? activePill : basePill}
        >
          <Dot active={value === "Yes"} />
          <span>{yesText}</span>
        </button>

        {/* No */}
        <button
          type="button"
          role="radio"
          aria-checked={value === "No"}
          onClick={() => onChange("No")}
          style={value === "No" ? activePill : basePill}
        >
          <Dot active={value === "No"} />
          <span>{noText}</span>
        </button>
      </div>
    </div>
  );
};

const PricingWidget = ({ isVisible, onClose }) => {
  const [quoteType, setQuoteType] = useState("Purchase");
  const [purchasePrice, setPurchasePrice] = useState(550000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [waiveEscrow, setWaiveEscrow] = useState("No"); // "Yes" | "No"
  const [occupancy, setOccupancy] = useState(occupancyOptions[0]);
  const [propertyType, setPropertyType] = useState(propertyTypeOptions[0]);
  const [stateSelection, setStateSelection] = useState(states[0]);
  const [isMilitary, setIsMilitary] = useState("No"); // "Yes" | "No"

  const loanAmount = useMemo(() => {
    const price = Number(purchasePrice);
    const percent = Number(downPaymentPercent);
    if (Number.isNaN(price) || Number.isNaN(percent)) return 0;
    const downPaymentAmount = price * (percent / 100);
    const loanValue = Math.max(price - downPaymentAmount, 0);
    return Math.round(loanValue);
  }, [purchasePrice, downPaymentPercent]);

  const widgetVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
    exit: {
      y: "100%",
      opacity: 0,
      transition: { duration: 0.35, ease: "easeIn" },
    },
  };

  const overlayStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    zIndex: 1000,
    padding: "2rem 1rem",
    boxSizing: "border-box",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
  };

  const widgetStyles = {
    width: "100%",
    maxWidth: "1100px",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 20px 45px rgba(15, 33, 60, 0.25)",
  };

  const closeIconStyles = {
    position: "absolute",
    top: "18px",
    right: "18px",
    fontSize: "1.5rem",
    color: "#fff",
    cursor: "pointer",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          style={overlayStyles}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            variants={widgetVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={widgetStyles}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#f5f7fb",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  padding: "2.5rem",
                  backgroundColor: "#fff",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div>
                    <p
                      style={{
                        textTransform: "uppercase",
                        color: "#5a6a85",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        letterSpacing: "0.12em",
                        margin: 0,
                      }}
                    >
                      Get Your Quote Now
                    </p>
                    <h2
                      style={{
                        margin: "0.4rem 0 0",
                        fontSize: "1.75rem",
                        fontWeight: 800,
                        color: "#13223a",
                      }}
                    >
                      Customize Your Rate
                    </h2>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      backgroundColor: "#eef2ff",
                      borderRadius: "999px",
                      padding: "0.25rem",
                      gap: "0.25rem",
                    }}
                  >
                    {["Purchase", "Refinance"].map((type) => {
                      const isActive = quoteType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setQuoteType(type)}
                          style={{
                            border: "none",
                            borderRadius: "999px",
                            padding: "0.5rem 1.5rem",
                            fontWeight: 600,
                            backgroundColor: isActive
                              ? "#1a6bff"
                              : "transparent",
                            color: isActive ? "#fff" : "#1a3b6d",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                          }}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(220px, 1fr))",
                      gap: "1.5rem",
                    }}
                  >
                    {/* Purchase Price */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      <label style={{ fontWeight: 600, color: "#1a3b6d" }}>
                        Purchase Price
                      </label>
                      <input
                        type="number"
                        min="0"
                        step="1000"
                        value={purchasePrice}
                        onChange={(e) => setPurchasePrice(e.target.value)}
                        style={{
                          width: "90%",
                          padding: "0.8rem 1rem",
                          borderRadius: "10px",
                          border: "1px solid #d7deeb",
                          fontSize: "1rem",
                          color: "#13223a",
                          backgroundColor: "#f7f9ff",
                        }}
                      />
                    </div>

                    {/* Down Payment */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      <label style={{ fontWeight: 600, color: "#1a3b6d" }}>
                        Down Payment
                      </label>
                      <select
                        value={downPaymentPercent}
                        onChange={(e) => setDownPaymentPercent(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "0.8rem 1rem",
                          borderRadius: "10px",
                          border: "1px solid #d7deeb",
                          fontSize: "1rem",
                          color: "#13223a",
                          backgroundColor: "#f7f9ff",
                          appearance: "none",
                        }}
                      >
                        {downPaymentOptions.map((option) => (
                          <option
                            key={option}
                            value={option}
                          >{`${option}% Down`}</option>
                        ))}
                      </select>
                    </div>

                    {/* Loan Amount (read-only) */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      <label style={{ fontWeight: 600, color: "#1a3b6d" }}>
                        Loan Amount
                      </label>
                      <input
                        type="text"
                        value={formatCurrency(loanAmount)}
                        readOnly
                        style={{
                          width: "90%",
                          padding: "0.8rem 1rem",
                          borderRadius: "10px",
                          border: "1px solid #d7deeb",
                          fontSize: "1rem",
                          color: "#1a3b6d",
                          backgroundColor: "#eaf1ff",
                          fontWeight: 600,
                        }}
                      />
                    </div>

                    {/* Waive Escrow — DOTS */}
                    <DotToggle
                      label="Waive Escrow?"
                      value={waiveEscrow}
                      onChange={setWaiveEscrow}
                    />

                    {/* Occupancy Type */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      <label style={{ fontWeight: 600, color: "#1a3b6d" }}>
                        Occupancy Type
                      </label>
                      <select
                        value={occupancy}
                        onChange={(e) => setOccupancy(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "0.8rem 1rem",
                          borderRadius: "10px",
                          border: "1px solid #d7deeb",
                          fontSize: "1rem",
                          color: "#13223a",
                          backgroundColor: "#f7f9ff",
                          appearance: "none",
                        }}
                      >
                        {occupancyOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Property Type */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      <label style={{ fontWeight: 600, color: "#1a3b6d" }}>
                        Property Type
                      </label>
                      <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "0.8rem 1rem",
                          borderRadius: "10px",
                          border: "1px solid #d7deeb",
                          fontSize: "1rem",
                          color: "#13223a",
                          backgroundColor: "#f7f9ff",
                          appearance: "none",
                        }}
                      >
                        {propertyTypeOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* State */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      <label style={{ fontWeight: 600, color: "#1a3b6d" }}>
                        State
                      </label>
                      <select
                        value={stateSelection}
                        onChange={(e) => setStateSelection(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "0.8rem 1rem",
                          borderRadius: "10px",
                          border: "1px solid #d7deeb",
                          fontSize: "1rem",
                          color: "#13223a",
                          backgroundColor: "#f7f9ff",
                          appearance: "none",
                        }}
                      >
                        {states.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Military / Veteran — DOTS */}
                    <DotToggle
                      label="Military / Veteran?"
                      value={isMilitary}
                      onChange={setIsMilitary}
                      yesText="Yes"
                      noText="No"
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      padding: "0.95rem 1.5rem",
                      background:
                        "linear-gradient(90deg, #1a6bff 0%, #4c8dff 100%)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "12px",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      boxShadow: "0 15px 25px rgba(26, 107, 255, 0.25)",
                    }}
                  >
                    Get Rates
                  </button>
                </form>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "1.25rem",
                  padding: "2.5rem",
                  background:
                    "linear-gradient(135deg, #1b4dff 0%, #0f8bff 100%)",
                  color: "#fff",
                }}
              >
                <div style={{ position: "relative" }}>
                  <FiX style={closeIconStyles} onClick={onClose} />
                  <h3 style={{ fontSize: "2rem", margin: 0, fontWeight: 800 }}>
                    Instant Quote
                  </h3>
                  <p
                    style={{
                      marginTop: "0.75rem",
                      marginBottom: 0,
                      fontSize: "1rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Get a real quote in seconds. Customize your scenario and
                    instantly compare pricing options side-by-side.
                  </p>
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.9rem",
                  }}
                >
                  {[
                    "Simple info required for quote",
                    "See all costs including third-party fees",
                    "Compare multiple options at once",
                    "Review your rate online",
                  ].map((benefit) => (
                    <li
                      key={benefit}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                      }}
                    >
                      <FiCheckCircle
                        size={22}
                        style={{ marginTop: 2, color: "#fff" }}
                      />
                      <span style={{ fontSize: "1rem", lineHeight: 1.6 }}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PricingWidget;
