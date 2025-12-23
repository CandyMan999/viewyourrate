"use client";

import React from "react";
import styles from "./Header.module.css";

const Header = ({ onStartRefinance, onStartPurchase }) => {
  return (
    <header className={styles.header}>
      <div>
        <p className={styles.kicker}>View Your Rate</p>
        <h1 className={styles.title}>Mortgage rate explorer</h1>
        <p className={styles.subtitle}>
          Navigate refinance or purchase, compare pricing, and stay ahead with rate-drop notifications.
        </p>
      </div>
      <div className={styles.actions}>
        <button type="button" className={styles.primary} onClick={() => onStartRefinance?.()}>
          Start refi
        </button>
        <button type="button" className={styles.secondary} onClick={() => onStartPurchase?.()}>
          Start purchase
        </button>
      </div>
    </header>
  );
};

export default Header;
