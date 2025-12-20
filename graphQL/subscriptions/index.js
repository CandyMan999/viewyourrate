const { pubsub, TOPICS } = require('../utils');

const subscriptionTypeDefs = /* GraphQL */ `
  extend type Subscription {
    tick: String!
  }
`;

const subscriptionResolvers = {
  Subscription: {
    tick: {
      subscribe: () => pubsub.asyncIterator([TOPICS.TICK]),
      resolve: (payload) => payload.tick,
    },
  },
};

module.exports = {
  subscriptionTypeDefs,
  subscriptionResolvers,
};
