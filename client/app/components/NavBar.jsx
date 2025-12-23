"use client";

import React from "react";
import styles from "./NavBar.module.css";

const NavBar = ({
  activeView,
  activeMode,
  hasResults,
  onNavigate,
  onStartRefi,
  onStartPurchase,
  onOpenAnalyzer,
  onReset,
}) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <div className={styles.logo}>VYR</div>
        <div>
          <p className={styles.brandTitle}>View Your Rate</p>
          <p className={styles.brandSub}>Mortgage comfort planner</p>
        </div>
      </div>

      <div className={styles.links}>
        <button
          type="button"
          className={`${styles.link} ${activeView === "home" ? styles.active : ""}`}
          onClick={() => onNavigate?.("home")}
        >
          Home
        </button>
        <button
          type="button"
          className={`${styles.link} ${activeView === "results" ? styles.active : ""}`}
          onClick={() => onNavigate?.("results")}
          disabled={!hasResults}
        >
          Pricing results
        </button>
        <button
          type="button"
          className={`${styles.link} ${activeView === "analyzer" ? styles.active : ""}`}
          onClick={onOpenAnalyzer}
        >
          Loan Estimate analyzer
        </button>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.subtle} onClick={onReset}>
          Reset
        </button>
        <div className={styles.segmented}>
          <button
            type="button"
            className={`${styles.segment} ${activeMode === "Refinance" ? styles.segmentActive : ""}`}
            onClick={onStartRefi}
          >
            Refi
          </button>
          <button
            type="button"
            className={`${styles.segment} ${activeMode === "Purchase" ? styles.segmentActive : ""}`}
            onClick={onStartPurchase}
          >
            Purchase
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
