const { runBestExSearch } = require("./optimalBlueSearch");
const { mockPricingResponse } = require("./mockPricing");

async function getPricing(scenario) {
  if (process.env.PRICING_PROVIDER === "mock") {
    return mockPricingResponse(scenario);
  }

  return runBestExSearch(scenario);
}

module.exports = { getPricing };
