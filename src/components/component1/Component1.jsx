import React, { useContext, useEffect, useMemo, useState } from "react";
import Context from "../../context";
import "./Component1.css";

const creditBandOptions = [
  { value: "760+", label: "760+ (Excellent)" },
  { value: "720-759", label: "720–759 (Very Good)" },
  { value: "680-719", label: "680–719 (Good)" },
  { value: "640-679", label: "640–679 (Fair)" },
  { value: "<640", label: "< 640 (Below Average)" },
];

const loanPurposeOptions = ["Purchase", "Refinance"];
const propertyTypeOptions = [
  "Single Family",
  "Condominium",
  "Townhome",
  "Multi-Family",
];
const occupancyOptions = [
  "Primary Residence",
  "Second Home",
  "Investment Property",
];
const stateOptions = ["AZ", "CA", "CO", "FL", "NY", "TX", "WA"];
const loanTypeOptions = ["Conventional", "FHA", "VA", "Jumbo"];

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);

const formatPercent = (value) =>
  `${Number.isFinite(value) ? value.toFixed(3).replace(/\.0+$/, "") : value}%`
    .replace(".000", "")
    .replace(/(\.\d*[1-9])0+$/, "$1");

const formatPoints = (value) => {
  if (value === 0) return "0 points";
  if (value > 0) return `${value.toFixed(2)} points`;
  return `${Math.abs(value).toFixed(2)} credits`;
};

const loanOffers = [
  {
    id: "offer-1",
    lenderName: "Acme Mortgage",
    programName: "30-year Fixed Conventional",
    rate: 5.75,
    apr: 5.88,
    monthlyPayment: 2432,
    points: 0.75,
    lenderFees: 1450,
    cashToClose: 27400,
    cost5yr: 152000,
    lockPeriodDays: 45,
    prepaymentPenalty: false,
    rating: 4.8,
    reviewsCount: 326,
    loanPurpose: "Purchase",
    loanType: "Conventional",
    occupancy: "Primary Residence",
    state: "TX",
    creditBand: "760+",
  },
  {
    id: "offer-2",
    lenderName: "Bluebonnet Home Loans",
    programName: "30-year Fixed Conventional",
    rate: 5.9,
    apr: 6.02,
    monthlyPayment: 2485,
    points: 0,
    lenderFees: 990,
    cashToClose: 26180,
    cost5yr: 149500,
    lockPeriodDays: 30,
    prepaymentPenalty: false,
    rating: 4.6,
    reviewsCount: 214,
    loanPurpose: "Purchase",
    loanType: "Conventional",
    occupancy: "Primary Residence",
    state: "TX",
    creditBand: "720-759",
  },
  {
    id: "offer-3",
    lenderName: "Lone Star Lending",
    programName: "30-year Fixed Conventional",
    rate: 5.65,
    apr: 5.79,
    monthlyPayment: 2398,
    points: 1.05,
    lenderFees: 1200,
    cashToClose: 28950,
    cost5yr: 147800,
    lockPeriodDays: 60,
    prepaymentPenalty: false,
    rating: 4.9,
    reviewsCount: 412,
    loanPurpose: "Purchase",
    loanType: "Conventional",
    occupancy: "Primary Residence",
    state: "CO",
    creditBand: "760+",
  },
  {
    id: "offer-4",
    lenderName: "MetroFlex Bank",
    programName: "7/6 ARM Jumbo",
    rate: 5.35,
    apr: 5.91,
    monthlyPayment: 2360,
    points: 1.6,
    lenderFees: 1850,
    cashToClose: 31080,
    cost5yr: 155900,
    lockPeriodDays: 45,
    prepaymentPenalty: true,
    rating: 4.2,
    reviewsCount: 168,
    loanPurpose: "Refinance",
    loanType: "Jumbo",
    occupancy: "Second Home",
    state: "CA",
    creditBand: "720-759",
  },
  {
    id: "offer-5",
    lenderName: "Pioneer Credit Union",
    programName: "30-year Fixed FHA",
    rate: 6.05,
    apr: 6.18,
    monthlyPayment: 2520,
    points: 0,
    lenderFees: 850,
    cashToClose: 25800,
    cost5yr: 153300,
    lockPeriodDays: 30,
    prepaymentPenalty: false,
    rating: 4.4,
    reviewsCount: 98,
    loanPurpose: "Purchase",
    loanType: "FHA",
    occupancy: "Primary Residence",
    state: "FL",
    creditBand: "680-719",
  },
  {
    id: "offer-6",
    lenderName: "Riverstone Capital",
    programName: "5/6 ARM VA",
    rate: 5.4,
    apr: 6.08,
    monthlyPayment: 2389,
    points: 1.25,
    lenderFees: 2100,
    cashToClose: 31740,
    cost5yr: 158400,
    lockPeriodDays: 75,
    prepaymentPenalty: true,
    rating: 4.1,
    reviewsCount: 77,
    loanPurpose: "Refinance",
    loanType: "VA",
    occupancy: "Primary Residence",
    state: "AZ",
    creditBand: "680-719",
  },
  {
    id: "offer-7",
    lenderName: "Heritage Mortgage",
    programName: "30-year Fixed Conventional",
    rate: 5.95,
    apr: 6.04,
    monthlyPayment: 2474,
    points: 0.35,
    lenderFees: 1050,
    cashToClose: 26840,
    cost5yr: 151600,
    lockPeriodDays: 45,
    prepaymentPenalty: false,
    rating: 4.7,
    reviewsCount: 265,
    loanPurpose: "Purchase",
    loanType: "Conventional",
    occupancy: "Second Home",
    state: "NY",
    creditBand: "720-759",
  },
  {
    id: "offer-8",
    lenderName: "VistaView Loans",
    programName: "30-year Fixed FHA",
    rate: 6.15,
    apr: 6.24,
    monthlyPayment: 2556,
    points: -0.25,
    lenderFees: 600,
    cashToClose: 24620,
    cost5yr: 160400,
    lockPeriodDays: 30,
    prepaymentPenalty: false,
    rating: 4.3,
    reviewsCount: 143,
    loanPurpose: "Purchase",
    loanType: "FHA",
    occupancy: "Investment Property",
    state: "TX",
    creditBand: "640-679",
  },
];

