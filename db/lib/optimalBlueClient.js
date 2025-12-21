const axios = require("axios");
const { getOBAccessToken } = require("./optimalBlueToken");
const { OPTIMAL_BLUE_CONFIG } = require("../config/optimalBlue");

const optimalBlueClient = axios.create({
  baseURL: OPTIMAL_BLUE_CONFIG.baseUrl,
  timeout: 20000,
});

optimalBlueClient.interceptors.request.use(async (config) => {
  const token = await getOBAccessToken();

  config.headers.Authorization = `Bearer ${token}`;
  config.headers["api-version"] = "4";
  config.headers["Cache-Control"] = "no-cache";

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
