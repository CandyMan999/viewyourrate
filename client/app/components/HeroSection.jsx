"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";

function formatCurrencyInput(value) {
  const numeric = value.replace(/[^\d]/g, "");
  if (!numeric) return "";
  const numberValue = parseInt(numeric, 10);
  if (Number.isNaN(numberValue)) return "";
  return numberValue.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

const HeroSection = ({ mode, onModeChange, paymentValue, onPaymentChange, onStart }) => {
  const handlePaymentInput = (event) => {
    const formatted = formatCurrencyInput(event.target.value);
    onPaymentChange(formatted);
  };

  const handleBlur = () => {
    if (!paymentValue) {
      onPaymentChange("$2,500");
    }
  };

  return (
    <section className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={styles.panel}
      >
        <div className={styles.kickerRow}>
          <span className={styles.kicker}>Modern mortgage journey</span>
          <div className={styles.modeToggle}>
            <button
              type="button"
              className={`${styles.modeButton} ${mode === "Refinance" ? styles.modeActive : ""}`}
              onClick={() => onModeChange?.("Refinance")}
            >
              Refinance
            </button>
            <button
              type="button"
              className={`${styles.modeButton} ${mode === "Purchase" ? styles.modeActive : ""}`}
              onClick={() => onModeChange?.("Purchase")}
            >
              Purchase
            </button>
          </div>
        </div>

        <h1 className={styles.title}>Payment-first intake. Options you can trust.</h1>
        <p className={styles.subtitle}>
          Your refi or purchase flow lives in one hero experience. Set a comfortable payment, adjust the
          scenario, and see options on the next screen.
        </p>

        <div className={styles.inputStack}>
          <label className={styles.label} htmlFor="maxPayment">
            Max monthly payment
          </label>
          <div className={styles.inputRow}>
            <input
              id="maxPayment"
              className={styles.paymentInput}
              type="text"
              inputMode="numeric"
              placeholder="$2,500"
              value={paymentValue}
              onChange={handlePaymentInput}
              onBlur={handleBlur}
            />
            <span className={styles.helper}>Before taxes &amp; insurance · editable anytime</span>
          </div>
          <div className={styles.quickTags}>
            {["$2,000", "$2,500", "$3,000"].map((value) => (
              <button
                type="button"
                key={value}
                className={styles.chip}
                onClick={() => onPaymentChange(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.actionRow}>
          <button type="button" className={styles.primaryCta} onClick={onStart}>
            Launch {mode.toLowerCase()} flow
          </button>
          <div className={styles.miniList}>
            <span>• Keep progress if you toggle modes</span>
            <span>• See results on a dedicated screen</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
