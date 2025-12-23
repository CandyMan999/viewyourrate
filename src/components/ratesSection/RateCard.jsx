import React from "react";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiMinus,
} from "react-icons/fi";

const toNumeric = (value) => {
  if (typeof value === "number") return value;
  const parsed = parseFloat(value);
  return Number.isNaN(parsed) ? 0 : parsed;
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

const RateCard = ({
  purpose,
  product,
  rate,
  apr,
  change,
  points,
  size = "default",
}) => {
  const rateValue = toNumeric(rate);
  const aprValue = toNumeric(apr);
  const changeValue = toNumeric(change);
  const pointsValue = toNumeric(points);

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

  return (
    <article className={`rate-card rate-card--${trend} rate-card--${size}`}>
      <header className="rate-card__header">
        <span className="rate-card__purpose">{purpose}</span>
        <span className={`rate-card__trend-icon rate-card__trend-icon--${trend}`}>
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
        <span className="rate-card__points">Points {formatPoints(pointsValue)}</span>
        <span className={`rate-card__change rate-card__change--${trend}`}>
          {renderTrendIcon()} {formatChange(changeValue)}
        </span>
      </footer>
    </article>
  );
};

export default RateCard;
