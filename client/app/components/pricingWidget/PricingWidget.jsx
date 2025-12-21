"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./PricingWidget.module.css";

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

function parseCurrency(value) {
  if (!value) return null;
  const numeric = value.toString().replace(/[^0-9.-]/g, "");
  const num = parseFloat(numeric);
  return Number.isNaN(num) ? null : num;
}

const creditBands = [
  { label: "780+", value: 780 },
  { label: "760 - 779", value: 760 },
  { label: "720 - 759", value: 720 },
  { label: "700 - 719", value: 700 },
  { label: "660 - 699", value: 660 },
  { label: "620 - 659", value: 620 },
];

const states = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

const stepOrder = ["payment", "balance", "credit", "advanced"];

const PricingWidget = ({ isOpen, mode, initialPayment, onClose, onComplete }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [formData, setFormData] = useState({
    maxMonthlyPayment: "",
    stateSelection: "",
    existingLoanBalance: "",
    estimatedHomeValue: "",
    creditScore: "",
    cashOutAmount: "",
    occupancy: "",
    propertyType: "",
  });

  useEffect(() => {
    if (isOpen) {
      setStepIndex(0);
      setShowAdvanced(false);
      setFormData((prev) => ({
        ...prev,
        maxMonthlyPayment: initialPayment || prev.maxMonthlyPayment,
      }));
    }
  }, [initialPayment, isOpen]);

  const currentStep = stepOrder[stepIndex];

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canContinue = useMemo(() => {
    if (mode === "Purchase") {
      return true;
    }
    switch (currentStep) {
      case "payment":
        return Boolean(formData.maxMonthlyPayment && formData.stateSelection);
      case "balance":
        return Boolean(formData.existingLoanBalance && formData.estimatedHomeValue);
      case "credit":
        return Boolean(formData.creditScore);
      case "advanced":
      default:
        return true;
    }
  }, [currentStep, formData, mode]);

  const handleNext = () => {
    if (stepIndex < stepOrder.length - 1) {
      setStepIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (stepIndex > 0) {
      setStepIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    const scenario = {
      quoteType: mode === "Purchase" ? "Purchase" : "Refinance",
      maxMonthlyPayment: parseCurrency(formData.maxMonthlyPayment) ?? 0,
      stateSelection: formData.stateSelection,
      existingLoanBalance: parseCurrency(formData.existingLoanBalance),
      estimatedHomeValue: parseCurrency(formData.estimatedHomeValue),
      creditScore: formData.creditScore,
      cashOutAmount: parseCurrency(formData.cashOutAmount),
      occupancy: formData.occupancy || "Primary",
      propertyType: formData.propertyType || "Single Family",
      timestamp: new Date().toISOString(),
    };
    onComplete?.(scenario);
  };

  const renderStep = () => {
    if (mode === "Purchase") {
      return (
        <div className={styles.stepCard}>
          <p className={styles.stepTitle}>Purchase flow</p>
          <p className={styles.stepSubtitle}>Purchase is available. We’ll reuse this intake soon.</p>
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="maxPaymentPurchase">
              Max monthly payment
            </label>
            <input
              id="maxPaymentPurchase"
              className={styles.input}
              value={formData.maxMonthlyPayment}
              placeholder="$2,500"
              onChange={(e) => updateField("maxMonthlyPayment", formatCurrencyInput(e.target.value))}
            />
          </div>
          <button className={styles.primaryButton} onClick={handleSubmit}>
            Continue to purchase options
          </button>
        </div>
      );
    }

    switch (currentStep) {
      case "payment":
        return (
          <div className={styles.stepCard}>
            <p className={styles.stepTitle}>Confirm your payment target</p>
            <p className={styles.stepSubtitle}>We’ll start with the comfort level you set.</p>
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="maxPayment">
                Max monthly payment
              </label>
              <input
                id="maxPayment"
                className={styles.input}
                type="text"
                inputMode="numeric"
                placeholder="$2,500"
                value={formData.maxMonthlyPayment}
                onChange={(e) => updateField("maxMonthlyPayment", formatCurrencyInput(e.target.value))}
              />
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="stateSelection">
                Property state
              </label>
              <select
                id="stateSelection"
                className={styles.select}
                value={formData.stateSelection}
                onChange={(e) => updateField("stateSelection", e.target.value)}
              >
                <option value="">Select state</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>
        );
      case "balance":
        return (
          <div className={styles.stepCard}>
            <p className={styles.stepTitle}>Your current loan</p>
            <p className={styles.stepSubtitle}>This helps us align options with today’s equity.</p>
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="existingLoanBalance">
                Current loan balance
              </label>
              <input
                id="existingLoanBalance"
                className={styles.input}
                type="text"
                inputMode="numeric"
                placeholder="$450,000"
                value={formData.existingLoanBalance}
                onChange={(e) =>
                  updateField("existingLoanBalance", formatCurrencyInput(e.target.value))
                }
              />
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="estimatedHomeValue">
                Estimated home value
              </label>
              <input
                id="estimatedHomeValue"
                className={styles.input}
                type="text"
                inputMode="numeric"
                placeholder="$650,000"
                value={formData.estimatedHomeValue}
                onChange={(e) =>
                  updateField("estimatedHomeValue", formatCurrencyInput(e.target.value))
                }
              />
            </div>
          </div>
        );
      case "credit":
        return (
          <div className={styles.stepCard}>
            <p className={styles.stepTitle}>Credit band</p>
            <p className={styles.stepSubtitle}>A range is enough to tailor pricing.</p>
            <div className={styles.bandGrid}>
              {creditBands.map((band) => (
                <button
                  key={band.value}
                  type="button"
                  className={`${styles.bandButton} ${
                    formData.creditScore === band.value ? styles.bandActive : ""
                  }`}
                  onClick={() => updateField("creditScore", band.value)}
                >
                  {band.label}
                </button>
              ))}
            </div>
          </div>
        );
      case "advanced":
        return (
          <div className={styles.stepCard}>
            <button
              type="button"
              className={styles.advancedToggle}
              onClick={() => setShowAdvanced((prev) => !prev)}
            >
              {showAdvanced ? "Hide advanced" : "Optional: cash-out & property details"}
            </button>
            <AnimatePresence initial={false}>
              {showAdvanced && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className={styles.advancedFields}
                >
                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="cashOutAmount">
                      Cash-out amount (optional)
                    </label>
                    <input
                      id="cashOutAmount"
                      className={styles.input}
                      type="text"
                      inputMode="numeric"
                      placeholder="$20,000"
                      value={formData.cashOutAmount}
                      onChange={(e) =>
                        updateField("cashOutAmount", formatCurrencyInput(e.target.value))
                      }
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="occupancy">
                      Occupancy
                    </label>
                    <select
                      id="occupancy"
                      className={styles.select}
                      value={formData.occupancy}
                      onChange={(e) => updateField("occupancy", e.target.value)}
                    >
                      <option value="">Primary</option>
                      <option value="Second Home">Second Home</option>
                      <option value="Investment">Investment</option>
                    </select>
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="propertyType">
                      Property type
                    </label>
                    <select
                      id="propertyType"
                      className={styles.select}
                      value={formData.propertyType}
                      onChange={(e) => updateField("propertyType", e.target.value)}
                    >
                      <option value="">Single Family</option>
                      <option value="Condo">Condo</option>
                      <option value="Townhome">Townhome</option>
                      <option value="Multi-unit">Multi-unit</option>
                    </select>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      default:
        return null;
    }
  };

  const isLastStep = stepIndex === stepOrder.length - 1;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.modal}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.header}>
              <div>
                <p className={styles.modeLabel}>{mode === "Purchase" ? "Purchase" : "Refinance"}</p>
                <h3 className={styles.modalTitle}>Refi intake</h3>
              </div>
              <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close">
                ×
              </button>
            </div>

            <div className={styles.progress}>
              {stepOrder.map((step, index) => (
                <div
                  key={step}
                  className={`${styles.progressDot} ${index <= stepIndex ? styles.progressActive : ""}`}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep + mode}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.2 }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>

            {mode !== "Purchase" && (
              <div className={styles.footer}>
                <button
                  type="button"
                  className={styles.secondaryButton}
                  onClick={handleBack}
                  disabled={stepIndex === 0}
                >
                  Back
                </button>
                {!isLastStep && (
                  <button
                    type="button"
                    className={styles.primaryButton}
                    disabled={!canContinue}
                    onClick={handleNext}
                  >
                    Continue
                  </button>
                )}
                {isLastStep && (
                  <button
                    type="button"
                    className={styles.primaryButton}
                    disabled={!canContinue}
                    onClick={handleSubmit}
                  >
                    See my options
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PricingWidget;
