import { gql } from "graphql-request";

export const PING_QUERY = gql`
  query Ping {
    ping
  }
`;

export default PING_QUERY;
