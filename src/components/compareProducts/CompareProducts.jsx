import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import Context from "../../context";
import "./CompareProducts.css";

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
const termOptions = ["30-year", "20-year", "15-year"];

const loanOffers = [
  {
    id: "offer-1",
    lenderName: "Acme Mortgage",
    programName: "Conventional 30-year Fixed",
    recommendationTag: "🏁 Lowest monthly payment",
    isRecommended: true,
    productType: "fixed",
    termLabel: "30-year fixed",
    points: 0.75,
    hasPoints: true,
    hasPMI: false,
    rate: 5.75,
    apr: 5.88,
    monthlyPayment: 2432,
    lenderFees: 1450,
    thirdPartyFees: 1650,
    escrowEstimate: 3200,
    cashToClose: 27400,
    cost5yr: 152000,
    lockPeriodDays: 45,
    prepaymentPenalty: false,
    rating: 4.8,
    reviewsCount: 326,
    costNarrative:
      "If you stay ~5 years, this loan keeps $3,200 in your pocket versus the average offer.",
  },
  {
    id: "offer-2",
    lenderName: "Bluebonnet Home Loans",
    programName: "Conventional 30-year Fixed",
    recommendationTag: "⚡ Lowest upfront cost",
    isRecommended: true,
    productType: "fixed",
    termLabel: "30-year fixed",
    points: 0,
    hasPoints: false,
    hasPMI: false,
    rate: 5.9,
    apr: 6.02,
    monthlyPayment: 2485,
    lenderFees: 990,
    thirdPartyFees: 1425,
    escrowEstimate: 3050,
    cashToClose: 26180,
    cost5yr: 149500,
    lockPeriodDays: 30,
    prepaymentPenalty: false,
    rating: 4.6,
    reviewsCount: 214,
    costNarrative:
      "Ideal when you want to minimize cash at closing without giving up a competitive payment.",
  },
  {
    id: "offer-3",
    lenderName: "Lone Star Lending",
    programName: "Conventional 30-year Fixed",
    recommendationTag: "🔒 Best long-term savings",
    isRecommended: true,
    productType: "fixed",
    termLabel: "30-year fixed",
    points: 1.05,
    hasPoints: true,
    hasPMI: false,
    rate: 5.65,
    apr: 5.79,
    monthlyPayment: 2398,
    lenderFees: 1200,
    thirdPartyFees: 1580,
    escrowEstimate: 3185,
    cashToClose: 28950,
    cost5yr: 147800,
    lockPeriodDays: 60,
    prepaymentPenalty: false,
    rating: 4.9,
    reviewsCount: 412,
    costNarrative:
      "Run the numbers past 7 years and this option becomes the clear winner versus other lenders.",
  },
  {
    id: "offer-4",
    lenderName: "MetroFlex Bank",
    programName: "Jumbo 7/6 ARM",
    recommendationTag: "",
    isRecommended: false,
    productType: "arm",
    termLabel: "7/6 ARM",
    points: 1.6,
    hasPoints: true,
    hasPMI: false,
    rate: 5.35,
    apr: 5.91,
    monthlyPayment: 2360,
    lenderFees: 1850,
    thirdPartyFees: 2100,
    escrowEstimate: 4100,
    cashToClose: 31080,
    cost5yr: 155900,
    lockPeriodDays: 45,
    prepaymentPenalty: true,
    rating: 4.2,
    reviewsCount: 168,
    costNarrative:
      "Best suited if you anticipate selling or refinancing within the introductory ARM period.",
  },
  {
    id: "offer-5",
    lenderName: "Pioneer Credit Union",
    programName: "FHA 30-year Fixed",
    recommendationTag: "",
    isRecommended: false,
    productType: "fixed",
    termLabel: "30-year fixed",
    points: 0,
    hasPoints: false,
    hasPMI: true,
    rate: 6.05,
    apr: 6.18,
    monthlyPayment: 2520,
    lenderFees: 850,
    thirdPartyFees: 1850,
    escrowEstimate: 2950,
    cashToClose: 25800,
    cost5yr: 153300,
    lockPeriodDays: 30,
    prepaymentPenalty: false,
    rating: 4.4,
    reviewsCount: 98,
    costNarrative:
      "Backed by the FHA, this option helps stretch qualifications when you need flexible guidelines.",
  },
  {
    id: "offer-6",
    lenderName: "Riverstone Capital",
    programName: "VA 5/6 ARM",
    recommendationTag: "",
    isRecommended: false,
    productType: "arm",
    termLabel: "5/6 ARM",
    points: 1.25,
    hasPoints: true,
    hasPMI: false,
    rate: 5.4,
    apr: 6.08,
    monthlyPayment: 2389,
    lenderFees: 2100,
    thirdPartyFees: 1935,
    escrowEstimate: 3320,
    cashToClose: 30560,
    cost5yr: 154200,
    lockPeriodDays: 45,
    prepaymentPenalty: false,
    rating: 4.7,
    reviewsCount: 276,
    costNarrative:
      "Veteran-exclusive option with competitive payment during the initial adjustable period.",
  },
  {
    id: "offer-7",
    lenderName: "Harborlight Lending",
    programName: "Conventional 15-year Fixed",
    recommendationTag: "",
    isRecommended: false,
    productType: "fixed",
    termLabel: "15-year fixed",
    points: -0.25,
    hasPoints: false,
    hasPMI: false,
    rate: 5.05,
    apr: 5.12,
    monthlyPayment: 3150,
    lenderFees: 780,
    thirdPartyFees: 1380,
    escrowEstimate: 2750,
    cashToClose: 24890,
    cost5yr: 142400,
    lockPeriodDays: 30,
    prepaymentPenalty: false,
    rating: 4.5,
    reviewsCount: 189,
    costNarrative:
      "Accelerated payoff paired with a lender credit that reduces your upfront cash.",
  },
];

