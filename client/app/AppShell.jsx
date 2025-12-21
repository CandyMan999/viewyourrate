"use client";

import React, { useMemo, useReducer, useState } from "react";
import HeroSection from "./components/HeroSection";
import PricingWidget from "./components/pricingWidget/PricingWidget";
import MortgageOptionsPage from "./components/mortgageResults/MortgageOptionsPage";
import styles from "./AppShell.module.css";

const initialState = {
  mode: "Refinance",
  scenario: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_MODE":
      return { ...state, mode: action.mode };
    case "SET_MORTGAGE_SCENARIO":
      return { ...state, scenario: action.payload };
    case "RESET_SCENARIO":
      return { ...state, scenario: null };
    default:
      return state;
  }
}

function AppShell() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [widgetOpen, setWidgetOpen] = useState(false);
  const [seedPayment, setSeedPayment] = useState("$2,500");

  const handleStartRefinance = (paymentValue) => {
    setSeedPayment(paymentValue || seedPayment);
    dispatch({ type: "SET_MODE", mode: "Refinance" });
    setWidgetOpen(true);
  };

  const handleStartPurchase = (paymentValue) => {
    setSeedPayment(paymentValue || seedPayment);
    dispatch({ type: "SET_MODE", mode: "Purchase" });
    setWidgetOpen(true);
  };

  const handleScenarioComplete = (scenario) => {
    dispatch({ type: "SET_MORTGAGE_SCENARIO", payload: scenario });
    setWidgetOpen(false);
  };

  const handleCloseWidget = () => setWidgetOpen(false);

  const activeScenario = useMemo(() => state.scenario, [state.scenario]);

  return (
    <div className={styles.appShell}>
      <HeroSection
        paymentValue={seedPayment}
        onPaymentChange={setSeedPayment}
        onStartRefinance={handleStartRefinance}
        onStartPurchase={handleStartPurchase}
        activeMode={state.mode}
      />

      <PricingWidget
        isOpen={widgetOpen}
        mode={state.mode}
        initialPayment={seedPayment}
        onClose={handleCloseWidget}
        onComplete={handleScenarioComplete}
      />

      {activeScenario && (
        <MortgageOptionsPage
          scenario={activeScenario}
          onEdit={() => {
            setWidgetOpen(true);
          }}
          onReset={() => dispatch({ type: "RESET_SCENARIO" })}
        />
      )}
    </div>
  );
}

export default AppShell;
