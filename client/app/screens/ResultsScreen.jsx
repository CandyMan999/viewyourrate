"use client";

import React from "react";
import styles from "./ResultsScreen.module.css";

const ResultsScreen = ({ mode, scenario, pricingState, onEdit, onReset, onRetryPricing, children }) => {
  const summary = [
    scenario?.quoteType || mode,
    scenario?.stateSelection ? `State ${scenario.stateSelection}` : null,
    scenario?.creditScore ? `${scenario.creditScore}+ credit` : null,
  ].filter(Boolean);

  const paymentTarget =
    scenario?.quoteType === "Purchase"
      ? scenario?.purchasePrice
        ? `Price ${scenario.purchasePrice.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })}`
        : "Purchase"
      : scenario?.maxMonthlyPayment
        ? `Target ${scenario.maxMonthlyPayment.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })}`
        : "Refinance";

  return (
    <section className={styles.layout}>
      <div className={styles.summaryCard}>
        <div>
          <p className={styles.kicker}>Results</p>
          <h1 className={styles.title}>{paymentTarget}</h1>
          <p className={styles.subtitle}>
            Sorted by comfort-first. Toggle back to edit anytime and we’ll update pricing in place.
          </p>
          {summary.length > 0 && <p className={styles.summaryLine}>{summary.join(" · ")}</p>}
        </div>
        <div className={styles.summaryActions}>
          <button type="button" className={styles.ghostButton} onClick={onReset}>
            Start over
          </button>
          <button type="button" className={styles.primaryButton} onClick={onEdit}>
            Adjust inputs
          </button>
        </div>
      </div>

      <div className={styles.body}>{children}</div>

      {pricingState.status === "error" && (
        <div className={styles.inlineError}>
          <p className={styles.errorText}>Pricing hit a snag. Try again?</p>
          <button type="button" className={styles.retryButton} onClick={onRetryPricing}>
            Retry pricing
          </button>
        </div>
      )}
    </section>
  );
};

export default ResultsScreen;
