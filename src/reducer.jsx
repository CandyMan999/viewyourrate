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

    // Other cases...
    default:
      return state;
  }
}
