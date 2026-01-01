import React, { useMemo, useState } from "react";
import { calculateMonthlyPayment, formatCurrency, sanitizeNumber } from "./calc";

const ExampleComparisonCard = () => {
  const [loanAmount, setLoanAmount] = useState("400000");
  const [termYears, setTermYears] = useState(30);
  const [interestRate, setInterestRate] = useState("6.5");

  const amountValue = sanitizeNumber(loanAmount);
  const rateValue = sanitizeNumber(interestRate);

  const monthlyPayment = useMemo(
    () => calculateMonthlyPayment({ loanAmount: amountValue, annualRate: rateValue, termYears }),
    [amountValue, rateValue, termYears]
  );

  const months = termYears * 12;
  const totalPaid = monthlyPayment * months;
  const totalInterest = totalPaid - amountValue;

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
          Rate (APR)
          <input
            type="text"
            value={interestRate}
            onChange={(event) => setInterestRate(event.target.value)}
            style={{
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid rgba(148, 163, 184, 0.3)",
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              color: "#f8fafc",
            }}
          />
        </label>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.8rem" }}>
          Term
          <div style={{ display: "flex", gap: "8px" }}>
            {[15, 20, 30].map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => setTermYears(term)}
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: "10px",
                  border: termYears === term ? "1px solid #38bdf8" : "1px solid rgba(148, 163, 184, 0.3)",
                  backgroundColor: termYears === term ? "rgba(56, 189, 248, 0.2)" : "rgba(15, 23, 42, 0.8)",
                  color: "#f8fafc",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                }}
              >
                {term} yr
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
        {[
          { label: "Estimated monthly", value: monthlyPayment, highlight: true },
          { label: "Total interest", value: totalInterest },
          { label: "Total paid", value: totalPaid },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              padding: "12px",
              borderRadius: "12px",
              backgroundColor: "rgba(15, 23, 42, 0.7)",
              border: "1px solid rgba(148, 163, 184, 0.2)",
            }}
          >
            <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{item.label}</div>
            <div
              style={{
                fontSize: item.highlight ? "1.2rem" : "1rem",
                fontWeight: 700,
                color: item.highlight ? "#38bdf8" : "#e2e8f0",
                marginTop: "4px",
              }}
            >
              {formatCurrency(item.value)}
            </div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: "0.78rem", color: "#64748b" }}>Example only. Your actual pricing depends on credit, program, and fees.</p>
    </div>
  );
};

export default ExampleComparisonCard;
