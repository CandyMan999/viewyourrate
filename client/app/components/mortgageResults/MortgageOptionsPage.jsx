"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChatExplainPill from "./ChatExplainPill";
import styles from "./MortgageOptionsPage.module.css";

function formatCurrency(value) {
  if (value === null || value === undefined) return "—";
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

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
  onReset,
  onRetryPricing,
}) => {
  const [openDetail, setOpenDetail] = useState(null);
  const isLoading = pricingStatus === "loading";
  const hasError = pricingStatus === "error";

  const scenarioSummary = useMemo(() => {
    if (!scenario) return "";
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

  const formattedOptions = useMemo(() => {
    if (!pricing?.options?.length) return [];

    return pricing.options.map((option) => {
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
  }, [pricing?.options, scenario?.maxMonthlyPayment]);

  const headerPrompt = useMemo(
    () =>
      `Explain what "Refi matches for ${formatCurrency(
        scenario?.maxMonthlyPayment || 2500
      )}" means and how the options align to the borrower's payment target. Keep it concise.`,
    [scenario?.maxMonthlyPayment]
  );

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

    if (!formattedOptions.length) {
      return (
        <div className={styles.errorBox}>
          <p className={styles.errorTitle}>No options available yet</p>
          <p className={styles.errorText}>
            We’ll show your top three refinance matches as soon as pricing is ready.
          </p>
        </div>
      );
    }

    return (
      <div className={styles.cardGrid}>
        {formattedOptions.map((option, index) => (
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
              <button
                className={styles.detailToggle}
                onClick={() => setOpenDetail(openDetail === option.id ? null : option.id)}
              >
                {openDetail === option.id ? "Hide details" : "Show details"}
              </button>
              <AnimatePresence initial={false}>
                {openDetail === option.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className={styles.detailContent}
                  >
                    {detailFields.map((field) => (
                      <div key={field.key} className={styles.detailRow}>
                        <span className={styles.detailLabel}>{field.label}</span>
                        <span className={styles.detailValue}>{option[field.key]}</span>
                      </div>
                    ))}
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
                    {option.lockPeriodDays && (
                      <div className={styles.detailRow}>
                        <span className={styles.detailLabel}>Lock period</span>
                        <span className={styles.detailValue}>{option.lockPeriodDays} days</span>
                      </div>
                    )}
                    {option.cashToClose !== undefined && option.cashToClose !== null && (
                      <div className={styles.detailRow}>
                        <span className={styles.detailLabel}>Points / credits impact</span>
                        <span className={styles.detailValue}>
                          {formatCurrency(option.cashToClose)}
                        </span>
                      </div>
                    )}
                    {option.productName && (
                      <div className={styles.detailRow}>
                        <span className={styles.detailLabel}>Product</span>
                        <span className={styles.detailValue}>{option.productName}</span>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <p className={styles.kicker}>Options aligned to your payment</p>
          <div className={styles.titleRow}>
            <h2 className={styles.title}>Refi matches for ${scenario?.maxMonthlyPayment?.toLocaleString("en-US") || "your target"}</h2>
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

      {renderBody()}
    </section>
  );
};

export default MortgageOptionsPage;
