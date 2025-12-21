"use client";

import React, { useEffect, useMemo, useReducer, useState } from "react";
import HeroSection from "./components/HeroSection";
import PricingWidget from "./components/pricingWidget/PricingWidget";
import MortgageOptionsPage from "./components/mortgageResults/MortgageOptionsPage";
import { request } from "../client";
import { GET_REFI_PRICING_QUERY } from "../graphQL/queries";
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
  const [pricingState, setPricingState] = useState({
    status: "idle",
    data: null,
    error: "",
  });

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
    setPricingState({ status: "loading", data: null, error: "" });
    dispatch({ type: "SET_MORTGAGE_SCENARIO", payload: scenario });
    setWidgetOpen(false);
  };

  const handleCloseWidget = () => setWidgetOpen(false);

  const handleResetScenario = () => {
    dispatch({ type: "RESET_SCENARIO" });
    setPricingState({ status: "idle", data: null, error: "" });
  };

  useEffect(() => {
    if (!state.scenario) return undefined;
    let cancelled = false;

    const fetchPricing = async () => {
      setPricingState({ status: "loading", data: null, error: "" });
      try {
        const data = await request(GET_REFI_PRICING_QUERY, {
          input: state.scenario,
        });
        if (cancelled) return;
        setPricingState({
          status: "success",
          data: data?.getRefiPricing || null,
          error: "",
        });
      } catch (error) {
        if (cancelled) return;
        setPricingState({
          status: "error",
          data: null,
          error: error?.message || "Unable to fetch pricing right now.",
        });
      }
    };

    fetchPricing();

    return () => {
      cancelled = true;
    };
  }, [state.scenario]);

  const activeScenario = useMemo(() => state.scenario, [state.scenario]);

  const retryPricing = () => {
    if (activeScenario) {
      setPricingState({ status: "loading", data: null, error: "" });
      request(GET_REFI_PRICING_QUERY, { input: activeScenario })
        .then((data) =>
          setPricingState({
            status: "success",
            data: data?.getRefiPricing || null,
            error: "",
          })
        )
        .catch((error) =>
          setPricingState({
            status: "error",
            data: null,
            error: error?.message || "Unable to fetch pricing right now.",
          })
        );
    }
  };

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
          pricing={pricingState.data}
          pricingStatus={pricingState.status}
          pricingError={pricingState.error}
          onRetryPricing={retryPricing}
          onEdit={() => {
            setWidgetOpen(true);
          }}
          onReset={handleResetScenario}
        />
      )}
    </div>
  );
}

export default AppShell;
