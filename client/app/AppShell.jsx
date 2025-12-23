"use client";

import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";
import Header from "./components/layout/Header";
import ResultsScreen from "./components/ResultsScreen";
import PricingWidget from "./components/pricingWidget/PricingWidget";
import MortgageOptionsPage from "./components/mortgageResults/MortgageOptionsPage";
import PurchaseOptionsPage from "./components/purchaseResults/PurchaseOptionsPage";
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

const sampleRates = [
  { label: "Comfort 30Y Fixed", rate: 6.125, apr: 6.232, payment: 2450, points: -0.125 },
  { label: "Steady 20Y Fixed", rate: 5.875, apr: 5.99, payment: 2650, points: 0.25 },
  { label: "Sprint 15Y Fixed", rate: 5.49, apr: 5.62, payment: 3080, points: 0.75 },
];

function CalculatorCard({ title, children }) {
  return (
    <div className={styles.calcCard}>
      <div className={styles.calcHeader}>{title}</div>
      {children}
    </div>
  );
}

function PaymentCalculator() {
  const [amount, setAmount] = useState(450000);
  const [rate, setRate] = useState(6.25);
  const [term, setTerm] = useState(30);

  const payment = useMemo(() => {
    const monthlyRate = rate / 100 / 12;
    const n = term * 12;
    if (monthlyRate === 0) return amount / n || 0;
    return (amount * monthlyRate) / (1 - (1 + monthlyRate) ** -n);
  }, [amount, rate, term]);

  return (
    <div className={styles.calcForm}>
      <label className={styles.label} htmlFor="calcAmount">
        Loan amount
      </label>
      <input
        id="calcAmount"
        className={styles.input}
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value) || 0)}
      />
      <label className={styles.label} htmlFor="calcRate">
        Interest rate (% APR)
      </label>
      <input
        id="calcRate"
        className={styles.input}
        type="number"
        step="0.01"
        value={rate}
        onChange={(e) => setRate(Number(e.target.value) || 0)}
      />
      <label className={styles.label} htmlFor="calcTerm">
        Term (years)
      </label>
      <input
        id="calcTerm"
        className={styles.input}
        type="number"
        value={term}
        onChange={(e) => setTerm(Number(e.target.value) || 0)}
      />
      <div className={styles.calcResult}>Estimated monthly: ${payment.toFixed(0)}</div>
    </div>
  );
}

function SavingsCalculator() {
  const [currentRate, setCurrentRate] = useState(7.0);
  const [newRate, setNewRate] = useState(6.0);
  const [balance, setBalance] = useState(420000);
  const [term, setTerm] = useState(25);

  const savings = useMemo(() => {
    const calcPayment = (amount, rateValue, years) => {
      const r = rateValue / 100 / 12;
      const n = years * 12;
      if (r === 0) return amount / n || 0;
      return (amount * r) / (1 - (1 + r) ** -n);
    };
    const current = calcPayment(balance, currentRate, term);
    const proposed = calcPayment(balance, newRate, term);
    return current - proposed;
  }, [balance, currentRate, newRate, term]);

  return (
    <div className={styles.calcForm}>
      <label className={styles.label} htmlFor="savingsBalance">
        Current balance
      </label>
      <input
        id="savingsBalance"
        className={styles.input}
        type="number"
        value={balance}
        onChange={(e) => setBalance(Number(e.target.value) || 0)}
      />
      <label className={styles.label} htmlFor="savingsCurrent">
        Current rate (%)
      </label>
      <input
        id="savingsCurrent"
        className={styles.input}
        type="number"
        step="0.01"
        value={currentRate}
        onChange={(e) => setCurrentRate(Number(e.target.value) || 0)}
      />
      <label className={styles.label} htmlFor="savingsNew">
        New rate (%)
      </label>
      <input
        id="savingsNew"
        className={styles.input}
        type="number"
        step="0.01"
        value={newRate}
        onChange={(e) => setNewRate(Number(e.target.value) || 0)}
      />
      <label className={styles.label} htmlFor="savingsTerm">
        Remaining term (years)
      </label>
      <input
        id="savingsTerm"
        className={styles.input}
        type="number"
        value={term}
        onChange={(e) => setTerm(Number(e.target.value) || 0)}
      />
      <div className={styles.calcResult}>Estimated monthly savings: ${savings.toFixed(0)}</div>
    </div>
  );
}

