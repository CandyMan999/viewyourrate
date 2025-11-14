import { createContext } from "react";

const Context = createContext({
  currentUser: {
    username: null,
  },
  activeComponent: 0,
  isNavDrawerOpen: false,
  showMortgageCalculator: false,
  showAffordabilityCalculator: false,
  showPricingWidget: false,
  showApplyNowWidget: false,
  mortgageRates: [],
  showMortgageResultsPage: false,
  mortgageScenario: null,
});

export default Context;
