import { gql } from "../../client.js";

export const GET_PURCHASE_PRICING_QUERY = gql`
  query GetPurchasePricing($input: PurchaseScenarioInput!) {
    getPurchasePricing(input: $input) {
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

export default GET_PURCHASE_PRICING_QUERY;
