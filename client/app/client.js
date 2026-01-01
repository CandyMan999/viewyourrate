import { GraphQLClient, gql } from "graphql-request";

// For browser environment, we'll use fetch for file uploads
const GRAPHQL_HTTP_URI =
  process.env.NEXT_PUBLIC_GRAPHQL_HTTP_URI || "http://localhost:4000/graphql";
const GRAPHQL_WS_URI =
  process.env.NEXT_PUBLIC_GRAPHQL_WS_URI || "ws://localhost:4000/graphql";

const graphQLClient = new GraphQLClient(GRAPHQL_HTTP_URI);

// Lazy-load extract-files ESM entrypoint
let _extractFiles;
async function getExtractFiles() {
  if (_extractFiles) return _extractFiles;
  _extractFiles = (await import("extract-files/extractFiles.mjs")).default;
  return _extractFiles;
}

// Function to determine if a value is a file (extractable)
function isExtractable(value) {
  return (
    value instanceof File ||
    value instanceof Blob ||
    (typeof FileList !== "undefined" && value instanceof FileList)
  );
}

async function request(query, variables = {}) {
  const operations = { query, variables };

  const extractFiles = await getExtractFiles();
  const { clone, files } = extractFiles(operations, isExtractable);

  if (files.size === 0) {
    return graphQLClient.request(query, variables);
  }

  // Handle file uploads using multipart/form-data
  const form = new FormData();
  form.append("operations", JSON.stringify(clone));

  const map = {};
  let fileIndex = 0;
  files.forEach((paths) => {
    map[fileIndex] = paths;
    fileIndex += 1;
  });
  form.append("map", JSON.stringify(map));

  fileIndex = 0;
  files.forEach((paths, file) => {
    const filename = file?.name || file?.filename || `file-${fileIndex}`;
    form.append(String(fileIndex), file, filename);
    fileIndex += 1;
  });

  const response = await fetch(GRAPHQL_HTTP_URI, {
    method: "POST",
    body: form,
  });

  const result = await response.json();
  if (result.errors) {
    const message = result.errors.map((error) => error.message).join("; ");
    throw new Error(message);
  }

  return result.data;
}

// WebSocket subscriptions (for browser, you might want to use a different library)
// For now, we'll export a placeholder
function subscribe({ query, variables = {}, onNext, onError, onComplete }) {
  // WebSocket subscriptions in browser would require a different setup
  // This is a placeholder - you may want to use apollo-client or another library
  console.warn("WebSocket subscriptions not yet implemented for browser");
  return () => {};
}

export { request, subscribe, gql };
export default { request, subscribe, gql };
