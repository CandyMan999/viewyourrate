const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();
app.use(cors());

async function fetchMortgageRates() {
  const url = "https://www.mortgagenewsdaily.com/mortgage-rates";
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  const rates = [];

  $("td.rate-product").each((_, element) => {
    const rateType = $(element).find("a").text().trim();
    const rate = $(element).next("td.rate").text().trim();
    const points = $(element).next("td.rate").next("td").text().trim();
    const change = $(element)
      .next("td.rate")
      .next("td")
      .next("td.change")
      .text()
      .trim();

    rates.push({ rateType, rate, points, change });
  });

  return rates;
}

app.get("/api/mortgage-rates", async (req, res) => {
  try {
    const rates = await fetchMortgageRates();
    res.json({ date: new Date(), rates, shit: "shit" });
  } catch (error) {
    console.error("Scraping error:", error.message);
    res.status(500).json({ error: "Failed to fetch rates" });
  }
});

app.listen(4000, () => {
  console.log("Mortgage Rates API server is running on port 4000");
});
