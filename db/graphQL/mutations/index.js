const {
  singleUploadTypeDefs,
  singleUploadResolver,
} = require("./singleUploadResolver");
const {
  parseLoanEstimateTypeDefs,
  parseLoanEstimateResolver,
} = require("./parseLoanEstimateResolver");

const mutationTypeDefs = [
  singleUploadTypeDefs,
  parseLoanEstimateTypeDefs,
].filter(Boolean);

const mutationResolvers = {
  Mutation: {
    singleUpload: singleUploadResolver,
    parseLoanEstimate: parseLoanEstimateResolver,
  },
};

module.exports = {
  mutationTypeDefs,
  mutationResolvers,
  // Export individual resolvers for direct import
  singleUploadResolver,
  parseLoanEstimateResolver,
};
