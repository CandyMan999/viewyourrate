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
    border: "1px solid rgba(148, 163, 184, 0.35)",
    background: "rgba(15, 23, 42, 0.55)",
    color: "#e2e8f0",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.15s ease",
    userSelect: "none",
    backdropFilter: "blur(6px)",
  };

  const activePill = {
    ...basePill,
    borderColor: "rgba(96, 165, 250, 0.8)",
    background:
      "linear-gradient(135deg, rgba(37, 99, 235, 0.85), rgba(56, 189, 248, 0.8))",
    boxShadow: "0 10px 24px rgba(37, 99, 235, 0.3)",
  };

  const Dot = ({ active }) => (
    <span
      aria-hidden
      style={{
        width: 18,
        height: 18,
        borderRadius: "50%",
        border: `2px solid ${
          active ? "rgba(125, 211, 252, 0.95)" : "rgba(148, 163, 184, 0.55)"
        }`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.15s ease",
        background: "rgba(15, 23, 42, 0.75)",
      }}
    >
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: active ? "#7dd3fc" : "transparent",
          transition: "all 0.15s ease",
        }}
      />
    </span>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <label style={{ fontWeight: 600, color: "#cbd5f5" }}>{label}</label>
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
    boxShadow: "0 24px 48px rgba(6, 12, 31, 0.5)",
    background:
      "linear-gradient(135deg, rgba(6, 12, 31, 0.96), rgba(13, 24, 48, 0.92))",
    border: "1px solid rgba(148, 163, 184, 0.22)",
  };

  const closeIconStyles = {
    position: "absolute",
    top: "18px",
    right: "18px",
    fontSize: "1.5rem",
    color: "#e0f2fe",
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
                background:
                  "linear-gradient(145deg, rgba(7, 12, 26, 0.9), rgba(11, 20, 38, 0.9))",
                color: "#e2e8f0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  padding: "2.5rem",
                  background: "rgba(10, 18, 35, 0.82)",
                  backdropFilter: "blur(8px)",
                  borderBottom: "1px solid rgba(148, 163, 184, 0.18)",
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
                        color: "rgba(148, 163, 184, 0.78)",
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
                        color: "#f8fafc",
                      }}
                    >
                      Customize Your Rate
                    </h2>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      background: "rgba(15, 23, 42, 0.65)",
                      borderRadius: "999px",
                      padding: "0.25rem",
                      gap: "0.25rem",
                      border: "1px solid rgba(96, 165, 250, 0.3)",
                      boxShadow: "0 12px 28px rgba(15, 23, 42, 0.45)",
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
                            background: isActive
                              ? "linear-gradient(135deg, #2563eb, #38bdf8)"
                              : "transparent",
                            color: isActive
                              ? "#f8fafc"
                              : "rgba(226, 232, 240, 0.78)",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            boxShadow: isActive
                              ? "0 12px 24px rgba(37, 99, 235, 0.3)"
                              : "none",
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
                      <label
                        style={{
                          fontWeight: 600,
                          color: "rgba(226, 232, 240, 0.88)",
                        }}
                      >
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
                          border: "1px solid rgba(96, 165, 250, 0.25)",
                          fontSize: "1rem",
                          color: "#e2e8f0",
                          backgroundColor: "rgba(15, 23, 42, 0.85)",
                          boxShadow: "0 8px 18px rgba(15, 23, 42, 0.35)",
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
                      <label
                        style={{
                          fontWeight: 600,
                          color: "rgba(226, 232, 240, 0.88)",
                        }}
                      >
                        Down Payment
                      </label>
                      <select
                        value={downPaymentPercent}
                        onChange={(e) => setDownPaymentPercent(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "0.8rem 1rem",
                          borderRadius: "10px",
                          border: "1px solid rgba(96, 165, 250, 0.25)",
                          fontSize: "1rem",
                          color: "#e2e8f0",
                          backgroundColor: "rgba(15, 23, 42, 0.85)",
                          appearance: "none",
                          boxShadow: "0 8px 18px rgba(15, 23, 42, 0.35)",
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
                      <label
                        style={{
                          fontWeight: 600,
                          color: "rgba(226, 232, 240, 0.88)",
                        }}
                      >
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
                          border: "1px solid rgba(56, 189, 248, 0.35)",
                          fontSize: "1rem",
                          color: "#bae6fd",
                          backgroundColor: "rgba(15, 23, 42, 0.75)",
                          fontWeight: 600,
                          boxShadow: "0 8px 18px rgba(15, 23, 42, 0.35)",
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
                      <label
                        style={{
                          fontWeight: 600,
                          color: "rgba(226, 232, 240, 0.88)",
                        }}
                      >
                        Occupancy Type
                      </label>
                      <select
                        value={occupancy}
                        onChange={(e) => setOccupancy(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "0.8rem 1rem",
                          borderRadius: "10px",
                          border: "1px solid rgba(96, 165, 250, 0.25)",
                          fontSize: "1rem",
                          color: "#e2e8f0",
                          backgroundColor: "rgba(15, 23, 42, 0.85)",
                          appearance: "none",
                          boxShadow: "0 8px 18px rgba(15, 23, 42, 0.35)",
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
                      <label
                        style={{
                          fontWeight: 600,
                          color: "rgba(226, 232, 240, 0.88)",
                        }}
                      >
                        Property Type
                      </label>
                      <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "0.8rem 1rem",
                          borderRadius: "10px",
                          border: "1px solid rgba(96, 165, 250, 0.25)",
                          fontSize: "1rem",
                          color: "#e2e8f0",
                          backgroundColor: "rgba(15, 23, 42, 0.85)",
                          appearance: "none",
                          boxShadow: "0 8px 18px rgba(15, 23, 42, 0.35)",
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
                      <label
                        style={{
                          fontWeight: 600,
                          color: "rgba(226, 232, 240, 0.88)",
                        }}
                      >
                        State
                      </label>
                      <select
                        value={stateSelection}
                        onChange={(e) => setStateSelection(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "0.8rem 1rem",
                          borderRadius: "10px",
                          border: "1px solid rgba(96, 165, 250, 0.25)",
                          fontSize: "1rem",
                          color: "#e2e8f0",
                          backgroundColor: "rgba(15, 23, 42, 0.85)",
                          appearance: "none",
                          boxShadow: "0 8px 18px rgba(15, 23, 42, 0.35)",
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
                        "linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)",
                      color: "#f8fafc",
                      border: "none",
                      borderRadius: "12px",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      boxShadow: "0 20px 34px rgba(37, 99, 235, 0.35)",
                      textShadow: "0 1px 2px rgba(15, 23, 42, 0.45)",
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
                    "linear-gradient(135deg, rgba(17, 33, 68, 0.95), rgba(21, 94, 203, 0.88))",
                  color: "#e2e8f0",
                  borderTop: "1px solid rgba(148, 163, 184, 0.18)",
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
                      color: "rgba(226, 232, 240, 0.88)",
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
                        style={{ marginTop: 2, color: "#a5f3fc" }}
                      />
                      <span
                        style={{
                          fontSize: "1rem",
                          lineHeight: 1.6,
                          color: "rgba(226, 232, 240, 0.9)",
                        }}
                      >
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
