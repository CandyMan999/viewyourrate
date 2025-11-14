import React, { useMemo } from "react";
import "./MortgageOptionsPage.css";

const defaultScenario = {
  quoteType: "Purchase",
  purchasePrice: 550000,
  loanAmount: 440000,
  downPaymentPercent: 20,
  stateSelection: "CA",
  occupancy: "Primary Residence",
  propertyType: "Single Family",
  creditBand: undefined,
};

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.max(Number.isFinite(value) ? value : 0, 0));

const formatRate = (value) => `${Number(value).toFixed(3)}%`;

const calculateMonthlyPayment = (principal, ratePercent, termYears) => {
  const monthlyRate = ratePercent / 100 / 12;
  const numberOfPayments = termYears * 12;

  if (monthlyRate <= 0) {
    return principal / numberOfPayments || 0;
  }

  const payment =
    (principal * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

  return Number.isFinite(payment) ? payment : 0;
};

const getScenarioSummary = (scenario, termYears) => {
  const summaryParts = [
    scenario.quoteType === "Refinance" ? "Refinance" : "Purchase",
    `${formatCurrency(scenario.purchasePrice)} ${
      scenario.quoteType === "Refinance" ? "loan" : "purchase"
    }`,
    `${scenario.downPaymentPercent}% down`,
    `${termYears}-year fixed`,
  ];

  if (scenario.creditBand) {
    summaryParts.push(`${scenario.creditBand} credit`);
  }

  summaryParts.push(scenario.stateSelection);

  return `🏠 ${summaryParts.join(" • ")}`;
};

const OPTION_CONTENT = {
  CREDIT: {
    label: "Lower Upfront Cost (Lender Credit)",
    subtitle: "Higher rate, minimal cash to close",
    description:
      "Higher rate but lower money due at closing. Good if you want to keep more cash on hand.",
  },
  PAR: {
    label: "Balanced Option (No Points)",
    subtitle: "Straightforward pricing with no points",
    description:
      "No points and no lender credit. A straightforward, middle-of-the-road option.",
  },
  BUYDOWN: {
    label: "Lower Monthly Payment (Rate Buydown)",
    subtitle: "Pay points to reduce the rate",
    description:
      "Pay points upfront to lower your monthly payment and total interest over time.",
  },
};

const generateMortgageOptions = (scenario) => {
  const sanitizedScenario = {
    ...defaultScenario,
    ...scenario,
  };

  const termYears = 30;
  const baseRate =
    6.25 +
    (sanitizedScenario.loanAmount > 600000
      ? 0.125
      : sanitizedScenario.loanAmount < 300000
      ? -0.125
      : 0);

  const downPaymentAmount =
    sanitizedScenario.quoteType === "Purchase"
      ? sanitizedScenario.purchasePrice *
        (sanitizedScenario.downPaymentPercent / 100)
      : 0;

  const estimatedClosingCosts = sanitizedScenario.loanAmount * 0.02;

  const buildOption = (kind, rateOffset, points) => {
    const rate = baseRate + rateOffset;
    const apr = rate + (kind === "BUYDOWN" ? 0.09 : kind === "CREDIT" ? 0.16 : 0.12);
    const monthlyPayment = calculateMonthlyPayment(
      sanitizedScenario.loanAmount,
      rate,
      termYears
    );
    const pointsValue = sanitizedScenario.loanAmount * (points / 100);
    const cashToClose = Math.max(
      downPaymentAmount + estimatedClosingCosts + pointsValue,
      0
    );

    return {
      id: `${kind}-${rate.toFixed(3)}`,
      kind,
      label: OPTION_CONTENT[kind].label,
      subtitle: OPTION_CONTENT[kind].subtitle,
      description: OPTION_CONTENT[kind].description,
      rate: Number(rate.toFixed(3)),
      apr: Number(apr.toFixed(3)),
      points,
      monthlyPayment,
      cashToClose,
      termYears,
      pointsValue,
    };
  };

  return [
    buildOption("CREDIT", 0.375, -1),
    buildOption("PAR", 0, 0),
    buildOption("BUYDOWN", -0.25, 1),
  ];
};

const MortgageOptionsPage = ({ scenario, onEditScenario }) => {
  const sanitizedScenario = useMemo(() => {
    const merged = { ...defaultScenario, ...(scenario || {}) };

    return {
      ...merged,
      quoteType: merged.quoteType === "Refinance" ? "Refinance" : "Purchase",
      purchasePrice: Number.isFinite(Number(merged.purchasePrice))
        ? Number(merged.purchasePrice)
        : defaultScenario.purchasePrice,
      loanAmount: Number.isFinite(Number(merged.loanAmount))
        ? Number(merged.loanAmount)
        : Math.round(
            Number(merged.purchasePrice || defaultScenario.purchasePrice) *
              (1 - (Number(merged.downPaymentPercent || 0) / 100))
          ),
      downPaymentPercent: Number.isFinite(Number(merged.downPaymentPercent))
        ? Number(merged.downPaymentPercent)
        : defaultScenario.downPaymentPercent,
      stateSelection: merged.stateSelection || defaultScenario.stateSelection,
      occupancy: merged.occupancy || defaultScenario.occupancy,
      propertyType: merged.propertyType || defaultScenario.propertyType,
      creditBand: merged.creditBand || defaultScenario.creditBand,
    };
  }, [scenario]);

  const options = useMemo(
    () => generateMortgageOptions(sanitizedScenario),
    [sanitizedScenario]
  );

  const summary = useMemo(
    () => getScenarioSummary(sanitizedScenario, options[0]?.termYears || 30),
    [options, sanitizedScenario]
  );

  const renderPointsSummary = (option) => {
    const absolutePoints = Math.abs(option.points).toFixed(2);
    const dollarAmount = formatCurrency(Math.abs(option.pointsValue));

    if (option.points > 0) {
      return `Approx. ${absolutePoints} points (≈ ${dollarAmount} cost)`;
    }

    if (option.points < 0) {
      return `Approx. ${absolutePoints} points in lender credits (≈ ${dollarAmount} credit)`;
    }

    return "No points or credits";
  };

  return (
    <div className="mortgage-options-page">
      <header className="options-summary-bar">
        <div>
          <p className="scenario-summary-text">{summary}</p>
          <p className="scenario-subtext">
            {sanitizedScenario.occupancy} • {sanitizedScenario.propertyType}
          </p>
        </div>
        {onEditScenario && (
          <button className="edit-scenario-button" onClick={onEditScenario}>
            Edit my scenario
          </button>
        )}
      </header>

      <main className="options-main">
        <section className="options-hero">
          <h1>Here are your three loan options</h1>
          <p>
            We built these from your scenario so you can compare how rate, upfront costs,
            and monthly payment change. Pick the one that fits your goals.
          </p>
        </section>

        <section className="options-grid">
          {options.map((option) => (
            <article className={`option-card option-${option.kind.toLowerCase()}`} key={option.id}>
              <div className="option-pill">{OPTION_CONTENT[option.kind].label}</div>
              <p className="option-subtitle">{OPTION_CONTENT[option.kind].subtitle}</p>
              <div className="option-rate-block">
                <div className="option-rate">{formatRate(option.rate)}</div>
                <div className="option-apr">APR {formatRate(option.apr)}</div>
              </div>

              <div className="option-metric">
                <span className="metric-label">Estimated Payment</span>
                <span className="metric-value">{`${formatCurrency(
                  Math.round(option.monthlyPayment)
                )} / month`}</span>
                <span className="metric-hint">Principal &amp; interest only</span>
              </div>

              <div className="option-metric">
                <span className="metric-label">Points / Credits</span>
                <span className="metric-value">{renderPointsSummary(option)}</span>
              </div>

              <div className="option-metric">
                <span className="metric-label">Estimated cash to close</span>
                <span className="metric-value">{formatCurrency(option.cashToClose)}</span>
              </div>

              <p className="option-description">{OPTION_CONTENT[option.kind].description}</p>

              <div className="option-actions">
                <button className="option-primary-button">Select this option</button>
                <button className="option-secondary-button" type="button">
                  View fee breakdown
                </button>
              </div>
            </article>
          ))}
        </section>

        <section className="options-footer-note">
          <p>
            Rates and payments shown are estimates for illustration only and are based on the
            scenario you entered. Actual pricing may vary and is subject to change without
            notice. No hard credit check is performed until you complete a full application.
          </p>
        </section>
      </main>
    </div>
  );
};

export default MortgageOptionsPage;
