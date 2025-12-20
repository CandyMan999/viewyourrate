const { PubSub } = require('graphql-subscriptions');

const TOPICS = {
  TICK: 'TICK',
};

const pubsub = new PubSub();

module.exports = {
  TOPICS,
  pubsub,
};
