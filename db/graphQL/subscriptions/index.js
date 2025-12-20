const { tickTypeDefs, tickResolver } = require("./tickResolver");

const subscriptionTypeDefs = [tickTypeDefs].filter(Boolean);

const subscriptionResolvers = {
  Subscription: {
    tick: tickResolver,
  },
};

module.exports = {
  subscriptionTypeDefs,
  subscriptionResolvers,
  // Export individual resolvers for direct import
  tickResolver,
};
