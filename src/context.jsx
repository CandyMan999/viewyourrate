import { createContext } from "react";

const Context = createContext({
  currentUser: {
    username: null,
  },
  activeComponent: 0,
  isNavDrawerOpen: false,

  showPricingWidget: false, // New state to handle the Pricing Widget visibility
});

export default Context;
