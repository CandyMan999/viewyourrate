import React, { useMemo, useState } from "react";
import { calculateMonthlyPayment, formatCurrency, sanitizeNumber } from "./calc";

const ArmsCard = () => {
  const [loanAmount, setLoanAmount] = useState("400000");
  const [armTerm, setArmTerm] = useState(5);
  const [startRate, setStartRate] = useState("5.75");
  const [adjustedRate, setAdjustedRate] = useState("7.25");

  const amountValue = sanitizeNumber(loanAmount);
  const startRateValue = sanitizeNumber(startRate);
  const adjustedRateValue = sanitizeNumber(adjustedRate);

  const introPayment = useMemo(
    () => calculateMonthlyPayment({ loanAmount: amountValue, annualRate: startRateValue, termYears: 30 }),
    [amountValue, startRateValue]
  );
  const adjustedPayment = useMemo(
    () => calculateMonthlyPayment({ loanAmount: amountValue, annualRate: adjustedRateValue, termYears: 30 }),
    [amountValue, adjustedRateValue]
  );

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
          Intro rate
          <input
            type="text"
            value={startRate}
            onChange={(event) => setStartRate(event.target.value)}
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
          Adjusted rate
          <input
            type="text"
            value={adjustedRate}
            onChange={(event) => setAdjustedRate(event.target.value)}
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
        {[3, 5, 7, 10].map((term) => (
          <button
            key={term}
            type="button"
            onClick={() => setArmTerm(term)}
            style={{
              borderRadius: "999px",
              border: armTerm === term ? "1px solid #38bdf8" : "1px solid rgba(148, 163, 184, 0.3)",
              backgroundColor: armTerm === term ? "rgba(56, 189, 248, 0.2)" : "rgba(15, 23, 42, 0.6)",
              color: "#e2e8f0",
              padding: "8px 14px",
              fontSize: "0.78rem",
              cursor: "pointer",
            }}
          >
            {term}/{armTerm === 10 ? 1 : 1} ARM
          </button>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
          <span>Intro fixed period</span>
          <span style={{ color: "#38bdf8" }}>{armTerm} years</span>
        </div>
        <div style={{ display: "flex", gap: "6px" }}>
          <div style={{ flex: armTerm, height: "8px", borderRadius: "999px", background: "linear-gradient(90deg, #38bdf8, #34d399)" }} />
          <div style={{ flex: 30 - armTerm, height: "8px", borderRadius: "999px", backgroundColor: "rgba(148, 163, 184, 0.2)" }} />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
        {[
          { label: "Intro payment", value: formatCurrency(introPayment), accent: "#38bdf8" },
          { label: "Adjusted payment", value: formatCurrency(adjustedPayment), accent: "#f97316" },
          { label: "Potential change", value: formatCurrency(adjustedPayment - introPayment), accent: "#fbbf24" },
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
            <div style={{ fontSize: "1rem", fontWeight: 700, color: item.accent, marginTop: "4px" }}>
              {item.value}
            </div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: "0.78rem", color: "#64748b" }}>
        ARM payments can rise or fall after the fixed period. Use this to stress-test your comfort level.
      </p>
    </div>
  );
};

export default ArmsCard;