function AppShell() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [seedPayment, setSeedPayment] = useState("$2,500");
  const [pricingState, setPricingState] = useState({
    status: "idle",
    data: null,
    error: "",
  });
  const [prefillData, setPrefillData] = useState(null);
  const [activeSection, setActiveSection] = useState("home");

  const sectionRefs = {
    home: useRef(null),
    rates: useRef(null),
    spreadsheet: useRef(null),
    analyzer: useRef(null),
    calculators: useRef(null),
    apply: useRef(null),
  };

  const handleStartRefinance = (paymentValue) => {
    setSeedPayment(paymentValue || seedPayment);
    dispatch({ type: "SET_MODE", mode: "Refinance" });
    setPrefillData(null);
    setActiveSection("home");
  };

  const handleStartPurchase = (paymentValue) => {
    setSeedPayment(paymentValue || seedPayment);
    dispatch({ type: "SET_MODE", mode: "Purchase" });
    setPrefillData(null);
    setActiveSection("home");
  };

  const handleScenarioComplete = (scenario) => {
    setPricingState({ status: "loading", data: null, error: "" });
    setPrefillData(scenario);
    dispatch({ type: "SET_MORTGAGE_SCENARIO", payload: scenario });
    setActiveSection("rates");
  };

  const handleCloseWidget = () => setActiveSection("rates");

  const handleResetScenario = () => {
    dispatch({ type: "RESET_SCENARIO" });
    setPricingState({ status: "idle", data: null, error: "" });
    setPrefillData(null);
    setActiveSection("home");
  };

  const handleOpenWithPrefill = (overrides = {}) => {
    const baseScenario = state.scenario || {};
    setPrefillData({ ...baseScenario, ...overrides });
    setActiveSection("home");
  };

  const scrollToSection = (key) => {
    setActiveSection(key);
    const target = sectionRefs[key]?.current;
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (!state.scenario) return undefined;
    let cancelled = false;

    const fetchPricing = async () => {
      setPricingState({ status: "loading", data: null, error: "" });
      try {
        const activeQuery =
          state.mode === "Purchase" ? GET_PURCHASE_PRICING_QUERY : GET_REFI_PRICING_QUERY;
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
  }, [state.scenario, state.mode]);

  const activeScenario = useMemo(() => state.scenario, [state.scenario]);

  const retryPricing = () => {
    if (activeScenario) {
      setPricingState({ status: "loading", data: null, error: "" });
      const activeQuery = state.mode === "Purchase" ? GET_PURCHASE_PRICING_QUERY : GET_REFI_PRICING_QUERY;
      request(activeQuery, { input: activeScenario })
        .then((data) =>
          setPricingState({
            status: "success",
            data: data?.getPurchasePricing || data?.getRefiPricing || null,
            error: "",
          }),
        )
        .catch((error) =>
          setPricingState({
            status: "error",
            data: null,
            error: error?.message || "Unable to fetch pricing right now.",
          }),
        );
    }
  };

  const rateRows = pricingState.data?.options?.length ? pricingState.data.options : sampleRates;

  return (
    <div className={styles.appShell}>
      <Header
        activeMode={state.mode}
        activeSection={activeSection}
        onNavSelect={scrollToSection}
        onSelectRefi={() => handleStartRefinance(seedPayment)}
        onSelectPurchase={() => handleStartPurchase(seedPayment)}
        onStartOver={handleResetScenario}
        onShowResults={() => scrollToSection("rates")}
        hasResults={Boolean(activeScenario)}
      />

      <main className={styles.mainContent}>
        <section ref={sectionRefs.home} className={styles.heroCanvas}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Payment-first journeys</p>
            <h1 className={styles.heroTitle}>Refi + purchase intake in one modern widget.</h1>
            <p className={styles.heroSubtitle}>
              Classic multi-section experience—header, navbar, rates, spreadsheet, analyzers,
              calculators, and apply flows—restored and matched to the new widget styling.
            </p>
            <div className={styles.heroChips}>
              <span className={styles.heroChip}>Refi &amp; purchase ready</span>
              <span className={styles.heroChip}>Rate cards + spreadsheet</span>
              <span className={styles.heroChip}>LE analyzer &amp; calculators</span>
            </div>
            <div className={styles.heroActions}>
              <button
                type="button"
                className={styles.primaryCta}
                onClick={() => handleStartRefinance(seedPayment)}
              >
                Start Refi flow
              </button>
              <button
                type="button"
                className={styles.secondaryCta}
                onClick={() => handleStartPurchase(seedPayment)}
              >
                Start Purchase flow
              </button>
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

        <section ref={sectionRefs.rates} className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionKicker}>Rates &amp; cards</p>
              <h2 className={styles.sectionTitle}>See curated cards and detailed results</h2>
              <p className={styles.sectionSubtitle}>
                Classic rate cards and the original results pages now powered by the new widget.
              </p>
            </div>
            <div className={styles.sectionActions}>
              <button type="button" className={styles.textButton} onClick={() => scrollToSection("home")}>
                Edit inputs
              </button>
              <button type="button" className={styles.textButton} onClick={handleResetScenario}>
                Reset flow
              </button>
            </div>
          </div>

          <div className={styles.rateGrid}>
            {rateRows.map((option, index) => (
              <div key={option.id || option.label || index} className={styles.rateCard}>
                <div className={styles.rateTop}>
                  <p className={styles.rateLabel}>{option.label || `Option ${index + 1}`}</p>
                  <p className={styles.ratePayment}>
                    ${(option.monthlyPayment || option.payment || 0).toLocaleString("en-US")}
                    <span className={styles.ratePaymentCaption}> est. monthly</span>
                  </p>
                </div>
                <div className={styles.rateMetrics}>
                  <div>
                    <p className={styles.metricLabel}>Rate</p>
                    <p className={styles.metricValue}>
                      {option.rate ? `${Number(option.rate).toFixed(3)}%` : `${option.rate || "—"}%`}
                    </p>
                  </div>
                  <div>
                    <p className={styles.metricLabel}>APR</p>
                    <p className={styles.metricValue}>
                      {option.apr ? `${Number(option.apr).toFixed(3)}%` : `${option.apr || "—"}%`}
                    </p>
                  </div>
                  <div>
                    <p className={styles.metricLabel}>Points / Credits</p>
                    <p className={styles.metricValue}>
                      {option.points !== undefined && option.points !== null
                        ? `${Number(option.points).toFixed(3)}`
                        : option.pointsLabel || "—"}
                    </p>
                  </div>
                </div>
                <button type="button" className={styles.applyButton} onClick={() => scrollToSection("apply")}>
                  Apply now
                </button>
              </div>
            ))}
          </div>

          {activeScenario && (
            <div className={styles.resultsCanvas}>
              <ResultsScreen mode={state.mode}>
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
            </div>
          )}
        </section>

        <section ref={sectionRefs.spreadsheet} className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionKicker}>Spreadsheet view</p>
              <h2 className={styles.sectionTitle}>Side-by-side pricing grid</h2>
              <p className={styles.sectionSubtitle}>
                A quick spreadsheet-style comparison of rate, APR, payment, and lock options.
              </p>
            </div>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.rateTable}>
              <thead>
                <tr>
                  <th>Label</th>
                  <th>Rate</th>
                  <th>APR</th>
                  <th>Monthly</th>
                  <th>Points / Credits</th>
                  <th>Lock</th>
                </tr>
              </thead>
              <tbody>
                {rateRows.map((row, index) => (
                  <tr key={row.id || row.label || index}>
                    <td>{row.label || `Option ${index + 1}`}</td>
                    <td>{row.rate ? `${Number(row.rate).toFixed(3)}%` : "—"}</td>
                    <td>{row.apr ? `${Number(row.apr).toFixed(3)}%` : "—"}</td>
                    <td>${(row.monthlyPayment || row.payment || 0).toLocaleString("en-US")}</td>
                    <td>
                      {row.points !== undefined && row.points !== null
                        ? `${Number(row.points).toFixed(3)}`
                        : row.pointsLabel || "—"}
                    </td>
                    <td>{row.lockPeriodDays ? `${row.lockPeriodDays} days` : "30 days"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section ref={sectionRefs.analyzer} className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionKicker}>LE analyzer</p>
              <h2 className={styles.sectionTitle}>Compare Loan Estimate terms quickly</h2>
              <p className={styles.sectionSubtitle}>
                Paste key figures from your LE to see how they line up with our pricing.
              </p>
            </div>
          </div>

          <div className={styles.analyzerGrid}>
            <div className={styles.analyzerCard}>
              <label className={styles.label} htmlFor="leRate">
                LE rate
              </label>
              <input className={styles.input} id="leRate" placeholder="6.250%" />
              <label className={styles.label} htmlFor="leApr">
                LE APR
              </label>
              <input className={styles.input} id="leApr" placeholder="6.310%" />
              <label className={styles.label} htmlFor="lePayment">
                LE monthly payment
              </label>
              <input className={styles.input} id="lePayment" placeholder="$2,480" />
              <button type="button" className={styles.primaryCta} onClick={() => scrollToSection("rates")}>
                Analyze against my options
              </button>
            </div>
            <div className={styles.analyzerInsight}>
              <h3 className={styles.analyzerTitle}>Insight summary</h3>
              <p className={styles.analyzerText}>
                Compare your LE to our rate cards and spreadsheet above to see if points, APR, and
                monthly payment align with your goals. Adjust the widget to rerun scenarios.
              </p>
              <button type="button" className={styles.secondaryCta} onClick={() => scrollToSection("home")}>
                Edit scenario
              </button>
            </div>
          </div>
        </section>

        <section ref={sectionRefs.calculators} className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionKicker}>Calculators</p>
              <h2 className={styles.sectionTitle}>Quick math that matches the new widget style</h2>
              <p className={styles.sectionSubtitle}>
                Payment and savings calculators inspired by the classic app—dark UI with teal
                accents.
              </p>
            </div>
          </div>

          <div className={styles.calcGrid}>
            <CalculatorCard title="Monthly payment">
              <p className={styles.calcText}>Estimate payment from loan amount, rate, and term.</p>
              <PaymentCalculator />
            </CalculatorCard>
            <CalculatorCard title="Refi savings">
              <p className={styles.calcText}>See potential monthly savings from a better rate.</p>
              <SavingsCalculator />
            </CalculatorCard>
          </div>
        </section>

        <section ref={sectionRefs.apply} className={styles.section}>
          <div className={styles.applyBanner}>
            <div>
              <p className={styles.sectionKicker}>Apply now</p>
              <h2 className={styles.sectionTitle}>Move forward with the option you like best</h2>
              <p className={styles.sectionSubtitle}>
                Primary apply area restored so you can jump into a refi or purchase application.
              </p>
            </div>
            <div className={styles.applyButtons}>
              <button type="button" className={styles.primaryCta}>
                Apply for Refi
              </button>
              <button type="button" className={styles.secondaryCta}>
                Apply for Purchase
              </button>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <p className={styles.footerTitle}>View Your Rate · Payment-first mortgage hub</p>
          <p className={styles.footerText}>
            Navbar slider, rate cards, spreadsheet view, analyzers, calculators, and apply calls are
            back—styled to match the modern refi/purchase widget experience.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default AppShell;
