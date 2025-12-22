"use client";

import React, { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import PricingWidget from "./components/pricingWidget/PricingWidget";
import MortgageOptionsPage from "./components/mortgageResults/MortgageOptionsPage";
import HomeScreen from "./screens/HomeScreen";
import ResultsScreen from "./screens/ResultsScreen";
import { request } from "../client";
import { GET_PURCHASE_PRICING_QUERY, GET_REFI_PRICING_QUERY } from "../graphQL/queries";
import styles from "./AppShell.module.css";

function AppShell() {
  const [mode, setMode] = useState("Refinance");
  const [scenario, setScenario] = useState(null);
  const [view, setView] = useState("home");
  const [prefillData, setPrefillData] = useState(null);
  const [editorOpen, setEditorOpen] = useState(false);
  const [initialPayment, setInitialPayment] = useState("$2,500");
  const [pricingState, setPricingState] = useState({
    status: "idle",
    data: null,
    error: "",
  });

  const updateMode = (nextMode) => {
    setMode(nextMode);
    if (view !== "home") {
      setView("home");
    }
  };

  const handleScenarioComplete = (completedScenario) => {
    const normalizedMode =
      completedScenario?.quoteType === "Purchase" ? "Purchase" : "Refinance";

    setMode(normalizedMode);
    setScenario(completedScenario);
    setPrefillData(completedScenario);
    setView("results");
    setPricingState({ status: "loading", data: null, error: "" });
  };

  const handleResetScenario = () => {
    setScenario(null);
    setPrefillData(null);
    setPricingState({ status: "idle", data: null, error: "" });
    setView("home");
  };

  const handleOpenEditor = (overrides = {}) => {
    const baseScenario = scenario || {};
    setPrefillData({ ...baseScenario, ...overrides });
    setEditorOpen(true);
  };

  const handleCloseEditor = () => setEditorOpen(false);

  const activeScenario = useMemo(() => scenario, [scenario]);

  const fetchPricing = async (active = activeScenario) => {
    if (!active) return;
    setPricingState({ status: "loading", data: null, error: "" });

    try {
      const activeQuery =
        active.quoteType === "Purchase" ? GET_PURCHASE_PRICING_QUERY : GET_REFI_PRICING_QUERY;
      const data = await request(activeQuery, { input: active });
      const response = data?.getPurchasePricing || data?.getRefiPricing || null;
      setPricingState({ status: "success", data: response, error: "" });
    } catch (error) {
      setPricingState({
        status: "error",
        data: null,
        error: error?.message || "Unable to fetch pricing right now.",
      });
    }
  };

  useEffect(() => {
    if (!activeScenario) return undefined;
    let cancelled = false;

    const run = async () => {
      setPricingState({ status: "loading", data: null, error: "" });
      try {
        const activeQuery =
          activeScenario.quoteType === "Purchase"
            ? GET_PURCHASE_PRICING_QUERY
            : GET_REFI_PRICING_QUERY;
        const data = await request(activeQuery, { input: activeScenario });
        if (cancelled) return;
        const response = data?.getPurchasePricing || data?.getRefiPricing || null;
        setPricingState({ status: "success", data: response, error: "" });
      } catch (error) {
        if (cancelled) return;
        setPricingState({
          status: "error",
          data: null,
          error: error?.message || "Unable to fetch pricing right now.",
        });
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [activeScenario]);

  const retryPricing = () => {
    if (!activeScenario) return;
    fetchPricing(activeScenario);
  };

  const inlinePrefill = useMemo(
    () => (view === "home" ? null : prefillData),
    [prefillData, view]
  );

  return (
    <div className={styles.appShell}>
      <div className={styles.gradient} />
      <div className={styles.headerRow}>
        <Header mode={mode} onModeChange={updateMode} onStartOver={handleResetScenario} />
      </div>

      <main className={styles.mainContent}>
        {view === "results" && activeScenario ? (
          <ResultsScreen
            mode={mode}
            scenario={activeScenario}
            pricingState={pricingState}
            onEdit={handleOpenEditor}
            onReset={handleResetScenario}
            onRetryPricing={retryPricing}
          >
            <MortgageOptionsPage
              scenario={activeScenario}
              pricing={pricingState.data}
              pricingStatus={pricingState.status}
              pricingError={pricingState.error}
              onRetryPricing={retryPricing}
              onEdit={() => handleOpenEditor()}
              onFixLtv={handleOpenEditor}
              onReset={handleResetScenario}
            />
          </ResultsScreen>
        ) : (
          <HomeScreen
            mode={mode}
            onModeChange={updateMode}
            paymentValue={initialPayment}
            onPaymentChange={setInitialPayment}
            onScenarioComplete={handleScenarioComplete}
            prefillData={inlinePrefill}
          />
        )}
      </main>

      <PricingWidget
        variant="modal"
        isOpen={editorOpen}
        mode={mode}
        initialPayment={initialPayment}
        prefillData={prefillData}
        onClose={handleCloseEditor}
        onComplete={(nextScenario) => {
          handleScenarioComplete(nextScenario);
          handleCloseEditor();
        }}
      />
    </div>
  );
}

export default AppShell;
