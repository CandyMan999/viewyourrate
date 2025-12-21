import { gql } from "../../client.js";

export const GET_REFI_PRICING_QUERY = gql`
  query GetRefiPricing($input: PricingScenarioInput!) {
    getRefiPricing(input: $input) {
      provider
      generatedAt
      searchId
      env
      options {
        id
        label
        rate
        apr
        points
        monthlyPayment
        cashToClose
        termYears
        lockPeriodDays
        productName
        explanation
      }
    }
  }
`;

export default GET_REFI_PRICING_QUERY;
