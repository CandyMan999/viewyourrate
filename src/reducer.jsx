export default function reducer(state, { type, payload }) {
  switch (type) {
    case "SHOW_PRICING_WIDGET":
      return {
        ...state,
        showPricingWidget: payload,
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

    // Other cases... bullshit
    default:
      return state;
  }
}
