const { pingTypeDefs, pingResolver } = require("./pingResolver");
const {
  getMortgageRatesTypeDefs,
  getMortgageRatesResolver,
} = require("./getMortgageRatesResolver");
const { chatBotTypeDefs, chatBotResolver } = require("./chatBotResolver");
const {
  getRefiPricingTypeDefs,
  getRefiPricingResolver,
  getPurchasePricingResolver,
  getProductDetailsResolver,
} = require("./getRefiPricingResolver");

const queryTypeDefs = [
  pingTypeDefs,
  getMortgageRatesTypeDefs,
  chatBotTypeDefs,
  getRefiPricingTypeDefs,
].filter(Boolean);

const queryResolvers = {
  Query: {
    ping: pingResolver,
    getMortgageRates: getMortgageRatesResolver,
    chatBot: chatBotResolver,
    getRefiPricing: getRefiPricingResolver,
    getPurchasePricing: getPurchasePricingResolver,
    getProductDetails: getProductDetailsResolver,
  },
};

module.exports = {
  queryTypeDefs,
  queryResolvers,
  // Export individual resolvers for direct import
  pingResolver,
  getMortgageRatesResolver,
  chatBotResolver,
  getRefiPricingResolver,
};
