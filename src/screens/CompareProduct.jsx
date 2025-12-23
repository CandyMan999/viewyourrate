import React, { useState } from "react";
import MortgageOptionsPage from "../../client/app/components/mortgageResults/MortgageOptionsPage";
import PurchaseOptionsPage from "../../client/app/components/purchaseResults/PurchaseOptionsPage";
import ExplainPill from "../../client/app/components/pricingWidget/ExplainPill";
import {
  ArmsCard,
  ExampleComparisonCard,
  LoanTypesCard,
  PaymentVsTimeCard,
  RatePointsCreditsCard,
  RateTrendsCard,
} from "../components/compareHub";

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
  const [stepIndex, setStepIndex] = useState(0);

  const steps = [
    {
      id: "payment-vs-time",
      kicker: "Payment vs time",
      title: "30-Year vs 15-Year Fixed",
      description:
        "30-year loans keep monthly payments lower. 15-year loans build equity faster and reduce total interest dramatically.",
      aiPrompt: "Why would someone pick a 15-year fixed mortgage over a 30-year?",
      content: <PaymentVsTimeCard />,
    },
    {
      id: "rate-points-credits",
      kicker: "Rate sensitivities",
      title: "Rate, Points & Credits",
      description:
        "Points lower your rate by paying upfront. Credits do the opposite: you take a higher rate in exchange for lender money.",
      aiPrompt: "Explain how points and lender credits change APR and monthly payment.",
      content: <RatePointsCreditsCard />,
    },
    {
      id: "loan-types",
      kicker: "Loan type 101",
      title: "Conventional vs FHA vs VA vs USDA",
      description:
        "Loan types differ by eligibility, insurance, and upfront costs. This quick grid highlights who each fits best.",
      aiPrompt: "Which loan type fits a first-time homebuyer and why?",
      content: <LoanTypesCard />,
    },
    {
      id: "arms",
      kicker: "Adjustable rate basics",
      title: "Fixed vs ARM",
      description:
        "ARMs offer a lower initial rate, then adjust later. They work well if you plan to sell or refinance before the adjustment period ends.",
      aiPrompt: "Explain when an adjustable-rate mortgage makes sense.",
      content: <ArmsCard />,
    },
    {
      id: "rate-trends",
      kicker: "Rate context",
      title: "Rate Trends & Impact",
      description:
        "Instead of raw tables, track direction. A 0.25% rate change can shift payment by roughly $60 per $400k loan.",
      aiPrompt: "Explain how small rate changes affect monthly payment.",
      content: <RateTrendsCard />,
    },
    {
      id: "example-comparison",
      kicker: "Example comparison",
      title: "Payment Sandbox (Not Personalized)",
      description:
        "Try a quick sandbox to see how term length and rates affect monthly payments. This is just example math.",
      aiPrompt: "Explain how term length and rate impact payment and total interest.",
      content: <ExampleComparisonCard />,
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
