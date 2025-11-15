import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiX } from "react-icons/fi";
import "./PricingWidget.css";

const downPaymentOptions = [0, 5, 10, 15, 20, 25, 30, 40];
const occupancyOptions = [
  "Primary Residence",
  "Secondary Home",
  "Investment Property",
];
const propertyTypeOptions = [
  "Single Family",
  "Condominium",
  "Townhome",
  "Multi-Family",
];
const states = ["CA", "CO", "FL", "NY", "TX", "WA"];

const classNames = (...classes) => classes.filter(Boolean).join(" ");

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);

const DotToggle = ({
  label,
  value,
  onChange,
  yesText = "Yes",
  noText = "No",
}) => {
  const renderOption = (optionValue, text) => {
    const isActive = value === optionValue;
    return (
      <button
        key={optionValue}
        type="button"
        role="radio"
        aria-checked={isActive}
        onClick={() => onChange(optionValue)}
        className={classNames(
          "pricing-widget__toggle-pill",
          isActive && "pricing-widget__toggle-pill--active"
        )}
      >
        <span className="pricing-widget__dot">
          <span className="pricing-widget__dot-inner" />
        </span>
        <span>{text}</span>
      </button>
    );
  };

  return (
    <div className="pricing-widget__field">
      <label className="pricing-widget__label">{label}</label>
      <div
        className="pricing-widget__toggle-group"
        role="radiogroup"
        aria-label={label}
      >
        {renderOption("Yes", yesText)}
        {renderOption("No", noText)}
      </div>
    </div>
  );
};

