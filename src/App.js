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
} from "./components";
import Context from "./context";
import reducer from "./reducer";
import { isMobile } from "react-device-detect";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import background from "./pics/background.jpg";

const componentsList = [
  "HeroSection",
  "Calculator",
  "Component1",
  "Component2",
  "Component3",
];

const navItems = [
  { name: "Home", index: 0 },
  { name: "Calculator", index: 1 },
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
    fontFamily: "Arial, sans-serif",
    position: "relative",
  };

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
        return <Calculator />;
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
              top: "40%",
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
              top: "40%",
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
                <RatesSectionMobile />
              ) : (
                <RatesSection />
              )
            ) : null}
          </div>
        )}
        <RateDropNotification />
        <MortgageServices />
        <Footer ref={footerRef} />
        <PricingWidget
          isVisible={state.showPricingWidget}
          onClose={() =>
            dispatch({ type: "SHOW_PRICING_WIDGET", payload: false })
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
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

// Styles for arrows
const arrowStyles = {
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  borderRadius: "50%",
  cursor: "pointer",
  zIndex: 1000,
  fontSize: "1.5rem",
  color: "#007bff",
  margin: 10,
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
};

export default App;
