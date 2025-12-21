const { pingTypeDefs, pingResolver } = require("./pingResolver");
const {
  getMortgageRatesTypeDefs,
  getMortgageRatesResolver,
} = require("./getMortgageRatesResolver");
const { chatBotTypeDefs, chatBotResolver } = require("./chatBotResolver");

const queryTypeDefs = [pingTypeDefs, getMortgageRatesTypeDefs, chatBotTypeDefs].filter(
  Boolean
);

const queryResolvers = {
  Query: {
    ping: pingResolver,
    getMortgageRates: getMortgageRatesResolver,
    chatBot: chatBotResolver,
  },
};

module.exports = {
  queryTypeDefs,
  queryResolvers,
  // Export individual resolvers for direct import
  pingResolver,
  getMortgageRatesResolver,
  chatBotResolver,
};
