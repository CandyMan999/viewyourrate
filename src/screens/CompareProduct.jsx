import React, { useMemo, useState } from "react";
import MortgageOptionsPage from "../../client/app/components/mortgageResults/MortgageOptionsPage";
import PurchaseOptionsPage from "../../client/app/components/purchaseResults/PurchaseOptionsPage";
import ExplainPill from "../../client/app/components/pricingWidget/ExplainPill";

const containerStyle = {
  padding: "24px 12px 48px",
  backgroundColor: "#0f1115",
  minHeight: "100vh",
};

const cardStyle = {
  background: "linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(10, 15, 26, 0.95) 100%)",
  border: "1px solid rgba(148, 163, 184, 0.12)",
  borderRadius: "18px",
  padding: "20px",
  boxShadow: "0 18px 30px rgba(2, 6, 23, 0.45)",
};

const cardTitleStyle = {
  fontSize: "1.05rem",
  fontWeight: 600,
  color: "#f8fafc",
  marginBottom: "8px",
};

const mutedTextStyle = {
  color: "#94a3b8",
  fontSize: "0.9rem",
  lineHeight: 1.5,
};

const sectionTitleStyle = {
  fontSize: "2rem",
  fontWeight: 700,
  color: "#f8fafc",
  margin: 0,
};

