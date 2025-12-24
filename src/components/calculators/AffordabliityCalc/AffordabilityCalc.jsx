import React, { useEffect, useMemo, useRef, useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronDown, FiChevronUp, FiInfo, FiCheck } from "react-icons/fi";

const DEFAULT_ASSUMPTIONS = {
  interestRatePct: 6.75,
  termYears: 30,
  downPaymentPct: 20,
  overheadPctOfAllIn: 25, // % of all-in payment assumed to NOT be principal+interest
};

const NOT_RECOMMENDED_PCT = 30; // fixed threshold: > 30% turns red

// ✅ FIX: Section defined OUTSIDE component so it doesn't remount every keystroke
const Section = memo(function Section({
  sectionKey,
  title,
  hint,
  commitKeysList,
  children,

  sections,
  completedSections,
  toggleSection,
  isDirty,
  commitSection,

  sectionHeader,
  sectionTitle,
  sectionBody,
  blockStyles,
  btn,
}) {
  const open = Boolean(sections[sectionKey]);
  const dirty = isDirty(commitKeysList);
  const completed = Boolean(completedSections[sectionKey]);

  return (
    <div style={{ marginBottom: 10 }}>
      <div style={sectionHeader(open)} onClick={() => toggleSection(sectionKey)} role="button" tabIndex={0}>
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

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              fontSize: 12,
              color: completed ? "rgba(0,200,160,0.95)" : "rgba(255,255,255,0.78)",
              padding: "4px 8px",
              borderRadius: 999,
              background: completed ? "rgba(0,200,160,0.10)" : "rgba(255,255,255,0.08)",
              border: completed
                ? "1px solid rgba(0,200,160,0.14)"
                : "1px solid rgba(255,255,255,0.10)",
            }}
          >
            {completed ? "Completed" : "Incomplete"}
          </div>

          <div style={{ color: "rgba(255,255,255,0.86)" }}>{open ? <FiChevronUp /> : <FiChevronDown />}</div>
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
            <div style={blockStyles}>
              {children}

              <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 12 }}>
                <button
                  style={btn("primary")}
                  type="button"
                  onClick={() => commitSection(sectionKey, commitKeysList)}
                  title="Mark complete and close"
                >
                  <FiCheck />
                  Complete
                </button>

                {dirty ? (
                  <div
                    style={{
                      alignSelf: "center",
                      fontSize: 12,
                      color: "rgba(255,255,255,0.70)",
                      padding: "4px 10px",
                      borderRadius: 999,
                      border: "1px solid rgba(255,255,255,0.10)",
                      background: "rgba(0,0,0,0.22)",
                    }}
                  >
                    Edits are live
                  </div>
                ) : null}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

