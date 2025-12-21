const {
  OB_ENV,
  PRICING_PROVIDER,
  OB_BUSINESS_CHANNEL_ID,
  OB_ORIGINATOR_ID,
} = process.env;

const env = OB_ENV === "production" ? "production" : "sandbox";
const provider = (PRICING_PROVIDER || "mock").toLowerCase();
const isMockProvider = provider === "mock";
const hasMarketplaceConfig = Boolean(
  OB_BUSINESS_CHANNEL_ID && OB_ORIGINATOR_ID && process.env.OB_CLIENT_ID
);

if (!isMockProvider && !hasMarketplaceConfig) {
  throw new Error(
    "Missing Optimal Blue Marketplace configuration. Ensure OB_CLIENT_ID/SECRET/SCOPE and OB_BUSINESS_CHANNEL_ID/OB_ORIGINATOR_ID are set."
  );
}

const OPTIMAL_BLUE_CONFIG = {
  baseUrl: "https://marketplace.optimalblue.com",
  env,
  isConfigured: hasMarketplaceConfig,
  businessChannelId: OB_BUSINESS_CHANNEL_ID,
  originatorId: OB_ORIGINATOR_ID,
};

module.exports = {
  OPTIMAL_BLUE_CONFIG,
};