const Component1 = () => {
  const { state, dispatch } = useContext(Context);
  const [formState, setFormState] = useState(() => {
    const quoteType = state.mortgageScenario?.quoteType || "Purchase";
    const scenarioDownPayment = state.mortgageScenario?.downPaymentPercent;
    return {
      loanPurpose: quoteType,
      purchasePrice: state.mortgageScenario?.purchasePrice ?? 450000,
      downPaymentPercent:
        quoteType === "Refinance"
          ? 0
          : scenarioDownPayment ?? 20,
      propertyType:
        state.mortgageScenario?.propertyType || propertyTypeOptions[0],
      occupancy: state.mortgageScenario?.occupancy || occupancyOptions[0],
      state: state.mortgageScenario?.stateSelection || "TX",
      creditBand:
        state.mortgageScenario?.creditBand || creditBandOptions[0].value,
    };
  });
  const [filters, setFilters] = useState({
    credit: "any",
    loanPurpose: "any",
    loanType: "any",
    occupancy: "any",
    state: "any",
  });
  const [showDetailedTable, setShowDetailedTable] = useState(false);
  const [showAllOffers, setShowAllOffers] = useState(false);

  useEffect(() => {
    if (state.mortgageScenario) {
      setFormState((prev) => ({
        ...prev,
        loanPurpose: state.mortgageScenario.quoteType || prev.loanPurpose,
        purchasePrice:
          state.mortgageScenario.purchasePrice ?? prev.purchasePrice,
        downPaymentPercent:
          state.mortgageScenario.quoteType === "Refinance"
            ? 0
            : state.mortgageScenario.downPaymentPercent ??
              prev.downPaymentPercent,
        propertyType:
          state.mortgageScenario.propertyType || prev.propertyType,
        occupancy: state.mortgageScenario.occupancy || prev.occupancy,
        state: state.mortgageScenario.stateSelection || prev.state,
        creditBand: state.mortgageScenario.creditBand || prev.creditBand,
      }));
    }
  }, [state.mortgageScenario]);

  useEffect(() => {
    setShowAllOffers(false);
  }, [filters]);

  const loanAmount = useMemo(() => {
    const price = Number(formState.purchasePrice);
    const percent = Number(formState.downPaymentPercent);
    if (!Number.isFinite(price) || !Number.isFinite(percent)) {
      return 0;
    }
    if (formState.loanPurpose === "Purchase") {
      return Math.max(Math.round(price * (1 - percent / 100)), 0);
    }
    return Math.max(Math.round(price), 0);
  }, [
    formState.purchasePrice,
    formState.downPaymentPercent,
    formState.loanPurpose,
  ]);

  const handleFieldChange = (field) => (event) => {
    const value = event && event.target ? event.target.value : event;
    setFormState((prev) => {
      if (field === "loanPurpose") {
        const nextState = { ...prev, [field]: value };
        if (value === "Refinance" && prev.downPaymentPercent !== 0) {
          nextState.downPaymentPercent = 0;
        }
        if (value === "Purchase" && prev.downPaymentPercent === 0) {
          nextState.downPaymentPercent = 20;
        }
        return nextState;
      }
      return { ...prev, [field]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      quoteType: formState.loanPurpose,
      purchasePrice: Number(formState.purchasePrice) || 0,
      downPaymentPercent: Number(formState.downPaymentPercent) || 0,
      propertyType: formState.propertyType,
      occupancy: formState.occupancy,
      stateSelection: formState.state,
      creditBand: formState.creditBand,
      loanAmount,
    };

    // Prepare future integration by keeping this logging in place.
    console.group("Component 1 scenario submission");
    console.log("Scenario payload", payload);
    console.groupEnd();

    dispatch({ type: "SET_MORTGAGE_SCENARIO", payload });
  };

  const filteredOffers = useMemo(() => {
    return loanOffers.filter((offer) => {
      if (filters.credit !== "any" && offer.creditBand !== filters.credit) {
        return false;
      }
      if (
        filters.loanPurpose !== "any" &&
        offer.loanPurpose.toLowerCase() !== filters.loanPurpose
      ) {
        return false;
      }
      if (
        filters.loanType !== "any" &&
        offer.loanType.toLowerCase() !== filters.loanType
      ) {
        return false;
      }
      if (
        filters.occupancy !== "any" &&
        offer.occupancy.toLowerCase() !== filters.occupancy
      ) {
        return false;
      }
      if (filters.state !== "any" && offer.state !== filters.state) {
        return false;
      }
      return true;
    });
  }, [filters]);

  const lowestPayment = useMemo(() => {
    if (!filteredOffers.length) return null;
    return Math.min(...filteredOffers.map((offer) => offer.monthlyPayment));
  }, [filteredOffers]);

  const lowestCashToClose = useMemo(() => {
    if (!filteredOffers.length) return null;
    return Math.min(...filteredOffers.map((offer) => offer.cashToClose));
  }, [filteredOffers]);

  const lowestFiveYearCost = useMemo(() => {
    if (!filteredOffers.length) return null;
    return Math.min(...filteredOffers.map((offer) => offer.cost5yr));
  }, [filteredOffers]);

  const visibleOffers = useMemo(() => {
    if (showAllOffers) {
      return filteredOffers;
    }
    return filteredOffers.slice(0, 4);
  }, [filteredOffers, showAllOffers]);

  const showAllAvailable = !showAllOffers && filteredOffers.length > 4;

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const toggleDetailedTable = () => {
    setShowDetailedTable((prev) => {
      const next = !prev;
      if (!next) {
        setShowAllOffers(false);
      }
      return next;
    });
  };

  const handlePrefillPricingWidget = (offer) => {
    const payload = {
      quoteType: formState.loanPurpose,
      purchasePrice: Number(formState.purchasePrice) || 0,
      downPaymentPercent: Number(formState.downPaymentPercent) || 0,
      propertyType: formState.propertyType,
      occupancy: formState.occupancy,
      stateSelection: formState.state,
      creditBand: formState.creditBand,
      loanAmount,
      preferredOfferId: offer.id,
      preferredOfferLender: offer.lenderName,
      preferredProgram: offer.programName,
    };

    dispatch({ type: "SET_MORTGAGE_SCENARIO", payload });
    dispatch({ type: "SHOW_PRICING_WIDGET", payload: true });
  };

  return (
    <div className="component1-container">
      <section className="scenario-card">
        <header className="scenario-header">
          <h2>Plan your scenario</h2>
          <p>
            Fill in a few details so we can surface programs that align with
            what you&apos;re looking for.
          </p>
        </header>
        <form className="scenario-form" onSubmit={handleSubmit}>
          <div className="field-group">
            <span className="field-label">Loan purpose</span>
            <div className="pill-toggle">
              {loanPurposeOptions.map((option) => (
                <button
                  type="button"
                  key={option}
                  className={`pill ${
                    formState.loanPurpose === option ? "active" : ""
                  }`}
                  onClick={() => handleFieldChange("loanPurpose")(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="field-grid">
            <label className="field">
              <span className="field-label">
                {formState.loanPurpose === "Purchase"
                  ? "Purchase price"
                  : "Estimated balance"}
              </span>
              <input
                type="number"
                min="0"
                step="1000"
                value={formState.purchasePrice}
                onChange={handleFieldChange("purchasePrice")}
              />
            </label>
            {formState.loanPurpose === "Purchase" && (
              <label className="field">
                <span className="field-label">Down payment %</span>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="1"
                  value={formState.downPaymentPercent}
                  onChange={handleFieldChange("downPaymentPercent")}
                />
              </label>
            )}
            <label className="field">
              <span className="field-label">Property type</span>
              <select
                value={formState.propertyType}
                onChange={handleFieldChange("propertyType")}
              >
                {propertyTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span className="field-label">Occupancy</span>
              <select
                value={formState.occupancy}
                onChange={handleFieldChange("occupancy")}
              >
                {occupancyOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span className="field-label">State</span>
              <select value={formState.state} onChange={handleFieldChange("state")}>
                {stateOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span className="field-label">Estimated credit score</span>
              <select
                value={formState.creditBand}
                onChange={handleFieldChange("creditBand")}
              >
                {creditBandOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="helper-row">
            <div>
              <span className="helper-label">Estimated loan amount</span>
              <span className="helper-value">{formatCurrency(loanAmount)}</span>
            </div>
            <p className="credit-message">
              Checking your options won&apos;t affect your credit score. We don&apos;t
              run a hard credit check at this stage.
            </p>
          </div>

          <div className="form-actions">
            <button type="submit" className="primary-button">
              Save scenario
            </button>
          </div>
        </form>
      </section>

      <section className="advanced-view">
        <header className="advanced-header">
          <div>
            <h3>Dig Into More Program Options</h3>
            <p>
              Filter the broader marketplace to find a program that fits. When
              you pick one, we&apos;ll send the details into the pricing widget.
            </p>
          </div>
          <button
            type="button"
            className="outline-button"
            onClick={toggleDetailedTable}
          >
            {showDetailedTable ? "Hide Detailed Table" : "Show Detailed Table"}
          </button>
        </header>

        <div className="filter-panel">
          <div className="filter-group">
            <label htmlFor="filter-credit">Credit</label>
            <select
              id="filter-credit"
              value={filters.credit}
              onChange={(event) => updateFilter("credit", event.target.value)}
            >
              <option value="any">Any</option>
              {creditBandOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="filter-purpose">Loan purpose</label>
            <select
              id="filter-purpose"
              value={filters.loanPurpose}
              onChange={(event) =>
                updateFilter("loanPurpose", event.target.value.toLowerCase())
              }
            >
              <option value="any">Any</option>
              {loanPurposeOptions.map((option) => (
                <option key={option} value={option.toLowerCase()}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="filter-loan-type">Loan type</label>
            <select
              id="filter-loan-type"
              value={filters.loanType}
              onChange={(event) =>
                updateFilter("loanType", event.target.value.toLowerCase())
              }
            >
              <option value="any">Any</option>
              {loanTypeOptions.map((option) => (
                <option key={option} value={option.toLowerCase()}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="filter-occupancy">Occupancy</label>
            <select
              id="filter-occupancy"
              value={filters.occupancy}
              onChange={(event) =>
                updateFilter("occupancy", event.target.value.toLowerCase())
              }
            >
              <option value="any">Any</option>
              {occupancyOptions.map((option) => (
                <option key={option} value={option.toLowerCase()}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="filter-state">State</label>
            <select
              id="filter-state"
              value={filters.state}
              onChange={(event) => updateFilter("state", event.target.value)}
            >
              <option value="any">Any</option>
              {stateOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {showDetailedTable && (
          <div className="comparison-section">
            <div className="comparison-header">
              <h4>Marketplace comparison</h4>
              {showAllAvailable && (
                <button
                  type="button"
                  className="show-all-button"
                  onClick={() => setShowAllOffers(true)}
                >
                  Show all offers ({filteredOffers.length})
                </button>
              )}
            </div>
            <div className="comparison-table-wrapper">
              {filteredOffers.length ? (
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th className="sticky-column" />
                      {visibleOffers.map((offer) => (
                        <th key={offer.id}>
                          <div className="offer-header">
                            <div className="offer-lender">{offer.lenderName}</div>
                            <div className="offer-program">{offer.programName}</div>
                            <button
                              type="button"
                              className="table-action-button"
                              onClick={() => handlePrefillPricingWidget(offer)}
                            >
                              Use this program
                            </button>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="sticky-column">Interest rate</th>
                      {visibleOffers.map((offer) => (
                        <td key={`${offer.id}-rate`} className="numeric">
                          {formatPercent(offer.rate)}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <th className="sticky-column">APR</th>
                      {visibleOffers.map((offer) => (
                        <td key={`${offer.id}-apr`} className="numeric">
                          {formatPercent(offer.apr)}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <th className="sticky-column">Monthly payment (P&I)</th>
                      {visibleOffers.map((offer) => {
                        const isBest =
                          lowestPayment !== null &&
                          offer.monthlyPayment === lowestPayment;
                        return (
                          <td
                            key={`${offer.id}-payment`}
                            className={`numeric ${isBest ? "highlight" : ""}`}
                          >
                            {formatCurrency(offer.monthlyPayment)}
                            {isBest && (
                              <span className="highlight-badge">Lowest</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                    <tr>
                      <th className="sticky-column">Points / credits</th>
                      {visibleOffers.map((offer) => (
                        <td key={`${offer.id}-points`} className="numeric">
                          {formatPoints(offer.points)}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <th className="sticky-column">Lender fees</th>
                      {visibleOffers.map((offer) => (
                        <td key={`${offer.id}-fees`} className="numeric">
                          {formatCurrency(offer.lenderFees)}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <th className="sticky-column">Cash to close</th>
                      {visibleOffers.map((offer) => {
                        const isBest =
                          lowestCashToClose !== null &&
                          offer.cashToClose === lowestCashToClose;
                        return (
                          <td
                            key={`${offer.id}-cash`}
                            className={`numeric ${isBest ? "highlight" : ""}`}
                          >
                            {formatCurrency(offer.cashToClose)}
                            {isBest && (
                              <span className="highlight-badge">Lowest</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                    <tr>
                      <th className="sticky-column">Cost over 5 years</th>
                      {visibleOffers.map((offer) => {
                        const isBest =
                          lowestFiveYearCost !== null &&
                          offer.cost5yr === lowestFiveYearCost;
                        return (
                          <td
                            key={`${offer.id}-cost5`}
                            className={`numeric ${isBest ? "highlight" : ""}`}
                          >
                            {formatCurrency(offer.cost5yr)}
                            {isBest && (
                              <span className="highlight-badge">Lowest</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                    <tr>
                      <th className="sticky-column">Lock period</th>
                      {visibleOffers.map((offer) => (
                        <td key={`${offer.id}-lock`} className="numeric">
                          {offer.lockPeriodDays}-day
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <th className="sticky-column">Prepayment penalty</th>
                      {visibleOffers.map((offer) => (
                        <td key={`${offer.id}-prepay`}>
                          {offer.prepaymentPenalty ? "Yes" : "No"}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <th className="sticky-column">Lender rating</th>
                      {visibleOffers.map((offer) => (
                        <td key={`${offer.id}-rating`}>
                          <span className="rating-stars">
                            ⭐️ {offer.rating.toFixed(1)}
                          </span>
                          <span className="rating-reviews">
                            ({offer.reviewsCount} reviews)
                          </span>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              ) : (
                <div className="empty-state">
                  <p>No offers match the filters you selected. Try adjusting.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Component1;
