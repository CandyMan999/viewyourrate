import { gql } from "graphql-request";

export const CHAT_BOT_QUERY = gql`
  query ChatBot($input: ChatBotInput!) {
    chatBot(input: $input) {
      reply
      source
    }
  }
`;

export default CHAT_BOT_QUERY;
