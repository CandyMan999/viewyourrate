import { gql } from "../../client.js";

export const PARSE_LOAN_ESTIMATE_MUTATION = gql`
  mutation ParseLoanEstimate($file: Upload!) {
    parseLoanEstimate(file: $file) {
      parsedData {
        loanType
        fixedOrArm
        productDisplayName
        loanAmount
        loanTermYears
        interestRate
        aprPercent
        monthlyPaymentInitial
        isInterestOnly
        interestOnlyMonths
        armStructure
        firstAdjustmentMonth
        adjustmentFrequencyMonths
        index
        marginPercent
        initialInterestCapPercent
        periodicCapPercent
        lifetimeCapPercent
        maxInterestRatePossible
        maxPaymentPossible
        state
        zipCode
        rateLock
      }
    }
  }
`;

export default PARSE_LOAN_ESTIMATE_MUTATION;
