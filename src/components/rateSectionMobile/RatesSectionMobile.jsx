import React, { useMemo } from "react";
import { FiSliders, FiClock } from "react-icons/fi";
import ApplyButton from "../applyButton";
import RateCard from "../ratesSection/RateCard";
import { dummyRates } from "../../data/dummyRates";
import "./RatesSectionMobile.css";

const RatesSectionMobile = ({ state, dispatch }) => {
  const rates = state?.mortgageRates?.length ? state.mortgageRates : dummyRates;

  const timestampLabel = useMemo(() => {
    const timestamp = new Date();
    return timestamp.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  }, []);

  const handleCustomizeClick = () => {
    dispatch({ type: "SHOW_PRICING_WIDGET", payload: true });
  };

  return (
    <section className="rates-mobile" aria-labelledby="rates-mobile-heading">
      <div className="rates-mobile__top">
        <div className="rates-mobile__label-group">
          <span className="rates-mobile__eyebrow">Today's Pricing</span>
          <h2 id="rates-mobile-heading" className="rates-mobile__title">
            Live market snapshot
          </h2>
          <span
            className="rates-mobile__timestamp"
            style={{ color: "white", fontWeight: "bold" }}
          >
            <FiClock aria-hidden="true" /> Updated {timestampLabel} ET
          </span>
        </div>
        <div className="rates-mobile__actions">
          <button
            type="button"
            className="rates-mobile__compare"
            onClick={handleCustomizeClick}
          >
            <FiSliders aria-hidden="true" /> Customize
          </button>
          <ApplyButton mobile={true} />
        </div>
      </div>
      <p className="rates-mobile__helper">
        Scenario assumes 740 FICO, 20% down, and $400k loan amount. Your rate
        may vary based on credit profile and program details.
      </p>
      <div className="rates-mobile__cards" role="list">
        {rates.map((rate) => (
          <div key={rate.id} role="listitem" className="rates-mobile__card">
            <RateCard {...rate} size="compact" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RatesSectionMobile;
