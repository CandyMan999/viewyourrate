"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { key: "home", label: "Home" },
  { key: "rates", label: "Rates" },
  { key: "spreadsheet", label: "Spreadsheet" },
  { key: "analyzer", label: "LE Analyzer" },
  { key: "calculators", label: "Calculators" },
  { key: "apply", label: "Apply" },
];

function Header({
  activeMode,
  activeSection,
  onNavSelect,
  onSelectRefi,
  onSelectPurchase,
  onStartOver,
  onShowResults,
  hasResults,
}) {
  const sliderRef = useRef(null);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });

  const activeIndex = useMemo(
    () => NAV_ITEMS.findIndex((item) => item.key === activeSection),
    [activeSection],
  );

  useEffect(() => {
    if (sliderRef.current) {
      const navButtons = sliderRef.current.parentElement?.querySelectorAll(`.${styles.navButton}`);
      const activeButton = navButtons?.[activeIndex];
      if (activeButton) {
        setSliderStyle({ left: activeButton.offsetLeft, width: activeButton.clientWidth });
      }
    }
  }, [activeIndex]);

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div className={styles.logo}>VYR</div>
        <div>
          <p className={styles.brandTitle}>View Your Rate</p>
          <p className={styles.brandSubtitle}>Payment-first mortgage hub</p>
        </div>
      </div>

      <div className={styles.navWrapper}>
        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              type="button"
              className={`${styles.navButton} ${activeSection === item.key ? styles.navButtonActive : ""}`}
              onClick={() => onNavSelect?.(item.key)}
            >
              {item.label}
            </button>
          ))}
          <span ref={sliderRef} className={styles.navSlider} style={sliderStyle} />
        </nav>
        <div className={styles.quickActions}>
          <button
            type="button"
            className={`${styles.pillButton} ${activeMode === "Refinance" ? styles.pillActive : ""}`}
            onClick={onSelectRefi}
          >
            Refi
          </button>
          <button
            type="button"
            className={`${styles.pillButton} ${activeMode === "Purchase" ? styles.pillActive : ""}`}
            onClick={onSelectPurchase}
          >
            Purchase
          </button>
          {hasResults && (
            <button type="button" className={styles.linkButton} onClick={onShowResults}>
              View results
            </button>
          )}
          <button type="button" className={styles.linkButton} onClick={onStartOver}>
            Start over
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
