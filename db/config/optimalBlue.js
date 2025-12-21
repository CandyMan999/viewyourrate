const {
  OB_USERNAME,
  OB_PASSWORD,
  OB_SANDBOX_BASE_URL,
  OB_PROD_BASE_URL,
  OB_ENV,
} = process.env;

if (!OB_USERNAME || !OB_PASSWORD) {
  throw new Error("Missing Optimal Blue credentials");
}

const isProduction = OB_ENV === "production";

module.exports = {
  OPTIMAL_BLUE_CONFIG: {
    baseUrl: isProduction ? OB_PROD_BASE_URL : OB_SANDBOX_BASE_URL,
    authHeader:
      "Basic " +
      Buffer.from(`${OB_USERNAME}:${OB_PASSWORD}`).toString("base64"),
    env: isProduction ? "production" : "sandbox",
  },
};
