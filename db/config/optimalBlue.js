const {
  OB_USERNAME,
  OB_PASSWORD,
  OB_SANDBOX_BASE_URL,
  OB_PROD_BASE_URL,
  OB_ENV,
  PRICING_PROVIDER,
} = process.env;

const env = OB_ENV === "production" ? "production" : "sandbox";
const provider = (PRICING_PROVIDER || "mock").toLowerCase();
const isMockProvider = provider === "mock";
const baseUrl = env === "production" ? OB_PROD_BASE_URL : OB_SANDBOX_BASE_URL;
const hasCredentials = Boolean(OB_USERNAME && OB_PASSWORD && baseUrl);

if (!isMockProvider && !hasCredentials) {
  throw new Error(
    "Missing Optimal Blue credentials or base URL. Ensure OB_USERNAME, OB_PASSWORD, and the correct OB_*_BASE_URL are set."
  );
}

const OPTIMAL_BLUE_CONFIG = {
  baseUrl: hasCredentials ? baseUrl : null,
  authHeader: hasCredentials
    ? "Basic " + Buffer.from(`${OB_USERNAME}:${OB_PASSWORD}`).toString("base64")
    : null,
  env,
  isConfigured: hasCredentials,
};

module.exports = {
  OPTIMAL_BLUE_CONFIG,
};
