import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiMinus,
} from "react-icons/fi";
import "./RateCard.css";

const toNumeric = (value) => {
  if (typeof value === "number") return value;
  if (typeof value === "string" && value.trim() !== "") {
    const parsed = parseFloat(value.replace(/[^0-9.-]/g, ""));
    return Number.isNaN(parsed) ? 0 : parsed;
  }
  return 0;
};

const formatPercentage = (value) => `${value.toFixed(3)}%`;

const formatChange = (value) => {
  if (value === 0) {
    return "0.000%";
  }
  const prefix = value > 0 ? "+" : "-";
  return `${prefix}${Math.abs(value).toFixed(3)}%`;
};

const formatPoints = (value) => `${value.toFixed(3)}`;

const currencyFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const formatCurrency = (value) => {
  const numeric = toNumeric(value);
  if (!Number.isFinite(numeric)) {
    return value;
  }
  return `$${currencyFormatter.format(Math.max(0, Math.round(numeric)))}`;
};

const formatPointsDetail = (value) => {
  const numeric = toNumeric(value);
  if (numeric > 0) {
    return `+${numeric.toFixed(2)} pts`;
  }
  if (numeric < 0) {
    return `${numeric.toFixed(2)} pts (credit)`;
  }
  return "0 pts";
};

const RateCard = (props) => {
  const {
    purpose,
    product,
    rate,
    apr,
    change,
    points,
    size = "default",
    variant,
    lenderName,
    monthlyPayment,
    loanType,
    badges = [],
    ctaLabel = "Get Pre-Approved",
    onCtaClick,
    pricingOptions = [],
    isExpanded: controlledExpanded,
    defaultExpanded = false,
    onToggle,
    onPricingOptionSelect,
  } = props;

  const variantToUse = variant || (lenderName ? "offer" : "summary");

  const normalizedPricingOptions = useMemo(
    () => (Array.isArray(pricingOptions) ? pricingOptions.filter(Boolean) : []),
    [pricingOptions]
  );

  const defaultOptionIndex = useMemo(() => {
    if (normalizedPricingOptions.length === 0) {
      return null;
    }
    const recommendedIndex = normalizedPricingOptions.findIndex(
      (option) => option && option.isRecommended
    );
    return recommendedIndex >= 0 ? recommendedIndex : 0;
  }, [normalizedPricingOptions]);

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(() =>
    defaultOptionIndex !== null ? defaultOptionIndex : null
  );

  useEffect(() => {
    if (normalizedPricingOptions.length === 0) {
      setSelectedOptionIndex(null);
      return;
    }

    setSelectedOptionIndex((previousIndex) => {
      if (previousIndex === null) {
        return defaultOptionIndex;
      }

      if (previousIndex >= normalizedPricingOptions.length) {
        return defaultOptionIndex;
      }

      return previousIndex;
    });
  }, [defaultOptionIndex, normalizedPricingOptions]);

  const hasPricingOptions = normalizedPricingOptions.length > 0;
  const selectedOption =
    hasPricingOptions && selectedOptionIndex !== null
      ? normalizedPricingOptions[selectedOptionIndex]
      : null;

  const rateValue = toNumeric(selectedOption?.rate ?? rate);
  const aprValue = toNumeric(apr);
  const changeValue = toNumeric(change);
  const pointsValue = toNumeric(selectedOption?.points ?? points);
  const paymentValue = toNumeric(
    selectedOption?.monthlyPayment ?? monthlyPayment
  );

  const trend =
    changeValue > 0 ? "up" : changeValue < 0 ? "down" : "flat";

  const renderTrendIcon = () => {
    switch (trend) {
      case "up":
        return <FiArrowUpRight />;
      case "down":
        return <FiArrowDownRight />;
      default:
        return <FiMinus />;
    }
  };

  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const isControlled = typeof controlledExpanded === "boolean";
  const expanded = isControlled ? controlledExpanded : internalExpanded;

  const handleToggle = () => {
    const nextExpanded = !expanded;
    if (!isControlled) {
      setInternalExpanded(nextExpanded);
    }
    if (onToggle) {
      onToggle(nextExpanded);
    }
  };

  if (variantToUse === "summary") {
    return (
      <article
        className={`rate-card rate-card--${trend} rate-card--${size}`}
      >
        <header className="rate-card__header">
          <span className="rate-card__purpose">{purpose}</span>
          <span
            className={`rate-card__trend-icon rate-card__trend-icon--${trend}`}
          >
            {renderTrendIcon()}
          </span>
        </header>
        <div className="rate-card__body">
          <h3 className="rate-card__product">{product}</h3>
          <div className="rate-card__figures">
            <div className="rate-card__figure">
              <span className="rate-card__label">Rate</span>
              <span className="rate-card__value">
                {formatPercentage(rateValue)}
              </span>
            </div>
            <div className="rate-card__divider" aria-hidden="true" />
            <div className="rate-card__figure">
              <span className="rate-card__label">APR</span>
              <span className="rate-card__value">
                {formatPercentage(aprValue)}
              </span>
            </div>
          </div>
        </div>
        <footer className="rate-card__footer">
          <span className="rate-card__points">
            Points {formatPoints(pointsValue)}
          </span>
          <span className={`rate-card__change rate-card__change--${trend}`}>
            {renderTrendIcon()} {formatChange(changeValue)}
          </span>
        </footer>
      </article>
    );
  }

  const hasBadges = Array.isArray(badges) && badges.length > 0;

  const handleOptionSelect = (index) => {
    if (!hasPricingOptions) {
      return;
    }

    const safeIndex = Math.max(0, Math.min(index, normalizedPricingOptions.length - 1));

    setSelectedOptionIndex(safeIndex);

    if (typeof onPricingOptionSelect === "function") {
      const option = normalizedPricingOptions[safeIndex];
      onPricingOptionSelect(option, safeIndex);
    }
  };

  return (
    <article
      className={`rate-card rate-card--offer rate-card--${size} ${
        expanded ? "rate-card--expanded" : ""
      }`}
    >
      <header className="rate-card__header rate-card__header--offer">
        <div className="rate-card__title-group">
          {loanType && <span className="rate-card__purpose">{loanType}</span>}
          <h3 className="rate-card__lender">{lenderName}</h3>
        </div>
        {hasBadges ? (
          <div className="rate-card__badges">
            {badges.map((badge) => (
              <span key={badge} className="rate-card__badge">
                {badge}
              </span>
            ))}
          </div>
        ) : (
          <span
            className={`rate-card__trend-icon rate-card__trend-icon--${trend}`}
          >
            {renderTrendIcon()}
          </span>
        )}
      </header>

      <div className="rate-card__body rate-card__body--offer">
        <div className="rate-card__figures rate-card__figures--offer">
          <div className="rate-card__figure">
            <span className="rate-card__label">Rate</span>
            <span className="rate-card__value rate-card__value--xl">
              {formatPercentage(rateValue)}
            </span>
          </div>
          <div className="rate-card__divider" aria-hidden="true" />
          <div className="rate-card__figure">
            <span className="rate-card__label">APR</span>
            <span className="rate-card__value">
              {formatPercentage(aprValue)}
            </span>
          </div>
          <div className="rate-card__divider" aria-hidden="true" />
          <div className="rate-card__figure">
            <span className="rate-card__label">Payment</span>
            <span className="rate-card__value">
              {`${formatCurrency(paymentValue)}/mo`}
            </span>
          </div>
        </div>
      </div>

      <footer className="rate-card__footer rate-card__footer--offer">
        <div className="rate-card__footer-info">
          <span className="rate-card__points">
            {formatPointsDetail(pointsValue)}
          </span>
          <span className="rate-card__apr">APR {formatPercentage(aprValue)}</span>
        </div>
        {hasPricingOptions && (
          <button
            type="button"
            className="rate-card__pricing-toggle"
            onClick={handleToggle}
            aria-expanded={expanded}
          >
            {expanded ? "Hide pricing options" : "View pricing options"}
          </button>
        )}
      </footer>

      {hasPricingOptions && (
        <div
          className={`rate-card__pricing ${
            expanded ? "rate-card__pricing--open" : ""
          }`}
        >
          <ul className="rate-card__pricing-list">
            {normalizedPricingOptions.map((option, index) => {
              const optionKey = `${option?.label || "option"}-${index}`;
              const isActive = index === selectedOptionIndex;

              return (
                <li key={optionKey}>
                  <button
                    type="button"
                    className={`rate-card__pricing-option ${
                      isActive ? "rate-card__pricing-option--active" : ""
                    }`}
                    onClick={() => handleOptionSelect(index)}
                  >
                    <div className="rate-card__pricing-option-header">
                      <div className="rate-card__pricing-label-group">
                        <span className="rate-card__pricing-label">
                          {option?.label}
                        </span>
                        {option?.isRecommended && (
                          <span className="rate-card__pricing-recommended">
                            Recommended
                          </span>
                        )}
                      </div>
                      <span className="rate-card__pricing-rate">
                        {formatPercentage(toNumeric(option?.rate))}
                      </span>
                    </div>
                    <div className="rate-card__pricing-option-meta">
                      <span className="rate-card__pricing-points">
                        {formatPointsDetail(option?.points)}
                      </span>
                      {option?.monthlyPayment !== undefined && (
                        <span className="rate-card__pricing-payment">
                          {`${formatCurrency(option?.monthlyPayment)}/mo`}
                        </span>
                      )}
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <button
        type="button"
        className="rate-card__cta"
        onClick={() => onCtaClick?.()}
      >
        {ctaLabel}
      </button>
    </article>
  );
};

RateCard.propTypes = {
  purpose: PropTypes.string,
  product: PropTypes.string,
  rate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  apr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  change: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  points: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.string,
  variant: PropTypes.string,
  lenderName: PropTypes.string,
  monthlyPayment: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  loanType: PropTypes.string,
  badges: PropTypes.arrayOf(PropTypes.string),
  ctaLabel: PropTypes.string,
  onCtaClick: PropTypes.func,
  pricingOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      rate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      points: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      monthlyPayment: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
      isRecommended: PropTypes.bool,
    })
  ),
  isExpanded: PropTypes.bool,
  defaultExpanded: PropTypes.bool,
  onToggle: PropTypes.func,
  onPricingOptionSelect: PropTypes.func,
};

export default RateCard;
