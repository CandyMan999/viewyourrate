async function getPricing(scenario, { kind = "refi" } = {}) {
  const provider = (process.env.PRICING_PROVIDER || "mock").toLowerCase();

  if (provider === "mock") {
    const { mockPricingResponse } = require("./mockPricing");
    return mockPricingResponse(scenario, { kind });
  }

  const { runBestExSearch } = require("./optimalBlueSearch");
  return runBestExSearch(scenario, { kind });
}

async function getProductDetails(searchId, productId) {
  const provider = (process.env.PRICING_PROVIDER || "mock").toLowerCase();

  if (provider === "mock") {
    return null;
  }

  const { getProductDetails: fetchDetails } = require("./optimalBlueSearch");
  return fetchDetails(searchId, productId);
}

module.exports = { getPricing, getProductDetails };
