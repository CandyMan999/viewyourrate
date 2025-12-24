import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiRefreshCw } from "react-icons/fi";

import MortgageOptionsPage from "../../client/app/components/mortgageResults/MortgageOptionsPage";
import PurchaseOptionsPage from "../../client/app/components/purchaseResults/PurchaseOptionsPage";
import ExplainPill from "../../client/app/components/pricingWidget/ExplainPill";

/**
 * CompareProduct.jsx
 *
 * Page goals:
 * - One top sandbox (loan amount / term / current rate) drives ALL learning steps.
 * - Each step is interactive + teaches with the sandbox values (no “word vomit”).
 * - Rate Trends includes 1/8th deltas (±0.125).
 *
 * Updates in this version (per your notes):
 * - ARM step revamped to let user pick intro period + intro rate + post-adjust rate.
 *   Includes the “most people don’t stay > ~7 years” idea as a teaching heuristic.
 * - Points/Credits math fixed + redesigned: supports BOTH points (pay) and credits (receive),
 *   uses realistic “rate impact per point” slider (defaults to 0.125) and correct breakeven handling.
 * - Loan Types step expanded with more actionable info per program.
 */

/* -------------------- styles -------------------- */

const containerStyle = {
  padding: "24px 12px 56px",
  backgroundColor: "#0f1115",
  minHeight: "100vh",
};

const shellStyle = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  color: "#e2e8f0",
};

const cardStyle = {
  background:
    "linear-gradient(180deg, rgba(15, 23, 42, 0.94) 0%, rgba(10, 15, 26, 0.94) 100%)",
  border: "1px solid rgba(148,163,184,0.12)",
  borderRadius: "18px",
  padding: "18px",
  boxShadow: "0 18px 30px rgba(2,6,23,0.45)",
};

const subtleCardStyle = {
  background: "rgba(2,6,23,0.35)",
  border: "1px solid rgba(148,163,184,0.12)",
  borderRadius: "16px",
  padding: "14px",
};

const kickerStyle = {
  color: "#38bdf8",
  fontWeight: 800,
  textTransform: "uppercase",
  fontSize: "0.74rem",
  letterSpacing: "0.09em",
  margin: 0,
};

const titleStyle = {
  fontSize: "2.05rem",
  fontWeight: 820,
  color: "#f8fafc",
  margin: 0,
  letterSpacing: "-0.02em",
};

const mutedTextStyle = {
  color: "#94a3b8",
  fontSize: "0.94rem",
  lineHeight: 1.6,
  margin: 0,
};

const h2Style = {
  margin: "6px 0 0",
  color: "#f8fafc",
  fontWeight: 840,
  letterSpacing: "-0.01em",
  fontSize: "1.15rem",
};

const pillButton = (active) => ({
  border: "none",
  cursor: "pointer",
  height: "8px",
  width: active ? "36px" : "22px",
  borderRadius: "999px",
  backgroundColor: active ? "#38bdf8" : "rgba(148,163,184,0.28)",
  transition: "all 180ms ease",
});

const primaryBtn = {
  padding: "10px 14px",
  borderRadius: "999px",
  border: "1px solid #38bdf8",
  background: "#0ea5e9",
  color: "#0f172a",
  fontWeight: 900,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
};

const secondaryBtn = (disabled) => ({
  padding: "10px 14px",
  borderRadius: "999px",
  border: "1px solid rgba(148,163,184,0.28)",
  background: "rgba(15,23,42,0.35)",
  color: disabled ? "rgba(148,163,184,0.45)" : "#e2e8f0",
  fontWeight: 900,
  cursor: disabled ? "not-allowed" : "pointer",
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
});

const ghostBtn = {
  padding: "10px 14px",
  borderRadius: "999px",
  border: "1px solid rgba(148,163,184,0.18)",
  background: "rgba(15,23,42,0.25)",
  color: "#e2e8f0",
  fontWeight: 900,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
};

const tagPill = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  borderRadius: "999px",
  padding: "8px 10px",
  border: "1px solid rgba(148,163,184,0.16)",
  background: "rgba(15,23,42,0.35)",
  color: "#e2e8f0",
  fontWeight: 850,
  cursor: "pointer",
};

const miniLabel = {
  color: "#94a3b8",
  fontWeight: 800,
  fontSize: "0.78rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
};

const bigNumber = {
  color: "#f8fafc",
  fontWeight: 950,
  fontSize: "1.2rem",
};

/* -------------------- math helpers -------------------- */

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function formatUSD(n) {
  if (n == null || Number.isNaN(n)) return "—";
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

// 1/8th rate step helper (avoids float weirdness)
function snapToEighth(rate) {
  const step = 0.125;
  return Math.round(rate / step) * step;
}

function calcMonthlyPI(principal, annualRatePct, termYears) {
  if (!principal || principal <= 0 || !annualRatePct || !termYears) return 0;
  const r = annualRatePct / 100 / 12;
  const n = termYears * 12;
  if (r === 0) return principal / n;
  const pow = Math.pow(1 + r, n);
  return (principal * (r * pow)) / (pow - 1);
}

function calcTotalInterest(principal, annualRatePct, termYears) {
  const pmt = calcMonthlyPI(principal, annualRatePct, termYears);
  return pmt * termYears * 12 - principal;
}

/* -------------------- reusable UI blocks -------------------- */

function StatRow({ label, value, hint }) {
  return (
    <div
      style={{
        ...subtleCardStyle,
        display: "flex",
        flexDirection: "column",
        gap: "6px",
      }}
    >
      <div style={miniLabel}>{label}</div>
      <div style={bigNumber}>{value}</div>
      {hint ? (
        <div style={{ ...mutedTextStyle, fontSize: "0.85rem" }}>{hint}</div>
      ) : null}
    </div>
  );
}

function SplitCard({ left, right }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "12px",
      }}
    >
      <div style={subtleCardStyle}>{left}</div>
      <div style={subtleCardStyle}>{right}</div>
    </div>
  );
}

