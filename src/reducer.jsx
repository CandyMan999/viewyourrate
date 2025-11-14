export default function reducer(state, { type, payload }) {
  switch (type) {
    case "SHOW_PRICING_WIDGET":
      return {
        ...state,
        showPricingWidget: payload,
      };
    case "SHOW_MORTGAGE_CALCULATOR":
      return {
        ...state,
        showMortgageCalculator: payload,
      };
    case "SHOW_AFFORDABILTY_CALCULATOR":
      return {
        ...state,
        showAffordabilityCalculator: payload,
      };
    case "LOGIN_USER":
      return {
        ...state,
        currentUser: payload,
      };
    case "SET_ACTIVE_COMPONENT":
      return { ...state, activeComponent: payload };
    case "TOGGLE_NAV_DRAWER":
      return { ...state, isNavDrawerOpen: !state.isNavDrawerOpen };
    case "SHOW_APPLY_NOW_WIDGET":
      return {
        ...state,
        showApplyNowWidget: payload,
      };
    case "SET_MORTGAGE_RATES":
      return { ...state, mortgageRates: payload };
    case "SET_MORTGAGE_SCENARIO":
      return { ...state, mortgageScenario: payload };
    case "SHOW_MORTGAGE_RESULTS_PAGE":
      return { ...state, showMortgageResultsPage: payload };

    // Other cases...
    default:
      return state;
  }
}
