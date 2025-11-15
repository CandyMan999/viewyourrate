import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { FiHelpCircle } from "react-icons/fi";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const fmtCurrency = (value) => {
  if (!Number.isFinite(value)) {
    return currencyFormatter.format(0);
  }
  return currencyFormatter.format(Math.round(value));
};

const fmtNumber = (value, digits = 1) => {
  if (!Number.isFinite(value)) {
    return 0;
  }
  return Number(value.toFixed(digits));
};

const toNumber = (value, fallback = 0) => {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : fallback;
};

const PointHelpTooltip = ({ option, parOption, loanAmount, homePrice }) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const tooltipId = useId();

  const numericLoanAmount = useMemo(
    () => Math.max(0, toNumber(loanAmount, 0)),
    [loanAmount]
  );

  const optionPoints = useMemo(() => toNumber(option?.points, 0), [option]);
  const absPoints = Math.abs(optionPoints);
  const onePointValue = numericLoanAmount * 0.01;
  const pointsDollarValue = numericLoanAmount * (absPoints / 100);
  const scenarioHomePrice = useMemo(
    () => Math.max(0, toNumber(homePrice, 0)),
    [homePrice]
  );
  const hasScenarioHomePrice = scenarioHomePrice > 0;

  const parPayment = useMemo(
    () => toNumber(parOption?.monthlyPayment, 0),
    [parOption]
  );
  const optionPayment = toNumber(option?.monthlyPayment, parPayment);
  const paymentDiff = parPayment - optionPayment;

  const { breakEvenMonths, breakEvenYears } = useMemo(() => {
    if (absPoints === 0) {
      return { breakEvenMonths: null, breakEvenYears: null };
    }

    if (optionPoints > 0) {
      const monthlySavings = paymentDiff;
      if (monthlySavings > 0) {
        const months = pointsDollarValue / monthlySavings;
        return {
          breakEvenMonths: Number.isFinite(months) ? months : null,
          breakEvenYears: Number.isFinite(months) ? months / 12 : null,
        };
      }
      return { breakEvenMonths: null, breakEvenYears: null };
    }

    if (optionPoints < 0) {
      const monthlyExtra = -paymentDiff;
      if (monthlyExtra > 0) {
        const months = pointsDollarValue / monthlyExtra;
        return {
          breakEvenMonths: Number.isFinite(months) ? months : null,
          breakEvenYears: Number.isFinite(months) ? months / 12 : null,
        };
      }
    }

    return { breakEvenMonths: null, breakEvenYears: null };
  }, [absPoints, optionPoints, paymentDiff, pointsDollarValue]);

  const hasBreakEven =
    Number.isFinite(breakEvenMonths) && breakEvenMonths > 0 && absPoints > 0;

  const closeTooltip = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handlePointerDownOutside = useCallback(
    (event) => {
      if (!isOpen) return;

      const triggerEl = triggerRef.current;
      const tooltipEl = tooltipRef.current;
      if (
        triggerEl &&
        tooltipEl &&
        !triggerEl.contains(event.target) &&
        !tooltipEl.contains(event.target)
      ) {
        closeTooltip();
      }
    },
    [closeTooltip, isOpen]
  );

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        closeTooltip();
        triggerRef.current?.focus();
      }
    },
    [closeTooltip]
  );

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    document.addEventListener("pointerdown", handlePointerDownOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDownOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown, handlePointerDownOutside, isOpen]);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);
  const handleFocus = () => setIsOpen(true);
  const handleBlur = (event) => {
    if (
      tooltipRef.current &&
      tooltipRef.current.contains(event.relatedTarget || null)
    ) {
      return;
    }
    setIsOpen(false);
  };

  const toggleOpen = () => {
    setIsOpen((previous) => !previous);
  };

  const paymentDifferenceCopy = useMemo(() => {
    if (!Number.isFinite(paymentDiff) || paymentDiff === 0) {
      return null;
    }
    const amount = fmtCurrency(Math.abs(paymentDiff));
    if (optionPoints > 0) {
      return `In exchange, your payment is about ${amount}/month lower than the par option.`;
    }
    if (optionPoints < 0) {
      return `In exchange, your payment is about ${amount}/month higher than the par option.`;
    }
    return null;
  }, [optionPoints, paymentDiff]);

  const breakEvenCopy = useMemo(() => {
    if (!hasBreakEven) {
      return null;
    }
    const months = fmtNumber(breakEvenMonths, 0);
    const years = fmtNumber(breakEvenYears, 1);
    const amount = fmtCurrency(pointsDollarValue);

    if (optionPoints > 0) {
      return (
        <p>
          <strong>Break-even:</strong>
          <br />
          It would take about {months} months (~{years} years) of lower payments
          to recover the {amount} you pay upfront. If you expect to keep this
          loan longer than that, paying points may save you money. If not, the
          par rate or a lender credit might be better.
        </p>
      );
    }

    return (
      <p>
        <strong>Break-even:</strong>
        <br />
        You’re essentially trading about {amount} of upfront savings for higher
        monthly payments. After about {months} months (~{years} years), the
        extra payments add up to the amount of the credit. If you expect to
        refinance or move before then, this option can help reduce cash at
        closing. If you’ll keep the loan longer, par or a buydown may cost less
        over time.
      </p>
    );
  }, [breakEvenMonths, breakEvenYears, hasBreakEven, optionPoints, pointsDollarValue]);

  const tooltipHeading = useMemo(() => {
    if (optionPoints > 0) {
      return "📉 What are points?";
    }
    if (optionPoints < 0) {
      return "💳 What is a lender credit?";
    }
    return "⚖️ What does par pricing mean?";
  }, [optionPoints]);

  const optionLabel = option?.label ? option.label.toLowerCase() : "pricing";
  const loanAmountCopy = fmtCurrency(numericLoanAmount);
  const onePointCopy = fmtCurrency(onePointValue);
  const pointsCopy = fmtCurrency(pointsDollarValue);
  const formattedPoints = absPoints.toFixed(2);
  const homePriceCopy = fmtCurrency(scenarioHomePrice);
  const scenarioIntro = hasScenarioHomePrice
    ? `You’re comparing a home priced at ${homePriceCopy}. `
    : "";
  const pointsSentence =
    optionPoints > 0
      ? `This ${optionLabel} option uses ${formattedPoints} points, which works out to about ${pointsCopy} paid upfront.`
      : `This ${optionLabel} option gives you ${formattedPoints} points of lender credit—roughly ${pointsCopy} applied toward your closing costs.`;

  return (
    <span
      className={`point-help-tooltip ${isOpen ? "point-help-tooltip--open" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className="point-help-tooltip__trigger"
        onClick={toggleOpen}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-expanded={isOpen}
        aria-controls={tooltipId}
        aria-label={`Learn about points for the ${option?.label || "pricing"} option`}
        ref={triggerRef}
      >
        <FiHelpCircle aria-hidden="true" />
        <span className="point-help-tooltip__sr">More info</span>
      </button>

      <div
        id={tooltipId}
        ref={tooltipRef}
        role="tooltip"
        className="point-help-tooltip__bubble"
        aria-hidden={!isOpen}
      >
        <p className="point-help-tooltip__heading">{tooltipHeading}</p>
        {optionPoints === 0 ? (
          <>
            <p>
              {scenarioIntro}On your loan of {loanAmountCopy}, 1.00 point would
              equal {onePointCopy} either paid at closing or offered as a
              credit.
            </p>
            <p>
              Choosing 0 points keeps things neutral—you’re not paying extra to
              buy down the rate, and you’re not receiving a lender credit. It’s
              the par baseline many borrowers start from when deciding what fits
              their plans.
            </p>
          </>
        ) : (
          <>
            <p>
              {scenarioIntro}On your loan of {loanAmountCopy}, 1.00 point equals
              {onePointCopy}. {pointsSentence}
            </p>
            {paymentDifferenceCopy && <p>{paymentDifferenceCopy}</p>}
            {breakEvenCopy}
          </>
        )}
      </div>
    </span>
  );
};

PointHelpTooltip.propTypes = {
  option: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    rate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    monthlyPayment: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    points: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
  parOption: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    rate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    monthlyPayment: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    points: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
  loanAmount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  homePrice: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default PointHelpTooltip;
