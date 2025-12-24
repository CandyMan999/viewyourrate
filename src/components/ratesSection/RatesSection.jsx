import React, { useMemo } from "react";
import { FiClock } from "react-icons/fi";
import ApplyButton from "../applyButton";
import RateCard from "./RateCard";
import { dummyRates } from "../../data/dummyRates";
import "./RatesSection.css";

const RatesSection = ({ dispatch, state }) => {
  const handleCustomizeClick = () => {
    dispatch({ type: "SHOW_PRICING_WIDGET", payload: true });
  };

  const rates = state?.mortgageRates?.length
    ? state.mortgageRates
    : dummyRates;

  const timestampLabel = useMemo(() => {
    const timestamp = new Date();
    return timestamp.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  }, []);

  return (
    <section className="rates-section" aria-labelledby="rates-section-heading">
      <div className="rates-section__apply">
        <ApplyButton className="rates-section__apply-button" />
      </div>
      <div className="rates-section__content">
        <aside className="rates-section__sidebar">
          <span className="rates-section__eyebrow">Today's Pricing</span>
          <h2 id="rates-section-heading" className="rates-section__title">
            Track mortgage market movement in real time
          </h2>
          <p className="rates-section__subtitle">
            Preview a curated snapshot of our most requested programs before
            you tailor a quote with live Optimal Blue pricing.
          </p>
          <div className="rates-section__actions">
            <button
              type="button"
              className="rates-section__cta"
              onClick={handleCustomizeClick}
            >
              Customize my scenario
            </button>
          </div>
        </aside>

        <div className="rates-section__cards" role="list">
          {rates.map((rate) => (
            <div key={rate.id} role="listitem" className="rates-section__card">
              <RateCard {...rate} />
            </div>
          ))}
        </div>
        <div className="rates-section__meta">
          <span className="rates-section__timestamp">
            <FiClock aria-hidden="true" /> Updated {timestampLabel} ET
          </span>
          <span className="rates-section__disclaimer">
            Scenario assumes 740 FICO, 20% down, and $400k loan amount. Your
            rate may vary based on credit profile and program details.
          </span>
        </div>
      </div>
    </section>
  );
};

export default RatesSection;
