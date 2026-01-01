import { gql } from "graphql-request";

export const TICK_SUBSCRIPTION = gql`
  subscription Tick {
    tick
  }
`;

export default TICK_SUBSCRIPTION;
