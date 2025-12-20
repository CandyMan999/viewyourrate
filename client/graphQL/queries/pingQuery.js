import { gql } from "../../client.js";

export const PING_QUERY = gql`
  query Ping {
    ping
  }
`;

export default PING_QUERY;
