"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./MortgageOptionsPage.module.css";

function formatCurrency(value) {
  if (value === null || value === undefined) return "—";
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

const detailFields = [
  { key: "apr", label: "APR" },
  { key: "rate", label: "Rate" },
  { key: "points", label: "Points / Credits" },
];

const explanations = [
  "To get closest to your payment target, we used lender credits. That can raise the rate slightly but lowers upfront costs.",
  "This option balances APR and payment for people who want stability without overpaying in points.",
  "This option uses points to reduce rate/APR. Higher upfront cost but lower total interest over time.",
];

const MortgageOptionsPage = ({ scenario, onEdit, onReset }) => {
  const [openDetail, setOpenDetail] = useState(null);

  const options = useMemo(() => {
    const basePayment = scenario?.maxMonthlyPayment || 2500;
    return [
      {
        id: "lowest-payment",
        label: "Lowest payment today",
        payment: Math.round(basePayment * 0.95),
        apr: "6.52%",
        rate: "6.25%",
        points: "+0.6 credits",
      },
      {
        id: "balanced",
        label: "Balanced",
        payment: Math.round(basePayment),
        apr: "6.27%",
        rate: "6.10%",
        points: "0 points",
      },
      {
        id: "long-term",
        label: "Lowest long-term cost",
        payment: Math.round(basePayment * 1.02),
        apr: "5.98%",
        rate: "5.90%",
        points: "-1.0 points",
      },
    ];
  }, [scenario]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <p className={styles.kicker}>Options aligned to your payment</p>
          <h2 className={styles.title}>Refi matches for ${scenario?.maxMonthlyPayment?.toLocaleString("en-US") || "your target"}</h2>
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

      <div className={styles.cardGrid}>
        {options.map((option, index) => (
          <motion.div
            key={option.id}
            className={styles.card}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.2 }}
          >
            <p className={styles.label}>{option.label}</p>
            <div className={styles.paymentRow}>
              <span className={styles.paymentValue}>{formatCurrency(option.payment)}</span>
              <span className={styles.paymentCaption}>Estimated monthly</span>
            </div>
            <div className={styles.metrics}>
              <div className={styles.metric}>
                <p className={styles.metricLabel}>APR</p>
                <p className={styles.metricValue}>{option.apr}</p>
              </div>
              <div className={styles.metric}>
                <p className={styles.metricLabel}>Rate</p>
                <p className={styles.metricValue}>{option.rate}</p>
              </div>
              <div className={styles.metric}>
                <p className={styles.metricLabel}>Points / Credits</p>
                <p className={styles.metricValue}>{option.points}</p>
              </div>
            </div>
            <p className={styles.explanation}>{explanations[index]}</p>

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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MortgageOptionsPage;
