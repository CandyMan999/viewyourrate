function calculateMonthlyPayment(principal, ratePercent, termYears) {
  const monthlyRate = ratePercent / 100 / 12;
  const numberOfPayments = termYears * 12;

  if (monthlyRate <= 0) {
    return principal / numberOfPayments;
  }

  return (
    (principal * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -numberOfPayments))
  );
}

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
      label: "Lowest payment today",
      rateOffset: 0.35,
      points: -1.0,
    }),
    buildOption({
      label: "Balanced",
      rateOffset: 0,
      points: 0,
    }),
    buildOption({
      label: "Lowest long-term cost",
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

function getExplanation(label) {
  switch (label) {
    case "Lowest payment today":
      return (
        "This option uses lender credits to reduce your monthly payment. " +
        "It usually comes with a slightly higher rate but minimizes upfront cost."
      );
    case "Balanced":
      return (
        "This option avoids points and credits. " +
        "It keeps both monthly payment and APR in a reasonable middle range."
      );
    case "Lowest long-term cost":
      return (
        "This option uses points to lower the rate and APR. " +
        "You pay more upfront but reduce total interest over time."
      );
    default:
      return "";
  }
}

module.exports = { mockPricingResponse };
