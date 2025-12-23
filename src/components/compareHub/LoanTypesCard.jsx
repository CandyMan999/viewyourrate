import React, { useState } from "react";

const loanTypes = [
  {
    id: "conventional",
    label: "Conventional",
    bestFor: "Strong credit, 3-20% down.",
    highlights: ["Flexible property types", "PMI drops at 20% equity", "Best rates with higher credit"],
  },
  {
    id: "fha",
    label: "FHA",
    bestFor: "Lower credit or smaller down payments.",
    highlights: ["3.5% minimum down", "Upfront + monthly MIP", "More flexible credit guidelines"],
  },
  {
    id: "va",
    label: "VA",
    bestFor: "Eligible veterans & service members.",
    highlights: ["No monthly PMI", "Competitive rates", "Funding fee applies"],
  },
  {
    id: "usda",
    label: "USDA",
    bestFor: "Rural buyers within income limits.",
    highlights: ["0% down options", "Geographic + income eligibility", "Upfront + monthly guarantee fee"],
  },
];

const LoanTypesCard = () => {
  const [activeType, setActiveType] = useState(loanTypes[0]);
  const [firstTimeBuyer, setFirstTimeBuyer] = useState(false);
  const [veteran, setVeteran] = useState(false);

  const suggestion = veteran
    ? "VA loans often offer the strongest value for eligible veterans."
    : firstTimeBuyer
    ? "FHA or low-down conventional loans are common first-time buyer paths."
    : "Conventional loans often win on long-term cost if credit is strong.";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {loanTypes.map((loan) => (
          <button
            key={loan.id}
            type="button"
            onClick={() => setActiveType(loan)}
            style={{
              borderRadius: "999px",
              border: activeType.id === loan.id ? "1px solid #38bdf8" : "1px solid rgba(148, 163, 184, 0.3)",
              backgroundColor: activeType.id === loan.id ? "rgba(56, 189, 248, 0.2)" : "rgba(15, 23, 42, 0.6)",
              color: "#e2e8f0",
              padding: "8px 14px",
              fontSize: "0.78rem",
              cursor: "pointer",
            }}
          >
            {loan.label}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button
          type="button"
          onClick={() => setFirstTimeBuyer((prev) => !prev)}
          style={{
            borderRadius: "999px",
            border: firstTimeBuyer ? "1px solid #34d399" : "1px solid rgba(148, 163, 184, 0.3)",
            backgroundColor: firstTimeBuyer ? "rgba(52, 211, 153, 0.2)" : "rgba(15, 23, 42, 0.6)",
            color: "#e2e8f0",
            padding: "8px 14px",
            fontSize: "0.78rem",
            cursor: "pointer",
          }}
        >
          First-time buyer
        </button>
        <button
          type="button"
          onClick={() => setVeteran((prev) => !prev)}
          style={{
            borderRadius: "999px",
            border: veteran ? "1px solid #f97316" : "1px solid rgba(148, 163, 184, 0.3)",
            backgroundColor: veteran ? "rgba(249, 115, 22, 0.2)" : "rgba(15, 23, 42, 0.6)",
            color: "#e2e8f0",
            padding: "8px 14px",
            fontSize: "0.78rem",
            cursor: "pointer",
          }}
        >
          Veteran
        </button>
      </div>

      <div
        style={{
          padding: "12px",
          borderRadius: "12px",
          border: "1px solid rgba(148, 163, 184, 0.2)",
          backgroundColor: "rgba(15, 23, 42, 0.7)",
        }}
      >
        <div style={{ fontWeight: 600, color: "#f8fafc", marginBottom: "6px" }}>{activeType.label}</div>
        <div style={{ color: "#94a3b8", fontSize: "0.85rem", marginBottom: "10px" }}>{activeType.bestFor}</div>
        <ul style={{ margin: 0, paddingLeft: "18px", color: "#e2e8f0", fontSize: "0.82rem", lineHeight: 1.5 }}>
          {activeType.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>{suggestion}</div>
    </div>
  );
};

export default LoanTypesCard;
