const { optimalBlueClient } = require("../../lib/optimalBlueClient");
const { OPTIMAL_BLUE_CONFIG } = require("../../config/optimalBlue");
const {
  calculateMonthlyPayment,
  getExplanation,
  HEADLINE_OPTIONS,
} = require("./helpers");

const DEFAULT_TERM_YEARS = 30;

function mapRefiScenarioToRequest(scenario = {}) {
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

  const baseLoanAmount = existingLoanBalance || estimatedHomeValue || 400000;

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
      baseLoanAmount,
    },
  };
}

function mapPurchaseScenarioToRequest(scenario = {}) {
  const {
    purchasePrice,
    downPayment,
    downPaymentPercent,
    creditScore,
    stateSelection,
    propertyZip,
    occupancy = "PrimaryResidence",
    propertyType = "SingleFamily",
    propertyUnits = "OneUnit",
    loanProgram = "Conventional",
    termYears = DEFAULT_TERM_YEARS,
    rateStructure = "Fixed",
    armTerm,
    firstTimeBuyer = false,
    veteranStatus,
    desiredLockPeriodDays,
  } = scenario;

  const price = Number(purchasePrice) || 0;
  const downPaymentAmount = Number.isFinite(Number(downPayment))
    ? Number(downPayment)
    : price && Number.isFinite(Number(downPaymentPercent))
      ? (price * Number(downPaymentPercent)) / 100
      : 0;
  const baseLoanAmount = Math.max(price - downPaymentAmount, 0);
  const estimatedLtv = price > 0 ? (baseLoanAmount / price) * 100 : null;

  const occupancyMap = {
    Primary: "PrimaryResidence",
    PrimaryResidence: "PrimaryResidence",
    Second: "SecondHome",
    "Second Home": "SecondHome",
    SecondHome: "SecondHome",
    Investment: "InvestmentProperty",
    InvestmentProperty: "InvestmentProperty",
  };

  const propertyTypeMap = {
    "Single Family": "SingleFamily",
    SingleFamily: "SingleFamily",
    Condo: "Condo",
    Townhome: "Townhouse",
    Townhouse: "Townhouse",
    MultiFamily: "MultiFamily",
    "Multi-unit": "MultiFamily",
  };

  const loanTermsMap = {
    30: "ThirtyYear",
    25: "TwentyFiveYear",
    20: "TwentyYear",
    15: "FifteenYear",
  };

  const amortizationTypes =
    rateStructure && rateStructure.toLowerCase() === "arm" ? ["Arm"] : ["Fixed"];

  const borrowerPaidMI =
    loanProgram === "Conventional" && estimatedLtv && estimatedLtv > 80 ? "Yes" : "No";

  const calculateTotalLoanAmount =
    loanProgram === "FHA" || loanProgram === "VA" || loanProgram === "USDA";

  const vaFirstTimeUse = loanProgram === "VA" ? Boolean(veteranStatus) : undefined;

  return {
    borrowerInformation: {
      citizenship: "USCitizen",
      fico: creditScore || 760,
      firstTimeHomeBuyer: Boolean(firstTimeBuyer),
      vaFirstTimeUse,
      selfEmployed: false,
      monthsReserves: 0,
      waiveEscrows: false,
    },
    propertyInformation: {
      appraisedValue: price,
      salesPrice: price,
      occupancy: occupancyMap[occupancy] || "PrimaryResidence",
      propertyType: propertyTypeMap[propertyType] || "SingleFamily",
      state: stateSelection,
      zipCode: propertyZip || undefined,
      corporateRelocation: false,
      numberOfStories: 1,
      numberOfUnits: propertyUnits || "OneUnit",
    },
    loanInformation: {
      loanPurpose: "Purchase",
      lienType: "First",
      amortizationTypes,
      armFixedTerms:
        amortizationTypes.includes("Arm") && armTerm ? [armTerm] : undefined,
      automatedUnderwritingSystem: "NotSpecified",
      borrowerPaidMI,
      buydown: "None",
      calculateTotalLoanAmount,
      expandedApprovalLevel: "NotApplicable",
      includeLOCompensationInPricing: "YesLenderPaid",
      interestOnly: false,
      loanLevelDebtToIncomeRatio: 36,
      loanTerms: [loanTermsMap[termYears] || "ThirtyYear"],
      loanType: loanProgram || "Conventional",
      prepaymentPenalty: "None",
      representativeFICO: creditScore || 760,
      cashOutAmount: 0,
      baseLoanAmount,
      secondLienAmount: 0,
      helocDrawnAmount: 0,
      helocLineAmount: 0,
      feesIn: "No",
      calculateResubordination: false,
      cashToClose: 0,
      desiredLockPeriod: desiredLockPeriodDays || 0,
      desiredRate: 0,
      desiredPrice: 0,
    },
    context: {
      baseLoanAmount,
      estimatedLtv,
      termYears,
      desiredLockPeriodDays,
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

function normalizeProduct(product, context = {}) {
  const loanAmount = context.loanAmount || 400000;
  const rate = Number(product.rate ?? 0);
  const apr = product.apr ? Number(product.apr) : null;
  const price = Number(product.price ?? 0);
  const termYears = termYearsFromLoanTerm(product.loanTerm) || context.termYears || DEFAULT_TERM_YEARS;
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
    principalAndInterest: product.principalAndInterest
      ? Number(product.principalAndInterest)
      : undefined,
    totalPayment: product.totalPayment ? Number(product.totalPayment) : undefined,
    monthlyPayment: Math.round(monthlyPayment),
    cashToClose: Math.round(loanAmount * (price / 100)),
    termYears,
    lockPeriodDays: product.lockPeriod || context.desiredLockPeriodDays || 30,
  };
}

function pickHeadlineOptions(products, scenario, options = {}) {
  const { prioritizePayment = false, contextLoanAmount, contextTermYears } = options;
  if (!products?.length) return [];

  const normalized = products
    .map((product) =>
      normalizeProduct(product, {
        loanAmount: contextLoanAmount || scenario.baseLoanAmount || scenario.existingLoanBalance,
        termYears: contextTermYears || scenario.termYears,
        desiredLockPeriodDays: scenario.desiredLockPeriodDays,
      })
    )
    .filter((p) => Number.isFinite(p.rate));

  if (!normalized.length) return [];

  if (prioritizePayment) {
    const sorted = [...normalized].sort((a, b) => {
      if (a.monthlyPayment === b.monthlyPayment) {
        if (a.apr !== null && b.apr !== null) {
          return a.apr - b.apr;
        }
        return a.rate - b.rate;
      }
      return a.monthlyPayment - b.monthlyPayment;
    });

    return sorted.slice(0, HEADLINE_OPTIONS.length).map((option, index) => ({
      ...option,
      label: HEADLINE_OPTIONS[index],
      explanation: getExplanation(HEADLINE_OPTIONS[index]),
    }));
  }

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

async function runBestExSearch(scenario, { kind = "refi" } = {}) {
  const mapped =
    kind === "purchase" ? mapPurchaseScenarioToRequest(scenario) : mapRefiScenarioToRequest(scenario);
  const payload =
    mapped?.borrowerInformation && mapped?.propertyInformation && mapped?.loanInformation
      ? {
          borrowerInformation: mapped.borrowerInformation,
          propertyInformation: mapped.propertyInformation,
          loanInformation: mapped.loanInformation,
        }
      : { ...mapped };
  const contextLoanAmount = mapped?.loanInformation?.baseLoanAmount || mapped?.context?.baseLoanAmount;
  const path = `/consumer/api/businesschannels/${OPTIMAL_BLUE_CONFIG.businessChannelId}/originators/${OPTIMAL_BLUE_CONFIG.originatorId}/bestexsearch`;

  try {
    const { data } = await optimalBlueClient.post(path, payload);
    const options = pickHeadlineOptions(data?.products || [], scenario, {
      prioritizePayment: kind === "purchase",
      contextLoanAmount,
      contextTermYears:
        mapped?.loanInformation?.loanTerms?.length === 1
          ? termYearsFromLoanTerm(mapped.loanInformation.loanTerms[0])
          : scenario.termYears,
    });

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

async function getProductDetails(searchId, productId) {
  if (!searchId || typeof productId === "undefined") {
    throw new Error("Missing searchId or productId for Optimal Blue product details");
  }

  const path = `/consumer/api/businesschannels/${OPTIMAL_BLUE_CONFIG.businessChannelId}/originators/${OPTIMAL_BLUE_CONFIG.originatorId}/bestexsearch/${searchId}/products/${productId}`;

  try {
    const { data } = await optimalBlueClient.get(path);
    const quotes = Array.isArray(data?.quotes)
      ? data.quotes.map((quote) => ({
          ...normalizeProduct(quote),
          notesAndAdvisories: quote.notesAndAdvisories || [],
        }))
      : [];

    return {
      ...data,
      searchId,
      productId,
      quotes,
      notesAndAdvisories: data?.notesAndAdvisories || [],
    };
  } catch (error) {
    const status = error.response?.status;
    const apiMessage =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      "Unknown product details error";

    throw new Error(
      `Optimal Blue product details failed${status ? ` (status ${status})` : ""}: ${apiMessage}`
    );
  }
}

module.exports = { runBestExSearch, getProductDetails };