const AffordabilityCalc = ({ isVisible, onClose }) => {
  const dialogRef = useRef(null);

  const widgetVariants = {
    hidden: { y: "10%", opacity: 0, scale: 0.985 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.26, ease: "easeOut" } },
    exit: { y: "10%", opacity: 0, scale: 0.985, transition: { duration: 0.2, ease: "easeIn" } },
  };

  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

  const safeNum = (val) => {
    if (val === "" || val === null || val === undefined) return 0;
    const s = String(val).replace(/[^0-9.\-]/g, "");
    if (s === "" || s === "-" || s === "." || s === "-.") return 0;
    const n = Number(s);
    return Number.isFinite(n) ? n : 0;
  };

  const money0 = (n) =>
    (Number.isFinite(n) ? n : 0).toLocaleString(undefined, {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

  const money2 = (n) =>
    (Number.isFinite(n) ? n : 0).toLocaleString(undefined, {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    });

  const pct = (n, digits = 0) => `${(Number.isFinite(n) ? n : 0).toFixed(digits)}%`;

  useEffect(() => {
    if (isVisible) setTimeout(() => dialogRef.current?.focus?.(), 0);
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isVisible, onClose]);

  // -----------------------
  // COMMITTED STATE (used for "revert draft" + completed snapshots)
  // -----------------------
  const [committed, setCommitted] = useState({
    netIncomeMode: "monthly",
    netIncomeAmount: "8500",
    savingsPct: "10",
    housingCapPct: "30",

    electricity: "160",
    waterTrash: "80",
    internet: "70",
    phone: "110",
    groceries: "650",
    dining: "250",
    gym: "60",
    subscriptions: "45",
    misc: "300",
    gas: "250",

    carPayment: "450",
    studentLoans: "350",
    creditCards: "200",
    medicalBills: "120",

    daycare: "0",
    childSupport: "0",

    carInsurance: "160",
    healthInsuranceOutOfPocket: "0",
    lifeDisabilityInsurance: "0",
  });

  // -----------------------
  // DRAFT STATE (typing source + calculation source)
  // -----------------------
  const [draft, setDraft] = useState(() => ({ ...committed }));

  // ✅ Sections start with FIRST open, rest collapsed
  const [sections, setSections] = useState({
    income: true,
    spending: false,
    debts: false,
    family: false,
    insurance: false,
    guidance: false,
  });

  const [completedSections, setCompletedSections] = useState({
    income: false,
    spending: false,
    debts: false,
    family: false,
    insurance: false,
    guidance: false,
  });

  useEffect(() => {
    if (!isVisible) return;
    setDraft({ ...committed });
    setSections({ income: true, spending: false, debts: false, family: false, insurance: false, guidance: false });
    setCompletedSections({ income: false, spending: false, debts: false, family: false, insurance: false, guidance: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  const toggleSection = (k) => setSections((s) => ({ ...s, [k]: !s[k] }));

  const updateDraft = (key) => (eOrValue) => {
    const value =
      typeof eOrValue === "string" || typeof eOrValue === "number" ? String(eOrValue) : eOrValue?.target?.value;

    setDraft((d) => ({ ...d, [key]: value }));
  };

  const commitSection = (sectionKey, keys) => {
    setCommitted((c) => {
      const next = { ...c };
      for (const k of keys) next[k] = draft[k];
      return next;
    });

    setCompletedSections((m) => ({ ...m, [sectionKey]: true }));
    setSections((s) => ({ ...s, [sectionKey]: false }));
  };

  const isDirty = (keys) => keys.some((k) => draft[k] !== committed[k]);

  // -----------------------
  // Calculation (LIVE on draft, per keystroke)
  // -----------------------
  const computed = useMemo(() => {
    const amt = clamp(safeNum(draft.netIncomeAmount), 0, 50_000_000);

    const netMonthly =
      draft.netIncomeMode === "monthly"
        ? amt
        : draft.netIncomeMode === "biweekly"
        ? (amt * 26) / 12
        : draft.netIncomeMode === "weekly"
        ? (amt * 52) / 12
        : draft.netIncomeMode === "annual"
        ? amt / 12
        : amt;

    const capPct = clamp(safeNum(draft.housingCapPct), 20, 40) / 100;

    const savingsGoalPct = clamp(safeNum(draft.savingsPct), 0, 50) / 100;
    const savingsGoal = netMonthly * savingsGoalPct;

    const spendingCore =
      safeNum(draft.electricity) +
      safeNum(draft.waterTrash) +
      safeNum(draft.internet) +
      safeNum(draft.phone) +
      safeNum(draft.groceries) +
      safeNum(draft.dining) +
      safeNum(draft.gym) +
      safeNum(draft.subscriptions) +
      safeNum(draft.gas) +
      safeNum(draft.misc);

    const debts =
      safeNum(draft.carPayment) + safeNum(draft.studentLoans) + safeNum(draft.creditCards) + safeNum(draft.medicalBills);

    const family = safeNum(draft.daycare) + safeNum(draft.childSupport);

    const insurance =
      safeNum(draft.carInsurance) + safeNum(draft.healthInsuranceOutOfPocket) + safeNum(draft.lifeDisabilityInsurance);

    const totalNonHousing = spendingCore + debts + family + insurance + savingsGoal;

    // buffer rule: require 20% leftover AFTER everything incl. housing payment
    const bufferPct = 0.2;
    const requiredBuffer = netMonthly * bufferPct;

    // low-end "conservative" guideline: 20% of net
    const payAt20 = netMonthly * 0.2;

    // user-selected target: cap %
    const payAtCap = netMonthly * capPct;

    // absolute max allowed by buffer rule for the chosen cap
    const maxByBufferForCap = Math.max(0, netMonthly - totalNonHousing - requiredBuffer);
    const affordableAtCap = Math.max(0, Math.min(payAtCap, maxByBufferForCap));

    // also compute a "safe guideline" at 20% (still must respect buffer)
    const affordableAt20 = Math.max(0, Math.min(payAt20, maxByBufferForCap));

    return {
      netMonthly,
      capPct: capPct * 100,
      savingsGoalPct: savingsGoalPct * 100,
      savingsGoal,
      spendingCore,
      debts,
      family,
      insurance,
      totalNonHousing,
      requiredBuffer,
      bufferPct: bufferPct * 100,

      payAt20,
      payAtCap,
      affordableAt20,
      affordableAtCap,
      maxByBufferForCap,
    };
  }, [draft]);

  // -----------------------
  // Slider max
  // -----------------------
  const sliderMax = useMemo(() => {
    const raw = computed.netMonthly * 0.5; // allow up to 50% on the target slider, but warn/red >30%
    return clamp(Math.ceil(raw / 50) * 50, 0, 250_000);
  }, [computed.netMonthly]);

  const [chosenAllIn, setChosenAllIn] = useState(0);

  // Keep chosenAllIn in sync with rules target (cap) whenever netMonthly/cap changes
  useEffect(() => {
    const target = clamp(computed.payAtCap, 0, sliderMax || 0);
    setChosenAllIn(target);
  }, [computed.payAtCap, sliderMax]);

  const chosen = useMemo(() => {
    const allIn = clamp(Number(chosenAllIn) || 0, 0, sliderMax || 0);
    const ratio = computed.netMonthly > 0 ? (allIn / computed.netMonthly) * 100 : 0;

    const overRule = ratio > NOT_RECOMMENDED_PCT + 1e-9;
    const leftover = computed.netMonthly - computed.totalNonHousing - allIn;
    const bufferShort = Math.max(0, computed.requiredBuffer - leftover);

    return { allIn, ratio, overRule, leftover, bufferShort };
  }, [chosenAllIn, sliderMax, computed.netMonthly, computed.totalNonHousing, computed.requiredBuffer]);

  // When user drags ALL-IN payment slider, update rules % too (sync both directions)
  const handleAllInChange = (val) => {
    const v = clamp(Number(val) || 0, 0, sliderMax || 0);
    setChosenAllIn(v);

    if (computed.netMonthly > 0) {
      const nextPct = clamp((v / computed.netMonthly) * 100, 20, 40);
      setDraft((d) => ({ ...d, housingCapPct: String(Math.round(nextPct * 2) / 2) })); // step 0.5
    }
  };

  // When user drags rules %, set ALL-IN payment slider to that % of net
  const handleRulesPctChange = (e) => {
    const nextPct = clamp(safeNum(e.target.value), 20, 40);
    setDraft((d) => ({ ...d, housingCapPct: String(nextPct) }));

    const nextAllIn = clamp((computed.netMonthly * nextPct) / 100, 0, sliderMax || 0);
    setChosenAllIn(nextAllIn);
  };

  // -----------------------
  // House price estimate (rough reverse engineered)
  // -----------------------
  const estimateHousePrice = (allInPayment) => {
    const pmt = Math.max(0, allInPayment);
    if (pmt <= 0) return 0;

    const overhead = (DEFAULT_ASSUMPTIONS.overheadPctOfAllIn / 100) * pmt;
    const piPayment = Math.max(0, pmt - overhead);

    const r = (DEFAULT_ASSUMPTIONS.interestRatePct / 100) / 12;
    const n = DEFAULT_ASSUMPTIONS.termYears * 12;

    const pow = Math.pow(1 + r, n);
    const loan = r === 0 ? piPayment * n : piPayment * ((pow - 1) / (r * pow));

    const downPct = clamp(DEFAULT_ASSUMPTIONS.downPaymentPct, 0, 99) / 100;
    const price = downPct >= 0.999 ? loan : loan / (1 - downPct);

    return Math.max(0, price);
  };

  // Price range uses guideline 20% and user-set %
  const estLowPrice = useMemo(() => estimateHousePrice(computed.affordableAt20), [computed.affordableAt20]);
  const estHighPrice = useMemo(() => estimateHousePrice(computed.affordableAtCap), [computed.affordableAtCap]);

  // -----------------------
  // Styles
  // -----------------------
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
    background: "#0B1220",
  };

  const headerStyles = {
    padding: "18px 18px 14px 18px",
    borderBottom: "1px solid rgba(255,255,255,0.10)",
    display: "flex",
    gap: 14,
    alignItems: "center",
    justifyContent: "space-between",
    background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.00))",
  };

  const h2Styles = { margin: 0, fontSize: 18, letterSpacing: 0.2, color: "rgba(255,255,255,0.92)" };
  const subtitleStyles = { margin: 0, fontSize: 12.5, color: "rgba(255,255,255,0.70)" };

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

  const pane = { overflow: "auto" };

  const panelStyles = {
    borderRadius: 18,
    background: "#0F1B33",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: 14,
  };

  const blockStyles = {
    borderRadius: 16,
    background: "#0A1326",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: 14,
  };

  const grid2 = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 };
  const grid3 = { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 };

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
    border: active ? "1px solid rgba(255,255,255,0.28)" : "1px solid rgba(255,255,255,0.12)",
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
    border: open ? "1px solid rgba(255,255,255,0.18)" : "1px solid rgba(255,255,255,0.10)",
    background: open ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.26)",
  });

  const sectionTitle = { fontSize: 13, fontWeight: 800, color: "rgba(255,255,255,0.92)", letterSpacing: 0.2 };
  const sectionBody = { padding: "10px 2px 2px 2px" };

  const statCard = { borderRadius: 16, border: "1px solid rgba(255,255,255,0.10)", background: "#081027", padding: 12 };
  const statLabel = { fontSize: 12, color: "rgba(255,255,255,0.74)", marginBottom: 6 };
  const statValue = { fontSize: 18, fontWeight: 900, color: "rgba(255,255,255,0.95)", letterSpacing: 0.2 };
  const statSub = { fontSize: 12, color: "rgba(255,255,255,0.66)", marginTop: 6, lineHeight: 1.35 };

  const hr = { height: 1, background: "rgba(255,255,255,0.10)", border: "none", margin: "12px 0" };

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
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
    };
    if (variant === "primary") {
      return { ...base, background: "rgba(255,255,255,0.16)", color: "rgba(255,255,255,0.96)" };
    }
    return { ...base, background: "rgba(0,0,0,0.28)", color: "rgba(255,255,255,0.86)" };
  };

  // Both sliders go red (gradient) if > 30%
  const sliderTrackColor = chosen.overRule
    ? "linear-gradient(90deg, rgba(255,70,70,0.65), rgba(255,70,70,0.25))"
    : "linear-gradient(90deg, rgba(0,200,160,0.60), rgba(0,200,160,0.20))";

  const rulesPctValue = clamp(safeNum(draft.housingCapPct), 20, 40);
  const rulesOver30 = rulesPctValue > NOT_RECOMMENDED_PCT + 1e-9;

  const rulesTrackColor = rulesOver30
    ? "linear-gradient(90deg, rgba(255,70,70,0.65), rgba(255,70,70,0.25))"
    : "linear-gradient(90deg, rgba(0,200,160,0.60), rgba(0,200,160,0.20))";

  const Summary = () => {
    const bufferOK = chosen.bufferShort <= 0.01;

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={panelStyles}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
            <div style={{ fontSize: 13, fontWeight: 900, color: "rgba(255,255,255,0.92)" }}>
              Your ALL-IN monthly housing budget
            </div>
            <div
              style={{
                padding: "8px 10px",
                borderRadius: 999,
                fontSize: 12.5,
                fontWeight: 900,
                border: "1px solid rgba(255,255,255,0.12)",
                background: chosen.overRule ? "rgba(255,70,70,0.16)" : "rgba(0,200,160,0.16)",
                color: "rgba(255,255,255,0.92)",
              }}
            >
              {chosen.overRule ? "Not recommended" : "Healthy"}
            </div>
          </div>

          <div
            style={{
              marginTop: 10,
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.10)",
              background: chosen.overRule ? "rgba(255,70,70,0.12)" : "rgba(255,255,255,0.06)",
              padding: 12,
            }}
          >
            {/* Make it painfully clear it's ALL-IN */}
            <div
              style={{
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(0,0,0,0.22)",
                padding: 10,
                color: "rgba(255,255,255,0.86)",
                fontSize: 12.5,
                lineHeight: 1.55,
                fontWeight: 800,
              }}
            >
              This number is your <b>ALL-IN</b> monthly housing budget — it should include <b>everything</b>:
              principal + interest <b>plus</b> HOA, PMI, points, property taxes, and homeowners insurance.
            </div>

            <div
              style={{
                marginTop: 10,
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.10)",
                background: bufferOK ? "rgba(0,200,160,0.10)" : "rgba(255,70,70,0.10)",
                padding: 10,
                color: "rgba(255,255,255,0.86)",
                fontSize: 12.5,
                lineHeight: 1.5,
                fontWeight: 800,
              }}
            >
              {bufferOK
                ? `You’re meeting the ${pct(computed.bufferPct, 0)} leftover buffer rule.`
                : `You’re short ${money2(chosen.bufferShort)} / month to reach the minimum ${pct(
                    computed.bufferPct,
                    0
                  )} leftover buffer.`}
            </div>

            <hr style={hr} />

            <div style={grid2}>
              {/* LEFT: 20% guideline */}
              <div style={statCard}>
                <div style={statLabel}>Conservative guideline (20% of net)</div>
                <div style={statValue}>{money2(computed.affordableAt20)}</div>
                <div style={statSub}>
                  Based on 20% of net monthly income and still keeping ≥ {pct(computed.bufferPct, 0)} leftover.
                </div>
              </div>

              {/* RIGHT: user-selected target, ACTUALLY highlighted */}
              <div
                style={{
                  ...statCard,
                  border: rulesOver30 ? "1px solid rgba(255,70,70,0.40)" : "1px solid rgba(0,200,160,0.34)",
                  background: rulesOver30 ? "rgba(255,70,70,0.10)" : "rgba(0,200,160,0.10)",
                  boxShadow: rulesOver30
                    ? "0 0 0 3px rgba(255,70,70,0.10)"
                    : "0 0 0 3px rgba(0,200,160,0.10)",
                }}
                title="This is your selected target from Rules"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 10,
                  }}
                >
                  <div style={{ ...statLabel, color: "rgba(255,255,255,0.88)" }}>Your selected target</div>
                  <div
                    style={{
                      padding: "4px 10px",
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 900,
                      border: "1px solid rgba(255,255,255,0.14)",
                      background: "rgba(0,0,0,0.18)",
                      color: "rgba(255,255,255,0.92)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {pct(computed.capPct, 1)} of net
                  </div>
                </div>

                <div style={statValue}>{money2(computed.affordableAtCap)}</div>
                <div style={statSub}>
                  Based on your Rules % and still keeping ≥ {pct(computed.bufferPct, 0)} leftover. If your buffer rule is
                  tighter, this value will drop below your % target.
                </div>
              </div>
            </div>

            <div style={{ marginTop: 10 }}>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.78)", marginBottom: 6 }}>
                Adjust your ALL-IN housing budget (syncs with Rules %)
              </div>

              <div
                style={{
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "#081027",
                  padding: 12,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, gap: 10 }}>
                  <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.78)" }}>
                    20%: {money0(Math.round(computed.payAt20))}
                  </div>

                  <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.92)", fontWeight: 900 }}>
                    {money0(Math.round(chosen.allIn))}
                  </div>

                  <div
                    style={{
                      fontSize: 12.5,
                      fontWeight: 900,
                      color: "rgba(255,255,255,0.92)",
                      padding: "4px 10px",
                      borderRadius: 999,
                      border: "1px solid rgba(255,255,255,0.12)",
                      background: rulesOver30 ? "rgba(255,70,70,0.18)" : "rgba(0,200,160,0.14)",
                      whiteSpace: "nowrap",
                    }}
                    title="This matches your Rules percentage"
                  >
                    {pct(computed.capPct, 1)}: {money0(Math.round(computed.payAtCap))}
                  </div>
                </div>

                <div style={{ background: sliderTrackColor, borderRadius: 999, padding: "10px 12px" }}>
                  <input
                    type="range"
                    min={0}
                    max={sliderMax || 0}
                    step={25}
                    value={chosen.allIn}
                    onChange={(e) => handleAllInChange(e.target.value)}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>

            <hr style={hr} />

            <div style={grid3}>
              <div style={statCard}>
                <div style={statLabel}>Net monthly income</div>
                <div style={statValue}>{money2(computed.netMonthly)}</div>
              </div>
              <div style={statCard}>
                <div style={statLabel}>Non-housing costs + savings</div>
                <div style={statValue}>{money2(computed.totalNonHousing)}</div>
                <div style={statSub}>
                  Savings goal: {money2(computed.savingsGoal)} ({pct(computed.savingsGoalPct, 0)})
                </div>
              </div>
              <div style={statCard}>
                <div style={statLabel}>Leftover after everything</div>
                <div style={statValue}>
                  {chosen.leftover < 0 ? `-${money2(Math.abs(chosen.leftover))}` : money2(chosen.leftover)}
                </div>
                <div style={statSub}>
                  Minimum buffer target: {money2(computed.requiredBuffer)} ({pct(computed.bufferPct, 0)}).
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={panelStyles}>
          <div style={{ fontSize: 13, fontWeight: 900, color: "rgba(255,255,255,0.92)" }}>
            Rough house price range (reverse-engineered)
          </div>
          <div style={{ marginTop: 8, ...grid2 }}>
            <div style={statCard}>
              <div style={statLabel}>Low (based on 20% housing budget)</div>
              <div style={statValue}>{money0(estLowPrice)}</div>
              <div style={statSub}>
                Payment used: {money2(computed.affordableAt20)} ({pct(20, 0)} of net).
              </div>
            </div>
            <div style={statCard}>
              <div style={statLabel}>High (based on your Rules target)</div>
              <div style={statValue}>{money0(estHighPrice)}</div>
              <div style={statSub}>
                Payment used: {money2(computed.affordableAtCap)} ({pct(computed.capPct, 1)} of net).
              </div>
            </div>
          </div>

          <div style={{ marginTop: 10, fontSize: 12.5, color: "rgba(255,255,255,0.70)", lineHeight: 1.55 }}>
            Assumptions: {DEFAULT_ASSUMPTIONS.termYears}-year fixed at {pct(DEFAULT_ASSUMPTIONS.interestRatePct, 2)},{" "}
            {pct(DEFAULT_ASSUMPTIONS.downPaymentPct, 0)} down, and ~{pct(DEFAULT_ASSUMPTIONS.overheadPctOfAllIn, 0)} of
            “all-in” payment goes to taxes/insurance/HOA/PMI/points.
          </div>
        </div>
      </div>
    );
  };

  const resetAll = () => {
    const defaults = {
      netIncomeMode: "monthly",
      netIncomeAmount: "8500",
      savingsPct: "10",
      housingCapPct: "30",

      electricity: "160",
      waterTrash: "80",
      internet: "70",
      phone: "110",
      groceries: "650",
      dining: "250",
      gym: "60",
      subscriptions: "45",
      misc: "300",
      gas: "250",

      carPayment: "450",
      studentLoans: "350",
      creditCards: "200",
      medicalBills: "120",

      daycare: "0",
      childSupport: "0",

      carInsurance: "160",
      healthInsuranceOutOfPocket: "0",
      lifeDisabilityInsurance: "0",
    };

    setCommitted(defaults);
    setDraft(defaults);
    setSections({ income: true, spending: false, debts: false, family: false, insurance: false, guidance: false });
    setCompletedSections({ income: false, spending: false, debts: false, family: false, insurance: false, guidance: false });
    setChosenAllIn(0);
  };

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
          <div style={widgetStyles} ref={dialogRef} tabIndex={-1} onMouseDown={(e) => e.stopPropagation()}>
            <div style={headerStyles}>
              <div>
                <h2 style={h2Styles}>Affordability Calculator</h2>
                <p style={subtitleStyles}>Edits update live. Mark sections complete when you’re done.</p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <button style={btn("secondary")} onClick={resetAll} type="button">
                  Reset
                </button>
                <div style={closeIconStyles} onClick={onClose} role="button" tabIndex={0} aria-label="Close">
                  <FiX />
                </div>
              </div>
            </div>

            <div style={bodyStyles}>
              {/* LEFT */}
              <div style={pane}>
                <div style={panelStyles}>
                  <Section
                    sectionKey="income"
                    title="Household net income"
                    hint="Use take-home pay after taxes."
                    commitKeysList={["netIncomeMode", "netIncomeAmount", "savingsPct"]}
                    sections={sections}
                    completedSections={completedSections}
                    toggleSection={toggleSection}
                    isDirty={isDirty}
                    commitSection={commitSection}
                    sectionHeader={sectionHeader}
                    sectionTitle={sectionTitle}
                    sectionBody={sectionBody}
                    blockStyles={blockStyles}
                    btn={btn}
                  >
                    <div style={grid2}>
                      <div>
                        <div style={labelStyles}>Income frequency</div>
                        <div style={pillRow}>
                          {[
                            ["monthly", "Monthly"],
                            ["biweekly", "Biweekly"],
                            ["weekly", "Weekly"],
                            ["annual", "Annual (net)"],
                          ].map(([k, label]) => (
                            <div
                              key={k}
                              style={pill(draft.netIncomeMode === k)}
                              onClick={() => setDraft((d) => ({ ...d, netIncomeMode: k }))}
                            >
                              {label}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div style={labelStyles}>Net income amount</div>
                        <input
                          style={inputStyles}
                          value={draft.netIncomeAmount}
                          onChange={updateDraft("netIncomeAmount")}
                          inputMode="decimal"
                        />
                        <div style={{ marginTop: 8, fontSize: 12, color: "rgba(255,255,255,0.70)" }}>
                          Current net monthly: <b>{money2(computed.netMonthly)}</b>
                        </div>
                      </div>

                      <div style={{ gridColumn: "1 / -1" }}>
                        <div style={labelStyles}>Savings goal: {pct(safeNum(draft.savingsPct), 0)}</div>
                        <input
                          type="range"
                          min="0"
                          max="35"
                          step="1"
                          value={safeNum(draft.savingsPct)}
                          onChange={updateDraft("savingsPct")}
                          style={{ width: "100%" }}
                        />
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.70)" }}>0%</div>
                          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.92)", fontWeight: 900 }}>
                            {draft.savingsPct}%
                          </div>
                          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.70)" }}>35%</div>
                        </div>
                      </div>
                    </div>
                  </Section>

                  <Section
                    sectionKey="spending"
                    title="Monthly living costs"
                    hint="Utilities, food, phone, misc, etc."
                    commitKeysList={[
                      "electricity",
                      "waterTrash",
                      "internet",
                      "phone",
                      "groceries",
                      "dining",
                      "gym",
                      "subscriptions",
                      "misc",
                      "gas",
                    ]}
                    sections={sections}
                    completedSections={completedSections}
                    toggleSection={toggleSection}
                    isDirty={isDirty}
                    commitSection={commitSection}
                    sectionHeader={sectionHeader}
                    sectionTitle={sectionTitle}
                    sectionBody={sectionBody}
                    blockStyles={blockStyles}
                    btn={btn}
                  >
                    <div style={grid2}>
                      {[
                        ["Electricity", "electricity"],
                        ["Water / Trash", "waterTrash"],
                        ["Internet", "internet"],
                        ["Phone", "phone"],
                        ["Groceries", "groceries"],
                        ["Dining / Takeout", "dining"],
                        ["Gym", "gym"],
                        ["Subscriptions", "subscriptions"],
                        ["Misc (buffer)", "misc"],
                        ["Gas / transportation", "gas"],
                      ].map(([label, key]) => (
                        <div key={key}>
                          <div style={labelStyles}>{label}</div>
                          <input style={inputStyles} value={draft[key]} onChange={updateDraft(key)} inputMode="decimal" />
                        </div>
                      ))}
                    </div>
                  </Section>

                  <Section
                    sectionKey="debts"
                    title="Debt payments"
                    hint="Car, student loans, credit cards, medical."
                    commitKeysList={["carPayment", "studentLoans", "creditCards", "medicalBills"]}
                    sections={sections}
                    completedSections={completedSections}
                    toggleSection={toggleSection}
                    isDirty={isDirty}
                    commitSection={commitSection}
                    sectionHeader={sectionHeader}
                    sectionTitle={sectionTitle}
                    sectionBody={sectionBody}
                    blockStyles={blockStyles}
                    btn={btn}
                  >
                    <div style={grid2}>
                      {[
                        ["Car payment", "carPayment"],
                        ["Student loans", "studentLoans"],
                        ["Credit cards (monthly)", "creditCards"],
                        ["Medical bills (monthly)", "medicalBills"],
                      ].map(([label, key]) => (
                        <div key={key}>
                          <div style={labelStyles}>{label}</div>
                          <input style={inputStyles} value={draft[key]} onChange={updateDraft(key)} inputMode="decimal" />
                        </div>
                      ))}
                    </div>
                  </Section>

                  <Section
                    sectionKey="family"
                    title="Family costs"
                    hint="Daycare and support obligations."
                    commitKeysList={["daycare", "childSupport"]}
                    sections={sections}
                    completedSections={completedSections}
                    toggleSection={toggleSection}
                    isDirty={isDirty}
                    commitSection={commitSection}
                    sectionHeader={sectionHeader}
                    sectionTitle={sectionTitle}
                    sectionBody={sectionBody}
                    blockStyles={blockStyles}
                    btn={btn}
                  >
                    <div style={grid2}>
                      {[
                        ["Daycare", "daycare"],
                        ["Child support", "childSupport"],
                      ].map(([label, key]) => (
                        <div key={key}>
                          <div style={labelStyles}>{label}</div>
                          <input style={inputStyles} value={draft[key]} onChange={updateDraft(key)} inputMode="decimal" />
                        </div>
                      ))}
                    </div>
                  </Section>

                  <Section
                    sectionKey="insurance"
                    title="Insurance"
                    hint="Out-of-pocket premiums, disability, etc."
                    commitKeysList={["carInsurance", "healthInsuranceOutOfPocket", "lifeDisabilityInsurance"]}
                    sections={sections}
                    completedSections={completedSections}
                    toggleSection={toggleSection}
                    isDirty={isDirty}
                    commitSection={commitSection}
                    sectionHeader={sectionHeader}
                    sectionTitle={sectionTitle}
                    sectionBody={sectionBody}
                    blockStyles={blockStyles}
                    btn={btn}
                  >
                    <div style={grid2}>
                      {[
                        ["Car insurance", "carInsurance"],
                        ["Health premiums (out-of-pocket)", "healthInsuranceOutOfPocket"],
                        ["Life / disability insurance", "lifeDisabilityInsurance"],
                      ].map(([label, key], idx) => (
                        <div key={key} style={idx === 2 ? { gridColumn: "1 / -1" } : undefined}>
                          <div style={labelStyles}>{label}</div>
                          <input style={inputStyles} value={draft[key]} onChange={updateDraft(key)} inputMode="decimal" />
                        </div>
                      ))}
                    </div>
                  </Section>

                  <Section
                    sectionKey="guidance"
                    title="Rules"
                    hint="Pick your % target (syncs with the all-in budget slider)."
                    commitKeysList={["housingCapPct"]}
                    sections={sections}
                    completedSections={completedSections}
                    toggleSection={toggleSection}
                    isDirty={isDirty}
                    commitSection={commitSection}
                    sectionHeader={sectionHeader}
                    sectionTitle={sectionTitle}
                    sectionBody={sectionBody}
                    blockStyles={blockStyles}
                    btn={btn}
                  >
                    <div style={grid2}>
                      <div style={{ gridColumn: "1 / -1" }}>
                        <div style={labelStyles}>
                          Target % (syncs): <b style={{ color: "rgba(255,255,255,0.92)" }}>{pct(rulesPctValue, 1)}</b>
                        </div>

                        <div style={{ marginBottom: 8, display: "flex", justifyContent: "space-between", gap: 10 }}>
                          <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.78)" }}>
                            20%: {money0(Math.round(computed.payAt20))}
                          </div>

                          <div
                            style={{
                              fontSize: 12.5,
                              fontWeight: 900,
                              color: "rgba(255,255,255,0.92)",
                              padding: "4px 10px",
                              borderRadius: 999,
                              border: "1px solid rgba(255,255,255,0.12)",
                              background: rulesOver30 ? "rgba(255,70,70,0.18)" : "rgba(0,200,160,0.14)",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {pct(rulesPctValue, 1)}: {money0(Math.round(computed.payAtCap))}
                          </div>
                        </div>

                        <div style={{ background: rulesTrackColor, borderRadius: 999, padding: "10px 12px" }}>
                          <input
                            type="range"
                            min="20"
                            max="40"
                            step="0.5"
                            value={rulesPctValue}
                            onChange={handleRulesPctChange}
                            style={{ width: "100%" }}
                          />
                        </div>

                        <div style={{ marginTop: 10, fontSize: 12.5, color: "rgba(255,255,255,0.72)", lineHeight: 1.6 }}>
                          We also enforce a minimum <b>20%</b> leftover buffer after everything (so you’re not living on fumes).
                        </div>
                      </div>
                    </div>
                  </Section>
                </div>
              </div>

              {/* RIGHT */}
              <div style={pane}>
                <Summary />
              </div>
            </div>

            <div style={footerActions}>
              <button style={btn("secondary")} onClick={onClose} type="button">
                Close
              </button>
              <button style={btn("secondary")} onClick={() => setDraft({ ...committed })} type="button">
                Revert draft
              </button>
              <button style={btn("primary")} onClick={resetAll} type="button">
                Reset all
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AffordabilityCalc;
