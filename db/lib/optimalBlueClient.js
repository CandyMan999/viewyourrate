const axios = require("axios");
const { OPTIMAL_BLUE_CONFIG } = require("../config/optimalBlue");

const optimalBlueClient = axios.create({
  baseURL: OPTIMAL_BLUE_CONFIG.baseUrl,
  headers: {
    Authorization: OPTIMAL_BLUE_CONFIG.authHeader,
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

optimalBlueClient.interceptors.request.use((config) => {
  if (process.env.NODE_ENV !== "production") {
    console.log(
      `[OB:${OPTIMAL_BLUE_CONFIG.env}]`,
      config.method?.toUpperCase(),
      config.url
    );
  }
  return config;
});

module.exports = { optimalBlueClient };
