const { finished } = require('stream/promises');

const mutationTypeDefs = /* GraphQL */ `
  extend type Mutation {
    echo(message: String!): String!
    singleUpload(file: Upload!): Boolean!
  }
`;

const mutationResolvers = {
  Mutation: {
    echo: (_, { message }) => message,
    singleUpload: async (_, { file }) => {
      const { createReadStream } = await file;
      const stream = createReadStream();
      stream.on('error', (error) => {
        throw error;
      });
      stream.resume();
      await finished(stream);
      return true;
    },
  },
};

module.exports = {
  mutationTypeDefs,
  mutationResolvers,
};
