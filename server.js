require('dotenv').config();
const express = require('express');
const http = require('http');
const { ApolloServer } = require('apollo-server-express');
const { graphqlUploadExpress } = require('graphql-upload-minimal');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { execute, subscribe } = require('graphql');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const playground = require('graphql-playground-middleware-express').default;
const { typeDefs, resolvers } = require('./graphQL');

const PORT = process.env.PORT || 4000;

async function startServer() {
  const app = express();
  const schema = makeExecutableSchema({ typeDefs, resolvers });

  app.use(graphqlUploadExpress());

  const apolloServer = new ApolloServer({
    schema,
    context: () => ({}),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: '/graphql' });

  app.get(
    '/playground',
    playground({
      endpoint: '/graphql',
      subscriptionEndpoint: '/graphql',
    }),
  );

  const httpServer = http.createServer(app);

  SubscriptionServer.create(
    {
      schema,
      execute,
      subscribe,
      onConnect: () => ({}),
    },
    {
      server: httpServer,
      path: '/graphql',
    },
  );

  httpServer.listen(PORT, () => {
    console.log(`🚀 GraphQL HTTP ready at http://localhost:${PORT}/graphql`);
    console.log(
      `🚀 Subscriptions ready at ws://localhost:${PORT}${apolloServer.graphqlPath}`,
    );
    console.log(
      `🎮 Playground ready at http://localhost:${PORT}/playground`,
    );
  });
}

startServer().catch((error) => {
  console.error('Failed to start the server:', error);
  process.exit(1);
});
