"use client";

import React from "react";
import styles from "./MortgageServices.module.css";

const services = [
  {
    title: "Purchase guidance",
    copy: "Navigate programs, down payment options, and lock periods with clarity.",
  },
  {
    title: "Refinance strategy",
    copy: "Model payment-first refi options and cash-out scenarios with instant feedback.",
  },
  {
    title: "Lock support",
    copy: "Understand rate locks, extensions, and how market moves impact your quote.",
  },
];

const MortgageServices = () => {
  return (
    <section className={styles.section}>
      <div>
        <p className={styles.kicker}>Mortgage services</p>
        <h3 className={styles.title}>Everything you need to decide with confidence</h3>
      </div>
      <div className={styles.grid}>
        {services.map((item) => (
          <div key={item.title} className={styles.card}>
            <p className={styles.cardTitle}>{item.title}</p>
            <p className={styles.cardCopy}>{item.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MortgageServices;
