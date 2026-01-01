import React, { useMemo, useState } from "react";
import { calculateMonthlyPayment, formatCurrency, sanitizeNumber } from "./calc";

const RateTrendsCard = () => {
  const [loanAmount, setLoanAmount] = useState("400000");
  const [baseRate, setBaseRate] = useState("6.5");
  const [delta, setDelta] = useState(0.25);

  const amountValue = sanitizeNumber(loanAmount);
  const rateValue = sanitizeNumber(baseRate);

  const basePayment = useMemo(
    () => calculateMonthlyPayment({ loanAmount: amountValue, annualRate: rateValue, termYears: 30 }),
    [amountValue, rateValue]
  );
  const newPayment = useMemo(
    () => calculateMonthlyPayment({ loanAmount: amountValue, annualRate: rateValue + delta, termYears: 30 }),
    [amountValue, rateValue, delta]
  );

  const change = newPayment - basePayment;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "10px" }}>
        <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.8rem" }}>
          Loan amount
          <input
            type="text"
            value={loanAmount}
            onChange={(event) => setLoanAmount(event.target.value)}
            style={{
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid rgba(148, 163, 184, 0.3)",
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              color: "#f8fafc",
            }}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.8rem" }}>
          Current rate
          <input
            type="text"
            value={baseRate}
            onChange={(event) => setBaseRate(event.target.value)}
            style={{
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid rgba(148, 163, 184, 0.3)",
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              color: "#f8fafc",
            }}
          />
        </label>
      </div>

      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {[-0.5, -0.25, 0.25, 0.5].map((step) => (
          <button
            key={step}
            type="button"
            onClick={() => setDelta(step)}
            style={{
              borderRadius: "999px",
              border: delta === step ? "1px solid #38bdf8" : "1px solid rgba(148, 163, 184, 0.3)",
              backgroundColor: delta === step ? "rgba(56, 189, 248, 0.2)" : "rgba(15, 23, 42, 0.6)",
              color: "#e2e8f0",
              padding: "8px 14px",
              fontSize: "0.78rem",
              cursor: "pointer",
            }}
          >
            {step > 0 ? `+${step}%` : `${step}%`}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
        {[
          { label: "Payment today", value: formatCurrency(basePayment) },
          { label: `Payment at ${rateValue + delta}%`, value: formatCurrency(newPayment) },
          { label: "Monthly change", value: formatCurrency(change) },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              padding: "12px",
              borderRadius: "12px",
              border: "1px solid rgba(148, 163, 184, 0.2)",
              backgroundColor: "rgba(15, 23, 42, 0.7)",
            }}
          >
            <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{item.label}</div>
            <div style={{ fontSize: "1rem", fontWeight: 700, color: "#f8fafc", marginTop: "4px" }}>
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", height: "70px" }}>
        {[40, 52, 46, 64, 58, 72, 62].map((height, index) => (
          <div
            key={`trend-${index}`}
            style={{
              width: "12%",
              height: `${height}px`,
              borderRadius: "8px",
              background:
                index > 4 ? "linear-gradient(180deg, #f97316, #fbbf24)" : "linear-gradient(180deg, #38bdf8, #34d399)",
            }}
          />
        ))}
      </div>
      <p style={{ fontSize: "0.78rem", color: "#64748b" }}>
        Swap the rate change to see how tiny moves impact affordability.
      </p>
    </div>
  );
};

export default RateTrendsCard;
