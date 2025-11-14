import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { FiLoader } from "react-icons/fi";
import Context from "../../context";

const widgetStyles = `
  .find-products-widget {
    width: 100%;
    min-height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 24px 24px 56px;
    overflow-y: auto;
  }

  .products-filter-card {
    width: min(1100px, 100%);
    background-color: rgba(255, 255, 255, 0.96);
    border-radius: 24px;
    box-shadow: 0 24px 60px rgba(15, 23, 42, 0.18);
    padding: 36px 48px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    backdrop-filter: blur(8px);
    margin-top: 8px;
  }

  .products-filter-header {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .products-filter-title {
    font-size: 2rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0;
  }

  .products-filter-subtitle {
    font-size: 1rem;
    color: #475569;
    line-height: 1.55;
    max-width: 620px;
  }

  .products-filter-form {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .form-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-section-header {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .form-section-title {
    font-size: 1.15rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0;
  }

  .form-section-subtitle {
    font-size: 0.9rem;
    color: #64748b;
    margin: 0;
  }

  .form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
  }

  .form-field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-label {
    font-size: 0.9rem;
    font-weight: 600;
    color: #1e293b;
  }

  .form-select,
  .form-input {
    border: 1px solid rgba(148, 163, 184, 0.6);
    border-radius: 12px;
    padding: 12px 14px;
    font-size: 0.95rem;
    background: #f8fafc;
    color: #0f172a;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .form-select:focus,
  .form-input:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.18);
    background-color: #fff;
  }

  .form-input::placeholder {
    color: #94a3b8;
  }

  .down-payment-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .percentage-input {
    position: relative;
  }

  .percentage-input .form-input {
    padding-right: 44px;
  }

  .percentage-suffix {
    position: absolute;
    inset-inline-end: 14px;
    top: 50%;
    transform: translateY(-50%);
    font-weight: 600;
    color: #475569;
  }

  .percentage-options {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .percentage-option {
    border: 1px solid rgba(37, 99, 235, 0.22);
    background-color: rgba(37, 99, 235, 0.1);
    color: #1d4ed8;
    border-radius: 999px;
    padding: 6px 14px;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  }

  .percentage-option:hover {
    background-color: rgba(37, 99, 235, 0.18);
  }

  .percentage-option.active {
    background-color: #2563eb;
    color: #fff;
    box-shadow: 0 8px 18px rgba(37, 99, 235, 0.25);
  }

  .form-helper {
    font-size: 0.8rem;
    color: #64748b;
    line-height: 1.4;
  }

  .products-filter-footer {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(148, 163, 184, 0.3);
    padding-top: 20px;
  }

  .estimated-metrics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 12px;
  }

  .estimated-metric {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .metric-label {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #64748b;
  }

  .metric-value {
    font-size: 1.05rem;
    font-weight: 700;
    color: #1e293b;
  }

  .loan-amount-highlight {
    color: #2563eb;
  }

  .find-products-button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    color: #fff;
    font-weight: 600;
    padding: 14px 24px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .find-products-button:hover {
    transform: translateY(-1px);
    box-shadow: 0 15px 25px rgba(37, 99, 235, 0.25);
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

  @media (max-width: 1024px) {
    .products-filter-card {
      padding: 32px;
      border-radius: 20px;
    }
  }

  @media (max-width: 768px) {
    .find-products-widget {
      padding: 16px 16px 40px;
    }

    .products-filter-card {
      padding: 28px 22px;
      border-radius: 18px;
      margin-top: 0;
    }

    .products-filter-title {
      font-size: 1.7rem;
    }

    .form-grid {
      grid-template-columns: 1fr;
    }

    .products-filter-footer {
      align-items: flex-start;
    }

    .estimated-metrics {
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

const propertyUnitsOptions = [
  "Single unit",
  "2 units",
  "3 units",
  "4 units",
];

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

const rateStructureOptions = [
  "Fixed rate",
  "Adjustable rate (ARM)",
];

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

const downPaymentPresets = [3, 5, 10, 15, 20, 25];

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
      const sanitized = nextValue === "" ? "" : nextValue.toString().replace(/[^\d.]/g, "");
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

  const handlePresetDownPayment = (percent) => {
    setFormState((prev) => ({
      ...prev,
      downPaymentPercent: percent.toString(),
    }));
  };

  const isRefinance = formState.loanType === "Refinance";
  const isArm = formState.rateStructure === "Adjustable rate (ARM)";

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    if (isSubmitting) return;

    setIsSubmitting(true);

    const purchasePrice = Number(formState.purchasePrice) || 0;
    const sanitizedPercent = clamp(Number(formState.downPaymentPercent) || 0, 0, 80);
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
          <section className="form-section">
            <div className="form-section-header">
              <h2 className="form-section-title">Loan goal</h2>
              <p className="form-section-subtitle">
                Tell us what kind of mortgage experience you're looking for.
              </p>
            </div>
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
                  Loan program preference
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
                <label className="form-label" htmlFor="closingTimeline">
                  Desired closing timeline
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
            </div>
          </section>

          <section className="form-section">
            <div className="form-section-header">
              <h2 className="form-section-title">Property details</h2>
              <p className="form-section-subtitle">
                We use this to tailor products that fit the property you have in mind.
              </p>
            </div>
            <div className="form-grid">
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
                  <div className="percentage-options">
                    {downPaymentPresets.map((preset) => {
                      const presetString = preset.toString();
                      const isActive = presetString === formState.downPaymentPercent;
                      return (
                        <button
                          key={preset}
                          type="button"
                          className={`percentage-option${
                            isActive ? " active" : ""
                          }`}
                          onClick={() => handlePresetDownPayment(preset)}
                        >
                          {preset}%
                        </button>
                      );
                    })}
                  </div>
                  <p className="form-helper">
                    Approximately {currencyFormatter.format(downPaymentAmount)} due at closing.
                  </p>
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
                  pattern="\\d{5}"
                  maxLength={5}
                  value={formState.propertyZip}
                  onChange={handleZipChange}
                  className="form-input"
                  placeholder="75201"
                />
              </div>
            </div>
          </section>

          <section className="form-section">
            <div className="form-section-header">
              <h2 className="form-section-title">Borrower profile</h2>
              <p className="form-section-subtitle">
                Lenders use these details to surface accurate pricing.
              </p>
            </div>
            <div className="form-grid">
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
          </section>

          {isRefinance && (
            <section className="form-section">
              <div className="form-section-header">
                <h2 className="form-section-title">Refinance snapshot</h2>
                <p className="form-section-subtitle">
                  Provide a quick look at your current loan so we can show the best savings.
                </p>
              </div>
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
                    Primary refinance goal
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
                    Desired cash-out amount
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
            </section>
          )}

          <footer className="products-filter-footer">
            <div className="estimated-metrics">
              <div className="estimated-metric">
                <span className="metric-label">Estimated down payment</span>
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
              onClick={handleSubmit}
            >
              {isSubmitting ? (
                <>
                  <FiLoader className="loader-icon" />
                  Finding products...
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
