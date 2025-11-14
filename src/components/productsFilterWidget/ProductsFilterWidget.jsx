import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { FiLoader } from "react-icons/fi";
import Context from "../../context";

const widgetStyles = `
  .find-products-widget {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 12px 36px;
  }

  .products-filter-card {
    width: min(860px, 100%);
    background-color: rgba(255, 255, 255, 0.96);
    border-radius: 16px;
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.16);
    padding: 24px clamp(20px, 4vw, 32px);
    display: flex;
    flex-direction: column;
    gap: 20px;
    backdrop-filter: blur(6px);
  }

  .products-filter-header {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .products-filter-title {
    font-size: 1.6rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0;
  }

  .products-filter-subtitle {
    font-size: 0.9rem;
    color: #475569;
    line-height: 1.4;
    max-width: 540px;
    margin: 0;
  }

  .products-filter-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    gap: 12px 16px;
  }

  .form-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .form-label {
    font-size: 0.82rem;
    font-weight: 600;
    color: #1e293b;
  }

  .form-select,
  .form-input {
    border: 1px solid rgba(148, 163, 184, 0.6);
    border-radius: 10px;
    padding: 10px 12px;
    font-size: 0.92rem;
    background: #f8fafc;
    color: #0f172a;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .form-select:focus,
  .form-input:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.16);
    background-color: #fff;
  }

  .form-input::placeholder {
    color: #94a3b8;
  }

  .section-caption {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #64748b;
    margin: 4px 0 2px;
  }

  .down-payment-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .percentage-input {
    position: relative;
  }

  .percentage-input .form-input {
    padding-right: 40px;
  }

  .percentage-suffix {
    position: absolute;
    inset-inline-end: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-weight: 600;
    color: #475569;
  }

  .down-payment-slider {
    width: 100%;
    accent-color: #2563eb;
  }

  .down-payment-display {
    display: flex;
    justify-content: space-between;
    font-size: 0.78rem;
    color: #475569;
  }

  .advanced-toggle {
    align-self: flex-start;
    background: none;
    border: none;
    color: #2563eb;
    font-weight: 600;
    font-size: 0.88rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 0;
  }

  .advanced-toggle:hover {
    color: #1d4ed8;
  }

  .advanced-content {
    border-top: 1px solid rgba(148, 163, 184, 0.25);
    padding-top: 14px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .refinance-panel {
    border-top: 1px solid rgba(148, 163, 184, 0.25);
    padding-top: 14px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .products-filter-footer {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(148, 163, 184, 0.25);
    padding-top: 16px;
  }

  .estimated-metrics {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 20px;
  }

  .estimated-metric {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 140px;
  }

  .metric-label {
    font-size: 0.75rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #64748b;
  }

  .metric-value {
    font-size: 1rem;
    font-weight: 700;
    color: #1e293b;
  }

  .loan-amount-highlight {
    color: #2563eb;
  }

  .find-products-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    color: #fff;
    font-weight: 600;
    padding: 12px 20px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-size: 0.95rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .find-products-button:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 22px rgba(37, 99, 235, 0.22);
  }

  .find-products-button:disabled {
    opacity: 0.65;
    cursor: not-allowed;
    box-shadow: none;
  }

  .loader-icon {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    .find-products-widget {
      padding: 16px 12px 32px;
    }

    .products-filter-card {
      padding: 20px 18px;
      border-radius: 14px;
    }

    .products-filter-title {
      font-size: 1.45rem;
    }

    .form-grid {
      grid-template-columns: 1fr;
    }
  }
`;

const initialFormState = {
  loanType: "Purchase",
  loanProgram: "Conventional",
  rateStructure: "Fixed rate",
  armTerm: "5/6 ARM",
  loanTerm: "30",
  purchasePrice: "450000",
  downPaymentPercent: "20",
  propertyType: "Single-family residence",
  propertyUnits: "Single unit",
  occupancy: "Primary residence",
  stateSelection: "Texas",
  propertyZip: "75201",
  closingTimeline: "30 days",
  creditScore: "760",
  firstTimeBuyer: "No",
  veteranStatus: "No",
  refinanceGoal: "Lower my rate",
  existingLoanBalance: "360000",
  cashOutAmount: "0",
};

const loanTerms = ["30", "20", "15", "10", "7"];

const propertyTypes = [
  "Single-family residence",
  "Condominium",
  "Townhome",
  "Multi-family (2-4 units)",
  "Manufactured home",
  "New construction",
];

const propertyUnitsOptions = ["Single unit", "2 units", "3 units", "4 units"];

const occupancyOptions = [
  "Primary residence",
  "Second home",
  "Investment property",
];

const loanProgramOptions = [
  "Conventional",
  "FHA",
  "VA",
  "USDA",
  "Jumbo",
  "Non-QM",
];

