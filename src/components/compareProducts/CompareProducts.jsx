import React, { useEffect, useMemo, useState } from "react";

const compareResultsStyles = `
.mortgage-results-page {
  font-family: "Inter", "Segoe UI", system-ui, -apple-system, sans-serif;
  background-color: #f7f8fa;
  color: #1f2933;
  min-height: 100vh;
  padding-bottom: 64px;
}

.scenario-summary-bar {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #e4e8ef;
  border-bottom: 1px solid rgba(31, 41, 51, 0.1);
}

.summary-content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.summary-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 0.95rem;
}

.scenario-line {
  font-weight: 600;
}

.timestamp-line {
  color: #52606d;
  font-size: 0.85rem;
}

.edit-scenario-button {
  background: none;
  border: none;
  color: #2a5bd7;
  font-weight: 600;
  cursor: pointer;
  padding: 6px 0;
}

.edit-scenario-button:hover {
  text-decoration: underline;
}

.recommended-section,
.controls-section,
.comparison-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 24px 0;
}

.section-title {
  font-size: 1.6rem;
  margin-bottom: 16px;
  font-weight: 700;
}

.recommended-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.recommended-card {
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card-badge {
  align-self: flex-start;
  background-color: rgba(42, 91, 215, 0.12);
  color: #2a5bd7;
  font-weight: 600;
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 0.85rem;
}

.card-headline {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.card-headline .rate {
  font-size: 2.25rem;
  font-weight: 700;
}

.card-headline .payment {
  font-size: 1.1rem;
  color: #364152;
}

.card-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  background-color: #f0f4ff;
  color: #1d3d8f;
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.cost-snapshot {
  background-color: #f8fafc;
  border-radius: 12px;
  padding: 16px;
  display: grid;
  gap: 12px;
}

.snapshot-label {
  display: block;
  color: #52606d;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.snapshot-value {
  display: block;
  font-weight: 700;
  font-size: 1rem;
}

.primary-button {
  background: linear-gradient(135deg, #2a5bd7, #1d3d8f);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  padding: 12px 16px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.primary-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 20px rgba(42, 91, 215, 0.25);
}

.secondary-link {
  background: none;
  border: none;
  color: #2a5bd7;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  align-self: flex-start;
}

.secondary-link:hover {
  text-decoration: underline;
}

.controls-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
}

.sort-control {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-weight: 600;
}

.sort-control select {
  min-width: 200px;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid rgba(82, 96, 109, 0.4);
  font-size: 0.95rem;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-chip {
  border-radius: 999px;
  border: 1px solid rgba(42, 91, 215, 0.25);
  background-color: #ffffff;
  color: #2a5bd7;
  padding: 8px 14px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;
}

.filter-chip.active {
  background-color: #2a5bd7;
  color: #ffffff;
  box-shadow: 0 8px 16px rgba(42, 91, 215, 0.25);
}

.comparison-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
}

.show-all-button {
  border: none;
  background: none;
  color: #2a5bd7;
  font-weight: 600;
  cursor: pointer;
}

.show-all-button:hover {
  text-decoration: underline;
}

.comparison-table-wrapper {
  overflow-x: auto;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);
}

.comparison-table {
  border-collapse: separate;
  border-spacing: 0;
  min-width: 700px;
  width: 100%;
}

.comparison-table th,
.comparison-table td {
  padding: 16px;
  border-bottom: 1px solid rgba(148, 163, 184, 0.3);
  vertical-align: middle;
  background-color: #ffffff;
}

.comparison-table thead th {
  position: sticky;
  top: 0;
  background-color: #f0f4ff;
  z-index: 5;
  font-size: 0.9rem;
  text-align: left;
}

.sticky-column {
  position: sticky;
  left: 0;
  background-color: #f0f4ff;
  z-index: 6;
  text-align: left;
  font-weight: 600;
  min-width: 200px;
}

.numeric {
  text-align: right;
  font-variant-numeric: tabular-nums;
}

.numeric .highlight-badge {
  display: inline-block;
  margin-left: 8px;
  padding: 4px 8px;
  border-radius: 999px;
  background-color: rgba(34, 197, 94, 0.18);
  color: #047857;
  font-size: 0.75rem;
  font-weight: 600;
}

.highlight {
  background-color: rgba(34, 197, 94, 0.08);
}

.offer-header {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.offer-lender {
  font-weight: 700;
  font-size: 1rem;
}

.table-details-link {
  align-self: flex-start;
  border: none;
  background: none;
  color: #2a5bd7;
  font-weight: 600;
  cursor: pointer;
}

.table-details-link:hover {
  text-decoration: underline;
}

.rating-stars {
  display: inline-block;
  margin-right: 6px;
  font-weight: 600;
}

.rating-reviews {
  color: #52606d;
  font-size: 0.85rem;
}

.details-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(15, 23, 42, 0.55);
  display: flex;
  justify-content: flex-end;
  z-index: 30;
  padding: 24px;
}

.details-drawer {
  background-color: #ffffff;
  width: min(420px, 100%);
  border-radius: 24px;
  padding: 32px 24px 24px;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: auto;
  position: relative;
}

.close-button {
  position: absolute;
  top: 18px;
  right: 18px;
  border: none;
  background: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #52606d;
}

.close-button:hover {
  color: #1f2933;
}

.details-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 16px;
}

.details-section h4 {
  margin-bottom: 8px;
  font-size: 1.05rem;
}

.details-section p,
.details-section li {
  color: #364152;
  line-height: 1.5;
  font-size: 0.95rem;
}

.details-section ul {
  padding-left: 18px;
  display: grid;
  gap: 8px;
}

.details-actions {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.secondary-button {
  border: 1px solid rgba(31, 41, 51, 0.2);
  background-color: #ffffff;
  border-radius: 12px;
  padding: 12px 16px;
  font-weight: 600;
  cursor: pointer;
}

.secondary-button:hover {
  background-color: #f3f4f6;
}

@media (max-width: 768px) {
  .summary-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .comparison-table {
    min-width: 600px;
  }

  .details-overlay {
    padding: 0;
  }

  .details-drawer {
    border-radius: 0;
    width: 100%;
  }
}

@media (max-width: 540px) {
  .mortgage-results-page {
    padding-bottom: 48px;
  }

  .recommended-section,
  .controls-section,
  .comparison-section {
    padding-inline: 16px;
  }

  .recommended-card {
    padding: 20px;
  }
}
`;

