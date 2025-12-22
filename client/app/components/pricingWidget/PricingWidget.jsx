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

function formatCurrency(value) {
  if (value === null || value === undefined) return "—";
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
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

const refiStepOrder = ["payment", "balance", "credit", "advanced"];
const purchaseStepOrder = ["price", "borrower", "property", "loan"];

const PricingWidget = ({ isOpen, mode, initialPayment, prefillData, onClose, onComplete }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [downPaymentMode, setDownPaymentMode] = useState("amount");
  const [formData, setFormData] = useState({
    maxMonthlyPayment: "",
    stateSelection: "",
    existingLoanBalance: "",
    estimatedHomeValue: "",
    creditScore: "",
    cashOutAmount: "",
    occupancy: "PrimaryResidence",
    propertyType: "SingleFamily",
    purchasePrice: "",
    downPayment: "",
    downPaymentPercent: "",
    propertyZip: "",
    propertyUnits: "OneUnit",
    loanProgram: "Conventional",
    termYears: 30,
    rateStructure: "Fixed",
    armTerm: "",
    firstTimeBuyer: false,
    veteranStatus: false,
    desiredLockPeriodDays: "",
  });

  useEffect(() => {
    if (isOpen) {
      setStepIndex(0);
      setShowAdvanced(false);
      setDownPaymentMode(
        prefillData?.downPaymentPercent
          ? "percent"
          : prefillData?.downPayment
            ? "amount"
            : "amount"
      );
      setFormData((prev) => ({
        ...prev,
        maxMonthlyPayment: prefillData?.maxMonthlyPayment
          ? formatCurrencyInput(prefillData.maxMonthlyPayment.toString())
          : initialPayment || prev.maxMonthlyPayment,
        stateSelection: prefillData?.stateSelection ?? prev.stateSelection,
        existingLoanBalance: prefillData?.existingLoanBalance
          ? formatCurrencyInput(prefillData.existingLoanBalance.toString())
          : prev.existingLoanBalance,
        estimatedHomeValue: prefillData?.estimatedHomeValue
          ? formatCurrencyInput(prefillData.estimatedHomeValue.toString())
          : prev.estimatedHomeValue,
        creditScore: prefillData?.creditScore ?? prev.creditScore,
        cashOutAmount: prefillData?.cashOutAmount
          ? formatCurrencyInput(prefillData.cashOutAmount.toString())
          : prev.cashOutAmount,
        occupancy: prefillData?.occupancy ?? prev.occupancy,
        propertyType: prefillData?.propertyType ?? prev.propertyType,
        purchasePrice: prefillData?.purchasePrice
          ? formatCurrencyInput(prefillData.purchasePrice.toString())
          : prev.purchasePrice,
        downPayment: prefillData?.downPayment
          ? formatCurrencyInput(prefillData.downPayment.toString())
          : prev.downPayment,
        downPaymentPercent: prefillData?.downPaymentPercent?.toString() ?? prev.downPaymentPercent,
        propertyZip: prefillData?.propertyZip ?? prev.propertyZip,
        propertyUnits: prefillData?.propertyUnits ?? prev.propertyUnits,
        loanProgram: prefillData?.loanProgram ?? prev.loanProgram,
        termYears: prefillData?.termYears ?? prev.termYears,
        rateStructure: prefillData?.rateStructure ?? prev.rateStructure,
        armTerm: prefillData?.armTerm ?? prev.armTerm,
        firstTimeBuyer: prefillData?.firstTimeBuyer ?? prev.firstTimeBuyer,
        veteranStatus: prefillData?.veteranStatus ?? prev.veteranStatus,
        desiredLockPeriodDays:
          prefillData?.desiredLockPeriodDays?.toString() ?? prev.desiredLockPeriodDays,
      }));
    }
  }, [initialPayment, isOpen, prefillData]);

  const stepOrder = mode === "Purchase" ? purchaseStepOrder : refiStepOrder;
  const currentStep = stepOrder[stepIndex] || stepOrder[0];

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const ltvInfo = useMemo(() => {
    const homeValue = parseCurrency(formData.estimatedHomeValue);
    const balance = parseCurrency(formData.existingLoanBalance) ?? 0;
    const cashOut = parseCurrency(formData.cashOutAmount) ?? 0;

    if (!homeValue || homeValue <= 0) {
      return {
        percent: null,
        indicator: "muted",
        insight: "Add your home value and balance to see LTV in real time.",
        cashOutNote: cashOut > 0 ? "Cash-out raises your LTV because it increases the loan amount." : "",
      };
    }

    const ltvPercent = ((balance + cashOut) / homeValue) * 100;
    let indicator = "green";
    let insight = "This is a strong LTV range. Pricing is typically better below 80%.";

    if (ltvPercent > 90) {
      indicator = "red";
      insight =
        "Your LTV is high. Options may be limited or more expensive. Reducing cash-out or increasing home value/down payment can help.";
    } else if (ltvPercent > 80) {
      indicator = "amber";
      insight = "Your LTV is above 80%. Many lenders add mortgage insurance or adjust pricing in this range.";
    }

    const cashOutNote =
      cashOut > 0
        ? "Cash-out increases your loan amount, which raises LTV. That can reduce available options."
        : "";

    return { percent: ltvPercent, indicator, insight, cashOutNote };
  }, [formData.cashOutAmount, formData.estimatedHomeValue, formData.existingLoanBalance]);

  const ltvChipValue = ltvInfo.percent === null ? "—" : `${ltvInfo.percent.toFixed(0)}%`;

  const canContinue = useMemo(() => {
    if (mode === "Purchase") {
      switch (currentStep) {
        case "price":
          return Boolean(formData.purchasePrice && formData.stateSelection);
        case "borrower":
          return Boolean(formData.creditScore);
        case "property":
          return Boolean(formData.occupancy);
        case "loan":
        default:
          return Boolean(formData.loanProgram);
      }
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
    if (mode === "Purchase") {
      const purchasePrice = parseCurrency(formData.purchasePrice) ?? 0;
      const downPaymentAmount =
        downPaymentMode === "amount"
          ? parseCurrency(formData.downPayment)
          : null;
      const downPaymentPercentValue =
        downPaymentMode === "percent"
          ? Number.parseFloat(formData.downPaymentPercent) || null
          : purchasePrice && downPaymentAmount
            ? (downPaymentAmount / purchasePrice) * 100
            : null;

      const scenario = {
        quoteType: "Purchase",
        purchasePrice,
        downPayment: downPaymentMode === "amount" ? downPaymentAmount : null,
        downPaymentPercent: downPaymentPercentValue,
        creditScore: formData.creditScore,
        stateSelection: formData.stateSelection,
        propertyZip: formData.propertyZip || null,
        occupancy: formData.occupancy || "PrimaryResidence",
        propertyType: formData.propertyType || "SingleFamily",
        propertyUnits: formData.propertyUnits || "OneUnit",
        loanProgram: formData.loanProgram || "Conventional",
        termYears: Number(formData.termYears) || 30,
        rateStructure: formData.rateStructure || "Fixed",
        armTerm: formData.armTerm || null,
        firstTimeBuyer: Boolean(formData.firstTimeBuyer),
        veteranStatus: Boolean(formData.veteranStatus),
        desiredLockPeriodDays: formData.desiredLockPeriodDays
          ? Number(formData.desiredLockPeriodDays)
          : null,
        timestamp: new Date().toISOString(),
      };
      onComplete?.(scenario);
      return;
    }

    const scenario = {
      quoteType: "Refinance",
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

  const renderPurchaseStep = () => {
    switch (currentStep) {
      case "price":
        return (
          <div className={styles.stepCard}>
            <p className={styles.stepTitle}>What’s the home price and down payment?</p>
            <p className={styles.stepSubtitle}>We only collect the essentials to price your purchase.</p>
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="purchasePrice">
                Home price
              </label>
              <input
                id="purchasePrice"
                className={styles.input}
                inputMode="numeric"
                placeholder="$450,000"
                value={formData.purchasePrice}
                onChange={(e) => updateField("purchasePrice", formatCurrencyInput(e.target.value))}
              />
            </div>
            <div className={styles.fieldGroup}>
              <div className={styles.splitRow}>
                <label className={styles.label} htmlFor="downPayment">
                  Down payment {downPaymentMode === "percent" ? "(%)" : ""}
                </label>
                <div className={styles.segmented}>
                  <button
                    type="button"
                    className={`${styles.segment} ${downPaymentMode === "amount" ? styles.segmentActive : ""}`}
                    onClick={() => setDownPaymentMode("amount")}
                  >
                    $
                  </button>
                  <button
                    type="button"
                    className={`${styles.segment} ${downPaymentMode === "percent" ? styles.segmentActive : ""}`}
                    onClick={() => setDownPaymentMode("percent")}
                  >
                    %
                  </button>
                </div>
              </div>
              {downPaymentMode === "amount" ? (
                <input
                  id="downPayment"
                  className={styles.input}
                  inputMode="numeric"
                  placeholder="$90,000"
                  value={formData.downPayment}
                  onChange={(e) => updateField("downPayment", formatCurrencyInput(e.target.value))}
                />
              ) : (
                <input
                  id="downPaymentPercent"
                  className={styles.input}
                  type="number"
                  inputMode="decimal"
                  placeholder="20"
                  value={formData.downPaymentPercent}
                  onChange={(e) => updateField("downPaymentPercent", e.target.value)}
                />
              )}
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
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="propertyZip">
                ZIP code (optional)
              </label>
              <input
                id="propertyZip"
                className={styles.input}
                inputMode="numeric"
                placeholder="94103"
                value={formData.propertyZip}
                onChange={(e) => updateField("propertyZip", e.target.value)}
              />
            </div>
          </div>
        );
      case "borrower":
        return (
          <div className={styles.stepCard}>
            <p className={styles.stepTitle}>About you</p>
            <p className={styles.stepSubtitle}>A quick snapshot helps tailor pricing.</p>
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
            <div className={styles.checkboxRow}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={formData.firstTimeBuyer}
                  onChange={(e) => updateField("firstTimeBuyer", e.target.checked)}
                />
                First-time homebuyer
              </label>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={formData.veteranStatus}
                  onChange={(e) => updateField("veteranStatus", e.target.checked)}
                />
                Veteran / eligible for VA
              </label>
            </div>
          </div>
        );
      case "property":
        return (
          <div className={styles.stepCard}>
            <p className={styles.stepTitle}>Property details</p>
            <p className={styles.stepSubtitle}>Just occupancy and type for now.</p>
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
                <option value="PrimaryResidence">Primary residence</option>
                <option value="SecondHome">Second home</option>
                <option value="InvestmentProperty">Investment</option>
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
                <option value="SingleFamily">Single-family</option>
                <option value="Condo">Condo</option>
                <option value="Townhome">Townhome</option>
                <option value="MultiFamily">Multi-family</option>
              </select>
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="propertyUnits">
                Number of units
              </label>
              <select
                id="propertyUnits"
                className={styles.select}
                value={formData.propertyUnits}
                onChange={(e) => updateField("propertyUnits", e.target.value)}
              >
                <option value="OneUnit">1 unit</option>
                <option value="TwoUnits">2 units</option>
                <option value="ThreeUnits">3 units</option>
                <option value="FourUnits">4 units</option>
              </select>
            </div>
          </div>
        );
      case "loan":
      default:
        return (
          <div className={styles.stepCard}>
            <p className={styles.stepTitle}>Loan preferences</p>
            <p className={styles.stepSubtitle}>We’ll keep it simple and payment-first.</p>
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="loanProgram">
                Program
              </label>
              <select
                id="loanProgram"
                className={styles.select}
                value={formData.loanProgram}
                onChange={(e) => updateField("loanProgram", e.target.value)}
              >
                <option value="Conventional">Conventional</option>
                <option value="FHA">FHA</option>
                <option value="VA">VA</option>
                <option value="USDA">USDA</option>
              </select>
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="termYears">
                Term
              </label>
              <select
                id="termYears"
                className={styles.select}
                value={formData.termYears}
                onChange={(e) => updateField("termYears", Number(e.target.value))}
              >
                <option value={30}>30 years</option>
                <option value={20}>20 years</option>
                <option value={15}>15 years</option>
              </select>
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="rateStructure">
                Rate structure
              </label>
              <select
                id="rateStructure"
                className={styles.select}
                value={formData.rateStructure}
                onChange={(e) => updateField("rateStructure", e.target.value)}
              >
                <option value="Fixed">Fixed</option>
                <option value="ARM">ARM</option>
              </select>
            </div>
            {formData.rateStructure === "ARM" && (
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="armTerm">
                  ARM fixed term
                </label>
                <select
                  id="armTerm"
                  className={styles.select}
                  value={formData.armTerm}
                  onChange={(e) => updateField("armTerm", e.target.value)}
                >
                  <option value="">Select term</option>
                  <option value="FiveYear">5/6</option>
                  <option value="SevenYear">7/6</option>
                </select>
              </div>
            )}
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="desiredLockPeriodDays">
                Desired lock period (days, optional)
              </label>
              <input
                id="desiredLockPeriodDays"
                className={styles.input}
                type="number"
                inputMode="numeric"
                placeholder="30"
                value={formData.desiredLockPeriodDays}
                onChange={(e) => updateField("desiredLockPeriodDays", e.target.value)}
              />
            </div>
          </div>
        );
    }
  };

  const renderStep = () => {
    if (mode === "Purchase") {
      return renderPurchaseStep();
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
                <h3 className={styles.modalTitle}>
                  {mode === "Purchase" ? "Purchase intake" : "Refi intake"}
                </h3>
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

            {mode !== "Purchase" && currentStep === "balance" && (
              <div className={styles.ltvBar}>
                <div className={styles.chipRow}>
                  <div className={`${styles.chip} ${styles[`chip-${ltvInfo.indicator}`]}`}>
                    <span className={styles.chipLabel}>LTV</span>
                    <span className={styles.chipValue}>{ltvChipValue}</span>
                  </div>
                  {parseCurrency(formData.cashOutAmount) ? (
                    <div className={styles.chip}>
                      <span className={styles.chipLabel}>Cash-out</span>
                      <span className={styles.chipValue}>{formatCurrency(parseCurrency(formData.cashOutAmount))}</span>
                    </div>
                  ) : null}
                </div>
                <div className={styles.ltvInsight}>
                  <p className={styles.insightTitle}>LTV insight</p>
                  <p className={styles.insightText}>{ltvInfo.insight}</p>
                  {ltvInfo.cashOutNote && <p className={styles.insightText}>{ltvInfo.cashOutNote}</p>}
                </div>
              </div>
            )}

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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PricingWidget;
