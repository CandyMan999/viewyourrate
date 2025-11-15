import React, { useEffect, useRef, useState, useContext } from "react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import Context from "../../context"; // Import the global context
import ApplyButton from "../applyButton/ApplyButton";
import "./Navbar.css";

const classNames = (...classes) => classes.filter(Boolean).join(" ");

// MenuToggle Component for the animated menu button
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#e2e8f0"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => {
  const { state } = useContext(Context); // Use context to get the nav drawer state
  const isOpen = state.isNavDrawerOpen; // Get `isNavDrawerOpen` from context

  return (
    <button className="navButton" type="button" onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          animate={isOpen ? "open" : "closed"} // Animate based on context state
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          animate={isOpen ? "open" : "closed"} // Animate based on context state
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          animate={isOpen ? "open" : "closed"} // Animate based on context state
        />
      </svg>
    </button>
  );
};

const Navbar = ({
  onNavClick,
  toggleDrawer,
  activeComponent,
  navItems,
  showHeader,
}) => {
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const navRefs = useRef([]);

  // Update indicator position when active component changes
  useEffect(() => {
    if (navRefs.current[activeComponent]) {
      const { width, left } =
        navRefs.current[activeComponent].getBoundingClientRect();
      const containerLeft =
        navRefs.current[0].parentElement.getBoundingClientRect().left;
      setIndicatorStyle({ width, left: left - containerLeft });
    }
  }, [activeComponent]);

  // Framer Motion variants
  const linkVariants = {
    hover: { scale: 1.06, color: "#38bdf8" },
  };

  // Handle navigation clicks
  const handleNavClick = (index) => {
    onNavClick(index);
  };

  // Handle menu toggle
  const handleMenuToggle = () => {
    toggleDrawer(); // Toggle the nav drawer and update context state
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo">ViewYourRate</div>
        <ApplyButton mobile={isMobile} />{" "}
        {/* Use the ApplyNowButton component here */}
      </div>

      {/* Navigation Links for desktop */}
      {!isMobile && (
        <div className="navbar__links-container">
          <ul className="navbar__links">
            {navItems.map(({ name, index }) => (
              <motion.li
                key={name}
                ref={(el) => (navRefs.current[index] = el)}
                variants={linkVariants}
                whileHover="hover"
                className={classNames(
                  "navbar__link",
                  index === activeComponent && "navbar__link--active"
                )}
                onClick={() => handleNavClick(index)}
              >
                {name}
              </motion.li>
            ))}
          </ul>
          {/* Sliding Indicator */}
          <motion.div
            className="navbar__indicator"
            animate={{
              width: indicatorStyle.width,
              left: indicatorStyle.left,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
      )}

      {/* Menu Button for Mobile */}
      {isMobile && <MenuToggle toggle={handleMenuToggle} />}
    </nav>
  );
};

export default Navbar;
