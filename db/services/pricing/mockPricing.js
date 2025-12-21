const {
  calculateMonthlyPayment,
  getExplanation,
  HEADLINE_OPTIONS,
} = require("./helpers");

function mockPricingResponse(scenario) {
  const {
    existingLoanBalance = 400000,
    termYears = 30,
    maxMonthlyPayment,
  } = scenario;

  // Baseline assumptions
  const baseRate = 6.5;
  const loanAmount = existingLoanBalance;

  const buildOption = ({ label, rateOffset, points }) => {
    const rate = baseRate + rateOffset;
    const apr = rate + (points > 0 ? 0.12 : points < 0 ? 0.18 : 0.1);

    const monthlyPayment = calculateMonthlyPayment(loanAmount, rate, termYears);

    return {
      id: `${label}-${rate.toFixed(3)}`,
      label,
      rate: Number(rate.toFixed(3)),
      apr: Number(apr.toFixed(3)),
      points,
      monthlyPayment: Math.round(monthlyPayment),
      cashToClose: Math.round(loanAmount * (points / 100)),
      termYears,
      explanation: getExplanation(label),
    };
  };

  const options = [
    buildOption({
      label: HEADLINE_OPTIONS[0],
      rateOffset: 0.35,
      points: -1.0,
    }),
    buildOption({
      label: HEADLINE_OPTIONS[1],
      rateOffset: 0,
      points: 0,
    }),
    buildOption({
      label: HEADLINE_OPTIONS[2],
      rateOffset: -0.25,
      points: 1.0,
    }),
  ];

  // Optional: sort by closeness to target payment
  if (maxMonthlyPayment) {
    options.sort(
      (a, b) =>
        Math.abs(a.monthlyPayment - maxMonthlyPayment) -
        Math.abs(b.monthlyPayment - maxMonthlyPayment)
    );
  }

  return {
    provider: "mock",
    generatedAt: new Date().toISOString(),
    options,
  };
}

module.exports = { mockPricingResponse };
