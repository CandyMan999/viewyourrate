"use client";

import React from "react";
import styles from "./ResultsScreen.module.css";

const ResultsScreen = ({ mode, children }) => (
  <div className={styles.shell}>
    <div className={styles.headline}>
      <div>
        <p className={styles.eyebrow}>Pricing results</p>
        <h2 className={styles.title}>
          {mode === "Purchase" ? "Purchase results" : "Refinance results"}
        </h2>
        <p className={styles.subtitle}>
          The classic pricing layout is back—now powered by the new refi/purchase intake data.
        </p>
      </div>
    </div>

    <div className={styles.panel}>{children}</div>
  </div>
);

export default ResultsScreen;