const loanOffers = [
  {
    id: "offer-1",
    lenderName: "Acme Mortgage",
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
    productType: "fixed",
    hasPMI: false,
    hasPoints: true,
    isRecommended: true,
    recommendationTag: "🏁 Lowest monthly payment",
    termYears: 30,
  },
  {
    id: "offer-2",
    lenderName: "Bluebonnet Home Loans",
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
    productType: "fixed",
    hasPMI: false,
    hasPoints: false,
    isRecommended: true,
    recommendationTag: "⚡ Lowest upfront cost",
    termYears: 30,
  },
  {
    id: "offer-3",
    lenderName: "Lone Star Lending",
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
    productType: "fixed",
    hasPMI: false,
    hasPoints: true,
    isRecommended: true,
    recommendationTag: "🔒 Best long-term savings",
    termYears: 30,
  },
  {
    id: "offer-4",
    lenderName: "MetroFlex Bank",
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
    productType: "arm",
    hasPMI: false,
    hasPoints: true,
    isRecommended: false,
    recommendationTag: "",
    termYears: 7,
  },
  {
    id: "offer-5",
    lenderName: "Pioneer Credit Union",
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
    productType: "fixed",
    hasPMI: true,
    hasPoints: false,
    isRecommended: false,
    recommendationTag: "",
    termYears: 30,
  },
  {
    id: "offer-6",
    lenderName: "Riverstone Capital",
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
    productType: "arm",
    hasPMI: false,
    hasPoints: true,
    isRecommended: false,
    recommendationTag: "",
    termYears: 5,
  },
  {
    id: "offer-7",
    lenderName: "Heritage Mortgage",
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
    productType: "fixed",
    hasPMI: false,
    hasPoints: true,
    isRecommended: false,
    recommendationTag: "",
    termYears: 30,
  },
  {
    id: "offer-8",
    lenderName: "VistaView Loans",
    rate: 6.15,
    apr: 6.24,
    monthlyPayment: 2556,
    points: -0.25,
    lenderFees: 600,
    cashToClose: 24620,
    cost5yr: 150900,
    lockPeriodDays: 30,
    prepaymentPenalty: false,
    rating: 4.5,
    reviewsCount: 134,
    productType: "fixed",
    hasPMI: false,
    hasPoints: false,
    isRecommended: false,
    recommendationTag: "",
    termYears: 30,
  },
];

