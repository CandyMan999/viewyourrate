import React, { useMemo, useState } from "react";
import { calculateMonthlyPayment, formatCurrency, sanitizeNumber } from "./calc";

const RatePointsCreditsCard = () => {
  const [loanAmount, setLoanAmount] = useState("400000");
  const [baseRate, setBaseRate] = useState("6.5");
  const [pointOption, setPointOption] = useState(0);

  const amountValue = sanitizeNumber(loanAmount);
  const rateValue = sanitizeNumber(baseRate);

  const adjustedRate = Math.max(rateValue - pointOption * 0.125, 0);
  const monthlyPayment = useMemo(
    () => calculateMonthlyPayment({ loanAmount: amountValue, annualRate: adjustedRate, termYears: 30 }),
    [amountValue, adjustedRate]
  );

  const upfrontCost = amountValue * (pointOption / 100);

  const options = [
    { label: "Credits (-1 pt)", value: -1 },
    { label: "No points", value: 0 },
    { label: "1 point", value: 1 },
    { label: "2 points", value: 2 },
  ];

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
          Base rate
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
        {options.map((option) => (
          <button
            key={option.label}
            type="button"
            onClick={() => setPointOption(option.value)}
            style={{
              borderRadius: "999px",
              border: option.value === pointOption ? "1px solid #38bdf8" : "1px solid rgba(148, 163, 184, 0.3)",
              backgroundColor: option.value === pointOption ? "rgba(56, 189, 248, 0.2)" : "rgba(15, 23, 42, 0.6)",
              color: "#e2e8f0",
              padding: "8px 14px",
              fontSize: "0.78rem",
              cursor: "pointer",
            }}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "12px",
        }}
      >
        {[
          { label: "Adjusted rate", value: `${adjustedRate.toFixed(3)}%` },
          { label: "Monthly payment", value: formatCurrency(monthlyPayment) },
          {
            label: pointOption >= 0 ? "Upfront points" : "Lender credit",
            value: formatCurrency(Math.abs(upfrontCost)),
          },
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

      <p style={{ fontSize: "0.78rem", color: "#64748b" }}>
        Example assumes 0.125% rate change per point. Real pricing varies by lender and market.
      </p>
    </div>
  );
};

export default RatePointsCreditsCard;
