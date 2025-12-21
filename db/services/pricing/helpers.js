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

const HEADLINE_OPTIONS = [
  "Lowest payment today",
  "Balanced",
  "Lowest long-term cost",
];

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

module.exports = {
  calculateMonthlyPayment,
  getExplanation,
  HEADLINE_OPTIONS,
};