const sortOptions = [
  { value: "payment", label: "Lowest payment" },
  { value: "cash", label: "Lowest cash to close" },
  { value: "rate", label: "Lowest rate" },
  { value: "cost5", label: "Lowest 5-year cost" },
  { value: "rating", label: "Lender rating" },
];

const defaultScenario = {
  quoteType: "Purchase",
  purchasePrice: 450000,
  downPaymentPercent: 20,
  termYears: 30,
  creditScore: 780,
  location: "Texas",
  lendersCount: loanOffers.length,
  timestamp: new Date().toISOString(),
};

const formatter = new Intl.NumberFormat("en-US");

const CompareProducts = ({ scenario, onEditScenario }) => {
  const [selectedSort, setSelectedSort] = useState(sortOptions[0].value);
  const [filters, setFilters] = useState({
    fixedOnly: false,
    armOnly: false,
    noPoints: false,
    noPMI: false,
  });
  const [showAllOffers, setShowAllOffers] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const resolvedScenario = useMemo(() => {
    const merged = {
      ...defaultScenario,
      ...(scenario || {}),
    };

    const purchasePrice = Number(merged.purchasePrice);
    const downPaymentPercent = Number(merged.downPaymentPercent);

    return {
      quoteType: merged.quoteType || "Purchase",
      purchasePrice: Number.isFinite(purchasePrice)
        ? purchasePrice
        : defaultScenario.purchasePrice,
      downPaymentPercent: Number.isFinite(downPaymentPercent)
        ? downPaymentPercent
        : defaultScenario.downPaymentPercent,
      termYears: merged.termYears || defaultScenario.termYears,
      creditScore: merged.creditScore || defaultScenario.creditScore,
      location:
        merged.stateSelection || merged.location || defaultScenario.location,
      lendersCount: loanOffers.length,
      lastUpdated:
        merged.timestamp instanceof Date
          ? merged.timestamp
          : new Date(merged.timestamp || defaultScenario.timestamp),
    };
  }, [scenario]);

  const recommendedOffers = useMemo(() => {
    const recs = loanOffers.filter((offer) => offer.isRecommended);
    if (recs.length > 0) {
      return recs.slice(0, 3);
    }
    return [...loanOffers]
      .sort((a, b) => a.monthlyPayment - b.monthlyPayment)
      .slice(0, 3);
  }, []);

  const filteredSortedOffers = useMemo(() => {
    let result = [...loanOffers];

    if (filters.fixedOnly && !filters.armOnly) {
      result = result.filter((offer) => offer.productType === "fixed");
    }

    if (filters.armOnly && !filters.fixedOnly) {
      result = result.filter((offer) => offer.productType === "arm");
    }

    if (filters.noPoints) {
      result = result.filter(
        (offer) => offer.hasPoints === false || offer.points <= 0
      );
    }

    if (filters.noPMI) {
      result = result.filter((offer) => offer.hasPMI === false);
    }

    switch (selectedSort) {
      case "payment":
        result.sort((a, b) => a.monthlyPayment - b.monthlyPayment);
        break;
      case "cash":
        result.sort((a, b) => a.cashToClose - b.cashToClose);
        break;
      case "rate":
        result.sort((a, b) => a.rate - b.rate);
        break;
      case "cost5":
        result.sort((a, b) => a.cost5yr - b.cost5yr);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [filters, selectedSort]);

  const visibleOffers = useMemo(() => {
    if (showAllOffers) {
      return filteredSortedOffers;
    }
    return filteredSortedOffers.slice(0, 4);
  }, [filteredSortedOffers, showAllOffers]);

  const lowestPayment = useMemo(() => {
    if (filteredSortedOffers.length === 0) return null;
    return Math.min(
      ...filteredSortedOffers.map((offer) => offer.monthlyPayment)
    );
  }, [filteredSortedOffers]);

  const lowestCash = useMemo(() => {
    if (filteredSortedOffers.length === 0) return null;
    return Math.min(...filteredSortedOffers.map((offer) => offer.cashToClose));
  }, [filteredSortedOffers]);

  const lowestCost5 = useMemo(() => {
    if (filteredSortedOffers.length === 0) return null;
    return Math.min(...filteredSortedOffers.map((offer) => offer.cost5yr));
  }, [filteredSortedOffers]);

  const handleFilterToggle = (key) => {
    setFilters((prev) => {
      const nextValue = !prev[key];
      if (key === "fixedOnly" && nextValue) {
        return { ...prev, fixedOnly: true, armOnly: false };
      }
      if (key === "armOnly" && nextValue) {
        return { ...prev, armOnly: true, fixedOnly: false };
      }
      return { ...prev, [key]: nextValue };
    });
  };

  const toNumber = (value, fallback = 0) => {
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : fallback;
  };

  const formatCurrency = (value) => `$${formatter.format(toNumber(value))}`;
  const formatPercent = (value) => `${toNumber(value).toFixed(3)}%`;
  const formatPoints = (value) => {
    const numeric = toNumber(value, 0);
    if (numeric > 0) {
      return `${numeric.toFixed(2)} points`;
    }
    if (numeric < 0) {
      return `${Math.abs(numeric).toFixed(2)} credits`;
    }
    return "0 points";
  };

  const handleDetailsOpen = (offer) => {
    setSelectedOffer(offer);
    document.body.style.overflow = "hidden";
  };

  const handleDetailsClose = () => {
    setSelectedOffer(null);
    document.body.style.overflow = "";
  };

  const showAllRemaining =
    !showAllOffers && filteredSortedOffers.length > visibleOffers.length;

  const downPaymentLabel = Number.isFinite(resolvedScenario.downPaymentPercent)
    ? `${
        resolvedScenario.downPaymentPercent % 1 === 0
          ? resolvedScenario.downPaymentPercent
          : resolvedScenario.downPaymentPercent.toFixed(1)
      }% down`
    : "-- down";

  const purchaseDescriptor =
    resolvedScenario.quoteType &&
    resolvedScenario.quoteType.toLowerCase() === "refinance"
      ? "refinance"
      : "purchase";

  const summaryText = `🏠 ${formatCurrency(
    resolvedScenario.purchasePrice
  )} ${purchaseDescriptor} • ${downPaymentLabel} • ${
    resolvedScenario.termYears
  }-year term • ${resolvedScenario.creditScore} credit • ${
    resolvedScenario.location
  }`;

  const lastUpdatedText = `Showing rates from ${
    resolvedScenario.lendersCount
  } lenders as of ${resolvedScenario.lastUpdated.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  })} (rates may change)`;

  return (
    <>
      <style>{compareResultsStyles}</style>
      <div className="mortgage-results-page">
        <div className="scenario-summary-bar">
          <div className="summary-content">
            <div className="summary-text">
              <div className="scenario-line">{summaryText}</div>
              <div className="timestamp-line">{lastUpdatedText}</div>
            </div>
            <button
              className="edit-scenario-button"
              type="button"
              onClick={() => onEditScenario?.()}
            >
              Edit scenario
            </button>
          </div>
        </div>

        <section className="recommended-section">
          <h2 className="section-title">Recommended options for you</h2>
          <div className="recommended-grid">
            {recommendedOffers.map((offer) => (
              <article key={offer.id} className="recommended-card">
                <div className="card-badge">{offer.recommendationTag}</div>
                <div className="card-headline">
                  <div className="rate">{formatPercent(offer.apr)}</div>
                  <div className="payment">{`${formatCurrency(
                    offer.monthlyPayment
                  )} /mo (P&I)`}</div>
                </div>
                <div className="card-chips">
                  <span className="chip">
                    {offer.termYears
                      ? `${offer.termYears}-year ${offer.productType}`
                      : "30-year fixed"}
                  </span>
                  <span className="chip">{formatPoints(offer.points)}</span>
                  <span className="chip">Lender: {offer.lenderName}</span>
                </div>
                <div className="cost-snapshot">
                  <div>
                    <span className="snapshot-label">Cash to close</span>
                    <span className="snapshot-value">
                      {formatCurrency(offer.cashToClose)}
                    </span>
                  </div>
                  <div>
                    <span className="snapshot-label">
                      Total cost over 5 years
                    </span>
                    <span className="snapshot-value">
                      {formatCurrency(offer.cost5yr)}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="primary-button"
                  onClick={() => handleDetailsOpen(offer)}
                >
                  Continue with this rate
                </button>
                <button
                  type="button"
                  className="secondary-link"
                  onClick={() => handleDetailsOpen(offer)}
                >
                  View full details
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="controls-section">
          <div className="controls-row">
            <label className="sort-control">
              <span>Sort by</span>
              <select
                value={selectedSort}
                onChange={(event) => setSelectedSort(event.target.value)}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <div className="filters">
              <button
                type="button"
                className={`filter-chip ${filters.fixedOnly ? "active" : ""}`}
                onClick={() => handleFilterToggle("fixedOnly")}
              >
                Fixed only
              </button>
              <button
                type="button"
                className={`filter-chip ${filters.armOnly ? "active" : ""}`}
                onClick={() => handleFilterToggle("armOnly")}
              >
                ARM only
              </button>
              <button
                type="button"
                className={`filter-chip ${filters.noPoints ? "active" : ""}`}
                onClick={() => handleFilterToggle("noPoints")}
              >
                No points
              </button>
              <button
                type="button"
                className={`filter-chip ${filters.noPMI ? "active" : ""}`}
                onClick={() => handleFilterToggle("noPMI")}
              >
                No PMI
              </button>
            </div>
          </div>
        </section>

        <section className="comparison-section">
          <div className="comparison-header">
            <h2 className="section-title">Compare all offers</h2>
            {showAllRemaining && (
              <button
                type="button"
                className="show-all-button"
                onClick={() => setShowAllOffers(true)}
              >
                Show all offers ({filteredSortedOffers.length})
              </button>
            )}
          </div>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="sticky-column" />
                  {visibleOffers.map((offer) => (
                    <th key={offer.id}>
                      <div className="offer-header">
                        <div className="offer-lender">{offer.lenderName}</div>
                        <button
                          type="button"
                          className="table-details-link"
                          onClick={() => handleDetailsOpen(offer)}
                        >
                          View full details
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
                      lowestCash !== null && offer.cashToClose === lowestCash;
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
                      lowestCost5 !== null && offer.cost5yr === lowestCost5;
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
          </div>
        </section>

        {selectedOffer && (
          <div className="details-overlay" onClick={handleDetailsClose}>
            <aside
              className="details-drawer"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="close-button"
                aria-label="Close details"
                onClick={handleDetailsClose}
              >
                ×
              </button>
              <div className="details-content">
                <h3>{selectedOffer.lenderName}</h3>
                <div className="details-section">
                  <h4>Loan basics</h4>
                  <p>
                    Rate: {formatPercent(selectedOffer.rate)} APR • Payment:{" "}
                    {formatCurrency(selectedOffer.monthlyPayment)}/mo (principal
                    & interest)
                  </p>
                  <p>
                    Term: {selectedOffer.termYears || "30-year fixed"} • Lock
                    period: {selectedOffer.lockPeriodDays}-day •{" "}
                    {selectedOffer.prepaymentPenalty ? "Includes" : "No"}{" "}
                    prepayment penalty
                  </p>
                  <p>
                    This loan amortizes over the full term, keeping your payment
                    consistent as long as rates stay fixed.
                  </p>
                </div>
                <div className="details-section">
                  <h4>Cost breakdown</h4>
                  <ul>
                    <li>
                      Points / credits: {formatPoints(selectedOffer.points)}
                    </li>
                    <li>
                      Lender fees: {formatCurrency(selectedOffer.lenderFees)}
                    </li>
                    <li>
                      Third-party fees:{" "}
                      {formatCurrency(selectedOffer.thirdPartyFees || 2100)}
                    </li>
                    <li>
                      Estimated escrow at closing:{" "}
                      {formatCurrency(selectedOffer.escrowEstimate || 4200)}
                    </li>
                    <li>
                      Cash to close: {formatCurrency(selectedOffer.cashToClose)}
                    </li>
                  </ul>
                </div>
                <div className="details-section">
                  <h4>Why this could work</h4>
                  <p>
                    {lowestCost5
                      ? `If you stay in this home for around five years, this option is projected to be ${formatCurrency(
                          Math.max(0, selectedOffer.cost5yr - lowestCost5)
                        )} more than the lowest-cost alternative over the same period.`
                      : "If you stay in this home for around five years, this loan keeps your costs predictable compared with similar offers."}
                  </p>
                  <p>
                    Compare the cash-to-close and monthly payment with other
                    options to find your ideal balance of upfront versus ongoing
                    cost.
                  </p>
                </div>
              </div>
              <div className="details-actions">
                <button type="button" className="primary-button">
                  Apply now
                </button>
                <button type="button" className="secondary-button">
                  Talk to a loan officer
                </button>
              </div>
            </aside>
          </div>
        )}
      </div>
    </>
  );
};

export default CompareProducts;
