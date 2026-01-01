"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChatExplainPill from "./ChatExplainPill";
import styles from "./MortgageOptionsPage.module.css";

function formatCurrency(value) {
  if (value === null || value === undefined) return "—";
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function formatPercent(value) {
  if (value === null || value === undefined) return "—";
  return `${Number(value).toFixed(0)}%`;
}

const defaultFallbackOptions = [
  {
    id: "fallback-1",
    label: "Lowest monthly",
    rate: 6.125,
    apr: 6.3,
    points: 0.25,
    monthlyPayment: 2420,
    cashToClose: 21800,
    lockPeriodDays: 30,
    productName: "30-Year Fixed",
    explanation: "Balanced payment and costs for buyers who want predictability.",
  },
  {
    id: "fallback-2",
    label: "Low cash to close",
    rate: 6.375,
    apr: 6.52,
    points: -0.5,
    monthlyPayment: 2485,
    cashToClose: 18400,
    lockPeriodDays: 45,
    productName: "30-Year Fixed with credit",
    explanation: "Higher rate with credits to reduce upfront cash needs.",
  },
  {
    id: "fallback-3",
    label: "Lower rate",
    rate: 5.875,
    apr: 6.12,
    points: 1.0,
    monthlyPayment: 2325,
    cashToClose: 25700,
    lockPeriodDays: 60,
    productName: "30-Year Fixed buydown",
    explanation: "Lower rate with points for stronger long-term savings.",
  },
  {
    id: "fallback-4",
    label: "Shorter term",
    rate: 5.65,
    apr: 5.88,
    points: 0.75,
    monthlyPayment: 2680,
    cashToClose: 23600,
    lockPeriodDays: 45,
    productName: "20-Year Fixed",
    explanation: "Higher payment but faster equity buildup.",
  },
];

const detailFields = [
  { key: "aprLabel", label: "APR" },
  { key: "rateLabel", label: "Rate" },
  { key: "pointsLabel", label: "Points / Credits", explainable: true },
];

const MortgageOptionsPage = ({
  scenario,
  pricing,
  pricingStatus,
  pricingError,
  onEdit,
  onFixLtv,
  onReset,
  onRetryPricing,
  onSelectOption,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSort, setSelectedSort] = useState("payment");
  const [showAll, setShowAll] = useState(false);
  const [filters, setFilters] = useState({
    noPoints: false,
  });
  const hasPricingOptions = Boolean(pricing?.options?.length);
  const isLoading = pricingStatus === "loading" && hasPricingOptions;
  const hasError = pricingStatus === "error" && hasPricingOptions;
  const isFallback = !hasPricingOptions;

  const scenarioSummary = useMemo(() => {
    if (!scenario) return "";

    if (scenario.quoteType === "Purchase") {
      const parts = [
        `purchase in ${scenario.stateSelection || "your state"}`,
        scenario.purchasePrice ? `home price ${formatCurrency(scenario.purchasePrice)}` : null,
        scenario.downPayment
          ? `down payment ${formatCurrency(scenario.downPayment)}`
          : scenario.downPaymentPercent
            ? `${Number(scenario.downPaymentPercent).toFixed(0)}% down`
            : null,
        scenario.creditScore ? `credit score around ${scenario.creditScore}+` : null,
        scenario.loanProgram ? `${scenario.loanProgram} program` : null,
      ].filter(Boolean);
      return parts.join(", ");
    }

    const parts = [
      scenario.quoteType ? `${scenario.quoteType.toLowerCase()} scenario` : null,
      scenario.maxMonthlyPayment
        ? `target monthly payment ${formatCurrency(scenario.maxMonthlyPayment)}`
        : null,
      scenario.stateSelection ? `property state ${scenario.stateSelection}` : null,
      scenario.creditScore ? `credit score around ${scenario.creditScore}+` : null,
      scenario.existingLoanBalance
        ? `current balance ${formatCurrency(scenario.existingLoanBalance)}`
        : null,
    ].filter(Boolean);
    return parts.join(", ");
  }, [scenario]);

  const ltvData = useMemo(() => {
    const homeValue =
      scenario?.quoteType === "Purchase"
        ? scenario?.purchasePrice
        : scenario?.estimatedHomeValue;
    if (!homeValue) {
      return { percent: null, indicator: "muted", insight: "", fixLabel: "", fixOverrides: null };
    }

    const loanAmount =
      scenario?.quoteType === "Purchase"
        ? Math.max(
            (scenario?.purchasePrice || 0) -
              (scenario?.downPayment ||
                ((scenario?.downPaymentPercent || 0) / 100) * (scenario?.purchasePrice || 0)),
            0
          )
        : (scenario?.existingLoanBalance || 0) + (scenario?.cashOutAmount || 0);
    const ltvPercent = (loanAmount / homeValue) * 100;
    let indicator = "green";
    let insight = "This is a strong LTV range. Pricing is typically better below 80%.";
    let fixLabel = "";
    let fixOverrides = null;

    if (ltvPercent > 90) {
      indicator = "red";
      insight =
        "Your LTV is high. Options may be limited or more expensive. Reducing cash-out or increasing home value/down payment can help.";
      const targetLoan = homeValue * 0.8;
      const suggestedCashOut = Math.max(0, Math.round(targetLoan - (scenario?.existingLoanBalance || 0)));
      fixLabel = "Explore 80% LTV";
      fixOverrides = { cashOutAmount: suggestedCashOut };
    } else if (ltvPercent > 80) {
      indicator = "amber";
      insight =
        "Your LTV is above 80%. Many lenders add mortgage insurance or adjust pricing in this range.";
      if (scenario?.cashOutAmount) {
        fixLabel = "Lower cash-out";
        const reducedCashOut = Math.max(0, Math.round(scenario.cashOutAmount * 0.5));
        fixOverrides = { cashOutAmount: reducedCashOut };
      }
    }

    const cashOutNote =
      scenario?.quoteType === "Purchase"
        ? ""
        : scenario?.cashOutAmount && scenario.cashOutAmount > 0
          ? "Cash-out increases your loan amount, which raises LTV. That can reduce available options."
          : "";

    return { percent: ltvPercent, indicator, insight, cashOutNote, fixLabel, fixOverrides };
  }, [scenario]);

  const formattedOptions = useMemo(() => {
    const rawOptions =
      pricing?.options?.length > 0 ? pricing.options : defaultFallbackOptions;

    const sortedOptions =
      scenario?.quoteType === "Purchase"
        ? [...rawOptions].sort((a, b) => {
            if (a.monthlyPayment === b.monthlyPayment) {
              const aprA = a.apr ?? a.rate ?? 0;
              const aprB = b.apr ?? b.rate ?? 0;
              return aprA - aprB;
            }
            return (a.monthlyPayment || 0) - (b.monthlyPayment || 0);
          })
        : rawOptions;

    return sortedOptions.map((option) => {
      const payment = option.monthlyPayment || scenario?.maxMonthlyPayment || 0;
      const formatPercent = (value) =>
        value === null || value === undefined ? "—" : `${Number(value).toFixed(3)}%`;

      const formatPoints = (value) => {
        if (value === null || value === undefined) return "—";
        if (value === 0) return "0 points";
        const absolute = Math.abs(value).toFixed(3);
        return value > 0 ? `${absolute} points` : `${absolute} credits`;
      };

      return {
        ...option,
        payment,
        aprLabel: formatPercent(option.apr ?? option.rate),
        rateLabel: formatPercent(option.rate),
        pointsLabel: formatPoints(option.points),
      };
    });
  }, [pricing?.options, scenario?.maxMonthlyPayment, scenario?.quoteType]);

  const filteredSortedOptions = useMemo(() => {
    let result = [...formattedOptions];

    if (filters.noPoints) {
      result = result.filter((option) => Number(option.points ?? 0) <= 0);
    }

    switch (selectedSort) {
      case "cash":
        result.sort((a, b) => (a.cashToClose ?? 0) - (b.cashToClose ?? 0));
        break;
      case "rate":
        result.sort((a, b) => (a.rate ?? 0) - (b.rate ?? 0));
        break;
      case "payment":
      default:
        result.sort((a, b) => (a.payment ?? 0) - (b.payment ?? 0));
        break;
    }

    return result;
  }, [formattedOptions, filters.noPoints, selectedSort]);

  const recommendedOptions = useMemo(() => filteredSortedOptions.slice(0, 3), [filteredSortedOptions]);

  const visibleOptions = useMemo(() => {
    if (showAll) return filteredSortedOptions;
    return filteredSortedOptions.slice(0, 6);
  }, [filteredSortedOptions, showAll]);

  const headerPrompt = useMemo(() => {
    if (scenario?.quoteType === "Purchase") {
      return `Explain how we sorted purchase options by monthly payment, then APR, and why that helps a buyer choose with confidence. Keep it concise.`;
    }

    return `Explain what "Refi matches for ${formatCurrency(
      scenario?.maxMonthlyPayment || 2500
    )}" means and how the options align to the borrower's payment target. Keep it concise.`;
  }, [scenario?.maxMonthlyPayment, scenario?.quoteType]);

  const pointsPrompt = useMemo(
    () =>
      `Explain what Points / Credits mean on a mortgage option and how they impact closing costs versus monthly payment. Keep the answer short and practical.`,
    []
  );

  const optionPrompt = (option) =>
    `Explain why the "${option.label}" choice shows a ${option.rateLabel} rate, ${option.aprLabel} APR, and ${option.pointsLabel} for a ${
      scenario?.quoteType || "refinance"
    } borrower with ${scenarioSummary || "the provided scenario"}. Keep the summary to a couple sentences.`;

  const renderBody = () => {
    if (isLoading) {
      return (
        <div className={styles.cardGrid}>
          {[0, 1, 2].map((index) => (
            <div key={index} className={`${styles.card} ${styles.loadingCard}`}>
              <div className={styles.loadingBar} />
              <div className={styles.loadingBar} />
              <div className={styles.loadingBar} />
            </div>
          ))}
        </div>
      );
    }

    if (hasError) {
      return (
        <div className={styles.errorBox}>
          <p className={styles.errorTitle}>We couldn’t load pricing right now.</p>
          <p className={styles.errorText}>{pricingError || "Please try again."}</p>
          <button type="button" className={styles.primaryButton} onClick={onRetryPricing}>
            Try again
          </button>
        </div>
      );
    }

    return (
      <>
        {isFallback && (
          <div className={styles.noticeBox}>
            <p className={styles.noticeTitle}>Showing sample offers for now</p>
            <p className={styles.noticeText}>
              Live pricing isn’t connected yet, so we’re showing example rates to preview the
              compare experience.
            </p>
          </div>
        )}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Recommended options for you</h3>
            <p className={styles.sectionSubtitle}>Sorted by your selected view.</p>
          </div>
          <div className={styles.cardGrid}>
            {recommendedOptions.map((option, index) => (
              <motion.div
                key={option.id}
                className={styles.card}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
              >
                <div className={styles.cardTop}>
                  <div>
                    <p className={styles.recommendedBadge}>Recommended</p>
                    <p className={styles.label}>{option.label}</p>
                  </div>
                  <ChatExplainPill
                    prompt={optionPrompt(option)}
                    context={scenarioSummary}
                    className={styles.inlinePill}
                  />
                </div>
                <div className={styles.paymentRow}>
                  <span className={styles.paymentValue}>{formatCurrency(option.payment)}</span>
                  <span className={styles.paymentCaption}>Estimated monthly</span>
                </div>
                <div className={styles.metrics}>
                  {detailFields.map((field) => (
                    <div key={field.key} className={styles.metric}>
                      <div className={styles.metricLabelRow}>
                        <p className={styles.metricLabel}>{field.label}</p>
                        {field.explainable && (
                          <ChatExplainPill
                            prompt={pointsPrompt}
                            context={scenarioSummary}
                            className={styles.tinyPill}
                          />
                        )}
                      </div>
                      <p className={styles.metricValue}>{option[field.key]}</p>
                    </div>
                  ))}
                </div>
                {option.explanation && <p className={styles.explanation}>{option.explanation}</p>}

                <div className={styles.details}>
                  <div className={styles.cardActions}>
                    <button
                      type="button"
                      className={styles.detailButton}
                      onClick={() => setSelectedOption(option)}
                    >
                      View details
                    </button>
                    {onSelectOption && (
                      <button
                        type="button"
                        className={styles.cardCta}
                        onClick={() => onSelectOption(option)}
                      >
                        Apply now
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <h3 className={styles.sectionTitle}>Compare more offers</h3>
              <p className={styles.sectionSubtitle}>
                Fine-tune your view to pick the right balance of rate and cash to close.
              </p>
            </div>
            <div className={styles.sectionControls}>
              <label className={styles.sortControl}>
                <span>Sort by</span>
                <select
                  className={styles.sortSelect}
                  value={selectedSort}
                  onChange={(event) => setSelectedSort(event.target.value)}
                >
                  <option value="payment">Lowest payment</option>
                  <option value="cash">Lowest cash to close</option>
                  <option value="rate">Lowest rate</option>
                </select>
              </label>
              <button
                type="button"
                className={`${styles.filterChip} ${filters.noPoints ? styles.filterChipActive : ""}`}
                onClick={() => setFilters((prev) => ({ ...prev, noPoints: !prev.noPoints }))}
              >
                No points
              </button>
            </div>
          </div>

          <div className={styles.cardGrid}>
            {visibleOptions.map((option, index) => (
              <motion.div
                key={option.id}
                className={styles.card}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
              >
                <div className={styles.cardTop}>
                  <p className={styles.label}>{option.label}</p>
                  <ChatExplainPill
                    prompt={optionPrompt(option)}
                    context={scenarioSummary}
                    className={styles.inlinePill}
                  />
                </div>
                <div className={styles.paymentRow}>
                  <span className={styles.paymentValue}>{formatCurrency(option.payment)}</span>
                  <span className={styles.paymentCaption}>Estimated monthly</span>
                </div>
                <div className={styles.metrics}>
                  {detailFields.map((field) => (
                    <div key={field.key} className={styles.metric}>
                      <div className={styles.metricLabelRow}>
                        <p className={styles.metricLabel}>{field.label}</p>
                        {field.explainable && (
                          <ChatExplainPill
                            prompt={pointsPrompt}
                            context={scenarioSummary}
                            className={styles.tinyPill}
                          />
                        )}
                      </div>
                      <p className={styles.metricValue}>{option[field.key]}</p>
                    </div>
                  ))}
                </div>
                {option.explanation && <p className={styles.explanation}>{option.explanation}</p>}

                <div className={styles.details}>
                  <div className={styles.cardActions}>
                    <button
                      type="button"
                      className={styles.detailButton}
                      onClick={() => setSelectedOption(option)}
                    >
                      View details
                    </button>
                    {onSelectOption && (
                      <button
                        type="button"
                        className={styles.cardCta}
                        onClick={() => onSelectOption(option)}
                      >
                        Apply now
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {!showAll && filteredSortedOptions.length > visibleOptions.length && (
            <div className={styles.showAllRow}>
              <button type="button" className={styles.showAllButton} onClick={() => setShowAll(true)}>
                Show all offers ({filteredSortedOptions.length})
              </button>
            </div>
          )}
        </section>
      </>
    );
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <p className={styles.kicker}>Options aligned to your payment</p>
          <div className={styles.titleRow}>
            <h2 className={styles.title}>
              {scenario?.quoteType === "Purchase"
                ? "Purchase matches sorted by monthly payment"
                : `Refi matches for ${formatCurrency(scenario?.maxMonthlyPayment) || "your target"}`}
            </h2>
            <ChatExplainPill
              prompt={headerPrompt}
              context={scenarioSummary}
              className={styles.inlinePill}
            />
          </div>
        </div>
        <div className={styles.actions}>
          <button className={styles.secondaryButton} onClick={onReset}>
            Start over
          </button>
          <button className={styles.primaryButton} onClick={onEdit}>
            Adjust inputs
          </button>
        </div>
      </div>

      <div className={styles.summaryBar}>
        <div className={styles.summaryText}>
          <p className={styles.summaryLabel}>Scenario summary</p>
          <p className={styles.summaryValue}>{scenarioSummary || "We’ll fill this in as you add details."}</p>
        </div>
        <div className={styles.chipRow}>
          <div className={`${styles.chip} ${styles[`chip-${ltvData.indicator}`]}`}>
            <span className={styles.chipLabel}>LTV</span>
            <span className={styles.chipValue}>{formatPercent(ltvData.percent)}</span>
          </div>
          {scenario?.quoteType === "Purchase" ? (
            <>
              <div className={styles.chip}>
                <span className={styles.chipLabel}>Price</span>
                <span className={styles.chipValue}>
                  {formatCurrency(scenario?.purchasePrice)}
                </span>
              </div>
              <div className={styles.chip}>
                <span className={styles.chipLabel}>Down payment</span>
                <span className={styles.chipValue}>
                  {scenario.downPayment
                    ? formatCurrency(scenario.downPayment)
                    : scenario.downPaymentPercent
                      ? `${Number(scenario.downPaymentPercent).toFixed(0)}%`
                      : "—"}
                </span>
              </div>
              {scenario?.loanProgram && (
                <div className={styles.chip}>
                  <span className={styles.chipLabel}>Program</span>
                  <span className={styles.chipValue}>{scenario.loanProgram}</span>
                </div>
              )}
            </>
          ) : null}
          {scenario?.cashOutAmount ? (
            <div className={styles.chip}>
              <span className={styles.chipLabel}>Cash-out</span>
              <span className={styles.chipValue}>{formatCurrency(scenario.cashOutAmount)}</span>
            </div>
          ) : null}
        </div>
      </div>

      {scenario?.quoteType !== "Purchase" && ltvData.insight && (
        <div className={styles.insightBox}>
          <div>
            <p className={styles.insightTitle}>LTV insight</p>
            <p className={styles.insightText}>{ltvData.insight}</p>
            {ltvData.cashOutNote && <p className={styles.insightText}>{ltvData.cashOutNote}</p>}
          </div>
          {ltvData.fixLabel && onFixLtv && ltvData.fixOverrides && (
            <button
              type="button"
              className={styles.tinyButton}
              onClick={() => onFixLtv(ltvData.fixOverrides)}
            >
              {ltvData.fixLabel}
            </button>
          )}
        </div>
      )}

      {renderBody()}

      <AnimatePresence>
        {selectedOption && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedOption(null)}
          >
            <motion.div
              className={styles.modalCard}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className={styles.modalClose}
                aria-label="Close details"
                onClick={() => setSelectedOption(null)}
              >
                ×
              </button>
              <div className={styles.modalHeader}>
                <div>
                  <p className={styles.modalKicker}>Option details</p>
                  <h3 className={styles.modalTitle}>{selectedOption.label}</h3>
                </div>
                <ChatExplainPill
                  prompt={optionPrompt(selectedOption)}
                  context={scenarioSummary}
                  className={styles.inlinePill}
                />
              </div>
              <div className={styles.modalStats}>
                <div>
                  <span className={styles.modalStatLabel}>Estimated payment</span>
                  <span className={styles.modalStatValue}>
                    {formatCurrency(selectedOption.payment)}
                  </span>
                </div>
                <div>
                  <span className={styles.modalStatLabel}>Rate / APR</span>
                  <span className={styles.modalStatValue}>
                    {selectedOption.rateLabel} / {selectedOption.aprLabel}
                  </span>
                </div>
                <div>
                  <span className={styles.modalStatLabel}>Points / credits</span>
                  <span className={styles.modalStatValue}>{selectedOption.pointsLabel}</span>
                </div>
              </div>
              <div className={styles.modalDetails}>
                {detailFields.map((field) => (
                  <div key={field.key} className={styles.detailRow}>
                    <span className={styles.detailLabel}>{field.label}</span>
                    <span className={styles.detailValue}>{selectedOption[field.key]}</span>
                  </div>
                ))}
                {scenario?.quoteType === "Purchase" && (
                  <>
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>Price</span>
                      <span className={styles.detailValue}>
                        {formatCurrency(scenario?.purchasePrice)}
                      </span>
                    </div>
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>Down payment</span>
                      <span className={styles.detailValue}>
                        {scenario?.downPayment
                          ? formatCurrency(scenario.downPayment)
                          : scenario?.downPaymentPercent
                            ? `${Number(scenario.downPaymentPercent).toFixed(0)}%`
                            : "—"}
                      </span>
                    </div>
                    {scenario?.loanProgram && (
                      <div className={styles.detailRow}>
                        <span className={styles.detailLabel}>Program</span>
                        <span className={styles.detailValue}>{scenario.loanProgram}</span>
                      </div>
                    )}
                  </>
                )}
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>State</span>
                  <span className={styles.detailValue}>{scenario?.stateSelection || "—"}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Credit band</span>
                  <span className={styles.detailValue}>
                    {scenario?.creditScore ? `${scenario.creditScore}+` : "—"}
                  </span>
                </div>
                {selectedOption.lockPeriodDays && (
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Lock period</span>
                    <span className={styles.detailValue}>
                      {selectedOption.lockPeriodDays} days
                    </span>
                  </div>
                )}
                {selectedOption.cashToClose !== undefined &&
                  selectedOption.cashToClose !== null && (
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>Cash to close</span>
                      <span className={styles.detailValue}>
                        {formatCurrency(selectedOption.cashToClose)}
                      </span>
                    </div>
                  )}
                {selectedOption.productName && (
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Product</span>
                    <span className={styles.detailValue}>{selectedOption.productName}</span>
                  </div>
                )}
              </div>
              {selectedOption.explanation && (
                <p className={styles.modalExplanation}>{selectedOption.explanation}</p>
              )}
              <div className={styles.modalActions}>
                {onSelectOption && (
                  <button
                    type="button"
                    className={styles.cardCta}
                    onClick={() => onSelectOption(selectedOption)}
                  >
                    Apply now
                  </button>
                )}
                <button
                  type="button"
                  className={styles.secondaryButton}
                  onClick={() => setSelectedOption(null)}
                >
                  Continue comparing
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MortgageOptionsPage;
