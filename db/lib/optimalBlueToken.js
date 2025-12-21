const axios = require("axios");

let cachedToken = null;
let tokenExpiresAt = 0;

async function getOBAccessToken() {
  const now = Date.now();

  if (cachedToken && now < tokenExpiresAt) {
    return cachedToken;
  }

  const response = await axios.post(
    "https://marketplaceauth.optimalblue.com/oauth2/token",
    new URLSearchParams({
      grant_type: "client_credentials",
      client_id: process.env.OB_CLIENT_ID,
      client_secret: process.env.OB_CLIENT_SECRET,
      scope: process.env.OB_SCOPE,
    }).toString(),
    {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }
  );

  cachedToken = response.data.access_token;
  tokenExpiresAt = now + (response.data.expires_in - 60) * 1000;

  return cachedToken;
}

module.exports = { getOBAccessToken };
