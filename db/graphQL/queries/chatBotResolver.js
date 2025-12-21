const OpenAI = require("openai");

const chatBotTypeDefs = /* GraphQL */ `
  extend type Query {
    chatBot(input: ChatBotInput!): ChatBotResponse!
  }

  input ChatBotInput {
    prompt: String!
    context: String
  }

  type ChatBotResponse {
    reply: String!
    source: String!
  }
`;

const defaultInstructions =
  "You are a concise mortgage assistant. Explain lender options and trade-offs in plain English, in under 80 words. Avoid marketing fluff and stay factual.";

const openaiApiKey = process.env.OPENAI_API_KEY;
const openaiClient = openaiApiKey ? new OpenAI({ apiKey: openaiApiKey }) : null;

const chatBotResolver = async (_, { input }) => {
  if (!openaiClient) {
    throw new Error("OpenAI API key is not configured.");
  }

  const payloadText = [input.prompt, input.context].filter(Boolean).join("\n\n");

  try {
    const response = await openaiClient.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      instructions: defaultInstructions,
      input: [
        {
          role: "user",
          content: payloadText,
        },
      ],
      max_output_tokens: 320,
      store: false,
    });

    const aiReply = (response.output_text || "").trim();

    return {
      reply: aiReply || "I’m not seeing enough to add more context yet.",
      source: response.model || "openai",
    };
  } catch (error) {
    console.error("chatBotResolver error (OpenAI Responses call failed):", error);
    throw new Error("Unable to fetch AI explanation right now. Please try again.");
  }
};

module.exports = {
  chatBotTypeDefs,
  chatBotResolver,
};
