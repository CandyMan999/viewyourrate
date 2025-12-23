"use client";

import React from "react";
import styles from "./RatesSection.module.css";

const mockRates = [
  { lender: "Bluebonnet Home Loans", rate: "6.375%", apr: "6.421%", payment: "$2,385", term: "30yr Fixed" },
  { lender: "VistaView Mortgage", rate: "6.125%", apr: "6.209%", payment: "$2,320", term: "30yr Fixed" },
  { lender: "Cypress Lending", rate: "5.875%", apr: "5.940%", payment: "$2,255", term: "15yr Fixed" },
];

const RatesSection = () => {
  return (
    <section className={styles.section} id="rates">
      <div className={styles.header}>
        <div>
          <p className={styles.kicker}>Live sample rates</p>
          <h3 className={styles.title}>Compare leading offers side-by-side</h3>
          <p className={styles.subtitle}>Preview how different lenders and terms stack up before you apply.</p>
        </div>
        <button type="button" className={styles.cta}>
          See more
        </button>
      </div>

      <div className={styles.grid}>
        {mockRates.map((offer) => (
          <div key={offer.lender} className={styles.card}>
            <div className={styles.cardTop}>
              <p className={styles.lender}>{offer.lender}</p>
              <p className={styles.term}>{offer.term}</p>
            </div>
            <div className={styles.metrics}>
              <div>
                <p className={styles.label}>Rate</p>
                <p className={styles.value}>{offer.rate}</p>
              </div>
              <div>
                <p className={styles.label}>APR</p>
                <p className={styles.value}>{offer.apr}</p>
              </div>
              <div>
                <p className={styles.label}>Est. payment</p>
                <p className={styles.value}>{offer.payment}</p>
              </div>
            </div>
            <button type="button" className={styles.applyButton}>
              Apply now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RatesSection;