const PricingWidget = ({
  isVisible,
  onClose,
  onScenarioSubmit,
  onShowOptionsPage,
}) => {
  const [quoteType, setQuoteType] = useState("Purchase");
  const [purchasePrice, setPurchasePrice] = useState(550000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [waiveEscrow, setWaiveEscrow] = useState("No");
  const [occupancy, setOccupancy] = useState(occupancyOptions[0]);
  const [propertyType, setPropertyType] = useState(propertyTypeOptions[0]);
  const [stateSelection, setStateSelection] = useState(states[0]);
  const [isMilitary, setIsMilitary] = useState("No");

  const loanAmount = useMemo(() => {
    const price = Number(purchasePrice);
    const percent = Number(downPaymentPercent);
    if (Number.isNaN(price) || Number.isNaN(percent)) return 0;
    const downPaymentAmount = price * (percent / 100);
    const loanValue = Math.max(price - downPaymentAmount, 0);
    return Math.round(loanValue);
  }, [purchasePrice, downPaymentPercent]);

  const widgetVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
    exit: {
      y: "100%",
      opacity: 0,
      transition: { duration: 0.35, ease: "easeIn" },
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const numericPurchasePrice = Number(purchasePrice);
    const numericDownPaymentPercent = Number(downPaymentPercent);
    const downPaymentAmount =
      Number.isFinite(numericPurchasePrice) &&
      Number.isFinite(numericDownPaymentPercent)
        ? Math.round(numericPurchasePrice * (numericDownPaymentPercent / 100))
        : null;

    const baseScenario = {
      quoteType,
      purchasePrice: Number.isFinite(numericPurchasePrice)
        ? numericPurchasePrice
        : 0,
      loanAmount: Number.isFinite(loanAmount) ? loanAmount : 0,
      downPaymentPercent: Number.isFinite(numericDownPaymentPercent)
        ? numericDownPaymentPercent
        : 0,
      stateSelection,
      occupancy,
      propertyType,
      creditBand: undefined,
    };

    const scenarioData = {
      ...baseScenario,
      downPaymentAmount,
      waiveEscrow,
      isMilitary,
      timestamp: new Date().toISOString(),
    };

    console.log("Pricing scenario submitted:", scenarioData);

    if (typeof onScenarioSubmit === "function") {
      onScenarioSubmit(scenarioData);
    }

    if (typeof onShowOptionsPage === "function") {
      onShowOptionsPage(baseScenario);
    }

    if (typeof onClose === "function") {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="pricing-widget__overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            variants={widgetVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="pricing-widget"
          >
            <button
              type="button"
              className="pricing-widget__close"
              onClick={onClose}
              aria-label="Close pricing widget"
            >
              <FiX size={18} />
            </button>

            <div className="pricing-widget__content">
              <div className="pricing-widget__form-panel">
                <div className="pricing-widget__header">
                  <div className="pricing-widget__heading">
                    <p className="pricing-widget__eyebrow">
                      Get Your Quote Now
                    </p>
                    <h2 className="pricing-widget__title">
                      Customize Your Rate
                    </h2>
                  </div>
                  <div className="pricing-widget__quote-toggle">
                    {["Purchase", "Refinance"].map((type) => {
                      const isActive = quoteType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setQuoteType(type)}
                          className={classNames(
                            "pricing-widget__quote-button",
                            isActive && "pricing-widget__quote-button--active"
                          )}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="pricing-widget__form">
                  <div className="pricing-widget__form-grid">
                    <div className="pricing-widget__field">
                      <label className="pricing-widget__label">
                        Purchase Price
                      </label>
                      <input
                        type="number"
                        min="0"
                        step="1000"
                        value={purchasePrice}
                        onChange={(e) => setPurchasePrice(e.target.value)}
                        className="pricing-widget__input"
                        style={{ width: "87%" }}
                      />
                    </div>

                    <div className="pricing-widget__field">
                      <label className="pricing-widget__label">
                        Down Payment
                      </label>
                      <select
                        value={downPaymentPercent}
                        onChange={(e) => setDownPaymentPercent(e.target.value)}
                        className="pricing-widget__select"
                      >
                        {downPaymentOptions.map((option) => (
                          <option
                            key={option}
                            value={option}
                          >{`${option}% Down`}</option>
                        ))}
                      </select>
                    </div>

                    <div className="pricing-widget__field">
                      <label className="pricing-widget__label">
                        Loan Amount
                      </label>
                      <input
                        type="text"
                        value={formatCurrency(loanAmount)}
                        readOnly
                        style={{ width: "87%" }}
                        className={classNames(
                          "pricing-widget__input",
                          "pricing-widget__input--readonly"
                        )}
                      />
                    </div>

                    <DotToggle
                      label="Waive Escrow?"
                      value={waiveEscrow}
                      onChange={setWaiveEscrow}
                    />

                    <div className="pricing-widget__field">
                      <label className="pricing-widget__label">
                        Occupancy Type
                      </label>
                      <select
                        value={occupancy}
                        onChange={(e) => setOccupancy(e.target.value)}
                        className="pricing-widget__select"
                      >
                        {occupancyOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="pricing-widget__field">
                      <label className="pricing-widget__label">
                        Property Type
                      </label>
                      <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="pricing-widget__select"
                      >
                        {propertyTypeOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="pricing-widget__field">
                      <label className="pricing-widget__label">State</label>
                      <select
                        value={stateSelection}
                        onChange={(e) => setStateSelection(e.target.value)}
                        className="pricing-widget__select"
                      >
                        {states.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <DotToggle
                      label="Military / Veteran?"
                      value={isMilitary}
                      onChange={setIsMilitary}
                      yesText="Yes"
                      noText="No"
                    />
                  </div>

                  <button type="submit" className="pricing-widget__cta">
                    Get Rates
                  </button>
                </form>
              </div>

              <div className="pricing-widget__info-panel">
                <div>
                  <h3 className="pricing-widget__info-title">Instant Quote</h3>
                  <p className="pricing-widget__info-text">
                    Get a real quote in seconds. Customize your scenario and
                    instantly compare pricing options side-by-side.
                  </p>
                </div>
                <ul className="pricing-widget__benefits">
                  {[
                    "Simple info required for quote",
                    "See all costs including third-party fees",
                    "Compare multiple options at once",
                    "Review your rate online",
                  ].map((benefit) => (
                    <li key={benefit} className="pricing-widget__benefit">
                      <FiCheckCircle
                        size={22}
                        className="pricing-widget__benefit-icon"
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PricingWidget;