function SliderRow({
  label,
  valueLabel,
  minLabel,
  maxLabel,
  children,
  hint,
}) {
  return (
    <div style={{ display: "grid", gap: "8px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
        <span style={miniLabel}>{label}</span>
        <span style={{ fontWeight: 950, color: "#f8fafc" }}>{valueLabel}</span>
      </div>
      {children}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ color: "#94a3b8", fontWeight: 850, fontSize: "0.85rem" }}>
          {minLabel}
        </span>
        <span style={{ color: "#94a3b8", fontWeight: 850, fontSize: "0.85rem" }}>
          {maxLabel}
        </span>
      </div>
      {hint ? (
        <div style={{ ...mutedTextStyle, fontSize: "0.84rem" }}>{hint}</div>
      ) : null}
    </div>
  );
}

/* -------------------- Step content components -------------------- */

function PaymentVsTimeStep({ sandbox }) {
  const p30 = useMemo(
    () => calcMonthlyPI(sandbox.loanAmount, sandbox.rate, 30),
    [sandbox.loanAmount, sandbox.rate]
  );
  const p15 = useMemo(
    () => calcMonthlyPI(sandbox.loanAmount, sandbox.rate, 15),
    [sandbox.loanAmount, sandbox.rate]
  );
  const i30 = useMemo(
    () => calcTotalInterest(sandbox.loanAmount, sandbox.rate, 30),
    [sandbox.loanAmount, sandbox.rate]
  );
  const i15 = useMemo(
    () => calcTotalInterest(sandbox.loanAmount, sandbox.rate, 15),
    [sandbox.loanAmount, sandbox.rate]
  );

  const monthlyDelta = Math.max(p15 - p30, 0);
  const interestSavings = Math.max(i30 - i15, 0);

  return (
    <div style={{ display: "grid", gap: "12px" }}>
      <SplitCard
        left={
          <div style={{ display: "grid", gap: "10px" }}>
            <div style={{ fontWeight: 900, color: "#f8fafc" }}>
              30-Year Fixed
            </div>
            <div style={{ ...mutedTextStyle, fontSize: "0.88rem" }}>
              Lower monthly payment. More time for interest to accumulate.
            </div>
            <div style={{ display: "grid", gap: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={miniLabel}>Payment (P&I)</span>
                <span style={{ ...bigNumber, fontSize: "1.05rem" }}>
                  {formatUSD(Math.round(p30))}
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={miniLabel}>Total interest</span>
                <span style={{ ...bigNumber, fontSize: "1.05rem" }}>
                  {formatUSD(Math.round(i30))}
                </span>
              </div>
            </div>
          </div>
        }
        right={
          <div style={{ display: "grid", gap: "10px" }}>
            <div style={{ fontWeight: 900, color: "#f8fafc" }}>
              15-Year Fixed
            </div>
            <div style={{ ...mutedTextStyle, fontSize: "0.88rem" }}>
              Higher payment, but you usually save huge on total interest.
            </div>
            <div style={{ display: "grid", gap: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={miniLabel}>Payment (P&I)</span>
                <span style={{ ...bigNumber, fontSize: "1.05rem" }}>
                  {formatUSD(Math.round(p15))}
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={miniLabel}>Total interest</span>
                <span style={{ ...bigNumber, fontSize: "1.05rem" }}>
                  {formatUSD(Math.round(i15))}
                </span>
              </div>
            </div>
          </div>
        }
      />

      <div style={{ ...subtleCardStyle, display: "grid", gap: "8px" }}>
        <div style={{ fontWeight: 900, color: "#f8fafc" }}>Takeaway</div>
        <div style={{ ...mutedTextStyle }}>
          With the same loan amount and rate, switching from 30 → 15 years
          increases payment by about{" "}
          <b style={{ color: "#f8fafc" }}>
            {formatUSD(Math.round(monthlyDelta))}/mo
          </b>{" "}
          but saves about{" "}
          <b style={{ color: "#f8fafc" }}>
            {formatUSD(Math.round(interestSavings))}
          </b>{" "}
          in total interest.
        </div>
      </div>
    </div>
  );
}

/**
 * Optimization: Points & Credits (fixed math + better teaching)
 *
 * Key ideas:
 * - Points are % of loan amount (1 point = 1%).
 * - Points can be positive (you pay) OR negative (lender credits).
 * - Rate impact per point is NOT fixed — teach it as a slider (default 0.125% per point).
 * - Break-even only applies when you PAY points to lower the rate.
 */
function PointsCreditsStep({ sandbox }) {
  // Points: -2.00 → +3.00 (negative means credits)
  const [points, setPoints] = useState(0.0);

  // Teaching knob: how much rate changes per point (varies in real life)
  // Defaults to 0.125% per point (common-ish order of magnitude)
  const [rateImpactPerPoint, setRateImpactPerPoint] = useState(0.125);

  const baseRate = sandbox.rate;

  const adjustedRate = useMemo(() => {
    // Positive points reduce rate. Negative points (credits) increase rate.
    const r = baseRate - points * rateImpactPerPoint;
    return clamp(snapToEighth(r), 0.125, 25);
  }, [baseRate, points, rateImpactPerPoint]);

  const basePayment = useMemo(
    () => calcMonthlyPI(sandbox.loanAmount, baseRate, sandbox.termYears),
    [sandbox.loanAmount, baseRate, sandbox.termYears]
  );

  const adjustedPayment = useMemo(
    () => calcMonthlyPI(sandbox.loanAmount, adjustedRate, sandbox.termYears),
    [sandbox.loanAmount, adjustedRate, sandbox.termYears]
  );

  // Cost: points% of loan amount. Positive = you pay. Negative = you receive credit.
  const pointsDollars = useMemo(() => {
    return (sandbox.loanAmount * points) / 100;
  }, [sandbox.loanAmount, points]);

  const monthlyDelta = useMemo(() => {
    // Positive means you pay more per month in adjusted scenario.
    return adjustedPayment - basePayment;
  }, [adjustedPayment, basePayment]);

  const monthlySavings = Math.max(-monthlyDelta, 0); // savings if adjustedPayment < basePayment

  const isPayingPoints = points > 0.0001;
  const isTakingCredit = points < -0.0001;

  const breakevenMonths = useMemo(() => {
    // Only meaningful if paying points AND saving monthly
    if (!isPayingPoints) return null;
    if (monthlySavings <= 0) return null;
    if (pointsDollars <= 0) return null;
    return pointsDollars / monthlySavings;
  }, [isPayingPoints, monthlySavings, pointsDollars]);

  const headline = useMemo(() => {
    if (isPayingPoints) return "You pay upfront to buy a lower rate";
    if (isTakingCredit) return "You take credits upfront and accept a higher rate";
    return "Neutral: no points / no credits";
  }, [isPayingPoints, isTakingCredit]);

  const summaryLine = useMemo(() => {
    if (isPayingPoints) {
      return `You pay about ${formatUSD(Math.round(pointsDollars))} upfront and your payment changes by about ${formatUSD(
        Math.round(monthlyDelta)
      )}/mo.`;
    }
    if (isTakingCredit) {
      return `You receive about ${formatUSD(Math.round(Math.abs(pointsDollars)))} in lender credits, and your payment changes by about ${formatUSD(
        Math.round(monthlyDelta)
      )}/mo.`;
    }
    return `No upfront points/credits. Payment is driven mostly by term + rate.`;
  }, [isPayingPoints, isTakingCredit, pointsDollars, monthlyDelta]);

  return (
    <div style={{ display: "grid", gap: "12px" }}>
      <div style={subtleCardStyle}>
        <div style={{ fontWeight: 900, color: "#f8fafc" }}>
          {headline}
        </div>
        <div style={{ ...mutedTextStyle, marginTop: "8px" }}>
          Points are priced as a percent of the loan amount. Negative points are
          lender credits (you bring less cash to close).
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "12px",
            marginTop: "12px",
          }}
        >
          <div style={{ ...subtleCardStyle, padding: "12px" }}>
            <SliderRow
              label="Points / Credits"
              valueLabel={`${points.toFixed(2)} pts`}
              minLabel="-2.00 (credits)"
              maxLabel="+3.00 (pay)"
              hint="Positive = you pay. Negative = lender credits."
            >
              <input
                type="range"
                min={-2}
                max={3}
                step={0.25}
                value={points}
                onChange={(e) => setPoints(Number(e.target.value))}
                style={{ width: "100%" }}
              />
            </SliderRow>
          </div>

          <div style={{ ...subtleCardStyle, padding: "12px" }}>
            <SliderRow
              label="Rate impact per point"
              valueLabel={`${rateImpactPerPoint.toFixed(3)}%`}
              minLabel="0.000%"
              maxLabel="0.375%"
              hint="This varies by lender & market. Use this to build intuition."
            >
              <input
                type="range"
                min={0}
                max={0.375}
                step={0.125}
                value={rateImpactPerPoint}
                onChange={(e) => setRateImpactPerPoint(Number(e.target.value))}
                style={{ width: "100%" }}
              />
            </SliderRow>
          </div>
        </div>

        <div style={{ marginTop: "12px", ...mutedTextStyle }}>
          <b style={{ color: "#f8fafc" }}>Quick read:</b> {summaryLine}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "12px",
        }}
      >
        <StatRow
          label="Base rate (sandbox)"
          value={`${baseRate.toFixed(3)}%`}
          hint="From the top sandbox."
        />
        <StatRow
          label="Adjusted rate"
          value={`${adjustedRate.toFixed(3)}%`}
          hint="Based on your points/credits slider."
        />
        <StatRow
          label="Upfront (points/credits)"
          value={
            pointsDollars === 0
              ? "—"
              : pointsDollars > 0
              ? `${formatUSD(Math.round(pointsDollars))} cost`
              : `${formatUSD(Math.round(Math.abs(pointsDollars)))} credit`
          }
          hint="1 point = 1% of loan amount."
        />
        <StatRow
          label="Payment change (P&I)"
          value={`${monthlyDelta >= 0 ? "+" : "-"}${formatUSD(
            Math.round(Math.abs(monthlyDelta))
          )}/mo`}
          hint={monthlyDelta >= 0 ? "Higher payment" : "Lower payment"}
        />
      </div>

      <div style={subtleCardStyle}>
        <div style={{ fontWeight: 900, color: "#f8fafc" }}>
          Break-even (only when paying points)
        </div>
        <div style={{ ...mutedTextStyle, marginTop: "8px" }}>
          {isPayingPoints ? (
            breakevenMonths ? (
              <>
                You’d need about{" "}
                <b style={{ color: "#f8fafc" }}>
                  {Math.round(breakevenMonths)} months
                </b>{" "}
                of savings to earn back the upfront points cost. If you might
                refinance, sell, or move before that, points often aren’t worth it.
              </>
            ) : (
              <>
                With these settings, your payment isn’t lower enough to create a
                meaningful break-even.
              </>
            )
          ) : (
            <>
              Break-even only applies when you{" "}
              <b style={{ color: "#f8fafc" }}>pay points</b> to lower the rate. If
              you’re taking credits, the “trade” is usually{" "}
              <b style={{ color: "#f8fafc" }}>less cash to close</b> for{" "}
              <b style={{ color: "#f8fafc" }}>higher payment</b>.
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Loan Types (expanded)
 * Keep it simple but more useful: who it’s for, typical down payment, MI, and “gotchas”.
 */
function LoanTypesStep() {
  const [selected, setSelected] = useState("Conventional");

  const options = [
    {
      id: "Conventional",
      title: "Conventional",
      bestFor: "Stronger credit and flexible scenarios (most common).",
      down: "Often 3%–20%+ down (varies by program).",
      mi: "Private MI typically required if < 20% down; can often be removed later.",
      gotchas:
        "Credit score and DTI sensitivity. Pricing can move quickly with score/LTV changes.",
      vibe:
        "If you’re a solid borrower, conventional usually gives the cleanest long-term cost structure.",
    },
    {
      id: "FHA",
      title: "FHA",
      bestFor: "Lower credit / higher DTI borrowers, smaller down payments.",
      down: "Often ~3.5% down (common FHA minimum; eligibility varies).",
      mi: "Mortgage insurance can be more expensive and may last longer.",
      gotchas:
        "Upfront + monthly MI can meaningfully raise APR even if the rate looks low.",
      vibe:
        "FHA can be a bridge program: get in the house, then refinance later if your profile improves.",
    },
    {
      id: "VA",
      title: "VA",
      bestFor: "Eligible veterans / active duty / qualifying spouses.",
      down: "Often 0% down possible (eligibility and lender overlays vary).",
      mi: "No monthly mortgage insurance like conventional/FHA (big advantage).",
      gotchas:
        "Funding fee may apply. Eligibility and entitlement rules matter.",
      vibe:
        "VA can be the best deal on the market when you qualify — especially for monthly payment.",
    },
    {
      id: "USDA",
      title: "USDA",
      bestFor: "Rural/suburban eligible areas + income limits (program rules apply).",
      down: "Often 0% down possible in eligible areas.",
      mi: "USDA fees exist (structure differs from FHA/Conventional).",
      gotchas:
        "Property location + household income constraints; not available everywhere.",
      vibe:
        "USDA is underrated: if you qualify geographically and by income, it can be very payment-friendly.",
    },
  ];

  const active = options.find((o) => o.id === selected) || options[0];

  return (
    <div style={{ display: "grid", gap: "12px" }}>
      <div style={subtleCardStyle}>
        <div style={{ fontWeight: 900, color: "#f8fafc" }}>
          Choose a loan type to learn what changes (and what doesn’t)
        </div>
        <div style={{ ...mutedTextStyle, marginTop: "8px" }}>
          Loan type impacts eligibility, insurance/fees, and how your rate is priced —
          but the math of “rate/term → payment” stays the same.
        </div>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "12px" }}>
          {options.map((o) => {
            const isOn = o.id === selected;
            return (
              <button
                key={o.id}
                type="button"
                onClick={() => setSelected(o.id)}
                style={{
                  ...tagPill,
                  border: isOn ? "1px solid rgba(56,189,248,0.55)" : tagPill.border,
                  background: isOn ? "rgba(56,189,248,0.12)" : tagPill.background,
                }}
              >
                {o.title}
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ ...subtleCardStyle, display: "grid", gap: "10px" }}>
        <div style={{ fontWeight: 950, color: "#f8fafc", fontSize: "1.1rem" }}>
          {active.title}
        </div>

        <div style={{ ...mutedTextStyle }}>
          <b style={{ color: "#f8fafc" }}>Best for:</b> {active.bestFor}
        </div>
        <div style={{ ...mutedTextStyle }}>
          <b style={{ color: "#f8fafc" }}>Typical down payment:</b> {active.down}
        </div>
        <div style={{ ...mutedTextStyle }}>
          <b style={{ color: "#f8fafc" }}>Insurance / fees:</b> {active.mi}
        </div>
        <div style={{ ...mutedTextStyle }}>
          <b style={{ color: "#f8fafc" }}>Common gotchas:</b> {active.gotchas}
        </div>

        <div style={{ ...subtleCardStyle, marginTop: "4px" }}>
          <div style={{ fontWeight: 900, color: "#f8fafc" }}>Plain-English vibe</div>
          <div style={{ ...mutedTextStyle, marginTop: "8px" }}>{active.vibe}</div>
        </div>
      </div>
    </div>
  );
}

/**
 * ARM step (revamped to match your earlier idea)
 * - User selects intro period
 * - User selects intro rate
 * - User selects post-adjust rate (illustrates risk)
 * - Includes “most people don’t stay longer than ~7 years” heuristic
 * - Sandbox loan amount + term used for payment math, but rates are controlled here
 */
function ArmsStep({ sandbox }) {
  const [introYears, setIntroYears] = useState(5);
  const [introRate, setIntroRate] = useState(() =>
    snapToEighth(clamp(sandbox.rate - 0.5, 0.125, 25))
  );
  const [postRate, setPostRate] = useState(() =>
    snapToEighth(clamp(sandbox.rate + 1.25, 0.125, 25))
  );

  // Keep rates reasonable if sandbox changes a lot
  useEffect(() => {
    setIntroRate((r) => snapToEighth(clamp(r, 0.125, 25)));
    setPostRate((r) => snapToEighth(clamp(r, 0.125, 25)));
  }, [sandbox.rate]);

  const fixedRate = sandbox.rate;

  const fixedPayment = useMemo(
    () => calcMonthlyPI(sandbox.loanAmount, fixedRate, sandbox.termYears),
    [sandbox.loanAmount, fixedRate, sandbox.termYears]
  );

  const armIntroPayment = useMemo(
    () => calcMonthlyPI(sandbox.loanAmount, introRate, sandbox.termYears),
    [sandbox.loanAmount, introRate, sandbox.termYears]
  );

  const armPostPayment = useMemo(
    () => calcMonthlyPI(sandbox.loanAmount, postRate, sandbox.termYears),
    [sandbox.loanAmount, postRate, sandbox.termYears]
  );

  const introSavings = Math.max(fixedPayment - armIntroPayment, 0);
  const postShock = Math.max(armPostPayment - armIntroPayment, 0);

  const typicalHorizonYears = 7;

  const horizonText =
    introYears >= typicalHorizonYears
      ? `If you expect to stay ~${typicalHorizonYears}+ years, the post-adjust risk matters a lot.`
      : `If you might move/refi within ~${typicalHorizonYears} years, the intro period can matter more than the later adjustment.`;

  return (
    <div style={{ display: "grid", gap: "12px" }}>
      <div style={subtleCardStyle}>
        <div style={{ fontWeight: 900, color: "#f8fafc" }}>
          ARM = lower intro payment, then rate risk later
        </div>
        <div style={{ ...mutedTextStyle, marginTop: "8px" }}>
          Many borrowers don’t keep the same mortgage for decades — they move or refinance.
          Use the controls below to see the trade: cheaper now vs uncertainty later.
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "12px",
            marginTop: "12px",
          }}
        >
          <div style={{ ...subtleCardStyle, padding: "12px" }}>
            <SliderRow
              label="Intro fixed period"
              valueLabel={`${introYears} years`}
              minLabel="3"
              maxLabel="10"
              hint={`Heuristic: many people move/refi within ~${typicalHorizonYears} years.`}
            >
              <input
                type="range"
                min={3}
                max={10}
                step={1}
                value={introYears}
                onChange={(e) => setIntroYears(Number(e.target.value))}
                style={{ width: "100%" }}
              />
            </SliderRow>
          </div>

          <div style={{ ...subtleCardStyle, padding: "12px" }}>
            <SliderRow
              label="ARM intro rate"
              valueLabel={`${introRate.toFixed(3)}%`}
              minLabel="2.500%"
              maxLabel="9.500%"
              hint="This is the rate during the intro period."
            >
              <input
                type="range"
                min={2.5}
                max={9.5}
                step={0.125}
                value={introRate}
                onChange={(e) => setIntroRate(snapToEighth(Number(e.target.value)))}
                style={{ width: "100%" }}
              />
            </SliderRow>
          </div>

          <div style={{ ...subtleCardStyle, padding: "12px" }}>
            <SliderRow
              label="Post-adjust rate (risk)"
              valueLabel={`${postRate.toFixed(3)}%`}
              minLabel="2.500%"
              maxLabel="12.000%"
              hint="This illustrates what happens if rates are higher later."
            >
              <input
                type="range"
                min={2.5}
                max={12.0}
                step={0.125}
                value={postRate}
                onChange={(e) => setPostRate(snapToEighth(Number(e.target.value)))}
                style={{ width: "100%" }}
              />
            </SliderRow>
          </div>
        </div>

        <div style={{ marginTop: "12px", ...mutedTextStyle }}>
          <b style={{ color: "#f8fafc" }}>Decision anchor:</b> {horizonText}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "12px",
        }}
      >
        <StatRow
          label="Fixed rate (sandbox)"
          value={`${fixedRate.toFixed(3)}%`}
          hint="Reference from the top sandbox."
        />
        <StatRow
          label="Fixed payment (P&I)"
          value={formatUSD(Math.round(fixedPayment))}
          hint={`${sandbox.termYears}-year term`}
        />
        <StatRow
          label={`ARM payment (intro, ${introYears}y)`}
          value={formatUSD(Math.round(armIntroPayment))}
          hint={`Saves ~${formatUSD(Math.round(introSavings))}/mo vs fixed`}
        />
        <StatRow
          label="ARM payment (post-adjust)"
          value={formatUSD(Math.round(armPostPayment))}
          hint={`Potential payment shock: +${formatUSD(Math.round(postShock))}/mo`}
        />
      </div>

      <div style={subtleCardStyle}>
        <div style={{ fontWeight: 900, color: "#f8fafc" }}>Takeaway</div>
        <div style={{ ...mutedTextStyle, marginTop: "8px" }}>
          The ARM can improve affordability early (intro payment), but you’re taking a bet on the
          future rate environment. If you’re likely to refinance/move before the adjustment, the
          intro period may be the main thing you care about. If you’ll stay longer, the post-adjust
          scenario becomes the real risk.
        </div>
      </div>
    </div>
  );
}