const CompareProduct = ({
  scenario,
  quoteMode,
  pricingState,
  onRetryPricing,
  onEdit,
  onReset,
  onSelectOption,
  onStartPurchase,
  onStartRefinance,
}) => {
  const [loanAmount, setLoanAmount] = useState("400000");
  const [termYears, setTermYears] = useState(30);
  const [interestRate, setInterestRate] = useState("6.5");
  const [stepIndex, setStepIndex] = useState(0);

  const parsedLoanAmount = useMemo(() => {
    const numeric = Number(String(loanAmount).replace(/[^0-9.]/g, ""));
    return Number.isFinite(numeric) && numeric > 0 ? numeric : 0;
  }, [loanAmount]);

  const parsedRate = useMemo(() => {
    const numeric = Number(String(interestRate).replace(/[^0-9.]/g, ""));
    return Number.isFinite(numeric) && numeric >= 0 ? numeric : 0;
  }, [interestRate]);

  const months = termYears * 12;
  const monthlyPayment = useMemo(() => {
    if (!months || parsedLoanAmount === 0) return 0;
    const monthlyRate = parsedRate / 100 / 12;
    if (monthlyRate === 0) {
      return parsedLoanAmount / months;
    }
    const factor = Math.pow(1 + monthlyRate, months);
    return (parsedLoanAmount * monthlyRate * factor) / (factor - 1);
  }, [months, parsedLoanAmount, parsedRate]);

  const totalPaid = monthlyPayment * months;
  const totalInterest = totalPaid - parsedLoanAmount;

  const steps = [
    {
      id: "payment-vs-time",
      kicker: "Payment vs time",
      title: "30-Year vs 15-Year Fixed",
      description:
        "30-year loans keep monthly payments lower. 15-year loans build equity faster and reduce total interest dramatically.",
      aiPrompt: "Why would someone pick a 15-year fixed mortgage over a 30-year?",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "0.8rem" }}>Monthly payment</span>
              <span style={{ fontSize: "0.8rem", color: "#38bdf8" }}>Higher on 15Y</span>
            </div>
            <div style={{ backgroundColor: "rgba(148, 163, 184, 0.2)", height: "8px", borderRadius: "999px" }}>
              <div
                style={{
                  width: "70%",
                  height: "100%",
                  borderRadius: "999px",
                  background: "linear-gradient(90deg, #38bdf8, #34d399)",
                }}
              />
            </div>
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "0.8rem" }}>Total interest</span>
              <span style={{ fontSize: "0.8rem", color: "#fbbf24" }}>Higher on 30Y</span>
            </div>
            <div style={{ backgroundColor: "rgba(148, 163, 184, 0.2)", height: "8px", borderRadius: "999px" }}>
              <div
                style={{
                  width: "85%",
                  height: "100%",
                  borderRadius: "999px",
                  background: "linear-gradient(90deg, #fbbf24, #f97316)",
                }}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "rate-points-credits",
      kicker: "Rate sensitivities",
      title: "Rate, Points & Credits",
      description:
        "Points lower your rate by paying upfront. Credits do the opposite: you take a higher rate in exchange for lender money.",
      aiPrompt: "Explain how points and lender credits change APR and monthly payment.",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            { label: "Rate", value: "Lower", width: "35%", color: "#38bdf8" },
            { label: "Points", value: "Upfront", width: "60%", color: "#a78bfa" },
            { label: "Credits", value: "Lender help", width: "45%", color: "#34d399" },
          ].map((item) => (
            <div key={item.label}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
                <span>{item.label}</span>
                <span style={{ color: item.color }}>{item.value}</span>
              </div>
              <div style={{ backgroundColor: "rgba(148, 163, 184, 0.2)", height: "8px", borderRadius: "999px" }}>
                <div style={{ width: item.width, height: "100%", borderRadius: "999px", background: item.color }} />
              </div>
            </div>
          ))}
          <button
            type="button"
            style={{
              borderRadius: "10px",
              border: "1px solid rgba(148, 163, 184, 0.3)",
              backgroundColor: "rgba(15, 23, 42, 0.6)",
              color: "#e2e8f0",
              padding: "8px 12px",
              fontSize: "0.85rem",
              cursor: "pointer",
            }}
          >
            See a $1,000 points example
          </button>
        </div>
      ),
    },
    {
      id: "loan-types",
      kicker: "Loan type 101",
      title: "Conventional vs FHA vs VA vs USDA",
      description:
        "Loan types differ by eligibility, insurance, and upfront costs. This quick grid highlights who each fits best.",
      aiPrompt: "Which loan type fits a first-time homebuyer and why?",
      content: (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "12px",
            fontSize: "0.82rem",
          }}
        >
          {[
            { label: "Conventional", detail: "Flexible credit, PMI with <20% down" },
            { label: "FHA", detail: "Lower credit, upfront + monthly MIP" },
            { label: "VA", detail: "Eligible veterans, no PMI" },
            { label: "USDA", detail: "Rural areas, income limits" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                padding: "10px",
                borderRadius: "12px",
                backgroundColor: "rgba(15, 23, 42, 0.7)",
                border: "1px solid rgba(148, 163, 184, 0.12)",
              }}
            >
              <div style={{ fontWeight: 600, color: "#f8fafc", marginBottom: "6px" }}>
                {item.label}
              </div>
              <div style={{ color: "#94a3b8", lineHeight: 1.4 }}>{item.detail}</div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "arms",
      kicker: "Adjustable rate basics",
      title: "Fixed vs ARM",
      description:
        "ARMs offer a lower initial rate, then adjust later. They work well if you plan to sell or refinance before the adjustment period ends.",
      aiPrompt: "Explain when an adjustable-rate mortgage makes sense.",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {["Intro fixed", "Adjustment window", "Long-term"].map((stage, index) => (
            <div
              key={stage}
              style={{
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: index === 0 ? "rgba(56, 189, 248, 0.2)" : "rgba(148, 163, 184, 0.12)",
                border: "1px solid rgba(148, 163, 184, 0.14)",
                fontSize: "0.82rem",
              }}
            >
              {stage}
            </div>
          ))}
          <div style={{ marginTop: "4px", display: "flex", gap: "8px" }}>
            {["3/1 ARM", "5/1 ARM", "7/1 ARM"].map((label) => (
              <span
                key={label}
                style={{
                  fontSize: "0.75rem",
                  borderRadius: "999px",
                  padding: "6px 10px",
                  border: "1px solid rgba(148, 163, 184, 0.3)",
                  backgroundColor: "rgba(15, 23, 42, 0.6)",
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "rate-trends",
      kicker: "Rate context",
      title: "Rate Trends & Impact",
      description:
        "Instead of raw tables, track direction. A 0.25% rate change can shift payment by roughly $60 per $400k loan.",
      aiPrompt: "Explain how small rate changes affect monthly payment.",
      content: (
        <div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", height: "70px" }}>
            {[40, 52, 46, 64, 58, 72, 62].map((height, index) => (
              <div
                key={`trend-${index}`}
                style={{
                  width: "12%",
                  height: `${height}px`,
                  borderRadius: "8px",
                  background:
                    index > 4
                      ? "linear-gradient(180deg, #f97316, #fbbf24)"
                      : "linear-gradient(180deg, #38bdf8, #34d399)",
                }}
              />
            ))}
          </div>
          <ul style={{ marginTop: "12px", paddingLeft: "18px", color: "#94a3b8" }}>
            <li>Rates moved up this month after inflation data cooled.</li>
            <li>Even small changes can shift affordability fast.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "example-comparison",
      kicker: "Example comparison",
      title: "Payment Sandbox (Not Personalized)",
      description:
        "Try a quick sandbox to see how term length and rates affect monthly payments. This is just example math.",
      aiPrompt: "Explain how term length and rate impact payment and total interest.",
      content: (
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
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
                {[15, 30].map((term) => (
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
                    }}
                  >
                    {term} year
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "16px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "12px",
            }}
          >
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
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  }).format(Number.isFinite(item.value) ? item.value : 0)}
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  const currentStep = steps[stepIndex];
  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === steps.length - 1;

  if (scenario) {
    const content =
      quoteMode === "Purchase" ? (
        <PurchaseOptionsPage
          scenario={scenario}
          pricing={pricingState.data}
          pricingStatus={pricingState.status}
          pricingError={pricingState.error}
          onRetryPricing={onRetryPricing}
          onEdit={onEdit}
          onReset={onReset}
          onSelectOption={onSelectOption}
        />
      ) : (
        <MortgageOptionsPage
          scenario={scenario}
          pricing={pricingState.data}
          pricingStatus={pricingState.status}
          pricingError={pricingState.error}
          onRetryPricing={onRetryPricing}
          onEdit={onEdit}
          onFixLtv={onEdit}
          onReset={onReset}
          onSelectOption={onSelectOption}
        />
      );

    return <div style={containerStyle}>{content}</div>;
  }

  return (
    <div style={containerStyle}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          color: "#e2e8f0",
        }}
      >
        <header style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ color: "#38bdf8", fontWeight: 600, margin: 0 }}>
            Learn & Compare Loans
          </p>
          <h1 style={sectionTitleStyle}>Understand Loan Options</h1>
          <p style={{ ...mutedTextStyle, maxWidth: "720px" }}>
            Explore how mortgage products stack up before you jump into personalized pricing.
            Each step focuses on one learning objective with a plain-English explanation.
          </p>
        </header>

        <section style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setStepIndex(index)}
                  aria-label={`Go to ${step.title}`}
                  style={{
                    width: "28px",
                    height: "6px",
                    borderRadius: "999px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: index === stepIndex ? "#38bdf8" : "rgba(148, 163, 184, 0.3)",
                  }}
                />
              ))}
            </div>
            <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
              Step {stepIndex + 1} of {steps.length}
            </span>
          </div>
          <div style={cardStyle}>
            <p style={{ color: "#38bdf8", fontWeight: 600, margin: 0, textTransform: "uppercase", fontSize: "0.75rem" }}>
              {currentStep.kicker}
            </p>
            <div style={cardTitleStyle}>{currentStep.title}</div>
            <p style={mutedTextStyle}>{currentStep.description}</p>
            {currentStep.content}
            <div style={{ marginTop: "16px" }}>
              <ExplainPill prompt={currentStep.aiPrompt} context="Compare Products Hub" />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={() => setStepIndex((prev) => Math.max(prev - 1, 0))}
              disabled={isFirstStep}
              style={{
                borderRadius: "999px",
                border: "1px solid rgba(148, 163, 184, 0.4)",
                backgroundColor: "transparent",
                color: isFirstStep ? "rgba(148, 163, 184, 0.4)" : "#e2e8f0",
                padding: "10px 18px",
                fontWeight: 600,
                cursor: isFirstStep ? "not-allowed" : "pointer",
              }}
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStepIndex((prev) => Math.min(prev + 1, steps.length - 1))}
              disabled={isLastStep}
              style={{
                borderRadius: "999px",
                border: "1px solid #38bdf8",
                backgroundColor: isLastStep ? "rgba(56, 189, 248, 0.2)" : "#0ea5e9",
                color: "#0f172a",
                padding: "10px 18px",
                fontWeight: 700,
                cursor: isLastStep ? "not-allowed" : "pointer",
              }}
            >
              Next
            </button>
          </div>
          {isLastStep && (
            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 20px",
                borderRadius: "16px",
                border: "1px solid rgba(148, 163, 184, 0.15)",
                backgroundColor: "rgba(15, 23, 42, 0.6)",
              }}
            >
              <div>
                <div style={{ fontWeight: 600, color: "#f8fafc" }}>Ready for personalized pricing?</div>
                <div style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                  Start a scenario to see live options sorted by payment.
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <button
                  type="button"
                  onClick={onStartPurchase}
                  style={{
                    borderRadius: "999px",
                    border: "1px solid #38bdf8",
                    backgroundColor: "#0ea5e9",
                    color: "#0f172a",
                    padding: "10px 18px",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Start Purchase Scenario
                </button>
                <button
                  type="button"
                  onClick={onStartRefinance}
                  style={{
                    borderRadius: "999px",
                    border: "1px solid rgba(148, 163, 184, 0.4)",
                    backgroundColor: "transparent",
                    color: "#e2e8f0",
                    padding: "10px 18px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Start Refi Scenario
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default CompareProduct;
