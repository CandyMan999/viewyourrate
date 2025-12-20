const rootDefs = /* GraphQL */ `
  scalar Upload

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  type Subscription {
    _empty: String
  }

  type MortgageRate {
    id: String!
    purpose: String!
    product: String!
    rate: Float!
    apr: Float!
    change: Float!
    points: Float!
  }

  type MortgageRatesResponse {
    lastUpdated: String!
    rates: [MortgageRate!]!
    source: String!
  }

  type LoanEstimateParsedData {
    loanType: String
    fixedOrArm: String
    productDisplayName: String
    loanAmount: Float
    loanTermYears: Int
    interestRate: Float
    aprPercent: Float
    monthlyPaymentInitial: Float
    isInterestOnly: Boolean
    interestOnlyMonths: Int
    armStructure: String
    firstAdjustmentMonth: Int
    adjustmentFrequencyMonths: Int
    index: String
    marginPercent: Float
    initialInterestCapPercent: Float
    periodicCapPercent: Float
    lifetimeCapPercent: Float
    maxInterestRatePossible: Float
    maxPaymentPossible: Float
    state: String
    zipCode: String
    rateLock: Boolean
  }

  type ParseLoanEstimateResponse {
    parsedData: LoanEstimateParsedData!
  }
`;

module.exports = rootDefs;
