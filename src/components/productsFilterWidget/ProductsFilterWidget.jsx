import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { FiLoader } from "react-icons/fi";
import Context from "../../context";

const widgetStyles = `
  .find-products-widget {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
  }

  .products-filter-card {
    width: min(960px, 100%);
    background-color: rgba(255, 255, 255, 0.94);
    border-radius: 24px;
    box-shadow: 0 30px 60px rgba(15, 23, 42, 0.18);
    padding: 40px 48px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    backdrop-filter: blur(6px);
  }

  .products-filter-header {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .products-filter-title {
    font-size: 2.1rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0;
  }

  .products-filter-subtitle {
    font-size: 1rem;
    color: #475569;
    line-height: 1.5;
    max-width: 580px;
  }

  .products-filter-form {
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
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
    background-color: #fff;
  }

  .form-input::placeholder {
    color: #94a3b8;
  }

  .products-filter-footer {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .estimated-loan-amount {
    font-size: 1rem;
    font-weight: 600;
    color: #1e293b;
  }

  .loan-amount-highlight {
    color: #2563eb;
  }

  .find-products-button {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    color: #fff;
    font-weight: 600;
    padding: 14px 22px;
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

  @media (max-width: 768px) {
    .products-filter-card {
      padding: 28px 24px;
      border-radius: 18px;
    }

    .products-filter-title {
      font-size: 1.8rem;
    }

    .products-filter-form {
      grid-template-columns: 1fr;
    }
  }
`;

const initialFormState = {
  loanType: "Purchase",
  purchasePrice: "450000",
  downPayment: "90000",
  loanTerm: "30",
  propertyType: "Single-family residence",
  occupancy: "Primary residence",
  stateSelection: "Texas",
  creditScore: "760",
};

const loanTerms = ["30", "20", "15", "10", "7"].map((term) => ({
  value: term,
  label: `${term}-year fixed`,
}));

const propertyTypes = [
  "Single-family residence",
  "Condominium",
  "Townhome",
  "Multi-family (2-4 units)",
  "Manufactured home",
];

const occupancyOptions = [
  "Primary residence",
  "Second home",
  "Investment property",
];

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "California",
  "Colorado",
  "Florida",
  "Georgia",
  "Illinois",
  "New York",
  "North Carolina",
  "Texas",
  "Washington",
];

const creditScoreOptions = [
  { label: "760+ (Excellent)", value: "780" },
  { label: "720-759 (Great)", value: "735" },
  { label: "680-719 (Good)", value: "700" },
  { label: "640-679 (Fair)", value: "660" },
  { label: "620-639 (OK)", value: "625" },
];

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

  const estimatedLoanAmount = useMemo(() => {
    const purchasePrice = Number(formState.purchasePrice) || 0;
    const downPayment = Number(formState.downPayment) || 0;
    return Math.max(purchasePrice - downPayment, 0);
  }, [formState.purchasePrice, formState.downPayment]);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    const purchasePrice = Number(formState.purchasePrice) || 0;
    const downPayment = Number(formState.downPayment) || 0;
    const downPaymentPercent = purchasePrice
      ? Math.min((downPayment / purchasePrice) * 100, 100)
      : 0;

    const scenarioPayload = {
      quoteType: formState.loanType,
      purchasePrice,
      downPayment,
      downPaymentPercent,
      termYears: Number(formState.loanTerm) || 30,
      creditScore: Number(formState.creditScore) || 760,
      stateSelection: formState.stateSelection,
      propertyType: formState.propertyType,
      occupancy: formState.occupancy,
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
            <label className="form-label" htmlFor="purchasePrice">
              Purchase price
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
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="downPayment">
              Down payment
            </label>
            <input
              id="downPayment"
              name="downPayment"
              type="number"
              min="0"
              value={formState.downPayment}
              onChange={handleFieldChange}
              className="form-input"
              placeholder="90000"
            />
          </div>

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
                <option key={term.value} value={term.value}>
                  {term.label}
                </option>
              ))}
            </select>
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
        </form>

        <footer className="products-filter-footer">
          <div className="estimated-loan-amount">
            Estimated loan amount: {" "}
            <span className="loan-amount-highlight">
              ${estimatedLoanAmount.toLocaleString()}
            </span>
          </div>
          <button
            type="submit"
            className="find-products-button"
            disabled={isSubmitting}
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
      </div>
    </div>
  );
};

export default ProductsFilterWidget;