const sortComparators = {
  lowestPayment: (a, b) => a.monthlyPayment - b.monthlyPayment,
  lowestCashToClose: (a, b) => a.cashToClose - b.cashToClose,
  lowestRate: (a, b) => a.rate - b.rate,
  lowest5yrCost: (a, b) => a.cost5yr - b.cost5yr,
  lenderRating: (a, b) => b.rating - a.rating,
};

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

const classNames = (...values) => values.filter(Boolean).join(" ");

const CompareProducts = () => {
  const { state, dispatch } = useContext(Context);
  const defaultScenario = {
    purchasePrice: 450000,
    downPaymentPercent: 20,
    termYears: 30,
    loanPurpose: "Purchase",
    propertyType: "Single Family",
    occupancy: "Primary Residence",
    state: "TX",
    creditBand: "760+",
  };

  const [formState, setFormState] = useState(() => ({
    ...defaultScenario,
    ...(state.mortgageScenario || {}),
  }));
  const [activeScenario, setActiveScenario] = useState(() => ({
    ...defaultScenario,
    ...(state.mortgageScenario || {}),
  }));
  const [sortBy, setSortBy] = useState("lowestPayment");
  const [filterChips, setFilterChips] = useState({
    fixedOnly: false,
    armOnly: false,
    noPoints: false,
    noPmi: false,
  });
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [showAllOffers, setShowAllOffers] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const formRef = useRef(null);

  useEffect(() => {
    if (state.mortgageScenario) {
      const scenarioFromContext = state.mortgageScenario;
      const normalizedScenario = {
        purchasePrice:
          scenarioFromContext.purchasePrice ?? defaultScenario.purchasePrice,
        downPaymentPercent:
          scenarioFromContext.downPaymentPercent ?? defaultScenario.downPaymentPercent,
        termYears:
          scenarioFromContext.termYears ?? defaultScenario.termYears,
        loanPurpose:
          scenarioFromContext.loanPurpose ||
          scenarioFromContext.quoteType ||
          defaultScenario.loanPurpose,
        propertyType:
          scenarioFromContext.propertyType || defaultScenario.propertyType,
        occupancy:
          scenarioFromContext.occupancy || defaultScenario.occupancy,
        state:
          scenarioFromContext.state ||
          scenarioFromContext.stateSelection ||
          defaultScenario.state,
        creditBand:
          scenarioFromContext.creditBand || defaultScenario.creditBand,
      };

      setFormState((prev) => ({ ...prev, ...normalizedScenario }));
      setActiveScenario((prev) => ({ ...prev, ...normalizedScenario }));
      setLastUpdated(new Date());
    }
  }, [state.mortgageScenario]);

  useEffect(() => {
    if (selectedOffer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedOffer]);

  useEffect(() => {
    setShowAllOffers(false);
  }, [filterChips, sortBy]);

  const handleFieldChange = (field) => (event) => {
    const value = event.target.value;
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleFindProducts = (event) => {
    event.preventDefault();
    const scenarioPayload = {
      ...formState,
      purchasePrice: Number(formState.purchasePrice),
      downPaymentPercent: Number(formState.downPaymentPercent),
      termYears: Number(String(formState.termYears).replace(/[^0-9]/g, "")) || 30,
    };

    setActiveScenario(scenarioPayload);
    dispatch({ type: "SET_MORTGAGE_SCENARIO", payload: scenarioPayload });
    setLastUpdated(new Date());
  };

  const toggleChip = (chipKey) => {
    setFilterChips((prev) => ({ ...prev, [chipKey]: !prev[chipKey] }));
  };

  const filteredOffers = useMemo(() => {
    return loanOffers.filter((offer) => {
      if (filterChips.fixedOnly && offer.productType !== "fixed") return false;
      if (filterChips.armOnly && offer.productType !== "arm") return false;
      if (filterChips.fixedOnly && filterChips.armOnly) return false;
      if (filterChips.noPoints && offer.hasPoints) return false;
      if (filterChips.noPmi && offer.hasPMI) return false;
      return true;
    });
  }, [filterChips]);

  const sortedOffers = useMemo(() => {
    const comparator = sortComparators[sortBy];
    return [...filteredOffers].sort(comparator);
  }, [filteredOffers, sortBy]);

  const recommendedOffers = useMemo(() => {
    const recommended = sortedOffers.filter((offer) => offer.isRecommended);
    const limitedRecommended = recommended.slice(0, 3);
    if (limitedRecommended.length >= 3) {
      return limitedRecommended;
    }

    const filler = sortedOffers.filter(
      (offer) => !limitedRecommended.find((item) => item.id === offer.id)
    );
    return [...limitedRecommended, ...filler].slice(0, 3);
  }, [sortedOffers]);

  const bestMonthlyPayment = useMemo(() => {
    if (!sortedOffers.length) return null;
    return Math.min(...sortedOffers.map((offer) => offer.monthlyPayment));
  }, [sortedOffers]);

  const bestCashToClose = useMemo(() => {
    if (!sortedOffers.length) return null;
    return Math.min(...sortedOffers.map((offer) => offer.cashToClose));
  }, [sortedOffers]);

  const bestCostFiveYear = useMemo(() => {
    if (!sortedOffers.length) return null;
    return Math.min(...sortedOffers.map((offer) => offer.cost5yr));
  }, [sortedOffers]);

  const visibleOffers = useMemo(() => {
    if (showAllOffers) {
      return sortedOffers;
    }
    return sortedOffers.slice(0, 4);
  }, [sortedOffers, showAllOffers]);

  const loanAmount = useMemo(() => {
    const purchasePrice = Number(formState.purchasePrice) || 0;
    const downPercent = Number(formState.downPaymentPercent) || 0;
    return purchasePrice * (1 - downPercent / 100);
  }, [formState]);

  const formattedTimestamp = useMemo(() => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }).format(lastUpdated);
  }, [lastUpdated]);

  const handleEditScenario = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openDetails = (offer) => {
    setSelectedOffer(offer);
  };

  const closeDetails = () => {
    setSelectedOffer(null);
  };

  return (
    <div className="compare-products-page">
      <section className="scenario-builder" ref={formRef}>
        <header className="builder-header">
          <div>
            <h2>Compare mortgage products</h2>
            <p>
              Tune the scenario that best matches your goals. When you&apos;re
              ready, we&apos;ll surface the offers below so you can zero in on the
              right fit.
            </p>
          </div>
          <div className="credit-assurance">
            <strong>We will not pull your credit.</strong>
            <span>
              Checking your options won&apos;t affect your score. No hard inquiry at
              this stage.
            </span>
          </div>
        </header>

        <form className="builder-form" onSubmit={handleFindProducts}>
          <div className="grid">
            <label className="field">
              <span className="field-label">Loan purpose</span>
              <select
                value={formState.loanPurpose}
                onChange={handleFieldChange("loanPurpose")}
              >
                {loanPurposeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="field">
              <span className="field-label">Purchase price</span>
              <input
                type="number"
                min="0"
                step="1000"
                value={formState.purchasePrice}
                onChange={handleFieldChange("purchasePrice")}
              />
            </label>

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

            <label className="field">
              <span className="field-label">Loan term</span>
              <select
                value={`${formState.termYears}-year`}
                onChange={(event) => {
                  const selected = event.target.value;
                  const years = Number(selected.split("-")[0]);
                  setFormState((prev) => ({ ...prev, termYears: years }));
                }}
              >
                {termOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

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
          </div>

          <div className="form-actions">
            <button type="submit" className="primary-button">
              Find products
            </button>
          </div>
        </form>
      </section>

      <section className="results-section">
        <div className="scenario-summary-bar">
          <div className="scenario-summary">
            <span role="img" aria-label="home">
              🏠
            </span>
            <span>
              {formatCurrency(activeScenario.purchasePrice)} {" "}
              {activeScenario.loanPurpose?.toLowerCase() === "refinance"
                ? "refinance"
                : "purchase"}
              {" "}• {activeScenario.downPaymentPercent}% down •
              {" "}
              {activeScenario.termYears}-year term • {activeScenario.creditBand} credit
              • {activeScenario.state}
            </span>
          </div>
          <div className="scenario-meta">
            <span>
              Showing rates from {sortedOffers.length} lenders as of {formattedTimestamp}
              . Rates may change.
            </span>
            <button
              type="button"
              className="text-button"
              onClick={handleEditScenario}
            >
              Edit scenario
            </button>
          </div>
        </div>

        <section className="recommended-offers">
          <header className="section-heading">
            <h3>Recommended for you</h3>
            <p>
              Based on your scenario, these offers surface the most common goals
              we hear from borrowers.
            </p>
          </header>
          {sortedOffers.length ? (
            <div className="recommended-grid">
              {recommendedOffers.map((offer) => (
                <article key={offer.id} className="offer-card">
                  {offer.recommendationTag && (
                    <div className="offer-badge">{offer.recommendationTag}</div>
                  )}
                  <div className="offer-rate">
                    <span className="rate-value">{formatPercent(offer.apr)}</span>
                    <span className="rate-label">APR</span>
                  </div>
                  <div className="offer-payment">
                    <span className="payment-value">
                      {formatCurrency(offer.monthlyPayment)}
                    </span>
                    <span className="payment-label">per month (P&amp;I)</span>
                  </div>
                  <div className="offer-chips">
                    <span>{offer.termLabel}</span>
                    <span>{formatPoints(offer.points)}</span>
                    <span>Lender: {offer.lenderName}</span>
                  </div>
                  <div className="cost-snapshot">
                    <div>
                      <span className="snapshot-label">Cash to close</span>
                      <span className="snapshot-value">
                        {formatCurrency(offer.cashToClose)}
                      </span>
                    </div>
                    <div>
                      <span className="snapshot-label">5-year cost</span>
                      <span className="snapshot-value">
                        {formatCurrency(offer.cost5yr)}
                      </span>
                    </div>
                  </div>
                  <div className="card-actions">
                    <button type="button" className="primary-button">
                      Continue with this rate
                    </button>
                    <button
                      type="button"
                      className="text-button"
                      onClick={() => openDetails(offer)}
                    >
                      View full details
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h4>No recommendations yet</h4>
              <p>Adjust your filters to uncover matching lenders.</p>
            </div>
          )}
        </section>

        <section className="offer-controls">
          <div className="sort-control">
            <label htmlFor="sort-by">Sort by</label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
            >
              <option value="lowestPayment">Lowest payment</option>
              <option value="lowestCashToClose">Lowest cash to close</option>
              <option value="lowestRate">Lowest rate</option>
              <option value="lowest5yrCost">Lowest 5-year cost</option>
              <option value="lenderRating">Lender rating</option>
            </select>
          </div>
          <div className="filter-chips">
            <button
              type="button"
              className={classNames(
                "chip",
                filterChips.fixedOnly ? "chip-active" : ""
              )}
              onClick={() => toggleChip("fixedOnly")}
            >
              Fixed only
            </button>
            <button
              type="button"
              className={classNames(
                "chip",
                filterChips.armOnly ? "chip-active" : ""
              )}
              onClick={() => toggleChip("armOnly")}
            >
              ARM only
            </button>
            <button
              type="button"
              className={classNames(
                "chip",
                filterChips.noPoints ? "chip-active" : ""
              )}
              onClick={() => toggleChip("noPoints")}
            >
              No points
            </button>
            <button
              type="button"
              className={classNames(
                "chip",
                filterChips.noPmi ? "chip-active" : ""
              )}
              onClick={() => toggleChip("noPmi")}
            >
              No PMI
            </button>
          </div>
        </section>

        <section className="comparison-table-section">
          <header className="section-heading">
            <h3>Full comparison</h3>
            <p>
              Review side-by-side details across the lenders that match your
              filters.
            </p>
          </header>

          <div className="comparison-table-wrapper">
            {sortedOffers.length ? (
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th className="sticky-column">&nbsp;</th>
                    {visibleOffers.map((offer) => (
                      <th key={offer.id}>
                        <div className="offer-header">
                          <div className="offer-lender">{offer.lenderName}</div>
                          <div className="offer-program">{offer.programName}</div>
                          <div className="offer-header-actions">
                            <button
                              type="button"
                              className="table-link"
                              onClick={() => openDetails(offer)}
                            >
                              View full details
                            </button>
                          </div>
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
                    <th className="sticky-column">Monthly payment (P&amp;I)</th>
                    {visibleOffers.map((offer) => (
                      <td
                        key={`${offer.id}-payment`}
                        className={classNames(
                          "numeric",
                          offer.monthlyPayment === bestMonthlyPayment
                            ? "best-value"
                            : ""
                        )}
                      >
                        {formatCurrency(offer.monthlyPayment)}
                        {offer.monthlyPayment === bestMonthlyPayment && (
                          <span className="best-tag">Lowest</span>
                        )}
                      </td>
                    ))}
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
                    {visibleOffers.map((offer) => (
                      <td
                        key={`${offer.id}-cash`}
                        className={classNames(
                          "numeric",
                          offer.cashToClose === bestCashToClose ? "best-value" : ""
                        )}
                      >
                        {formatCurrency(offer.cashToClose)}
                        {offer.cashToClose === bestCashToClose && (
                          <span className="best-tag">Lowest</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th className="sticky-column">Cost over 5 years</th>
                    {visibleOffers.map((offer) => (
                      <td
                        key={`${offer.id}-cost5`}
                        className={classNames(
                          "numeric",
                          offer.cost5yr === bestCostFiveYear ? "best-value" : ""
                        )}
                      >
                        {formatCurrency(offer.cost5yr)}
                        {offer.cost5yr === bestCostFiveYear && (
                          <span className="best-tag">Lowest</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th className="sticky-column">Lock period</th>
                    {visibleOffers.map((offer) => (
                      <td key={`${offer.id}-lock`} className="numeric">
                        {offer.lockPeriodDays} days
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
                        <span className="rating-stars">{"★".repeat(Math.round(offer.rating))}</span>
                        <span className="rating-score">{offer.rating.toFixed(1)}</span>
                        <span className="rating-reviews">({offer.reviewsCount} reviews)</span>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            ) : (
              <div className="empty-state">
                <h4>No offers match those filters</h4>
                <p>Try clearing a filter or two to broaden your results.</p>
              </div>
            )}
          </div>
          {!showAllOffers && sortedOffers.length > visibleOffers.length && (
            <button
              type="button"
              className="show-all-button"
              onClick={() => setShowAllOffers(true)}
            >
              Show all offers ({sortedOffers.length})
            </button>
          )}
        </section>
      </section>

      {selectedOffer && (
        <div className="details-drawer-overlay" onClick={closeDetails}>
          <aside
            className="details-drawer"
            role="dialog"
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="drawer-close" type="button" onClick={closeDetails}>
              ×
            </button>
            <div className="drawer-content">
              <header className="drawer-header">
                <h3>{selectedOffer.lenderName}</h3>
                <p>{selectedOffer.programName}</p>
              </header>
              <section className="drawer-section">
                <h4>Loan basics</h4>
                <ul>
                  <li>
                    <strong>Rate:</strong> {formatPercent(selectedOffer.rate)}
                  </li>
                  <li>
                    <strong>APR:</strong> {formatPercent(selectedOffer.apr)}
                  </li>
                  <li>
                    <strong>Payment:</strong> {formatCurrency(selectedOffer.monthlyPayment)} (principal &amp; interest)
                  </li>
                  <li>
                    <strong>Term:</strong> {selectedOffer.termLabel}
                  </li>
                  <li>
                    <strong>Amortization:</strong> Level payments for the fixed period with
                    optional recast after major principal reductions.
                  </li>
                </ul>
              </section>
              <section className="drawer-section">
                <h4>Cost breakdown</h4>
                <ul>
                  <li>
                    <strong>Points / credits:</strong> {formatPoints(selectedOffer.points)}
                  </li>
                  <li>
                    <strong>Lender fees:</strong> {formatCurrency(selectedOffer.lenderFees)}
                  </li>
                  <li>
                    <strong>Third-party fees:</strong> {formatCurrency(selectedOffer.thirdPartyFees)}
                  </li>
                  <li>
                    <strong>Escrow estimate:</strong> {formatCurrency(selectedOffer.escrowEstimate)}
                  </li>
                </ul>
              </section>
              <section className="drawer-section">
                <h4>Why it could work</h4>
                <p>{selectedOffer.costNarrative}</p>
              </section>
              <footer className="drawer-actions">
                <button type="button" className="primary-button">
                  Apply now
                </button>
                <button type="button" className="secondary-button" onClick={closeDetails}>
                  Talk to a loan officer
                </button>
              </footer>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default CompareProducts;