/**
 * Rate Trends (unchanged from your last ask; includes 1/8ths)
 */
function RateTrendsStep({ sandbox }) {
  const [delta, setDelta] = useState(0.25);

  const basePayment = useMemo(
    () => calcMonthlyPI(sandbox.loanAmount, sandbox.rate, sandbox.termYears),
    [sandbox.loanAmount, sandbox.rate, sandbox.termYears]
  );

  const adjustedRate = useMemo(() => {
    return snapToEighth(sandbox.rate + delta);
  }, [sandbox.rate, delta]);

  const adjustedPayment = useMemo(
    () => calcMonthlyPI(sandbox.loanAmount, adjustedRate, sandbox.termYears),
    [sandbox.loanAmount, adjustedRate, sandbox.termYears]
  );

  const monthlyChange = Math.round(adjustedPayment - basePayment);

  const deltas = [-0.5, -0.25, -0.125, 0.125, 0.25, 0.5];

  return (
    <div style={{ display: "grid", gap: "12px" }}>
      <div style={subtleCardStyle}>
        <div style={{ fontWeight: 900, color: "#f8fafc" }}>
          Swap the rate change to feel affordability
        </div>
        <div style={{ ...mutedTextStyle, marginTop: "8px" }}>
          Tiny moves matter. Try ±0.125 (1/8th) and watch how payment shifts.
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "12px",
            marginTop: "12px",
          }}
        >
          <div style={{ ...subtleCardStyle, padding: "12px" }}>
            <div style={miniLabel}>Loan amount</div>
            <div style={{ ...bigNumber, fontSize: "1.1rem" }}>
              {formatUSD(sandbox.loanAmount)}
            </div>
          </div>

          <div style={{ ...subtleCardStyle, padding: "12px" }}>
            <div style={miniLabel}>Current rate</div>
            <div style={{ ...bigNumber, fontSize: "1.1rem" }}>
              {sandbox.rate.toFixed(3)}%
            </div>
          </div>

          <div style={{ ...subtleCardStyle, padding: "12px" }}>
            <div style={miniLabel}>Rate change</div>
            <div style={{ ...bigNumber, fontSize: "1.1rem" }}>
              {delta > 0 ? `+${delta.toFixed(3)}%` : `${delta.toFixed(3)}%`}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginTop: "12px",
          }}
        >
          {deltas.map((d) => {
            const isOn = d === delta;
            const label = d > 0 ? `+${d}%` : `${d}%`;
            return (
              <button
                key={d}
                type="button"
                onClick={() => setDelta(d)}
                style={{
                  ...tagPill,
                  border: isOn
                    ? "1px solid rgba(56,189,248,0.55)"
                    : tagPill.border,
                  background: isOn
                    ? "rgba(56,189,248,0.12)"
                    : tagPill.background,
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "12px",
        }}
      >
        <StatRow
          label="Payment today"
          value={formatUSD(Math.round(basePayment))}
          hint="Principal + interest only (no taxes/insurance)."
        />
        <StatRow
          label={`Payment at ${adjustedRate.toFixed(3)}%`}
          value={formatUSD(Math.round(adjustedPayment))}
          hint={`${sandbox.termYears}-year term using the top sandbox.`}
        />
        <StatRow
          label="Monthly change"
          value={`${monthlyChange >= 0 ? "+" : ""}${formatUSD(
            Math.abs(monthlyChange)
          )}`}
          hint={monthlyChange >= 0 ? "More expensive per month." : "Cheaper per month."}
        />
      </div>
    </div>
  );
}

function ExampleSandboxStep({ sandbox }) {
  const basePayment = useMemo(
    () => calcMonthlyPI(sandbox.loanAmount, sandbox.rate, sandbox.termYears),
    [sandbox.loanAmount, sandbox.rate, sandbox.termYears]
  );
  const baseInterest = useMemo(
    () => calcTotalInterest(sandbox.loanAmount, sandbox.rate, sandbox.termYears),
    [sandbox.loanAmount, sandbox.rate, sandbox.termYears]
  );

  return (
    <div style={{ display: "grid", gap: "12px" }}>
      <div style={subtleCardStyle}>
        <div style={{ fontWeight: 900, color: "#f8fafc" }}>
          You’ve built intuition — now price for real
        </div>
        <div style={{ ...mutedTextStyle, marginTop: "8px" }}>
          Your sandbox right now implies about{" "}
          <b style={{ color: "#f8fafc" }}>
            {formatUSD(Math.round(basePayment))}/mo
          </b>{" "}
          P&I and{" "}
          <b style={{ color: "#f8fafc" }}>
            {formatUSD(Math.round(baseInterest))}
          </b>{" "}
          total interest over the term. When you run a scenario, we’ll sort real
          options by payment → APR → rate.
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "12px",
        }}
      >
        <StatRow label="Loan amount" value={formatUSD(sandbox.loanAmount)} />
        <StatRow label="Term" value={`${sandbox.termYears}-Year`} />
        <StatRow label="Rate (sandbox)" value={`${sandbox.rate.toFixed(3)}%`} />
      </div>
    </div>
  );
}