const rateStructureOptions = ["Fixed rate", "Adjustable rate (ARM)"];

const armTermOptions = ["5/6 ARM", "7/6 ARM", "10/6 ARM"];

const closingTimelineOptions = [
  "As soon as possible",
  "30 days",
  "45 days",
  "60 days",
  "90+ days",
];

const refinanceGoals = [
  "Lower my rate",
  "Cash-out refinance",
  "Shorten my term",
  "Remove FHA mortgage insurance",
];

const firstTimeBuyerOptions = ["No", "Yes"];

const veteranStatusOptions = ["No", "Yes"];

const creditScoreOptions = [
  { label: "780+ (Exceptional)", value: "780" },
  { label: "760-779 (Excellent)", value: "765" },
  { label: "720-759 (Great)", value: "735" },
  { label: "680-719 (Good)", value: "700" },
  { label: "640-679 (Fair)", value: "660" },
  { label: "620-639 (OK)", value: "625" },
];

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const ProductsFilterWidget = () => {
  const { dispatch } = useContext(Context);
  const [formState, setFormState] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const isMountedRef = useRef(true);
  const submitTimeoutRef = useRef(null);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current);
        submitTimeoutRef.current = null;
      }
    };
  }, []);

  const purchasePriceValue = useMemo(() => {
    const numeric = Number(formState.purchasePrice);
    return Number.isFinite(numeric) ? numeric : 0;
  }, [formState.purchasePrice]);

  const downPaymentPercentValue = useMemo(() => {
    const numeric = Number(formState.downPaymentPercent);
    if (!Number.isFinite(numeric)) {
      return 0;
    }
    return clamp(numeric, 0, 80);
  }, [formState.downPaymentPercent]);

  const downPaymentAmount = useMemo(() => {
    if (purchasePriceValue <= 0) {
      return 0;
    }
    const calculated = (purchasePriceValue * downPaymentPercentValue) / 100;
    return Math.min(purchasePriceValue, calculated);
  }, [purchasePriceValue, downPaymentPercentValue]);

  const estimatedLoanAmount = useMemo(() => {
    if (purchasePriceValue <= 0) {
      return 0;
    }
    return Math.max(purchasePriceValue - downPaymentAmount, 0);
  }, [purchasePriceValue, downPaymentAmount]);

  const formattedDownPaymentPercent = useMemo(() => {
    if (!Number.isFinite(downPaymentPercentValue)) {
      return "0";
    }
    const fixed = downPaymentPercentValue.toFixed(1);
    return fixed.endsWith(".0") ? fixed.slice(0, -2) : fixed;
  }, [downPaymentPercentValue]);

  const handleDownPaymentSliderChange = (event) => {
    const numeric = clamp(Number(event.target.value) || 0, 0, 80);
    setFormState((prev) => ({
      ...prev,
      downPaymentPercent: numeric.toString(),
    }));
  };

  const handleFieldChange = (event) => {
    const { name, value, type, checked } = event.target;
    let nextValue = type === "checkbox" ? checked : value;

    if (name === "downPaymentPercent") {
      if (nextValue === "") {
        setFormState((prev) => ({ ...prev, [name]: "" }));
        return;
      }
      const numeric = Number(nextValue);
      if (!Number.isFinite(numeric)) {
        return;
      }
      nextValue = clamp(numeric, 0, 80).toString();
    }

    if (
      name === "purchasePrice" ||
      name === "existingLoanBalance" ||
      name === "cashOutAmount"
    ) {
      const sanitized =
        nextValue === "" ? "" : nextValue.toString().replace(/[^\d.]/g, "");
      nextValue = sanitized;
    }

    setFormState((prev) => ({
      ...prev,
      [name]: nextValue,
    }));
  };

  const handleZipChange = (event) => {
    const { value } = event.target;
    const sanitized = value.replace(/\D/g, "").slice(0, 5);
    setFormState((prev) => ({
      ...prev,
      propertyZip: sanitized,
    }));
  };

  const isRefinance = formState.loanType === "Refinance";
  const isArm = formState.rateStructure === "Adjustable rate (ARM)";

  const toggleAdvanced = () => {
    setShowAdvanced((prev) => !prev);
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    if (isSubmitting) return;

    setIsSubmitting(true);

    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const purchasePrice = Number(formState.purchasePrice) || 0;
    const sanitizedPercent = clamp(
      Number(formState.downPaymentPercent) || 0,
      0,
      80
    );
    const downPayment = Math.min(
      purchasePrice,
      (purchasePrice * sanitizedPercent) / 100
    );

    const scenarioPayload = {
      quoteType: formState.loanType,
      purchasePrice,
      downPayment,
      downPaymentPercent: sanitizedPercent,
      termYears: Number(formState.loanTerm) || 30,
      loanProgram: formState.loanProgram,
      rateStructure: formState.rateStructure,
      armTerm: isArm ? formState.armTerm : null,
      propertyType: formState.propertyType,
      propertyUnits: formState.propertyUnits,
      occupancy: formState.occupancy,
      stateSelection: formState.stateSelection,
      propertyZip: formState.propertyZip,
      closingTimeline: formState.closingTimeline,
      creditScore: Number(formState.creditScore) || 760,
      firstTimeBuyer: formState.firstTimeBuyer === "Yes",
      veteranStatus: formState.veteranStatus,
      refinanceGoal: isRefinance ? formState.refinanceGoal : null,
      existingLoanBalance: isRefinance
        ? Number(formState.existingLoanBalance) || 0
        : null,
      cashOutAmount: isRefinance ? Number(formState.cashOutAmount) || 0 : 0,
      estimatedLoanAmount,
      timestamp: new Date().toISOString(),
    };

    if (submitTimeoutRef.current) {
      clearTimeout(submitTimeoutRef.current);
    }

    submitTimeoutRef.current = setTimeout(() => {
      dispatch({ type: "SET_MORTGAGE_SCENARIO", payload: scenarioPayload });
      dispatch({ type: "TOGGLE_PRODUCT_COMPARISON", payload: true });
      if (isMountedRef.current) {
        setIsSubmitting(false);
      }
      submitTimeoutRef.current = null;
    }, 900);
  };

  const currencyFormatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }),
    []
  );

  return (
    <div className="find-products-widget">
      <style>{widgetStyles}</style>
      <div className="products-filter-card">
        <header className="products-filter-header">
          <h1 className="products-filter-title">Compare mortgage products</h1>
          <p className="products-filter-subtitle">
            <strong>We will not pull your credit.</strong> Checking your options
            won't affect your score. No hard inquiry at this stage.
          </p>
        </header>

        <form className="products-filter-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-field">
              <label className="form-label" htmlFor="loanType">
                Loan type
              </label>
              <select
                id="loanType"
                name="loanType"
                value={formState.loanType}
                onChange={handleFieldChange}
                className="form-select"
              >
                <option value="Purchase">Purchase</option>
                <option value="Refinance">Refinance</option>
              </select>
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="loanProgram">
                Loan program
              </label>
              <select
                id="loanProgram"
                name="loanProgram"
                value={formState.loanProgram}
                onChange={handleFieldChange}
                className="form-select"
              >
                {loanProgramOptions.map((program) => (
                  <option key={program} value={program}>
                    {program}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="rateStructure">
                Rate structure
              </label>
              <select
                id="rateStructure"
                name="rateStructure"
                value={formState.rateStructure}
                onChange={handleFieldChange}
                className="form-select"
              >
                {rateStructureOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {isArm && (
              <div className="form-field">
                <label className="form-label" htmlFor="armTerm">
                  ARM term
                </label>
                <select
                  id="armTerm"
                  name="armTerm"
                  value={formState.armTerm}
                  onChange={handleFieldChange}
                  className="form-select"
                >
                  {armTermOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="form-field">
              <label className="form-label" htmlFor="loanTerm">
                Loan term
              </label>
              <select
                id="loanTerm"
                name="loanTerm"
                value={formState.loanTerm}
                onChange={handleFieldChange}
                className="form-select"
              >
                {loanTerms.map((term) => (
                  <option key={term} value={term}>
                    {term}-year fixed
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="purchasePrice">
                Purchase price / value
              </label>
              <input
                id="purchasePrice"
                name="purchasePrice"
                type="number"
                min="0"
                value={formState.purchasePrice}
                onChange={handleFieldChange}
                className="form-input"
                placeholder="450000"
                inputMode="numeric"
              />
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="downPaymentPercent">
                Down payment
              </label>
              <div className="down-payment-group">
                <div className="percentage-input">
                  <input
                    id="downPaymentPercent"
                    name="downPaymentPercent"
                    type="number"
                    min="0"
                    max="80"
                    step="0.125"
                    value={formState.downPaymentPercent}
                    onChange={handleFieldChange}
                    className="form-input"
                    placeholder="20"
                    inputMode="decimal"
                  />
                  <span className="percentage-suffix">%</span>
                </div>
                <input
                  className="down-payment-slider"
                  type="range"
                  min="0"
                  max="80"
                  step="0.5"
                  value={downPaymentPercentValue}
                  onChange={handleDownPaymentSliderChange}
                />
                <div className="down-payment-display">
                  <span>{formattedDownPaymentPercent}% selected</span>
                  <span>
                    {currencyFormatter.format(downPaymentAmount)} down
                  </span>
                </div>
              </div>
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="propertyType">
                Property type
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={formState.propertyType}
                onChange={handleFieldChange}
                className="form-select"
              >
                {propertyTypes.map((property) => (
                  <option key={property} value={property}>
                    {property}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="occupancy">
                Occupancy
              </label>
              <select
                id="occupancy"
                name="occupancy"
                value={formState.occupancy}
                onChange={handleFieldChange}
                className="form-select"
              >
                {occupancyOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="stateSelection">
                State
              </label>
              <select
                id="stateSelection"
                name="stateSelection"
                value={formState.stateSelection}
                onChange={handleFieldChange}
                className="form-select"
              >
                {states.map((stateName) => (
                  <option key={stateName} value={stateName}>
                    {stateName}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="propertyZip">
                Property ZIP code
              </label>
              <input
                id="propertyZip"
                name="propertyZip"
                type="text"
                inputMode="numeric"
                // pattern="\\d{5}"
                maxLength={5}
                value={formState.propertyZip}
                onChange={handleZipChange}
                className="form-input"
                placeholder="75201"
              />
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="creditScore">
                Estimated credit score
              </label>
              <select
                id="creditScore"
                name="creditScore"
                value={formState.creditScore}
                onChange={handleFieldChange}
                className="form-select"
              >
                {creditScoreOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {isRefinance && (
            <div className="refinance-panel">
              <span className="section-caption">Refinance snapshot</span>
              <div className="form-grid">
                <div className="form-field">
                  <label className="form-label" htmlFor="existingLoanBalance">
                    Current loan balance
                  </label>
                  <input
                    id="existingLoanBalance"
                    name="existingLoanBalance"
                    type="number"
                    min="0"
                    value={formState.existingLoanBalance}
                    onChange={handleFieldChange}
                    className="form-input"
                    placeholder="360000"
                    inputMode="numeric"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="refinanceGoal">
                    Refinance goal
                  </label>
                  <select
                    id="refinanceGoal"
                    name="refinanceGoal"
                    value={formState.refinanceGoal}
                    onChange={handleFieldChange}
                    className="form-select"
                  >
                    {refinanceGoals.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="cashOutAmount">
                    Cash-out amount (optional)
                  </label>
                  <input
                    id="cashOutAmount"
                    name="cashOutAmount"
                    type="number"
                    min="0"
                    value={formState.cashOutAmount}
                    onChange={handleFieldChange}
                    className="form-input"
                    placeholder="0"
                    inputMode="numeric"
                  />
                </div>
              </div>
            </div>
          )}

          <button
            type="button"
            className="advanced-toggle"
            onClick={toggleAdvanced}
            aria-expanded={showAdvanced}
          >
            {showAdvanced ? "Hide advanced filters" : "Show advanced filters"}
          </button>

          {showAdvanced && (
            <div className="advanced-content">
              <span className="section-caption">Fine-tune your scenario</span>
              <div className="form-grid">
                <div className="form-field">
                  <label className="form-label" htmlFor="propertyUnits">
                    Number of units
                  </label>
                  <select
                    id="propertyUnits"
                    name="propertyUnits"
                    value={formState.propertyUnits}
                    onChange={handleFieldChange}
                    className="form-select"
                  >
                    {propertyUnitsOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="closingTimeline">
                    Closing timeline
                  </label>
                  <select
                    id="closingTimeline"
                    name="closingTimeline"
                    value={formState.closingTimeline}
                    onChange={handleFieldChange}
                    className="form-select"
                  >
                    {closingTimelineOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="firstTimeBuyer">
                    First-time homebuyer
                  </label>
                  <select
                    id="firstTimeBuyer"
                    name="firstTimeBuyer"
                    value={formState.firstTimeBuyer}
                    onChange={handleFieldChange}
                    className="form-select"
                  >
                    {firstTimeBuyerOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="veteranStatus">
                    Eligible for VA benefits
                  </label>
                  <select
                    id="veteranStatus"
                    name="veteranStatus"
                    value={formState.veteranStatus}
                    onChange={handleFieldChange}
                    className="form-select"
                  >
                    {veteranStatusOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          <footer className="products-filter-footer">
            <div className="estimated-metrics">
              <div className="estimated-metric">
                <span className="metric-label">Down payment</span>
                <span className="metric-value">
                  {currencyFormatter.format(downPaymentAmount)}
                </span>
              </div>
              <div className="estimated-metric">
                <span className="metric-label">Estimated loan amount</span>
                <span className="metric-value loan-amount-highlight">
                  {currencyFormatter.format(estimatedLoanAmount)}
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="find-products-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <FiLoader className="loader-icon" />
                  Gathering products…
                </>
              ) : (
                "Find products"
              )}
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default ProductsFilterWidget;
