import React, { useEffect, useRef, useState, useContext } from "react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import Context from "../../context"; // Import the global context
import ApplyButton from "../applyButton/ApplyButton";
import { FiMoon, FiSun } from "react-icons/fi";

// MenuToggle Component for the animated menu button
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="var(--app-text)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => {
  const { state } = useContext(Context); // Use context to get the nav drawer state
  const isOpen = state.isNavDrawerOpen; // Get `isNavDrawerOpen` from context

  return (
    <button className="navButton" onClick={toggle} style={menuButtonStyles}>
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
  theme,
  onToggleTheme,
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
    hover: { scale: 1.05, color: "var(--app-accent)" },
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
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        background: "var(--app-nav-bg)",
        borderBottom: "1px solid var(--app-border)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 18px 40px var(--app-shadow-strong)",
        backdropFilter: "blur(14px)",
      }}
    >
      <div style={leftContainerStyles}>
        <div style={logoStyles}>ViewYourRate</div>
        <ApplyButton mobile={isMobile} />{" "}
        {/* Use the ApplyNowButton component here */}
      </div>

      {/* Navigation Links for desktop */}
      {!isMobile && (
        <div style={navLinksContainerStyles}>
          <ul style={navLinksStyles}>
            {navItems.map(({ name, index }) => (
              <motion.li
                key={name}
                ref={(el) => (navRefs.current[index] = el)}
                variants={linkVariants}
                whileHover="hover"
                style={linkStyles(index === activeComponent)}
                onClick={() => handleNavClick(index)}
              >
                {name}
              </motion.li>
            ))}
          </ul>
          {/* Sliding Indicator */}
          <motion.div
            style={indicatorBaseStyles}
            animate={{
              width: `${indicatorStyle.width}px`,
              left: `${indicatorStyle.left}px`,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
      )}

      <div style={rightContainerStyles}>
        <button
          type="button"
          onClick={onToggleTheme}
          style={themeToggleStyles}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          aria-pressed={theme === "light"}
        >
          <span style={themeIconStyles}>
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </span>
          {!isMobile && (
            <span style={themeLabelStyles}>
              {theme === "dark" ? "Light" : "Dark"}
            </span>
          )}
        </button>
        {/* Menu Button for Mobile */}
        {isMobile && <MenuToggle toggle={handleMenuToggle} />}
      </div>
    </nav>
  );
};

// Inline Styles

const logoStyles = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  cursor: "pointer",
  color: "var(--app-text)",
};
// Inline Styles (remain the same)
const leftContainerStyles = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
};

const navLinksContainerStyles = {
  position: "relative",
  display: "flex",
  alignItems: "center",
};

const navLinksStyles = {
  listStyle: "none",
  display: "flex",
  gap: "2rem",
  position: "relative",
  margin: 0,
  padding: 0,
};

const linkStyles = (isActive) => ({
  color: isActive ? "var(--app-text)" : "var(--app-text-muted)",
  cursor: "pointer",
  padding: "0.5rem 1rem",
  position: "relative",
  textDecoration: "none",
  transition: "color 0.2s ease, background-color 0.2s ease",
  borderRadius: "999px",
  backgroundColor: isActive ? "var(--app-pill-bg)" : "transparent",
});

const indicatorBaseStyles = {
  position: "absolute",
  bottom: 0,
  height: "3px",
  background: "linear-gradient(90deg, var(--app-accent), var(--app-accent-2))",
  borderRadius: "4px",
};

const menuButtonStyles = {
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const rightContainerStyles = {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
};

const themeToggleStyles = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.45rem 0.8rem",
  borderRadius: "999px",
  border: "1px solid var(--app-border)",
  background: "var(--app-surface)",
  color: "var(--app-text)",
  cursor: "pointer",
  fontWeight: 600,
  fontSize: "0.85rem",
  boxShadow: "0 10px 18px var(--app-shadow-soft)",
  transition:
    "background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease",
};

const themeIconStyles = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1rem",
  color: "var(--app-accent)",
};

const themeLabelStyles = {
  lineHeight: 1,
};

export default Navbar;
