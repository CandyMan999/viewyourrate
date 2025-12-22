"use client";

import React from "react";
import styles from "./Header.module.css";

const navLinks = [
  { label: "Rates", href: "#rates" },
  { label: "Programs", href: "#programs" },
  { label: "Guides", href: "#guides" },
  { label: "Team", href: "#team" },
];

const Header = ({ mode, onModeChange, onStartOver }) => {
  return (
    <header className={styles.header}>
      <div className={styles.brandGroup}>
        <div className={styles.logo}>VYR</div>
        <div className={styles.brandCopy}>
          <p className={styles.brandTitle}>View Your Rate</p>
          <p className={styles.brandSubtitle}>Payment-first mortgage studio</p>
        </div>
      </div>

      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className={styles.navLink}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className={styles.actions}>
        <div className={styles.modeSwitcher}>
          <button
            type="button"
            className={`${styles.modeButton} ${mode === "Refinance" ? styles.modeActive : ""}`}
            onClick={() => onModeChange?.("Refinance")}
          >
            Refi
          </button>
          <button
            type="button"
            className={`${styles.modeButton} ${mode === "Purchase" ? styles.modeActive : ""}`}
            onClick={() => onModeChange?.("Purchase")}
          >
            Purchase
          </button>
        </div>
        <button type="button" className={styles.resetButton} onClick={onStartOver}>
          Start over
        </button>
      </div>
    </header>
  );
};

export default Header;
