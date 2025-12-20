const pingTypeDefs = /* GraphQL */ `
  extend type Query {
    ping: String!
  }
`;

const pingResolver = () => "pong";

module.exports = {
  pingTypeDefs,
  pingResolver,
};

