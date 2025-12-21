const { optimalBlueClient } = require("../../lib/optimalBlueClient");

async function runBestExSearch(payload) {
  const { data } = await optimalBlueClient.post("/bestexsearch", payload);
  return data;
}

module.exports = { runBestExSearch };
