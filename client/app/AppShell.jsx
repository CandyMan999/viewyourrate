"use client";

import React, { useEffect, useMemo, useReducer, useState } from "react";
import Header from "./components/layout/Header";
import ResultsScreen from "./components/ResultsScreen";
import PricingWidget from "./components/pricingWidget/PricingWidget";
import MortgageOptionsPage from "./components/mortgageResults/MortgageOptionsPage";
import PurchaseOptionsPage from "./components/purchaseResults/PurchaseOptionsPage";
import { request } from "../client";
import {
  GET_PURCHASE_PRICING_QUERY,
  GET_REFI_PRICING_QUERY,
} from "../graphQL/queries";
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
  const [screen, setScreen] = useState("intake");
  const [seedPayment, setSeedPayment] = useState("$2,500");
  const [pricingState, setPricingState] = useState({
    status: "idle",
    data: null,
    error: "",
  });
  const [prefillData, setPrefillData] = useState(null);

  const handleStartRefinance = (paymentValue) => {
    setSeedPayment(paymentValue || seedPayment);
    dispatch({ type: "SET_MODE", mode: "Refinance" });
    setPrefillData(null);
    setScreen("intake");
  };

  const handleStartPurchase = (paymentValue) => {
    setSeedPayment(paymentValue || seedPayment);
    dispatch({ type: "SET_MODE", mode: "Purchase" });
    setPrefillData(null);
    setScreen("intake");
  };

  const handleScenarioComplete = (scenario) => {
    setPricingState({ status: "loading", data: null, error: "" });
    setPrefillData(scenario);
    dispatch({ type: "SET_MORTGAGE_SCENARIO", payload: scenario });
    setScreen("results");
  };

  const handleCloseWidget = () => setScreen("results");

  const handleResetScenario = () => {
    dispatch({ type: "RESET_SCENARIO" });
    setPricingState({ status: "idle", data: null, error: "" });
    setPrefillData(null);
    setScreen("intake");
  };

  const handleOpenWithPrefill = (overrides = {}) => {
    const baseScenario = state.scenario || {};
    setPrefillData({ ...baseScenario, ...overrides });
    setScreen("intake");
  };

  useEffect(() => {
    if (!state.scenario) return undefined;
    let cancelled = false;

    const fetchPricing = async () => {
      setPricingState({ status: "loading", data: null, error: "" });
      try {
        const activeQuery =
          state.mode === "Purchase"
            ? GET_PURCHASE_PRICING_QUERY
            : GET_REFI_PRICING_QUERY;
        const data = await request(activeQuery, {
          input: state.scenario,
        });
        if (cancelled) return;
        const response = data?.getPurchasePricing || data?.getRefiPricing || null;
        setPricingState({
          status: "success",
          data: response,
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
      const activeQuery =
        state.mode === "Purchase" ? GET_PURCHASE_PRICING_QUERY : GET_REFI_PRICING_QUERY;
      request(activeQuery, { input: activeScenario })
        .then((data) =>
          setPricingState({
            status: "success",
            data: data?.getPurchasePricing || data?.getRefiPricing || null,
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

  const showIntake = screen === "intake";
  const showResults = screen === "results" && Boolean(activeScenario);

  return (
    <div className={styles.appShell}>
      <Header
        activeMode={state.mode}
        onSelectRefi={() => handleStartRefinance(seedPayment)}
        onSelectPurchase={() => handleStartPurchase(seedPayment)}
        onStartOver={handleResetScenario}
        onShowResults={() => setScreen("results")}
        hasResults={Boolean(activeScenario)}
      />

      <main className={styles.mainContent}>
        {showIntake && (
          <section className={styles.heroCanvas}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Payment-first journeys</p>
              <h1 className={styles.heroTitle}>Refi + purchase intake in one modern widget.</h1>
              <p className={styles.heroSubtitle}>
                We brought back the original app shell with navigation and a full-width hero,
                centered on the new refi/purchase intake. Start with your payment, and we’ll carry
                that intent through pricing.
              </p>
              <div className={styles.heroChips}>
                <span className={styles.heroChip}>Refi &amp; purchase ready</span>
                <span className={styles.heroChip}>Old results layout preserved</span>
                <span className={styles.heroChip}>UI matched to the new widget</span>
              </div>
            </div>
            <div className={styles.heroWidget}>
              <PricingWidget
                isOpen
                mode={state.mode}
                initialPayment={seedPayment}
                prefillData={prefillData}
                onClose={handleCloseWidget}
                onComplete={handleScenarioComplete}
                variant="inline"
              />
            </div>
          </section>
        )}

        {showResults && (
          <section className={styles.resultsCanvas}>
            <ResultsScreen
              mode={state.mode}
              scenario={activeScenario}
              pricing={pricingState.data}
              pricingStatus={pricingState.status}
              pricingError={pricingState.error}
              onRetryPricing={retryPricing}
              onEdit={() => handleOpenWithPrefill()}
              onFixLtv={handleOpenWithPrefill}
              onReset={handleResetScenario}
            >
              {state.mode === "Purchase" ? (
                <PurchaseOptionsPage
                  scenario={activeScenario}
                  pricing={pricingState.data}
                  pricingStatus={pricingState.status}
                  pricingError={pricingState.error}
                  onRetryPricing={retryPricing}
                  onEdit={() => handleOpenWithPrefill()}
                  onReset={handleResetScenario}
                />
              ) : (
                <MortgageOptionsPage
                  scenario={activeScenario}
                  pricing={pricingState.data}
                  pricingStatus={pricingState.status}
                  pricingError={pricingState.error}
                  onRetryPricing={retryPricing}
                  onEdit={() => handleOpenWithPrefill()}
                  onFixLtv={handleOpenWithPrefill}
                  onReset={handleResetScenario}
                />
              )}
            </ResultsScreen>
          </section>
        )}
      </main>
    </div>
  );
}

export default AppShell;
