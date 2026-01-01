export const sanitizeNumber = (value) => {
  const numeric = Number(String(value).replace(/[^0-9.]/g, ""));
  return Number.isFinite(numeric) ? numeric : 0;
};

export const calculateMonthlyPayment = ({ loanAmount, annualRate, termYears }) => {
  const principal = sanitizeNumber(loanAmount);
  const rate = sanitizeNumber(annualRate);
  const months = Math.max(termYears, 0) * 12;
  if (!months || principal <= 0) return 0;
  const monthlyRate = rate / 100 / 12;
  if (monthlyRate === 0) return principal / months;
  const factor = Math.pow(1 + monthlyRate, months);
  return (principal * monthlyRate * factor) / (factor - 1);
};

export const formatCurrency = (value, maximumFractionDigits = 0) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits,
  }).format(Number.isFinite(value) ? value : 0);
