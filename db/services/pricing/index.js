async function getPricing(scenario) {
  const provider = (process.env.PRICING_PROVIDER || "mock").toLowerCase();

  if (provider === "mock") {
    const { mockPricingResponse } = require("./mockPricing");
    return mockPricingResponse(scenario);
  }

  const { runBestExSearch } = require("./optimalBlueSearch");
  return runBestExSearch(scenario);
}

module.exports = { getPricing };
