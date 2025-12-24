import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronDown, FiChevronUp, FiInfo } from "react-icons/fi";

/**
 * MortgageCalc (custom, no external widget)
 * - Higher-contrast, NON-transparent card + per-section contrast
 * - Collapsibles start CLOSED
 */
const MortgageCalc = ({ isVisible, onClose }) => {
  const dialogRef = useRef(null);

  // ---- Modal animation ----
  const widgetVariants = {
    hidden: { y: "10%", opacity: 0, scale: 0.985 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.26, ease: "easeOut" },
    },
    exit: {
      y: "10%",
      opacity: 0,
      scale: 0.985,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
  const round2 = (n) => Math.round((Number(n) || 0) * 100) / 100;

  const formatMoney = (n) => {
    const v = Number.isFinite(n) ? n : 0;
    return v.toLocaleString(undefined, {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });
  };

  const formatMoney2 = (n) => {
    const v = Number.isFinite(n) ? n : 0;
    return v.toLocaleString(undefined, {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    });
  };

  const formatPct = (n, digits = 3) => {
    const v = Number.isFinite(n) ? n : 0;
    return `${v.toFixed(digits)}%`;
  };

  const safeNum = (val) => {
    if (val === "" || val === null || val === undefined) return 0;
    const n = Number(String(val).replace(/[^0-9.\-]/g, ""));
    return Number.isFinite(n) ? n : 0;
  };

  // ---- Inputs ----
  const [purchasePrice, setPurchasePrice] = useState(450000);
  const [downMode, setDownMode] = useState("percent"); // "percent" | "dollars"
  const [downPercent, setDownPercent] = useState(10);
  const [downDollars, setDownDollars] = useState(45000);

  const [interestRate, setInterestRate] = useState(6.75); // APR %
  const [termYears, setTermYears] = useState(30);

  const [taxMode, setTaxMode] = useState("percent"); // "percent" | "dollars"
  const [annualTaxPercent, setAnnualTaxPercent] = useState(1.1); // % of value
  const [annualTaxDollars, setAnnualTaxDollars] = useState(0);

  const [annualInsurance, setAnnualInsurance] = useState(1600);
  const [monthlyHOA, setMonthlyHOA] = useState(0);

  const [pmiEnabled, setPmiEnabled] = useState(true);
  const [pmiAnnualRate, setPmiAnnualRate] = useState(0.55); // % of loan / year
  const [pmiCutoffLTV, setPmiCutoffLTV] = useState(80);

  const [extraMonthly, setExtraMonthly] = useState(0);

  // Upfront / closing
  const [closingCosts, setClosingCosts] = useState(9000);
  const [originationPoints, setOriginationPoints] = useState(0);
  const [prepaids, setPrepaids] = useState(2500);
  const [includeUpfrontInSummary, setIncludeUpfrontInSummary] = useState(true);

  // ✅ Collapsibles start CLOSED
  const [sections, setSections] = useState({
    basics: false,
    costs: false,
    pmi: false,
    upfront: false,
    extras: false,
    schedule: false,
  });

  const toggleSection = (key) =>
    setSections((s) => ({ ...s, [key]: !s[key] }));

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => dialogRef.current?.focus?.(), 0);
    }
  }, [isVisible]);

  // keep down payment in sync
  useEffect(() => {
    const price = clamp(safeNum(purchasePrice), 0, 100_000_000);
    const pct = clamp(safeNum(downPercent), 0, 100);
    const dollars = clamp(safeNum(downDollars), 0, price);

    if (downMode === "percent") {
      const computed = round2((price * pct) / 100);
      if (Math.abs(computed - dollars) > 1) setDownDollars(computed);
    } else {
      const computedPct = price > 0 ? round2((dollars / price) * 100) : 0;
      if (Math.abs(computedPct - pct) > 0.01) setDownPercent(computedPct);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [purchasePrice, downMode, downPercent, downDollars]);

  // ---- Core calculations ----
  const computed = useMemo(() => {
    const price = clamp(safeNum(purchasePrice), 0, 100_000_000);

    const dpDollars = clamp(
      downMode === "percent"
        ? (price * clamp(safeNum(downPercent), 0, 100)) / 100
        : safeNum(downDollars),
      0,
      price
    );

    const loanAmount = Math.max(0, price - dpDollars);

    const rate = clamp(safeNum(interestRate), 0, 25);
    const years = clamp(Math.round(safeNum(termYears)), 1, 40);
    const n = years * 12;

    const r = rate / 100 / 12;
    const pi =
      loanAmount === 0
        ? 0
        : r === 0
        ? loanAmount / n
        : (loanAmount * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);

    // Taxes
    const taxPct = clamp(safeNum(annualTaxPercent), 0, 10);
    const taxDollars =
      taxMode === "percent"
        ? (price * taxPct) / 100
        : clamp(safeNum(annualTaxDollars), 0, 2_000_000);
    const monthlyTax = taxDollars / 12;

    const ins = clamp(safeNum(annualInsurance), 0, 200_000) / 12;
    const hoa = clamp(safeNum(monthlyHOA), 0, 50_000);

    const ltv = price > 0 ? (loanAmount / price) * 100 : 0;
    const pmiRate = clamp(safeNum(pmiAnnualRate), 0, 5);
    const pmiMonthlyIfOn = (loanAmount * (pmiRate / 100)) / 12;

    const shouldPMI = Boolean(pmiEnabled) && loanAmount > 0 && ltv > 80.0;
    const extra = clamp(safeNum(extraMonthly), 0, 500_000);

    // Upfront
    const cc = clamp(safeNum(closingCosts), 0, 200_000);
    const points = clamp(safeNum(originationPoints), 0, 5);
    const pointsCost = (loanAmount * points) / 100;
    const pre = clamp(safeNum(prepaids), 0, 200_000);

    const cashToClose = dpDollars + cc + pointsCost + pre;

    const monthlyPI = pi;
    const monthlyPMI = shouldPMI ? pmiMonthlyIfOn : 0;

    const monthlyTotal =
      monthlyPI + monthlyTax + ins + hoa + monthlyPMI + extra;

    return {
      price,
      dpDollars,
      dpPercent: price > 0 ? (dpDollars / price) * 100 : 0,
      loanAmount,
      years,
      n,
      rate,
      r,
      ltv,
      monthlyPI,
      monthlyTax,
      monthlyInsurance: ins,
      monthlyHOA: hoa,
      monthlyPMI,
      monthlyTotal,
      extra,
      cashToClose,
      pointsCost,
      closingCosts: cc,
      prepaids: pre,
      pmiCutoffLTV: clamp(safeNum(pmiCutoffLTV), 70, 90),
      shouldPMI,
    };
  }, [
    purchasePrice,
    downMode,
    downPercent,
    downDollars,
    interestRate,
    termYears,
    taxMode,
    annualTaxPercent,
    annualTaxDollars,
    annualInsurance,
    monthlyHOA,
    pmiEnabled,
    pmiAnnualRate,
    pmiCutoffLTV,
    extraMonthly,
    closingCosts,
    originationPoints,
    prepaids,
  ]);

  // ---- Amortization schedule ----
  const amort = useMemo(() => {
    const {
      loanAmount,
      monthlyPI,
      monthlyPMI,
      monthlyTax,
      monthlyInsurance,
      monthlyHOA,
      r,
      n,
      extra,
      price,
      pmiCutoffLTV,
      shouldPMI,
    } = computed;

    if (!sections.schedule) {
      return {
        rows: [],
        payoffMonths: n,
        totalInterest: 0,
        totalPaid: 0,
        pmiMonths: 0,
        endBalance: loanAmount,
      };
    }

    let balance = loanAmount;
    let totalInterest = 0;
    let totalPaid = 0;
    let month = 0;
    let pmiMonths = 0;

    const rows = [];

    const basePayment = monthlyPI;
    const fixedCosts = monthlyTax + monthlyInsurance + monthlyHOA;

    const cutoffBalance = price > 0 ? (pmiCutoffLTV / 100) * price : 0;

    while (balance > 0.01 && month < 1200) {
      month += 1;

      const interest = r === 0 ? 0 : balance * r;
      let principal = basePayment - interest;
      principal = Math.max(0, principal);

      const extraP = Math.min(extra, Math.max(0, balance - principal));
      let paymentThisMonth = basePayment + extraP;

      if (principal + extraP > balance) {
        principal = balance;
        paymentThisMonth = interest + principal;
      } else {
        principal += extraP;
      }

      balance = Math.max(0, balance - principal);

      const pmiOnThisMonth =
        shouldPMI && balance > cutoffBalance + 0.01 ? monthlyPMI : 0;

      if (pmiOnThisMonth > 0) pmiMonths += 1;

      const totalMonth = paymentThisMonth + fixedCosts + pmiOnThisMonth;

      totalInterest += interest;
      totalPaid += totalMonth;

      rows.push({
        month,
        paymentPI: paymentThisMonth,
        interest,
        principal,
        balance,
        pmi: pmiOnThisMonth,
        totalMonth,
      });

      if (rows.length > 520) rows.splice(260, 1);
    }

    return {
      rows,
      payoffMonths: month,
      totalInterest,
      totalPaid,
      pmiMonths,
      endBalance: balance,
    };
  }, [computed, sections.schedule]);

  // ---- Close behaviors ----
  useEffect(() => {
    if (!isVisible) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isVisible, onClose]);

  // ✅ Higher contrast & not transparent
  const overlayStyles = {
    position: "fixed",
    inset: 0,
    background:
      "radial-gradient(1100px 800px at 12% 18%, rgba(50, 120, 255, 0.22), transparent 55%), radial-gradient(900px 700px at 85% 20%, rgba(0, 200, 160, 0.18), transparent 60%), rgba(0,0,0,0.72)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    padding: 18,
  };

  const widgetStyles = {
    width: "min(1180px, 100%)",
    maxHeight: "min(92vh, 920px)",
    overflow: "hidden",
    borderRadius: 22,
    position: "relative",
    boxShadow: "0 22px 80px rgba(0,0,0,0.6)",
    border: "1px solid rgba(255,255,255,0.10)",
    background: "#0B1220", // solid, non-transparent
  };

  const headerStyles = {
    padding: "18px 18px 14px 18px",
    borderBottom: "1px solid rgba(255,255,255,0.10)",
    display: "flex",
    gap: 14,
    alignItems: "center",
    justifyContent: "space-between",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.00))",
  };

  const h2Styles = {
    margin: 0,
    fontSize: 18,
    letterSpacing: 0.2,
    color: "rgba(255,255,255,0.92)",
  };

  const subtitleStyles = {
    margin: 0,
    fontSize: 12.5,
    color: "rgba(255,255,255,0.70)",
  };

  const closeIconStyles = {
    border: "1px solid rgba(255,255,255,0.16)",
    background: "rgba(255,255,255,0.06)",
    color: "rgba(255,255,255,0.92)",
    width: 38,
    height: 38,
    borderRadius: 12,
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
  };

  const bodyStyles = {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: 14,
    padding: 14,
    height: "calc(min(92vh, 920px) - 72px)",
    overflow: "hidden",
  };

  const pane = {
    overflow: "auto",
  };

  // ✅ More section contrast (each card is clearly separated)
  const panelStyles = {
    borderRadius: 18,
    background: "#0F1B33", // solid contrast panel
    border: "1px solid rgba(255,255,255,0.08)",
    padding: 14,
  };

  const blockStyles = {
    borderRadius: 16,
    background: "#0A1326", // darker nested block
    border: "1px solid rgba(255,255,255,0.08)",
    padding: 14,
  };

  const grid2 = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
  };

  const grid3 = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 10,
  };

  const labelStyles = {
    fontSize: 12,
    color: "rgba(255,255,255,0.78)",
    marginBottom: 6,
    display: "flex",
    alignItems: "center",
    gap: 6,
  };

  const inputStyles = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "#081027",
    color: "rgba(255,255,255,0.94)",
    outline: "none",
    fontSize: 14,
  };

  const pillRow = { display: "flex", gap: 8, flexWrap: "wrap" };

  const pill = (active) => ({
    padding: "8px 10px",
    borderRadius: 999,
    cursor: "pointer",
    border: active
      ? "1px solid rgba(255,255,255,0.28)"
      : "1px solid rgba(255,255,255,0.12)",
    background: active ? "rgba(255,255,255,0.16)" : "rgba(0,0,0,0.22)",
    color: active ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.78)",
    fontSize: 12.5,
    userSelect: "none",
  });

  const sectionHeader = (open) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    padding: "12px 12px",
    borderRadius: 14,
    border: open
      ? "1px solid rgba(255,255,255,0.18)"
      : "1px solid rgba(255,255,255,0.10)",
    background: open ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.26)",
  });

  const sectionTitle = {
    fontSize: 13,
    fontWeight: 800,
    color: "rgba(255,255,255,0.92)",
    letterSpacing: 0.2,
  };

  const sectionBody = { padding: "10px 2px 2px 2px" };

  const statCard = {
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "#081027",
    padding: 12,
  };

  const statLabel = {
    fontSize: 12,
    color: "rgba(255,255,255,0.74)",
    marginBottom: 6,
  };

  const statValue = {
    fontSize: 18,
    fontWeight: 900,
    color: "rgba(255,255,255,0.95)",
    letterSpacing: 0.2,
  };

  const statSub = {
    fontSize: 12,
    color: "rgba(255,255,255,0.66)",
    marginTop: 6,
    lineHeight: 1.35,
  };

  const hr = {
    height: 1,
    background: "rgba(255,255,255,0.10)",
    border: "none",
    margin: "12px 0",
  };

  const footerActions = {
    display: "flex",
    gap: 10,
    justifyContent: "flex-end",
    padding: "12px 14px 16px 14px",
    borderTop: "1px solid rgba(255,255,255,0.10)",
    background: "#09122A",
  };

  const btn = (variant = "primary") => {
    const base = {
      padding: "10px 14px",
      borderRadius: 14,
      cursor: "pointer",
      border: "1px solid rgba(255,255,255,0.14)",
      fontSize: 13,
      fontWeight: 800,
      letterSpacing: 0.2,
    };
    if (variant === "primary") {
      return {
        ...base,
        background: "rgba(255,255,255,0.16)",
        color: "rgba(255,255,255,0.96)",
      };
    }
    return {
      ...base,
      background: "rgba(0,0,0,0.28)",
      color: "rgba(255,255,255,0.86)",
    };
  };

  const resetDefaults = () => {
    setPurchasePrice(450000);
    setDownMode("percent");
    setDownPercent(10);
    setDownDollars(45000);
    setInterestRate(6.75);
    setTermYears(30);
    setTaxMode("percent");
    setAnnualTaxPercent(1.1);
    setAnnualTaxDollars(0);
    setAnnualInsurance(1600);
    setMonthlyHOA(0);
    setPmiEnabled(true);
    setPmiAnnualRate(0.55);
    setPmiCutoffLTV(80);
    setExtraMonthly(0);
    setClosingCosts(9000);
    setOriginationPoints(0);
    setPrepaids(2500);
    setIncludeUpfrontInSummary(true);

    // keep them closed on reset too
    setSections({
      basics: false,
      costs: false,
      pmi: false,
      upfront: false,
      extras: false,
      schedule: false,
    });
  };

  const Section = ({ k, title, children, hint }) => {
    const open = Boolean(sections[k]);
    return (
      <div style={{ marginBottom: 10 }}>
        <div style={sectionHeader(open)} onClick={() => toggleSection(k)} role="button" tabIndex={0}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={sectionTitle}>{title}</div>
            {hint ? (
              <div
                title={hint}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 12,
                  color: "rgba(255,255,255,0.68)",
                  padding: "4px 8px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "rgba(0,0,0,0.22)",
                }}
              >
                <FiInfo />
                Tip
              </div>
            ) : null}
          </div>
          <div style={{ color: "rgba(255,255,255,0.86)" }}>
            {open ? <FiChevronUp /> : <FiChevronDown />}
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              style={sectionBody}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <div style={blockStyles}>{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const Summary = () => {
    const totalNoExtra =
      computed.monthlyPI +
      computed.monthlyTax +
      computed.monthlyInsurance +
      computed.monthlyHOA +
      computed.monthlyPMI;

    const cash =
      computed.dpDollars +
      (includeUpfrontInSummary
        ? computed.closingCosts + computed.pointsCost + computed.prepaids
        : 0);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={panelStyles}>
          <div style={grid2}>
            <div style={statCard}>
              <div style={statLabel}>Est. Monthly Payment</div>
              <div style={statValue}>{formatMoney2(computed.monthlyTotal)}</div>
              <div style={statSub}>
                Includes P&amp;I + taxes + insurance + HOA + PMI (if applicable)
                {computed.extra > 0 ? " + extra principal." : "."}
              </div>
            </div>

            <div style={statCard}>
              <div style={statLabel}>Loan Amount</div>
              <div style={statValue}>{formatMoney(computed.loanAmount)}</div>
              <div style={statSub}>
                Down {formatMoney(computed.dpDollars)} ({computed.dpPercent.toFixed(1)}%)
                {computed.ltv > 0 ? ` · LTV ${computed.ltv.toFixed(1)}%` : ""}
              </div>
            </div>
          </div>

          <hr style={hr} />

          <div style={grid3}>
            <div style={statCard}>
              <div style={statLabel}>P&amp;I</div>
              <div style={statValue}>{formatMoney2(computed.monthlyPI)}</div>
              <div style={statSub}>
                {formatPct(computed.rate, 3)} APR · {computed.years} years
              </div>
            </div>

            <div style={statCard}>
              <div style={statLabel}>Escrow (T+I)</div>
              <div style={statValue}>
                {formatMoney2(computed.monthlyTax + computed.monthlyInsurance)}
              </div>
              <div style={statSub}>
                Tax {formatMoney2(computed.monthlyTax)} · Ins{" "}
                {formatMoney2(computed.monthlyInsurance)}
              </div>
            </div>

            <div style={statCard}>
              <div style={statLabel}>HOA + PMI</div>
              <div style={statValue}>
                {formatMoney2(computed.monthlyHOA + computed.monthlyPMI)}
              </div>
              <div style={statSub}>
                HOA {formatMoney2(computed.monthlyHOA)} · PMI{" "}
                {computed.monthlyPMI > 0 ? formatMoney2(computed.monthlyPMI) : "—"}
              </div>
            </div>
          </div>

          <hr style={hr} />

          <div style={grid2}>
            <div style={statCard}>
              <div style={statLabel}>Cash to Close (est.)</div>
              <div style={statValue}>{formatMoney(cash)}</div>
              <div style={statSub}>
                {includeUpfrontInSummary
                  ? "Down payment + closing costs + points + prepaids."
                  : "Down payment only (toggle upfront items in “Upfront costs”)."}
              </div>
            </div>

            <div style={statCard}>
              <div style={statLabel}>Without Extra Payments</div>
              <div style={statValue}>{formatMoney2(totalNoExtra)}</div>
              <div style={statSub}>Monthly total before optional extra principal.</div>
            </div>
          </div>
        </div>

        <div style={panelStyles}>
          <div style={{ fontSize: 13, fontWeight: 900, color: "rgba(255,255,255,0.92)" }}>
            Quick stats
          </div>
          <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 8 }}>
            <div style={pill(false)}>{formatMoney(computed.price)} price</div>
            <div style={pill(false)}>{formatMoney(computed.loanAmount)} loan</div>
            <div style={pill(false)}>{formatPct(computed.rate, 3)} APR</div>
            <div style={pill(false)}>{computed.years} years</div>
            <div style={pill(false)}>{computed.dpPercent.toFixed(1)}% down</div>
            <div style={pill(false)}>
              Total {formatMoney2(computed.monthlyTotal)}/mo
            </div>
          </div>
        </div>
      </div>
    );
  };

  const table = {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0 8px",
  };

  const rowCard = {
    background: "#081027",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 14,
  };

  const td = {
    padding: "10px 10px",
    fontSize: 12.5,
    color: "rgba(255,255,255,0.88)",
    whiteSpace: "nowrap",
  };

  const tdMuted = { ...td, color: "rgba(255,255,255,0.68)" };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          style={overlayStyles}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={widgetVariants}
          aria-modal="true"
          role="dialog"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose?.();
          }}
        >
          <div
            style={widgetStyles}
            ref={dialogRef}
            tabIndex={-1}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div style={headerStyles}>
              <div>
                <h2 style={h2Styles}>Mortgage Calculator</h2>
                <p style={subtitleStyles}>
                  Expand only what you need · Strong contrast · Instant results
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <button style={btn("secondary")} onClick={resetDefaults} type="button">
                  Reset
                </button>
                <div style={closeIconStyles} onClick={onClose} role="button" tabIndex={0} aria-label="Close">
                  <FiX />
                </div>
              </div>
            </div>

            <div style={bodyStyles}>
              {/* LEFT: Controls */}
              <div style={pane}>
                <div style={panelStyles}>
                  <Section k="basics" title="Basics" hint="Price, down payment, rate, term.">
                    <div style={grid2}>
                      <div>
                        <div style={labelStyles}>Home price</div>
                        <input
                          style={inputStyles}
                          value={purchasePrice}
                          onChange={(e) => setPurchasePrice(safeNum(e.target.value))}
                          inputMode="decimal"
                        />
                      </div>

                      <div>
                        <div style={labelStyles}>Loan term</div>
                        <div style={pillRow}>
                          {[15, 20, 30].map((y) => (
                            <div key={y} style={pill(termYears === y)} onClick={() => setTermYears(y)}>
                              {y} yr
                            </div>
                          ))}
                          <input
                            style={{
                              ...inputStyles,
                              width: 110,
                              padding: "9px 10px",
                              borderRadius: 999,
                            }}
                            value={termYears}
                            onChange={(e) => setTermYears(clamp(safeNum(e.target.value), 1, 40))}
                            inputMode="numeric"
                            aria-label="Custom loan term"
                          />
                        </div>
                      </div>

                      <div>
                        <div style={labelStyles}>Interest rate (APR)</div>
                        <input
                          style={inputStyles}
                          value={interestRate}
                          onChange={(e) => setInterestRate(clamp(safeNum(e.target.value), 0, 25))}
                          inputMode="decimal"
                        />
                        <div style={{ marginTop: 8 }}>
                          <input
                            type="range"
                            min="0"
                            max="12"
                            step="0.05"
                            value={interestRate}
                            onChange={(e) => setInterestRate(safeNum(e.target.value))}
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>

                      <div>
                        <div style={labelStyles}>Down payment</div>
                        <div style={pillRow}>
                          <div style={pill(downMode === "percent")} onClick={() => setDownMode("percent")}>
                            %
                          </div>
                          <div style={pill(downMode === "dollars")} onClick={() => setDownMode("dollars")}>
                            $
                          </div>
                          <div
                            style={{
                              marginLeft: "auto",
                              fontSize: 12,
                              color: "rgba(255,255,255,0.78)",
                              padding: "8px 10px",
                              borderRadius: 999,
                              border: "1px solid rgba(255,255,255,0.12)",
                              background: "rgba(0,0,0,0.26)",
                            }}
                          >
                            {formatMoney(computed.dpDollars)} ({computed.dpPercent.toFixed(1)}%)
                          </div>
                        </div>

                        <div style={{ marginTop: 10 }}>
                          {downMode === "percent" ? (
                            <>
                              <input
                                style={inputStyles}
                                value={downPercent}
                                onChange={(e) => setDownPercent(clamp(safeNum(e.target.value), 0, 100))}
                                inputMode="decimal"
                              />
                              <div style={{ marginTop: 8 }}>
                                <input
                                  type="range"
                                  min="0"
                                  max="40"
                                  step="0.25"
                                  value={downPercent}
                                  onChange={(e) => setDownPercent(safeNum(e.target.value))}
                                  style={{ width: "100%" }}
                                />
                              </div>
                            </>
                          ) : (
                            <>
                              <input
                                style={inputStyles}
                                value={downDollars}
                                onChange={(e) => setDownDollars(clamp(safeNum(e.target.value), 0, computed.price))}
                                inputMode="decimal"
                              />
                              <div style={{ marginTop: 8 }}>
                                <input
                                  type="range"
                                  min="0"
                                  max={Math.max(1, computed.price)}
                                  step="250"
                                  value={downDollars}
                                  onChange={(e) => setDownDollars(safeNum(e.target.value))}
                                  style={{ width: "100%" }}
                                />
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </Section>

                  <Section k="costs" title="Monthly costs" hint="Taxes, insurance, HOA.">
                    <div style={grid2}>
                      <div>
                        <div style={labelStyles}>Property tax</div>
                        <div style={pillRow}>
                          <div style={pill(taxMode === "percent")} onClick={() => setTaxMode("percent")}>
                            % of value
                          </div>
                          <div style={pill(taxMode === "dollars")} onClick={() => setTaxMode("dollars")}>
                            annual $
                          </div>
                        </div>

                        <div style={{ marginTop: 10 }}>
                          {taxMode === "percent" ? (
                            <>
                              <input
                                style={inputStyles}
                                value={annualTaxPercent}
                                onChange={(e) => setAnnualTaxPercent(clamp(safeNum(e.target.value), 0, 10))}
                                inputMode="decimal"
                              />
                              <div style={{ marginTop: 8 }}>
                                <input
                                  type="range"
                                  min="0"
                                  max="5"
                                  step="0.05"
                                  value={annualTaxPercent}
                                  onChange={(e) => setAnnualTaxPercent(safeNum(e.target.value))}
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <div style={{ marginTop: 8, fontSize: 12, color: "rgba(255,255,255,0.74)" }}>
                                Est. {formatMoney2(computed.monthlyTax)}/mo
                              </div>
                            </>
                          ) : (
                            <>
                              <input
                                style={inputStyles}
                                value={annualTaxDollars}
                                onChange={(e) => setAnnualTaxDollars(clamp(safeNum(e.target.value), 0, 2_000_000))}
                                inputMode="decimal"
                              />
                              <div style={{ marginTop: 8, fontSize: 12, color: "rgba(255,255,255,0.74)" }}>
                                Est. {formatMoney2(computed.monthlyTax)}/mo
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      <div>
                        <div style={labelStyles}>Homeowners insurance (annual)</div>
                        <input
                          style={inputStyles}
                          value={annualInsurance}
                          onChange={(e) => setAnnualInsurance(clamp(safeNum(e.target.value), 0, 200_000))}
                          inputMode="decimal"
                        />
                        <div style={{ marginTop: 8, fontSize: 12, color: "rgba(255,255,255,0.74)" }}>
                          Est. {formatMoney2(computed.monthlyInsurance)}/mo
                        </div>

                        <div style={{ height: 10 }} />

                        <div style={labelStyles}>HOA (monthly)</div>
                        <input
                          style={inputStyles}
                          value={monthlyHOA}
                          onChange={(e) => setMonthlyHOA(clamp(safeNum(e.target.value), 0, 50_000))}
                          inputMode="decimal"
                        />
                      </div>
                    </div>
                  </Section>

                  <Section k="pmi" title="PMI" hint="Only if LTV > 80% (typical).">
                    <div style={grid2}>
                      <div>
                        <div style={labelStyles}>PMI enabled</div>
                        <div style={pillRow}>
                          <div style={pill(pmiEnabled)} onClick={() => setPmiEnabled(true)}>
                            On
                          </div>
                          <div style={pill(!pmiEnabled)} onClick={() => setPmiEnabled(false)}>
                            Off
                          </div>
                          <div style={{ marginLeft: "auto", ...pill(false), cursor: "default" }}>
                            {computed.monthlyPMI > 0 ? `Est. ${formatMoney2(computed.monthlyPMI)}/mo` : "PMI —"}
                          </div>
                        </div>
                        <div style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,0.74)", lineHeight: 1.4 }}>
                          {computed.shouldPMI
                            ? "PMI is applied because your current LTV is above 80%."
                            : "PMI is not applied (disabled, no loan, or LTV ≤ 80%)."}
                        </div>
                      </div>

                      <div>
                        <div style={labelStyles}>PMI rate (annual % of loan)</div>
                        <input
                          style={inputStyles}
                          value={pmiAnnualRate}
                          onChange={(e) => setPmiAnnualRate(clamp(safeNum(e.target.value), 0, 5))}
                          inputMode="decimal"
                        />
                        <div style={{ marginTop: 8 }}>
                          <input
                            type="range"
                            min="0"
                            max="2.5"
                            step="0.01"
                            value={pmiAnnualRate}
                            onChange={(e) => setPmiAnnualRate(safeNum(e.target.value))}
                            style={{ width: "100%" }}
                          />
                        </div>

                        <div style={{ height: 10 }} />

                        <div style={labelStyles}>PMI stops when LTV ≤</div>
                        <input
                          style={inputStyles}
                          value={pmiCutoffLTV}
                          onChange={(e) => setPmiCutoffLTV(clamp(safeNum(e.target.value), 70, 90))}
                          inputMode="decimal"
                        />
                      </div>
                    </div>
                  </Section>

                  <Section k="upfront" title="Upfront costs" hint="Affects cash to close.">
                    <div style={grid2}>
                      <div>
                        <div style={labelStyles}>Closing costs</div>
                        <input
                          style={inputStyles}
                          value={closingCosts}
                          onChange={(e) => setClosingCosts(clamp(safeNum(e.target.value), 0, 200_000))}
                          inputMode="decimal"
                        />
                      </div>

                      <div>
                        <div style={labelStyles}>Origination points</div>
                        <div style={pillRow}>
                          {[0, 0.5, 1, 2].map((p) => (
                            <div key={p} style={pill(originationPoints === p)} onClick={() => setOriginationPoints(p)}>
                              {p} pt{p === 1 ? "" : "s"}
                            </div>
                          ))}
                          <input
                            style={{
                              ...inputStyles,
                              width: 110,
                              padding: "9px 10px",
                              borderRadius: 999,
                              marginLeft: "auto",
                            }}
                            value={originationPoints}
                            onChange={(e) => setOriginationPoints(clamp(safeNum(e.target.value), 0, 5))}
                            inputMode="decimal"
                          />
                        </div>
                        <div style={{ marginTop: 8, fontSize: 12, color: "rgba(255,255,255,0.74)" }}>
                          Points cost: {formatMoney(Math.round(computed.pointsCost))}
                        </div>
                      </div>

                      <div>
                        <div style={labelStyles}>Prepaids</div>
                        <input
                          style={inputStyles}
                          value={prepaids}
                          onChange={(e) => setPrepaids(clamp(safeNum(e.target.value), 0, 200_000))}
                          inputMode="decimal"
                        />
                      </div>

                      <div>
                        <div style={labelStyles}>Include upfront in “Cash to Close”</div>
                        <div style={pillRow}>
                          <div style={pill(includeUpfrontInSummary)} onClick={() => setIncludeUpfrontInSummary(true)}>
                            Yes
                          </div>
                          <div style={pill(!includeUpfrontInSummary)} onClick={() => setIncludeUpfrontInSummary(false)}>
                            No
                          </div>
                          <div style={{ marginLeft: "auto", ...pill(false), cursor: "default" }}>
                            Cash to close: {formatMoney(computed.cashToClose)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Section>

                  <Section k="extras" title="Extras" hint="Extra principal pays down faster.">
                    <div style={grid2}>
                      <div>
                        <div style={labelStyles}>Extra principal (monthly)</div>
                        <input
                          style={inputStyles}
                          value={extraMonthly}
                          onChange={(e) => setExtraMonthly(clamp(safeNum(e.target.value), 0, 500_000))}
                          inputMode="decimal"
                        />
                        <div style={{ marginTop: 8 }}>
                          <input
                            type="range"
                            min="0"
                            max="2000"
                            step="25"
                            value={extraMonthly}
                            onChange={(e) => setExtraMonthly(safeNum(e.target.value))}
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>

                      <div>
                        <div style={labelStyles}>Quick scenarios</div>
                        <div style={pillRow}>
                          {[0, 100, 250, 500, 1000].map((x) => (
                            <div key={x} style={pill(extraMonthly === x)} onClick={() => setExtraMonthly(x)}>
                              {x === 0 ? "None" : `+${formatMoney(x)}/mo`}
                            </div>
                          ))}
                        </div>
                        <div style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,0.74)", lineHeight: 1.4 }}>
                          Open “Amortization” to see payoff + interest impact.
                        </div>
                      </div>
                    </div>
                  </Section>

                  <Section k="schedule" title="Amortization" hint="Month-by-month table.">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                      <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.74)", lineHeight: 1.4 }}>
                        Balance, principal, interest, and PMI approximation.
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: "rgba(255,255,255,0.86)",
                          padding: "8px 10px",
                          borderRadius: 999,
                          border: "1px solid rgba(255,255,255,0.12)",
                          background: "rgba(0,0,0,0.26)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Payoff: {Math.floor(amort.payoffMonths / 12)}y {amort.payoffMonths % 12}m
                      </div>
                    </div>

                    <hr style={hr} />

                    {amort.rows.length > 0 ? (
                      <div style={{ overflow: "auto", maxHeight: 360 }}>
                        <table style={table}>
                          <thead>
                            <tr>
                              <th style={{ ...tdMuted, textAlign: "left" }}>Month</th>
                              <th style={{ ...tdMuted, textAlign: "left" }}>Payment (P&amp;I)</th>
                              <th style={{ ...tdMuted, textAlign: "left" }}>Interest</th>
                              <th style={{ ...tdMuted, textAlign: "left" }}>Principal</th>
                              <th style={{ ...tdMuted, textAlign: "left" }}>PMI</th>
                              <th style={{ ...tdMuted, textAlign: "left" }}>Balance</th>
                            </tr>
                          </thead>
                          <tbody>
                            {amort.rows.slice(0, 360).map((r) => (
                              <tr key={r.month} style={rowCard}>
                                <td style={td}>{r.month}</td>
                                <td style={td}>{formatMoney2(r.paymentPI)}</td>
                                <td style={td}>{formatMoney2(r.interest)}</td>
                                <td style={td}>{formatMoney2(r.principal)}</td>
                                <td style={td}>{r.pmi > 0 ? formatMoney2(r.pmi) : "—"}</td>
                                <td style={td}>{formatMoney2(r.balance)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>

                        {amort.rows.length > 360 && (
                          <div style={{ marginTop: 8, fontSize: 12, color: "rgba(255,255,255,0.68)" }}>
                            Showing first 360 months. (Payoff occurs at month {amort.payoffMonths}.)
                          </div>
                        )}
                      </div>
                    ) : (
                      <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.74)" }}>
                        Expand this section to compute the schedule.
                      </div>
                    )}

                    <hr style={hr} />

                    <div style={grid3}>
                      <div style={statCard}>
                        <div style={statLabel}>Total interest (est.)</div>
                        <div style={statValue}>{formatMoney(Math.round(amort.totalInterest))}</div>
                      </div>
                      <div style={statCard}>
                        <div style={statLabel}>Total paid (est.)</div>
                        <div style={statValue}>{formatMoney(Math.round(amort.totalPaid))}</div>
                      </div>
                      <div style={statCard}>
                        <div style={statLabel}>PMI months (approx)</div>
                        <div style={statValue}>{amort.pmiMonths || 0}</div>
                      </div>
                    </div>
                  </Section>
                </div>
              </div>

              {/* RIGHT: Summary */}
              <div style={pane}>
                <Summary />

                <div style={{ height: 10 }} />

                <div style={panelStyles}>
                  <div style={{ fontSize: 13, fontWeight: 900, color: "rgba(255,255,255,0.92)" }}>
                    Export-ready summary
                  </div>
                  <div style={{ marginTop: 10, ...grid2 }}>
                    <div style={statCard}>
                      <div style={statLabel}>Monthly total</div>
                      <div style={statValue}>{formatMoney2(computed.monthlyTotal)}</div>
                    </div>
                    <div style={statCard}>
                      <div style={statLabel}>Cash to close (est.)</div>
                      <div style={statValue}>{formatMoney(computed.cashToClose)}</div>
                    </div>
                    <div style={statCard}>
                      <div style={statLabel}>Monthly P&amp;I</div>
                      <div style={statValue}>{formatMoney2(computed.monthlyPI)}</div>
                    </div>
                    <div style={statCard}>
                      <div style={statLabel}>Monthly escrow</div>
                      <div style={statValue}>
                        {formatMoney2(computed.monthlyTax + computed.monthlyInsurance)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={footerActions}>
              <button style={btn("secondary")} onClick={onClose} type="button">
                Close
              </button>
              <button
                style={btn("primary")}
                onClick={() => {
                  const lines = [
                    `Monthly Total: ${formatMoney2(computed.monthlyTotal)}`,
                    `P&I: ${formatMoney2(computed.monthlyPI)}`,
                    `Tax: ${formatMoney2(computed.monthlyTax)}`,
                    `Insurance: ${formatMoney2(computed.monthlyInsurance)}`,
                    `HOA: ${formatMoney2(computed.monthlyHOA)}`,
                    `PMI: ${computed.monthlyPMI > 0 ? formatMoney2(computed.monthlyPMI) : "—"}`,
                    `Extra Principal: ${computed.extra > 0 ? formatMoney2(computed.extra) : "—"}`,
                    `Home Price: ${formatMoney(computed.price)}`,
                    `Down: ${formatMoney(computed.dpDollars)} (${computed.dpPercent.toFixed(1)}%)`,
                    `Loan: ${formatMoney(computed.loanAmount)}`,
                    `Rate: ${formatPct(computed.rate, 3)}`,
                    `Term: ${computed.years} years`,
                    `Cash to Close (est.): ${formatMoney(computed.cashToClose)}`,
                  ].join("\n");
                  navigator.clipboard?.writeText(lines);
                }}
                type="button"
              >
                Copy Summary
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MortgageCalc;
