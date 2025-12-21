const axios = require("axios");
const { OPTIMAL_BLUE_CONFIG } = require("../config/optimalBlue");

let cachedClient;

function getOptimalBlueClient() {
  if (!OPTIMAL_BLUE_CONFIG.isConfigured) {
    throw new Error(
      "Optimal Blue client is not configured. Check OB_USERNAME, OB_PASSWORD, and base URLs."
    );
  }

  if (!cachedClient) {
    cachedClient = axios.create({
      baseURL: OPTIMAL_BLUE_CONFIG.baseUrl,
      headers: {
        Authorization: OPTIMAL_BLUE_CONFIG.authHeader,
        "Content-Type": "application/json",
        "api-version": "4",
        "Cache-Control": "no-cache",
      },
      timeout: 20000,
    });

    cachedClient.interceptors.request.use((config) => {
      if (process.env.NODE_ENV !== "production") {
        console.log(
          `[OB:${OPTIMAL_BLUE_CONFIG.env}]`,
          config.method?.toUpperCase(),
          config.url
        );
      }
      return config;
    });
  }

  return cachedClient;
}

module.exports = { getOptimalBlueClient };
