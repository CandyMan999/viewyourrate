const { getPricing } = require("../../services/pricing");
const { getProductDetails } = require("../../services/pricing");
const { OPTIMAL_BLUE_CONFIG } = require("../../config/optimalBlue");

if (
  process.env.NODE_ENV !== "production" &&
  OPTIMAL_BLUE_CONFIG.env === "production"
) {
  throw new Error(
    "🚫 Optimal Blue PROD calls blocked in non-production environment"
  );
}

const getRefiPricingTypeDefs = /* GraphQL */ `
  input PricingScenarioInput {
    quoteType: String
    maxMonthlyPayment: Float
    stateSelection: String
    existingLoanBalance: Float
    estimatedHomeValue: Float
    creditScore: Int
    cashOutAmount: Float
    occupancy: String
    propertyType: String
    termYears: Int
    timestamp: String
  }

  input PurchaseScenarioInput {
    purchasePrice: Float!
    downPayment: Float
    downPaymentPercent: Float
    creditScore: Int!
    stateSelection: String!
    propertyZip: String
    occupancy: String!
    propertyType: String!
    propertyUnits: String
    loanProgram: String
    termYears: Int
    rateStructure: String
    armTerm: String
    firstTimeBuyer: Boolean
    veteranStatus: Boolean
    desiredLockPeriodDays: Int
    timestamp: String!
    quoteType: String
  }

  type PricingOption {
    id: ID!
    label: String!
    rate: Float!
    apr: Float
    points: Float
    monthlyPayment: Float
    cashToClose: Float
    termYears: Int
    lockPeriodDays: Int
    productName: String
    explanation: String
  }

  type PricingResponse {
    provider: String!
    generatedAt: String!
    options: [PricingOption!]!
    searchId: String
    env: String
  }

  type ConsumerProductQuote {
    productId: Int
    searchId: String
    productName: String
    rate: Float
    apr: Float
    points: Float
    monthlyPayment: Float
    principalAndInterest: Float
    totalPayment: Float
    lockPeriodDays: Int
    notesAndAdvisories: [String]
  }

  extend type Query {
    getRefiPricing(input: PricingScenarioInput!): PricingResponse!
    getPurchasePricing(input: PurchaseScenarioInput!): PricingResponse!
    getProductDetails(searchId: String!, productId: Int!): ConsumerProductQuote
  }
`;

const getRefiPricingResolver = async (_, { input }) => {
  try {
    const pricing = await getPricing(input);

    return {
      provider: pricing.provider || process.env.PRICING_PROVIDER || "mock",
      generatedAt: pricing.generatedAt || new Date().toISOString(),
      options: pricing.options || [],
      searchId: pricing.searchId || null,
      env: pricing.env || OPTIMAL_BLUE_CONFIG.env,
    };
  } catch (error) {
    console.error("getRefiPricing error:", error);
    throw new Error(
      error?.message || "We could not load pricing right now. Please try again."
    );
  }
};

const getPurchasePricingResolver = async (_, { input }) => {
  try {
    if (!input?.purchasePrice || !input?.stateSelection) {
      throw new Error("Purchase price and state are required for pricing.");
    }

    const scenario = { ...input, quoteType: "Purchase" };
    const pricing = await getPricing(scenario, { kind: "purchase" });

    return {
      provider: pricing.provider || process.env.PRICING_PROVIDER || "mock",
      generatedAt: pricing.generatedAt || new Date().toISOString(),
      options: pricing.options || [],
      searchId: pricing.searchId || null,
      env: pricing.env || OPTIMAL_BLUE_CONFIG.env,
    };
  } catch (error) {
    console.error("getPurchasePricing error:", error);
    throw new Error(
      error?.message || "We could not load pricing right now. Please try again."
    );
  }
};

const getProductDetailsResolver = async (_, { searchId, productId }) => {
  try {
    const details = await getProductDetails(searchId, productId);
    if (!details) return null;

    const firstQuote = Array.isArray(details.quotes) ? details.quotes[0] : null;
    if (firstQuote) {
      return {
        ...firstQuote,
        searchId,
        productId,
        notesAndAdvisories: firstQuote.notesAndAdvisories || details.notesAndAdvisories || [],
      };
    }

    return {
      searchId,
      productId,
      notesAndAdvisories: details.notesAndAdvisories || [],
    };
  } catch (error) {
    console.error("getProductDetails error:", error);
    throw new Error(error?.message || "Unable to load product details.");
  }
};

module.exports = {
  getRefiPricingTypeDefs,
  getRefiPricingResolver,
  getPurchasePricingResolver,
  getProductDetailsResolver,
};
