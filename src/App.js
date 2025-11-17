import React, {
  useContext,
  useReducer,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Navbar,
  HeroSection,
  RatesSection,
  PricingWidget,
  RatesSectionMobile,
  NavDrawer,
  Footer,
  Calculator,
  ProductsFilterWidget,
  CompareProducts,
  LoanEstimateUpload,
  Component3,
  Header,
  MortgageServices,
  RateDropNotification,
  AffordabilityCalc,
  MortgageCalc,
  MortgageOptionsPage,
} from "./components";
import Context from "./context";
import reducer from "./reducer";
import { isMobile } from "react-device-detect";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import background from "./pics/background.jpg";
import { FiX } from "react-icons/fi";
import { dummyRates } from "./data/dummyRates";

const componentsList = [
  "HeroSection",
  "Calculator",
  "ProductsFilterWidget",
  "LoanEstimateUpload",
  "Component3",
];
const ApplyNowWidget = ({ isVisible, onClose }) => {
  const variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      y: "100%",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  const overlay = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
  };

  const widget = {
    backgroundColor: "#fff",
    width: "95%",
    maxWidth: "1100px",
    height: "90vh",
    borderRadius: "12px",
    overflow: "hidden",
    position: "relative",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
  };

  const closeStyle = {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
    fontSize: "1.5rem",
    color: "#fff",
    cursor: "pointer",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "6px",
    borderRadius: "50%",
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          style={overlay}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
        >
          <FiX style={closeStyle} onClick={onClose} />
          <motion.div style={widget}>
            <iframe
              src="https://viewyourrate.my1003app.com?time=1743826121808"
              style={{ width: "100%", height: "100%", border: "none" }}
              title="Apply Now"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const navItems = [
  { name: "Home", index: 0, component: "HeroSection" },
  { name: "Calculators", index: 1, component: "Calculator" },
  { name: "Compare Products", index: 2, component: "ProductsFilterWidget" },
  {
    name: "Loan Estimate Upload",
    index: 3,
    component: "LoanEstimateUpload",
  },
  { name: "Component3", index: 4, component: "Component3" },
  { name: "Contact", index: 5, component: "Contact" },
];

const App = () => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showHeader, setShowHeader] = useState(true);
  const [showRatesSection, setShowRatesSection] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [direction, setDirection] = useState(1);
  const isShowingProductComparison = state.showProductComparison;
  const isActiveProductsFilter =
    componentsList[state.activeComponent] === "ProductsFilterWidget";
  const [activePage, setActivePage] = useState("home");
  const [activeScenario, setActiveScenario] = useState(null);

  const footerRef = useRef(null);
  const topRef = useRef(null);
  const navbarRef = useRef(null);

  const appStyles = {
    fontFamily: "Arial, sans-serif",
    position: "relative",
  };

  useEffect(() => {
    dispatch({ type: "SET_MORTGAGE_RATES", payload: dummyRates });
  }, [dispatch]);

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (index) => {
    setActivePage("home");
    dispatch({ type: "SET_ACTIVE_COMPONENT", payload: index });
    if (navItems[index].name === "Contact") {
      scrollToFooter();
    } else {
      scrollToTop();
    }
    if (navItems[index].name !== "Compare Products") {
      dispatch({ type: "TOGGLE_PRODUCT_COMPARISON", payload: false });
    }
  };

  const toggleDrawer = () => {
    dispatch({ type: "TOGGLE_NAV_DRAWER" });
  };

  const handleNext = () => {
    setDirection(1);
    const newIndex = (state.activeComponent + 1) % componentsList.length;
    dispatch({ type: "SET_ACTIVE_COMPONENT", payload: newIndex });
  };

  const handlePrevious = () => {
    setDirection(-1);
    const newIndex =
      (state.activeComponent - 1 + componentsList.length) %
      componentsList.length;
    dispatch({ type: "SET_ACTIVE_COMPONENT", payload: newIndex });
  };

  const handleScenarioSubmit = (scenarioData) => {
    dispatch({ type: "SET_MORTGAGE_SCENARIO", payload: scenarioData });
  };

  const renderActiveComponent = () => {
    switch (componentsList[state.activeComponent]) {
      case "HeroSection":
        return <HeroSection state={state} dispatch={dispatch} />;
      case "Calculator":
        return <Calculator dispatch={dispatch} />;
      case "ProductsFilterWidget":
        return <ProductsFilterWidget />;
      case "LoanEstimateUpload":
        return <LoanEstimateUpload />;
      case "Component3":
        return <Component3 />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const activeComponentName = componentsList[state.activeComponent];
    const activeNavItem = navItems.find(
      (item) => item.component === activeComponentName
    );
    if (activeNavItem) {
      dispatch({ type: "SET_ACTIVE_NAV", payload: activeNavItem.index });
    }
  }, [state.activeComponent]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 35) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      if (footerRef.current) {
        if (window.scrollY > 100) {
          setOpacity(0);
          setTimeout(() => setShowRatesSection(false), 500);
        } else {
          setOpacity(1);
          setTimeout(() => setShowRatesSection(true), 500);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div style={appStyles} ref={topRef}>
        {!isMobile && <Header />}
        <Navbar
          onNavClick={handleNavClick}
          toggleDrawer={toggleDrawer}
          navItems={navItems}
          activeComponent={state.activeComponent}
          ref={navbarRef}
          showHeader={showHeader}
        />

        <NavDrawer
          isOpen={state.isNavDrawerOpen}
          toggleDrawer={toggleDrawer}
          active={state.activeComponent}
          handleNavClick={handleNavClick}
          navItems={navItems}
        />
        {/* Main container with background image */}
        {activePage === "home" ? (
          <>
            {isShowingProductComparison ? (
              <CompareProducts
                scenario={state.mortgageScenario}
                onEditScenario={() => {
                  dispatch({
                    type: "TOGGLE_PRODUCT_COMPARISON",
                    payload: false,
                  });
                  dispatch({ type: "SET_ACTIVE_COMPONENT", payload: 2 });
                }}
              />
            ) : (
              <div
                style={{
                  ...baseMainContainerStyles,
                  alignItems: isActiveProductsFilter
                    ? "flex-start"
                    : baseMainContainerStyles.alignItems,
                  paddingTop: isActiveProductsFilter ? (isMobile ? 48 : 56) : 0,
                  paddingBottom: isActiveProductsFilter
                    ? isMobile
                      ? 24
                      : 32
                    : 0,
                  overflow: isActiveProductsFilter
                    ? "auto"
                    : baseMainContainerStyles.overflow,
                }}
              >
                <motion.div
                  style={{
                    margin: isMobile ? 0 : 10,
                    left: 0,
                    position: "absolute",
                    // transform: "translateY(-50%)",
                    ...arrowStyles,
                  }}
                  onClick={handlePrevious}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiArrowLeft />
                </motion.div>

                <AnimatePresence wait>
                  <motion.div
                    key={state.activeComponent}
                    initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ width: "100%", height: "100%" }}
                  >
                    {renderActiveComponent()}
                  </motion.div>
                </AnimatePresence>

                <motion.div
                  style={{
                    margin: isMobile ? 0 : 10,
                    right: 0,
                    position: "absolute",
                    // transform: "translateY(-50%)",
                    ...arrowStyles,
                  }}
                  onClick={handleNext}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiArrowRight />
                </motion.div>
              </div>
            )}
            {state.activeComponent === 0 &&
              (isMobile ? (
                <RatesSectionMobile dispatch={dispatch} state={state} />
              ) : (
                showRatesSection && (
                  <div style={{ transition: "opacity 0.5s ease", opacity }}>
                    <RatesSection dispatch={dispatch} state={state} />
                  </div>
                )
              ))}

            <RateDropNotification />
            <MortgageServices />
          </>
        ) : (
          activeScenario && (
            <MortgageOptionsPage
              scenario={activeScenario}
              onEditScenario={() => {
                setActivePage("home");
                setTimeout(() => {
                  dispatch({ type: "SHOW_PRICING_WIDGET", payload: true });
                }, 0);
              }}
            />
          )
        )}
        <ApplyNowWidget
          isVisible={state.showApplyNowWidget}
          onClose={() =>
            dispatch({ type: "SHOW_APPLY_NOW_WIDGET", payload: false })
          }
        />

        <Footer ref={footerRef} />
        <PricingWidget
          isVisible={state.showPricingWidget}
          onClose={() =>
            dispatch({ type: "SHOW_PRICING_WIDGET", payload: false })
          }
          onScenarioSubmit={handleScenarioSubmit}
          onShowOptionsPage={(scenarioData) => {
            setActiveScenario(scenarioData);
            setActivePage("mortgageOptions");
            dispatch({ type: "SHOW_PRICING_WIDGET", payload: false });
            dispatch({ type: "TOGGLE_PRODUCT_COMPARISON", payload: false });
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0, behavior: "auto" });
            }
          }}
        />
        <AffordabilityCalc
          isVisible={state.showAffordabilityCalculator}
          onClose={() =>
            dispatch({ type: "SHOW_AFFORDABILTY_CALCULATOR", payload: false })
          }
        />
        <MortgageCalc
          isVisible={state.showMortgageCalculator}
          onClose={() =>
            dispatch({ type: "SHOW_MORTGAGE_CALCULATOR", payload: false })
          }
        />
      </div>
    </Context.Provider>
  );
};

// Styles for main container with background image
const baseMainContainerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  minHeight: "100vh",
  overflow: "hidden",
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

// Styles for arrows
const arrowStyles = {
  width: "40px",
  height: "40px",
  top: "30%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  borderRadius: "50%",
  cursor: "pointer",
  zIndex: 1000,
  fontSize: "1.5rem",
  color: "#007bff",

  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
};

export default App;
