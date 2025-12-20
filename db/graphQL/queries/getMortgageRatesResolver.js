const getMortgageRatesTypeDefs = /* GraphQL */ `
  extend type Query {
    getMortgageRates: MortgageRatesResponse!
  }
`;

const placeholderRates = [
  {
    id: "conv-30",
    purpose: "Purchase",
    product: "30 Year Fixed",
    rate: 6.375,
    apr: 6.489,
    change: -0.035,
    points: 0.689,
  },
  {
    id: "conv-15",
    purpose: "Purchase",
    product: "15 Year Fixed",
    rate: 5.875,
    apr: 5.942,
    change: -0.018,
    points: 0.412,
  },
  {
    id: "jumbo-arm",
    purpose: "Purchase",
    product: "10/6 ARM Jumbo",
    rate: 6.125,
    apr: 6.271,
    change: 0.012,
    points: 0.328,
  },
  {
    id: "fha-30",
    purpose: "Purchase",
    product: "30 Year FHA",
    rate: 6.0,
    apr: 6.214,
    change: -0.045,
    points: 0.235,
  },
];

const getMortgageRatesResolver = () => ({
  lastUpdated: new Date().toISOString(),
  rates: placeholderRates,
  source: "placeholder",
});

module.exports = {
  getMortgageRatesTypeDefs,
  getMortgageRatesResolver,
};

