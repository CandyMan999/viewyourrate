"use client";

import React from "react";
import styles from "./RateDropNotification.module.css";

const RateDropNotification = () => {
  return (
    <section className={styles.section}>
      <div>
        <p className={styles.kicker}>Rate drop alerts</p>
        <h3 className={styles.title}>Get notified when rates move in your favor</h3>
        <p className={styles.subtitle}>
          Subscribe to weekly updates and get a ping when a lower payment aligns with your target.
        </p>
      </div>
      <form className={styles.form}>
        <input type="email" placeholder="you@example.com" className={styles.input} />
        <button type="submit" className={styles.button}>
          Notify me
        </button>
      </form>
    </section>
  );
};

export default RateDropNotification;
