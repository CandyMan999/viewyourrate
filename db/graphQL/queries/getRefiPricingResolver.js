const { getPricing } = require("../../services/pricing");
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

  extend type Query {
    getRefiPricing(input: PricingScenarioInput!): PricingResponse!
  }
`;

const getRefiPricingResolver = async (_, { input }) => {
  const pricing = await getPricing(input);

  return {
    provider: pricing.provider || process.env.PRICING_PROVIDER || "mock",
    generatedAt: pricing.generatedAt || new Date().toISOString(),
    options: pricing.options || [],
    searchId: pricing.searchId || null,
    env: pricing.env || OPTIMAL_BLUE_CONFIG.env,
  };
};

module.exports = {
  getRefiPricingTypeDefs,
  getRefiPricingResolver,
};
