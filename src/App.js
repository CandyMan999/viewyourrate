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
  Component1,
  Component2,
  Component3,
  Header,
  MortgageServices,
  RateDropNotification,
  AffordabilityCalc,
  MortgageCalc,
} from "./components";
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
    backgroundColor: "rgba(4, 8, 18, 0.75)",
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
  };

  const widget = {
    background:
      "linear-gradient(160deg, rgba(13, 23, 42, 0.96), rgba(6, 11, 24, 0.9))",
    width: "95%",
    maxWidth: "1100px",
    height: "90vh",
    borderRadius: "28px",
    overflow: "hidden",
    position: "relative",
    boxShadow: "0 40px 85px rgba(8, 18, 35, 0.6)",
    border: "1px solid var(--border-subtle)",
  };

  const closeStyle = {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
    fontSize: "1.5rem",
    color: "var(--text-primary)",
    cursor: "pointer",
    backgroundColor: "rgba(15, 23, 42, 0.7)",
    padding: "6px",
    borderRadius: "50%",
    border: "1px solid var(--border-subtle)",
    boxShadow: "0 18px 40px rgba(8, 18, 35, 0.45)",
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

  const footerRef = useRef(null);
  const topRef = useRef(null);
  const navbarRef = useRef(null);

  const appStyles = {
    fontFamily: "var(--font-base)",
    position: "relative",
    color: "var(--text-primary)",
    background: "transparent",
    minHeight: "100vh",
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
    dispatch({ type: "SET_ACTIVE_COMPONENT", payload: index });
    if (navItems[index].name === "Contact") {
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
        return <HeroSection state={state} dispatch={dispatch} />;
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
    const activeNavItem = navItems.find(
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
  width: "min(1200px, 100%)",
  margin: "0 auto",
  padding: "2rem 2.5rem 6rem",
  background:
    "radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.08), transparent 55%), var(--surface-elevated)",
  borderRadius: "32px",
  border: "1px solid var(--border-subtle)",
  boxShadow: "var(--shadow-soft)",
};

// Styles for arrows
const arrowStyles = {
  width: "42px",
  height: "42px",
  top: "30%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "var(--surface-base)",
  borderRadius: "50%",
  cursor: "pointer",
  zIndex: 1000,
  fontSize: "1.5rem",
  color: "var(--accent)",
  border: "1px solid var(--border-subtle)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  boxShadow: "var(--shadow-soft)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
};

export default App;
