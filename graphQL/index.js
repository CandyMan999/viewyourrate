const { GraphQLUpload } = require('graphql-upload-minimal');
const rootDefs = require('./rootDefs');
const { queryTypeDefs, queryResolvers } = require('./queries');
const { mutationTypeDefs, mutationResolvers } = require('./mutations');
const { subscriptionTypeDefs, subscriptionResolvers } = require('./subscriptions');
const { pubsub, TOPICS } = require('./utils');

let tickCounter = 0;
setInterval(() => {
  tickCounter += 1;
  pubsub.publish(TOPICS.TICK, { tick: String(tickCounter) });
}, 1000);

const typeDefs = [
  rootDefs,
  queryTypeDefs,
  mutationTypeDefs,
  subscriptionTypeDefs,
].filter(Boolean);

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    ...queryResolvers.Query,
  },
  Mutation: {
    ...mutationResolvers.Mutation,
  },
  Subscription: {
    ...subscriptionResolvers.Subscription,
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