/* -------------------- main component -------------------- */

const CompareProduct = ({
  scenario,
  quoteMode,
  pricingState,
  onRetryPricing,
  onEdit,
  onReset,
  onSelectOption,
  onStartPurchase,
  onStartRefinance,
}) => {
  const [stepIndex, setStepIndex] = useState(0);

  // One sandbox drives everything (top controls + all 6 steps)
  const [sandbox, setSandbox] = useState(() => {
    try {
      const saved = localStorage.getItem("vyrc_compare_sandbox_v2");
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {
      loanAmount: 400000,
      termYears: 30,
      rate: 6.5,
    };
  });

  useEffect(() => {
    try {
      localStorage.setItem("vyrc_compare_sandbox_v2", JSON.stringify(sandbox));
    } catch (e) {}
  }, [sandbox]);

  const steps = useMemo(
    () => [
      {
        id: "payment-vs-time",
        section: "Payment first",
        title: "30-Year vs 15-Year",
        desc: "Feel the payment vs total cost tradeoff using your sandbox values.",
        aiPrompt:
          "Explain 30-year vs 15-year in plain English using payment and total interest.",
        render: () => <PaymentVsTimeStep sandbox={sandbox} />,
      },
      {
        id: "points-credits",
        section: "Optimization",
        title: "Rate, Points & Credits",
        desc: "Try paying points vs taking credits and learn the trade (cash vs payment).",
        aiPrompt:
          "Explain points vs credits and how to decide based on break-even time and cash-to-close.",
        render: () => <PointsCreditsStep sandbox={sandbox} />,
      },
      {
        id: "loan-types",
        section: "Programs",
        title: "Conventional vs FHA vs VA vs USDA",
        desc: "Get clarity on who each program is for, and the common fee/insurance differences.",
        aiPrompt:
          "Summarize loan types (conventional, FHA, VA, USDA) and when each is a good fit.",
        render: () => <LoanTypesStep />,
      },
      {
        id: "arms",
        section: "Risk & reward",
        title: "Fixed vs ARM",
        desc: "Set intro + post-adjust rates to see the ‘cheap now vs risk later’ reality.",
        aiPrompt:
          "Explain ARMs and how a borrower should think about intro period vs adjustment risk.",
        render: () => <ArmsStep sandbox={sandbox} />,
      },
      {
        id: "rate-trends",
        section: "Context",
        title: "Rate Trends",
        desc: "Swap the rate change (including 1/8ths) to see affordability impact.",
        aiPrompt: "Explain why tiny rate changes still matter to monthly payment.",
        render: () => <RateTrendsStep sandbox={sandbox} />,
      },
      {
        id: "wrap",
        section: "Next step",
        title: "Ready to Price",
        desc: "You’ve got the intuition. Now run a scenario for real offers.",
        aiPrompt:
          "What should a user focus on first when comparing mortgage quotes?",
        render: () => <ExampleSandboxStep sandbox={sandbox} />,
      },
    ],
    [sandbox]
  );

  const currentStep = steps[stepIndex];

  // keep your existing scenario-driven results pages untouched
  if (scenario) {
    return (
      <div style={containerStyle}>
        {quoteMode === "Purchase" ? (
          <PurchaseOptionsPage
            scenario={scenario}
            pricing={pricingState.data}
            pricingStatus={pricingState.status}
            pricingError={pricingState.error}
            onRetryPricing={onRetryPricing}
            onEdit={onEdit}
            onReset={onReset}
            onSelectOption={onSelectOption}
          />
        ) : (
          <MortgageOptionsPage
            scenario={scenario}
            pricing={pricingState.data}
            pricingStatus={pricingState.status}
            pricingError={pricingState.error}
            onRetryPricing={onRetryPricing}
            onEdit={onEdit}
            onReset={onReset}
            onSelectOption={onSelectOption}
          />
        )}
      </div>
    );
  }

  const sandboxPayment = useMemo(() => {
    return calcMonthlyPI(sandbox.loanAmount, sandbox.rate, sandbox.termYears);
  }, [sandbox.loanAmount, sandbox.rate, sandbox.termYears]);

  const resetSandbox = () => {
    setSandbox({ loanAmount: 400000, termYears: 30, rate: 6.5 });
    setStepIndex(0);
  };

  return (
    <div style={containerStyle}>
      <div style={shellStyle}>
        {/* Header */}
        <header style={{ display: "grid", gap: "10px" }}>
          <p style={kickerStyle}>Compare Products</p>
          <h1 style={titleStyle}>Learn first. Price second.</h1>
          <p style={{ ...mutedTextStyle, maxWidth: "820px" }}>
            Use the sandbox to create your “example world.” Every learning step
            updates with those same numbers — so the page actually feels cohesive.
          </p>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button type="button" onClick={onStartPurchase} style={primaryBtn}>
              Start Purchase <FiArrowRight />
            </button>
            <button type="button" onClick={onStartRefinance} style={secondaryBtn(false)}>
              Start Refi <FiArrowRight />
            </button>
            <button type="button" onClick={resetSandbox} style={ghostBtn}>
              <FiRefreshCw /> Reset sandbox
            </button>
          </div>
        </header>

        {/* Top Sandbox (drives steps) */}
        <div style={cardStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  fontWeight: 950,
                  color: "#f8fafc",
                  fontSize: "1.08rem",
                }}
              >
                Sandbox (example, not a quote)
              </div>
              <div style={{ ...mutedTextStyle, marginTop: "6px" }}>
                Adjust these three inputs. All learning steps update instantly.
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <div style={{ ...subtleCardStyle, padding: "12px 14px", minWidth: "220px" }}>
                <div style={miniLabel}>Payment (P&I)</div>
                <div style={{ ...bigNumber, fontSize: "1.25rem" }}>
                  {formatUSD(Math.round(sandboxPayment))}/mo
                </div>
                <div style={{ ...mutedTextStyle, fontSize: "0.82rem", marginTop: "6px" }}>
                  Principal + interest only (no taxes/insurance/HOA).
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "12px",
              marginTop: "14px",
            }}
          >
            {/* Loan amount */}
            <div style={subtleCardStyle}>
              <div style={{ fontWeight: 950, color: "#f8fafc" }}>Loan amount</div>
              <div style={{ ...mutedTextStyle, fontSize: "0.84rem", marginTop: "6px" }}>
                This value powers the examples below.
              </div>
              <div style={{ marginTop: "10px" }}>
                <input
                  type="range"
                  min={100000}
                  max={1200000}
                  step={5000}
                  value={sandbox.loanAmount}
                  onChange={(e) =>
                    setSandbox((s) => ({
                      ...s,
                      loanAmount: Number(e.target.value),
                    }))
                  }
                  style={{ width: "100%" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px" }}>
                  <span style={{ color: "#94a3b8", fontWeight: 850 }}>
                    {formatUSD(100000)}
                  </span>
                  <span style={{ color: "#f8fafc", fontWeight: 950 }}>
                    {formatUSD(sandbox.loanAmount)}
                  </span>
                  <span style={{ color: "#94a3b8", fontWeight: 850 }}>
                    {formatUSD(1200000)}
                  </span>
                </div>
              </div>
            </div>

            {/* Term */}
            <div style={subtleCardStyle}>
              <div style={{ fontWeight: 950, color: "#f8fafc" }}>Term</div>
              <div style={{ ...mutedTextStyle, fontSize: "0.84rem", marginTop: "6px" }}>
                Affects payment and total interest in every step.
              </div>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "12px" }}>
                {[15, 20, 30].map((y) => {
                  const isOn = y === sandbox.termYears;
                  return (
                    <button
                      key={y}
                      type="button"
                      onClick={() => setSandbox((s) => ({ ...s, termYears: y }))}
                      style={{
                        ...tagPill,
                        minWidth: "86px",
                        justifyContent: "center",
                        border: isOn ? "1px solid rgba(56,189,248,0.55)" : tagPill.border,
                        background: isOn ? "rgba(56,189,248,0.12)" : tagPill.background,
                      }}
                    >
                      {y}-Year
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Rate (1/8ths) */}
            <div style={subtleCardStyle}>
              <div style={{ fontWeight: 950, color: "#f8fafc" }}>Current rate</div>
              <div style={{ ...mutedTextStyle, fontSize: "0.84rem", marginTop: "6px" }}>
                Slider snaps to <b style={{ color: "#f8fafc" }}>1/8%</b> (0.125).
              </div>

              <div style={{ marginTop: "10px" }}>
                <input
                  type="range"
                  min={3.0}
                  max={9.5}
                  step={0.125}
                  value={sandbox.rate}
                  onChange={(e) =>
                    setSandbox((s) => ({
                      ...s,
                      rate: snapToEighth(Number(e.target.value)),
                    }))
                  }
                  style={{ width: "100%" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px" }}>
                  <span style={{ color: "#94a3b8", fontWeight: 850 }}>3.000%</span>
                  <span style={{ color: "#f8fafc", fontWeight: 950 }}>
                    {sandbox.rate.toFixed(3)}%
                  </span>
                  <span style={{ color: "#94a3b8", fontWeight: 850 }}>9.500%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stepper */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {steps.map((s, stepIdx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setStepIndex(stepIdx)}
                style={pillButton(stepIdx === stepIndex)}
                aria-label={`Go to ${s.title}`}
              />
            ))}
          </div>
          <div style={{ ...mutedTextStyle, fontSize: "0.86rem" }}>
            Step <b style={{ color: "#f8fafc" }}>{stepIndex + 1}</b> of{" "}
            <b style={{ color: "#f8fafc" }}>{steps.length}</b>
          </div>
        </div>

        {/* Current step content */}
        <div style={cardStyle}>
          <p style={kickerStyle}>{currentStep.section}</p>
          <h2 style={h2Style}>{currentStep.title}</h2>
          <p style={{ ...mutedTextStyle, marginTop: "8px", maxWidth: "900px" }}>
            {currentStep.desc}
          </p>

          <div style={{ marginTop: "14px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
                style={{ display: "grid", gap: "14px" }}
              >
                {currentStep.render()}

                <div>
                  <ExplainPill
                    prompt={currentStep.aiPrompt}
                    context="Compare Products Hub"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Step nav */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            onClick={() => setStepIndex((i) => Math.max(i - 1, 0))}
            disabled={stepIndex === 0}
            style={secondaryBtn(stepIndex === 0)}
          >
            Back
          </button>

          <button
            type="button"
            onClick={() => setStepIndex((i) => Math.min(i + 1, steps.length - 1))}
            disabled={stepIndex === steps.length - 1}
            style={{
              ...primaryBtn,
              opacity: stepIndex === steps.length - 1 ? 0.55 : 1,
              cursor: stepIndex === steps.length - 1 ? "not-allowed" : "pointer",
            }}
          >
            Next <FiArrowRight />
          </button>
        </div>

        {/* End CTA */}
        {stepIndex === steps.length - 1 && (
          <div style={subtleCardStyle}>
            <div
              style={{
                fontWeight: 950,
                color: "#f8fafc",
                fontSize: "1.05rem",
              }}
            >
              Want real options sorted by monthly payment?
            </div>
            <div style={{ ...mutedTextStyle, marginTop: "8px" }}>
              Run a Purchase or Refi scenario and we’ll return offers ranked by:{" "}
              <b style={{ color: "#f8fafc" }}>Payment → APR → Rate → Points</b>.
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                marginTop: "12px",
              }}
            >
              <button type="button" onClick={onStartPurchase} style={primaryBtn}>
                Start Purchase <FiArrowRight />
              </button>
              <button type="button" onClick={onStartRefinance} style={secondaryBtn(false)}>
                Start Refi <FiArrowRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompareProduct;
