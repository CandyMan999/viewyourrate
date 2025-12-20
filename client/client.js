const { GraphQLClient, gql } = require('graphql-request');
const { extractFiles } = require('extract-files');
const FormData = require('form-data');
const { SubscriptionClient } = require('subscriptions-transport-ws');
const WebSocket = require('ws');
const { GRAPHQL_HTTP_URI, GRAPHQL_WS_URI } = require('./config/endpoint');

const graphQLClient = new GraphQLClient(GRAPHQL_HTTP_URI);
const subscriptionClient = new SubscriptionClient(
  GRAPHQL_WS_URI,
  { reconnect: true },
  WebSocket,
);

async function request(query, variables = {}) {
  const operations = { query, variables };
  const { clone, files } = extractFiles(operations);

  if (files.size === 0) {
    return graphQLClient.request(query, variables);
  }

  const form = new FormData();
  form.append('operations', JSON.stringify(clone));

  const map = {};
  let fileIndex = 0;
  files.forEach((paths) => {
    map[fileIndex] = paths;
    fileIndex += 1;
  });
  form.append('map', JSON.stringify(map));

  fileIndex = 0;
  files.forEach((paths, file) => {
    const filename = file?.name || file?.filename || `file-${fileIndex}`;
    form.append(String(fileIndex), file, filename);
    fileIndex += 1;
  });

  const response = await fetch(GRAPHQL_HTTP_URI, {
    method: 'POST',
    body: form,
    headers: form.getHeaders ? form.getHeaders() : undefined,
  });

  const result = await response.json();
  if (result.errors) {
    const message = result.errors.map((error) => error.message).join('; ');
    throw new Error(message);
  }

  return result.data;
}

function subscribe({ query, variables = {}, onNext, onError, onComplete }) {
  const observable = subscriptionClient.request({ query, variables });
  const subscription = observable.subscribe({
    next: (value) => {
      if (typeof onNext === 'function') onNext(value);
    },
    error: (error) => {
      if (typeof onError === 'function') onError(error);
    },
    complete: () => {
      if (typeof onComplete === 'function') onComplete();
    },
  });

  return () => subscription.unsubscribe();
}

if (require.main === module) {
  console.log('Client ready. Import { request, subscribe, gql } to interact with the API.');
  console.log(`HTTP endpoint: ${GRAPHQL_HTTP_URI}`);
  console.log(`WebSocket endpoint: ${GRAPHQL_WS_URI}`);
}

module.exports = {
  request,
  subscribe,
  gql,
};
