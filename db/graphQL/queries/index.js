const { pingTypeDefs, pingResolver } = require("./pingResolver");
const {
  getMortgageRatesTypeDefs,
  getMortgageRatesResolver,
} = require("./getMortgageRatesResolver");

const queryTypeDefs = [pingTypeDefs, getMortgageRatesTypeDefs].filter(Boolean);

const queryResolvers = {
  Query: {
    ping: pingResolver,
    getMortgageRates: getMortgageRatesResolver,
  },
};

module.exports = {
  queryTypeDefs,
  queryResolvers,
  // Export individual resolvers for direct import
  pingResolver,
  getMortgageRatesResolver,
};
