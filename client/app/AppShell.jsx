"use client";

import React, { useEffect, useMemo, useReducer, useState } from "react";
import PricingWidget from "./components/pricingWidget/PricingWidget";
import MortgageOptionsPage from "./components/mortgageResults/MortgageOptionsPage";
import PurchaseOptionsPage from "./components/purchaseResults/PurchaseOptionsPage";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import RatesSection from "./components/ratesSection/RatesSection";
import RateDropNotification from "./components/rateDropNotification/RateDropNotification";
import MortgageServices from "./components/mortgageServices/MortgageServices";
import Footer from "./components/Footer";
import { request } from "../client";
import { GET_PURCHASE_PRICING_QUERY, GET_REFI_PRICING_QUERY } from "../graphQL/queries";
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
  const [navView, setNavView] = useState("home");
  const [widgetOpen, setWidgetOpen] = useState(true);
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
    setWidgetOpen(true);
    setNavView("home");
  };

  const handleStartPurchase = (paymentValue) => {
    setSeedPayment(paymentValue || seedPayment);
    dispatch({ type: "SET_MODE", mode: "Purchase" });
    setPrefillData(null);
    setWidgetOpen(true);
    setNavView("home");
  };

  const handleScenarioComplete = (scenario) => {
    setPricingState({ status: "loading", data: null, error: "" });
    setPrefillData(scenario);
    dispatch({ type: "SET_MORTGAGE_SCENARIO", payload: scenario });
    setWidgetOpen(false);
    setNavView("results");
  };

  const handleCloseWidget = () => setWidgetOpen(false);

  const handleResetScenario = () => {
    dispatch({ type: "RESET_SCENARIO" });
    setPricingState({ status: "idle", data: null, error: "" });
    setPrefillData(null);
    setNavView("home");
  };

  const handleOpenWithPrefill = (overrides = {}) => {
    const baseScenario = state.scenario || {};
    setPrefillData({ ...baseScenario, ...overrides });
    setWidgetOpen(true);
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

  useEffect(() => {
    if (activeScenario && widgetOpen) {
      setWidgetOpen(false);
    }
  }, [activeScenario, widgetOpen]);

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

  const showResultsPlaceholder = navView === "results" && !activeScenario;
  const shouldShowWidget = widgetOpen || !activeScenario;

  return (
    <div className={styles.appShell}>
      <Header onStartRefinance={handleStartRefinance} onStartPurchase={handleStartPurchase} />
      <NavBar
        activeView={navView}
        activeMode={state.mode}
        onNavigate={setNavView}
        onStartRefi={() => handleStartRefinance(seedPayment)}
        onStartPurchase={() => handleStartPurchase(seedPayment)}
        onOpenAnalyzer={() => setNavView("home")}
        onReset={handleResetScenario}
        hasResults={Boolean(activeScenario)}
      />

      <main className={styles.layout}>
        <section className={styles.hero}>
          <button
            type="button"
            className={styles.arrow}
            onClick={() => handleStartRefinance(seedPayment)}
            aria-label="Refinance flow"
          >
            ← Refi
          </button>
          <PricingWidget
            variant="panel"
            isOpen={shouldShowWidget}
            mode={state.mode}
            initialPayment={seedPayment}
            prefillData={prefillData}
            onClose={handleCloseWidget}
            onComplete={handleScenarioComplete}
          />
          <button
            type="button"
            className={styles.arrow}
            onClick={() => handleStartPurchase(seedPayment)}
            aria-label="Purchase flow"
          >
            Purchase →
          </button>
        </section>

        {activeScenario && (
          <section className={styles.results}>
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
          </section>
        )}

        {showResultsPlaceholder && (
          <div className={styles.placeholder}>
            <div>
              <p className={styles.placeholderKicker}>Pricing results</p>
              <h2 className={styles.placeholderTitle}>Run a scenario to see matches.</h2>
              <p className={styles.placeholderCopy}>
                Start with refinance or purchase, then come back here to review your options.
              </p>
            </div>
            <div className={styles.placeholderActions}>
              <button type="button" className={styles.primaryButton} onClick={() => setNavView("home")}>
                Go to intake
              </button>
              <button
                type="button"
                className={styles.secondaryButton}
                onClick={() => handleStartRefinance(seedPayment)}
              >
                Launch refi flow
              </button>
            </div>
          </div>
        )}

        <RatesSection />
        <RateDropNotification />
        <MortgageServices />
        <Footer />
      </main>
    </div>
  );
}

export default AppShell;
