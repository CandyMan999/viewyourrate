import { gql } from "graphql-request";

export const GET_MORTGAGE_RATES_QUERY = gql`
  query GetMortgageRates {
    getMortgageRates {
      lastUpdated
      source
      rates {
        id
        purpose
        product
        rate
        apr
        change
        points
      }
    }
  }
`;

export default GET_MORTGAGE_RATES_QUERY;
