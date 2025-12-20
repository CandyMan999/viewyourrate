const { pubsub, TOPICS } = require("../utils");

const tickTypeDefs = /* GraphQL */ `
  extend type Subscription {
    tick: String!
  }
`;

const tickResolver = {
  subscribe: () => pubsub.asyncIterator([TOPICS.TICK]),
  resolve: (payload) => payload.tick,
};

module.exports = {
  tickTypeDefs,
  tickResolver,
};

