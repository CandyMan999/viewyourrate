const GRAPHQL_HTTP_URI =
  process.env.GRAPHQL_HTTP_URI || 'http://localhost:4000/graphql';
const GRAPHQL_WS_URI = process.env.GRAPHQL_WS_URI || 'ws://localhost:4000/graphql';

module.exports = {
  GRAPHQL_HTTP_URI,
  GRAPHQL_WS_URI,
};
