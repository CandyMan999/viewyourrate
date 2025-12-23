"use client";

import React from "react";
import styles from "./Header.module.css";

const Header = ({ activeMode, onSelectRefi, onSelectPurchase, onStartOver, onShowResults, hasResults }) => (
  <header className={styles.header}>
    <div className={styles.brand}>
      <div className={styles.logo}>VYR</div>
      <div>
        <p className={styles.brandTitle}>View Your Rate</p>
        <p className={styles.brandSubtitle}>Payment-first mortgage hub</p>
      </div>
    </div>

    <nav className={styles.nav}>
      <button
        type="button"
        className={`${styles.navButton} ${activeMode === "Refinance" ? styles.navButtonActive : ""}`}
        onClick={onSelectRefi}
      >
        Refinance
      </button>
      <button
        type="button"
        className={`${styles.navButton} ${activeMode === "Purchase" ? styles.navButtonActive : ""}`}
        onClick={onSelectPurchase}
      >
        Purchase
      </button>
      {hasResults && (
        <button type="button" className={styles.navGhost} onClick={onShowResults}>
          View results
        </button>
      )}
      <button type="button" className={styles.navReset} onClick={onStartOver}>
        Start over
      </button>
    </nav>
  </header>
);

export default Header;
