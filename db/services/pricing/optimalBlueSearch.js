const { getOptimalBlueClient } = require("../../lib/optimalBlueClient");
const { OPTIMAL_BLUE_CONFIG } = require("../../config/optimalBlue");
const {
  calculateMonthlyPayment,
  getExplanation,
  HEADLINE_OPTIONS,
} = require("./helpers");

const DEFAULT_TERM_YEARS = 30;

function mapScenarioToRequest(scenario = {}) {
  const {
    maxMonthlyPayment,
    stateSelection,
    existingLoanBalance,
    estimatedHomeValue,
    creditScore,
    cashOutAmount = 0,
    occupancy = "Primary",
    propertyType = "Single Family",
    termYears = DEFAULT_TERM_YEARS,
  } = scenario;

  const occupancyMap = {
    Primary: "PrimaryResidence",
    "Second Home": "SecondHome",
    Investment: "InvestmentProperty",
  };

  const propertyTypeMap = {
    "Single Family": "SingleFamily",
    Condo: "Condo",
    Townhome: "Townhouse",
    "Multi-unit": "MultiFamily",
  };

  const loanPurpose =
    Number(cashOutAmount) > 0 ? "RefiCashout" : "RefiRateTermLimitedCO";

  return {
    borrowerInformation: {
      citizenship: "USCitizen",
      fico: creditScore || 760,
    },
    propertyInformation: {
      appraisedValue: estimatedHomeValue || existingLoanBalance || 400000,
      occupancy: occupancyMap[occupancy] || "PrimaryResidence",
      propertyType: propertyTypeMap[propertyType] || "SingleFamily",
      state: stateSelection,
      salesPrice: estimatedHomeValue || existingLoanBalance || 400000,
      corporateRelocation: false,
      numberOfStories: 1,
      numberOfUnits: "OneUnit",
    },
    loanInformation: {
      loanPurpose,
      lienType: "First",
      amortizationTypes: ["Fixed"],
      automatedUnderwritingSystem: "NotSpecified",
      borrowerPaidMI: "Yes",
      buydown: "None",
      calculateTotalLoanAmount: true,
      expandedApprovalLevel: "NotApplicable",
      includeLOCompensationInPricing: "YesLenderPaid",
      interestOnly: false,
      loanLevelDebtToIncomeRatio: maxMonthlyPayment ? 35 : 36,
      loanTerms: [termYears === 15 ? "FifteenYear" : "ThirtyYear"],
      loanType: "Conventional",
      prepaymentPenalty: "None",
      representativeFICO: creditScore || 760,
      cashOutAmount: cashOutAmount || 0,
      baseLoanAmount: existingLoanBalance || 400000,
    },
  };
}

function termYearsFromLoanTerm(loanTerm) {
  const map = {
    ThirtyYear: 30,
    TwentyYear: 20,
    FifteenYear: 15,
    TenYear: 10,
  };
  return map[loanTerm] || DEFAULT_TERM_YEARS;
}

function normalizeProduct(product, scenario) {
  const loanAmount = scenario.existingLoanBalance || 400000;
  const rate = Number(product.rate ?? 0);
  const apr = product.apr ? Number(product.apr) : null;
  const price = Number(product.price ?? 0);
  const termYears = termYearsFromLoanTerm(product.loanTerm) || DEFAULT_TERM_YEARS;
  const monthlyPayment =
    product.totalPayment ||
    product.principalAndInterest ||
    calculateMonthlyPayment(loanAmount, rate, termYears);

  return {
    id: `${product.productId || "product"}-${rate.toFixed(3)}`,
    productName: product.productName,
    rate: Number(rate.toFixed(3)),
    apr: apr !== null ? Number(apr.toFixed(3)) : Number(rate.toFixed(3)),
    points: Number(price.toFixed(3)),
    monthlyPayment: Math.round(monthlyPayment),
    cashToClose: Math.round(loanAmount * (price / 100)),
    termYears,
    lockPeriodDays: product.lockPeriod || 30,
  };
}

function pickHeadlineOptions(products, scenario) {
  if (!products?.length) return [];

  const normalized = products
    .map((product) => normalizeProduct(product, scenario))
    .filter((p) => Number.isFinite(p.rate));

  if (!normalized.length) return [];

  const byRate = [...normalized].sort((a, b) => a.rate - b.rate);
  const byPayment = [...normalized].sort(
    (a, b) => a.monthlyPayment - b.monthlyPayment
  );
  const targetPayment = scenario.maxMonthlyPayment;
  const byTarget =
    targetPayment && Number(targetPayment) > 0
      ? [...normalized].sort(
          (a, b) =>
            Math.abs(a.monthlyPayment - targetPayment) -
            Math.abs(b.monthlyPayment - targetPayment)
        )
      : byRate;

  const candidates = [
    byPayment[0],
    byTarget[0],
    byRate[0],
    byRate[1],
    byPayment[1],
  ].filter(Boolean);

  const seen = new Set();
  const uniqueCandidates = [];
  for (const candidate of candidates) {
    if (seen.has(candidate.id)) continue;
    seen.add(candidate.id);
    uniqueCandidates.push(candidate);
    if (uniqueCandidates.length === HEADLINE_OPTIONS.length) break;
  }

  return uniqueCandidates.map((option, index) => ({
    ...option,
    label: HEADLINE_OPTIONS[index],
    explanation: getExplanation(HEADLINE_OPTIONS[index]),
  }));
}

async function runBestExSearch(scenario) {
  const payload = mapScenarioToRequest(scenario);
  const client = getOptimalBlueClient();

  try {
    const { data } = await client.post("/bestexsearch", payload);
    const options = pickHeadlineOptions(data?.products || [], scenario);

    return {
      provider: "optimalBlue",
      generatedAt: new Date().toISOString(),
      searchId: data?.searchId,
      options,
      env: OPTIMAL_BLUE_CONFIG.env,
    };
  } catch (error) {
    const status = error.response?.status;
    const apiMessage =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      "Unknown pricing error";

    throw new Error(
      `Optimal Blue request failed${status ? ` (status ${status})` : ""}: ${apiMessage}`
    );
  }
}

module.exports = { runBestExSearch };
