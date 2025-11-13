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
    border: "1px solid var(--border-subtle)",
    backgroundColor: "rgba(15, 23, 42, 0.6)",
    color: "var(--text-secondary)",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.15s ease",
    userSelect: "none",
    backdropFilter: "blur(8px)",
  };

  const activePill = {
    ...basePill,
    borderColor: "var(--accent)",
    backgroundColor: "rgba(56, 189, 248, 0.12)",
    boxShadow: "0 0 0 3px rgba(56, 189, 248, 0.18)",
    color: "var(--text-primary)",
  };

  const Dot = ({ active }) => (
    <span
      aria-hidden
      style={{
        width: 18,
        height: 18,
        borderRadius: "50%",
        border: `2px solid ${active ? "var(--accent)" : "rgba(148, 163, 184, 0.35)"}`,
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
          backgroundColor: active ? "var(--accent)" : "transparent",
          transition: "all 0.15s ease",
        }}
      />
    </span>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <label style={{ fontWeight: 600, color: "var(--text-primary)" }}>
        {label}
      </label>
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
    backgroundColor: "rgba(4, 8, 18, 0.75)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    zIndex: 1000,
    padding: "2rem 1rem",
    boxSizing: "border-box",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  };

  const widgetStyles = {
    width: "100%",
    maxWidth: "1100px",
    borderRadius: "28px",
    overflow: "hidden",
    boxShadow: "0 36px 80px rgba(8, 18, 35, 0.55)",
    border: "1px solid var(--border-subtle)",
    background: "var(--surface-highlight)",
  };

  const closeIconStyles = {
    position: "absolute",
    top: "18px",
    right: "18px",
    fontSize: "1.5rem",
    color: "var(--text-primary)",
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
                background: "transparent",
                color: "var(--text-primary)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  padding: "2.75rem",
                  background:
                    "linear-gradient(160deg, rgba(13, 23, 42, 0.96), rgba(6, 11, 24, 0.88))",
                  color: "var(--text-primary)",
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
                        color: "var(--text-secondary)",
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
                        fontSize: "2rem",
                        fontWeight: 800,
                        color: "var(--text-primary)",
                      }}
                    >
                      Customize Your Rate
                    </h2>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      backgroundColor: "rgba(15, 23, 42, 0.65)",
                      borderRadius: "999px",
                      padding: "0.25rem",
                      gap: "0.35rem",
                      border: "1px solid var(--border-subtle)",
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
                              ? "var(--accent)"
                              : "transparent",
                            color: isActive
                              ? "#0f172a"
                              : "var(--text-secondary)",
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
                      <label style={{ fontWeight: 600, color: "var(--text-primary)" }}>
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
                          border: "1px solid var(--border-subtle)",
                          fontSize: "1rem",
                          color: "var(--text-primary)",
                          backgroundColor: "rgba(15, 23, 42, 0.65)",
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
                      <label style={{ fontWeight: 600, color: "var(--text-primary)" }}>
                        Down Payment
                      </label>
                      <select
                        value={downPaymentPercent}
                        onChange={(e) => setDownPaymentPercent(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "0.8rem 1rem",
                          borderRadius: "10px",
                          border: "1px solid var(--border-subtle)",
                          fontSize: "1rem",
                          color: "var(--text-primary)",
                          backgroundColor: "rgba(15, 23, 42, 0.65)",
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
                      <label style={{ fontWeight: 600, color: "var(--text-primary)" }}>
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
                          border: "1px solid var(--border-subtle)",
                          fontSize: "1rem",
                          color: "var(--text-secondary)",
                          backgroundColor: "rgba(56, 189, 248, 0.08)",
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
                      <label style={{ fontWeight: 600, color: "var(--text-primary)" }}>
                        Occupancy Type
                      </label>
                      <select
                        value={occupancy}
                        onChange={(e) => setOccupancy(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "0.8rem 1rem",
                          borderRadius: "10px",
                          border: "1px solid var(--border-subtle)",
                          fontSize: "1rem",
                          color: "var(--text-primary)",
                          backgroundColor: "rgba(15, 23, 42, 0.65)",
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
                      <label style={{ fontWeight: 600, color: "var(--text-primary)" }}>
                        Property Type
                      </label>
                      <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "0.8rem 1rem",
                          borderRadius: "10px",
                          border: "1px solid var(--border-subtle)",
                          fontSize: "1rem",
                          color: "var(--text-primary)",
                          backgroundColor: "rgba(15, 23, 42, 0.65)",
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
                      <label style={{ fontWeight: 600, color: "var(--text-primary)" }}>
                        State
                      </label>
                      <select
                        value={stateSelection}
                        onChange={(e) => setStateSelection(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "0.8rem 1rem",
                          borderRadius: "10px",
                          border: "1px solid var(--border-subtle)",
                          fontSize: "1rem",
                          color: "var(--text-primary)",
                          backgroundColor: "rgba(15, 23, 42, 0.65)",
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
                      background: "var(--accent-gradient)",
                      color: "#0f172a",
                      border: "1px solid rgba(148, 163, 184, 0.2)",
                      borderRadius: "999px",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      boxShadow: "0 20px 42px rgba(56, 189, 248, 0.3)",
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
                  padding: "2.75rem",
                  background:
                    "linear-gradient(140deg, rgba(56, 189, 248, 0.35), rgba(59, 130, 246, 0.25))",
                  color: "var(--text-primary)",
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
                      color: "var(--text-primary)",
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
                        color: "var(--text-primary)",
                      }}
                    >
                      <FiCheckCircle
                        size={22}
                        style={{ marginTop: 2, color: "var(--accent)" }}
                      />
                      <span
                        style={{
                          fontSize: "1rem",
                          lineHeight: 1.6,
                          color: "var(--text-primary)",
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
