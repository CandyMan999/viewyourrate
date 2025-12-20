const { finished } = require("stream/promises");

const singleUploadTypeDefs = /* GraphQL */ `
  extend type Mutation {
    singleUpload(file: Upload!): Boolean!
  }
`;

const singleUploadResolver = async (_, { file }) => {
  const { createReadStream } = await file;
  const stream = createReadStream();
  stream.on("error", (error) => {
    throw error;
  });
  stream.resume();
  await finished(stream);
  return true;
};

module.exports = {
  singleUploadTypeDefs,
  singleUploadResolver,
};

