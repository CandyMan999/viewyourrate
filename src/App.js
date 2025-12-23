"use client";

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
  RatesSectionMobile,
  NavDrawer,
  Footer,
  Calculator,
  Component1,
  Component2,
  Component3,
  Header,
  MortgageServices,
  RateDropNotification,
  AffordabilityCalc,
  MortgageCalc,
} from "./components";
import PricingWidget from "../client/app/components/pricingWidget/PricingWidget";
import MortgageOptionsPage from "../client/app/components/mortgageResults/MortgageOptionsPage";
import PurchaseOptionsPage from "../client/app/components/purchaseResults/PurchaseOptionsPage";
import CompareProduct from "./screens/CompareProduct";
import { request } from "../client/client";
import {
  GET_PURCHASE_PRICING_QUERY,
  GET_REFI_PRICING_QUERY,
} from "../client/graphQL/queries";
import Context from "./context";
import reducer from "./reducer";
import { isMobile } from "react-device-detect";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { dummyRates } from "./data/dummyRates";

const componentsList = [
  "HeroSection",
  "Calculator",
  "Component1",
  "Component2",
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

const baseNavItems = [
  { name: "Home", index: 0 },
  { name: "Calculators", index: 1 },
  { name: "Component1", index: 2 },
  { name: "Component2", index: 3 },
  { name: "Component3", index: 4 },
  { name: "Contact", index: 5 },
];

const App = () => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showHeader, setShowHeader] = useState(true);
  const [showRatesSection, setShowRatesSection] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [direction, setDirection] = useState(1);
  const [quoteMode, setQuoteMode] = useState("Refinance");
  const [prefillData, setPrefillData] = useState(null);
  const [seedPayment] = useState("$2,500");
  const [activeScenario, setActiveScenario] = useState(null);
  const [pricingState, setPricingState] = useState({ status: "idle", data: null, error: "" });
  const [showCompare, setShowCompare] = useState(false);

  const footerRef = useRef(null);
  const topRef = useRef(null);
  const navbarRef = useRef(null);

  const appStyles = {
    fontFamily: "Arial, sans-serif",
    position: "relative",
  };

  const handleStartRefinance = () => {
    setQuoteMode("Refinance");
    dispatch({ type: "SHOW_PRICING_WIDGET", payload: true });
  };

  const handleStartPurchase = () => {
    setQuoteMode("Purchase");
    dispatch({ type: "SHOW_PRICING_WIDGET", payload: true });
  };

  const handleScenarioComplete = (scenario) => {
    setQuoteMode(scenario?.quoteType === "Purchase" ? "Purchase" : "Refinance");
    setPrefillData(scenario);
    setActiveScenario(scenario);
    setPricingState({ status: "loading", data: null, error: "" });
    setShowCompare(true);
    dispatch({ type: "SHOW_PRICING_WIDGET", payload: false });
  };

  const handleResetScenario = () => {
    setActiveScenario(null);
    setPricingState({ status: "idle", data: null, error: "" });
    setPrefillData(null);
    setShowCompare(false);
  };

  const handleSelectOption = () => {
    dispatch({ type: "SHOW_APPLY_NOW_WIDGET", payload: true });
  };

  useEffect(() => {
    if (!activeScenario) return undefined;
    let cancelled = false;

    const fetchPricing = async () => {
      setPricingState({ status: "loading", data: null, error: "" });
      try {
        const query =
          quoteMode === "Purchase" ? GET_PURCHASE_PRICING_QUERY : GET_REFI_PRICING_QUERY;
        const data = await request(query, { input: activeScenario });
        if (cancelled) return;
        setPricingState({
          status: "success",
          data: data?.getPurchasePricing || data?.getRefiPricing || null,
          error: "",
        });
      } catch (error) {
        if (cancelled) return;
        setPricingState({
          status: "error",
          data: null,
          error: error?.message || "Unable to fetch pricing right now.",
        });
      }
    };

    fetchPricing();

    return () => {
      cancelled = true;
    };
  }, [activeScenario, quoteMode]);

  const retryPricing = () => {
    if (!activeScenario) return;
    setPricingState({ status: "loading", data: null, error: "" });
    const query = quoteMode === "Purchase" ? GET_PURCHASE_PRICING_QUERY : GET_REFI_PRICING_QUERY;
    request(query, { input: activeScenario })
      .then((data) =>
        setPricingState({
          status: "success",
          data: data?.getPurchasePricing || data?.getRefiPricing || null,
          error: "",
        })
      )
      .catch((error) =>
        setPricingState({
          status: "error",
          data: null,
          error: error?.message || "Unable to fetch pricing right now.",
        })
      );
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
    if (showCompare) {
      return;
    }

    dispatch({ type: "SET_ACTIVE_COMPONENT", payload: index });
    if (baseNavItems[index].name === "Contact") {
      scrollToFooter();
    } else {
      scrollToTop();
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

  const renderActiveComponent = () => {
    switch (componentsList[state.activeComponent]) {
      case "HeroSection":
        return (
          <HeroSection
            state={state}
            dispatch={dispatch}
            onStartPurchase={handleStartPurchase}
            onStartRefinance={handleStartRefinance}
          />
        );
      case "Calculator":
        return <Calculator dispatch={dispatch} />;
      case "Component1":
        return <Component1 />;
      case "Component2":
        return <Component2 />;
      case "Component3":
        return <Component3 />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const activeComponentName = componentsList[state.activeComponent];
    const activeNavItem = baseNavItems.find(
      (item) => item.name === activeComponentName
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

  if (showCompare && activeScenario) {
    const compareNavItems = [{ name: "Compare Products", index: 0 }];
    return (
      <Context.Provider value={{ state, dispatch }}>
        <div style={appStyles} ref={topRef}>
          <Navbar
            onNavClick={handleNavClick}
            toggleDrawer={toggleDrawer}
            navItems={compareNavItems}
            activeComponent={0}
            ref={navbarRef}
            showHeader
          />
          <CompareProduct
            scenario={activeScenario}
            quoteMode={quoteMode}
            pricingState={pricingState}
            onRetryPricing={retryPricing}
            onSelectOption={handleSelectOption}
            onEdit={() => {
              setPrefillData(activeScenario);
              setShowCompare(false);
              dispatch({ type: "SHOW_PRICING_WIDGET", payload: true });
            }}
            onReset={handleResetScenario}
          />
        </div>
      </Context.Provider>
    );
  }

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div style={appStyles} ref={topRef}>
        {!isMobile && <Header />}
        <Navbar
          onNavClick={handleNavClick}
          toggleDrawer={toggleDrawer}
          navItems={baseNavItems}
          activeComponent={state.activeComponent}
          ref={navbarRef}
          showHeader={showHeader}
        />

        <NavDrawer
          isOpen={state.isNavDrawerOpen}
          toggleDrawer={toggleDrawer}
          active={state.activeComponent}
          handleNavClick={handleNavClick}
          navItems={baseNavItems}
        />
        {/* Main container with background image */}
        <div style={mainContainerStyles}>
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
        {showRatesSection && (
          <div style={{ transition: "opacity 0.5s ease", opacity: opacity }}>
            {state.activeComponent === 0 ? (
              isMobile ? (
                <RatesSectionMobile dispatch={dispatch} state={state} />
              ) : (
                <RatesSection dispatch={dispatch} state={state} />
              )
            ) : null}
          </div>
        )}
        <RateDropNotification />
        <MortgageServices />
        {activeScenario &&
          (quoteMode === "Purchase" ? (
            <PurchaseOptionsPage
              scenario={activeScenario}
              pricing={pricingState.data}
              pricingStatus={pricingState.status}
              pricingError={pricingState.error}
              onRetryPricing={retryPricing}
              onSelectOption={handleSelectOption}
              onEdit={() => {
                setPrefillData(activeScenario);
                dispatch({ type: "SHOW_PRICING_WIDGET", payload: true });
              }}
              onReset={handleResetScenario}
            />
          ) : (
            <MortgageOptionsPage
              scenario={activeScenario}
              pricing={pricingState.data}
              pricingStatus={pricingState.status}
              pricingError={pricingState.error}
              onRetryPricing={retryPricing}
              onSelectOption={handleSelectOption}
              onEdit={() => {
                setPrefillData(activeScenario);
                dispatch({ type: "SHOW_PRICING_WIDGET", payload: true });
              }}
              onFixLtv={() => {
                setPrefillData(activeScenario);
                dispatch({ type: "SHOW_PRICING_WIDGET", payload: true });
              }}
              onReset={handleResetScenario}
            />
          ))}
        <ApplyNowWidget
          isVisible={state.showApplyNowWidget}
          onClose={() =>
            dispatch({ type: "SHOW_APPLY_NOW_WIDGET", payload: false })
          }
        />

        <Footer ref={footerRef} />
        <PricingWidget
          isOpen={state.showPricingWidget}
          mode={quoteMode}
          initialPayment={seedPayment}
          prefillData={prefillData}
          onClose={() =>
            dispatch({ type: "SHOW_PRICING_WIDGET", payload: false })
          }
          onComplete={handleScenarioComplete}
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
const mainContainerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  height: "100vh",
  overflow: "hidden",
  backgroundImage: "url(/background.jpg)",
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
