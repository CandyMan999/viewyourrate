import { gql } from "../../client.js";

export const TICK_SUBSCRIPTION = gql`
  subscription Tick {
    tick
  }
`;

export default TICK_SUBSCRIPTION;

