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

const HeroSection = ({
  paymentValue,
  onPaymentChange,
  onStartRefinance,
  onStartPurchase,
  activeMode,
}) => {
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
        <p className={styles.kicker}>Refi-first · Payment-first</p>
        <h1 className={styles.title}>Find a payment that feels right.</h1>
        <p className={styles.subtitle}>
          Tell us your ideal max monthly payment and we’ll craft options that prioritize comfort.
        </p>

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
          <span className={styles.helper}>Before taxes &amp; insurance</span>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.primaryCta}
            onClick={() => onStartRefinance(paymentValue)}
          >
            Refinance
          </button>
          <button
            type="button"
            className={`${styles.secondaryCta} ${activeMode === "Purchase" ? styles.secondaryActive : ""}`}
            onClick={() => onStartPurchase(paymentValue)}
          >
            Purchase
          </button>
        </div>
        <p className={styles.note}>We start with refinance. Purchase is available when needed.</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
