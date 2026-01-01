import React, { useMemo, useState } from "react";
import { calculateMonthlyPayment, formatCurrency, sanitizeNumber } from "./calc";

const cardBodyStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "14px",
};

const labelStyle = {
  fontSize: "0.8rem",
  color: "#94a3b8",
};

const PaymentVsTimeCard = () => {
  const [loanAmount, setLoanAmount] = useState("400000");
  const [rate, setRate] = useState("6.5");
  const [focus, setFocus] = useState("payment");

  const amountValue = sanitizeNumber(loanAmount);
  const rateValue = sanitizeNumber(rate);

  const payment15 = useMemo(
    () => calculateMonthlyPayment({ loanAmount: amountValue, annualRate: rateValue, termYears: 15 }),
    [amountValue, rateValue]
  );
  const payment30 = useMemo(
    () => calculateMonthlyPayment({ loanAmount: amountValue, annualRate: rateValue, termYears: 30 }),
    [amountValue, rateValue]
  );

  const totalPaid15 = payment15 * 15 * 12;
  const totalPaid30 = payment30 * 30 * 12;
  const interest15 = totalPaid15 - amountValue;
  const interest30 = totalPaid30 - amountValue;

  const highlightPayment = focus === "payment";
  const highlightInterest = focus === "interest";

  return (
    <div style={cardBodyStyle}>
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
            value={rate}
            onChange={(event) => setRate(event.target.value)}
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

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {[
          { label: "Highlight monthly", value: "payment" },
          { label: "Highlight total interest", value: "interest" },
        ].map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setFocus(option.value)}
            style={{
              borderRadius: "999px",
              border: option.value === focus ? "1px solid #38bdf8" : "1px solid rgba(148, 163, 184, 0.3)",
              backgroundColor: option.value === focus ? "rgba(56, 189, 248, 0.2)" : "rgba(15, 23, 42, 0.6)",
              color: "#e2e8f0",
              padding: "8px 14px",
              fontSize: "0.8rem",
              cursor: "pointer",
            }}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
        {[
          {
            term: "15-year",
            payment: payment15,
            interest: interest15,
            accent: "#38bdf8",
          },
          {
            term: "30-year",
            payment: payment30,
            interest: interest30,
            accent: "#f97316",
          },
        ].map((item) => (
          <div
            key={item.term}
            style={{
              padding: "12px",
              borderRadius: "12px",
              border: "1px solid rgba(148, 163, 184, 0.2)",
              backgroundColor: "rgba(15, 23, 42, 0.7)",
            }}
          >
            <div style={{ fontWeight: 600, color: "#f8fafc", marginBottom: "6px" }}>{item.term}</div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={labelStyle}>Monthly payment</span>
              <span style={{ color: highlightPayment ? item.accent : "#e2e8f0", fontWeight: 600 }}>
                {formatCurrency(item.payment)}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
              <span style={labelStyle}>Total interest</span>
              <span style={{ color: highlightInterest ? item.accent : "#e2e8f0", fontWeight: 600 }}>
                {formatCurrency(item.interest)}
              </span>
            </div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: "0.78rem", color: "#64748b" }}>
        Example math uses your inputs to compare 15- vs 30-year fixed payments.
      </p>
    </div>
  );
};

export default PaymentVsTimeCard;
