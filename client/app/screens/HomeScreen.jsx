"use client";

import React from "react";
import HeroSection from "../components/HeroSection";
import PricingWidget from "../components/pricingWidget/PricingWidget";
import styles from "./HomeScreen.module.css";

const HomeScreen = ({
  mode,
  onModeChange,
  paymentValue,
  onPaymentChange,
  onScenarioComplete,
  prefillData,
}) => {
  return (
    <section className={styles.layout}>
      <div className={styles.heroColumn}>
        <HeroSection
          mode={mode}
          onModeChange={onModeChange}
          paymentValue={paymentValue}
          onPaymentChange={onPaymentChange}
          onStart={() => onModeChange(mode)}
        />

        <div className={styles.pillars}>
          <div className={styles.pillarCard}>
            <p className={styles.pillarTitle}>Payment-first</p>
            <p className={styles.pillarCopy}>
              Start with what fits your budget. We frame every scenario around the number you set.
            </p>
          </div>
          <div className={styles.pillarCard}>
            <p className={styles.pillarTitle}>Adaptive flows</p>
            <p className={styles.pillarCopy}>
              Purchase and refi share the same intake so you can pivot without losing your work.
            </p>
          </div>
          <div className={styles.pillarCard}>
            <p className={styles.pillarTitle}>Transparent advice</p>
            <p className={styles.pillarCopy}>
              Every option comes with a short explainer so you understand the tradeoffs instantly.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.widgetColumn}>
        <PricingWidget
          variant="panel"
          isOpen
          mode={mode}
          initialPayment={paymentValue}
          prefillData={prefillData}
          onComplete={onScenarioComplete}
          title={mode === "Purchase" ? "Purchase intake" : "Refi intake"}
          description="Step through the essentials. We’ll keep it aligned to your payment target."
        />
      </div>
    </section>
  );
};

export default HomeScreen;
