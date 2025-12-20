const queryTypeDefs = /* GraphQL */ `
  extend type Query {
    ping: String!
  }
`;

const queryResolvers = {
  Query: {
    ping: () => 'pong',
  },
};

module.exports = {
  queryTypeDefs,
  queryResolvers,
};
