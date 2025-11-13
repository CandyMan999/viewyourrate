import React, { useEffect, useRef, useState, useContext } from "react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import Context from "../../context"; // Import the global context
import ApplyButton from "../applyButton/ApplyButton";

// MenuToggle Component for the animated menu button
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="var(--text-primary)"
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
    hover: { scale: 1.05, color: "var(--accent-strong)" },
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
        padding: "0.85rem 2.5rem",
        background: "var(--surface-base)",
        boxShadow: "0 16px 40px rgba(8, 18, 35, 0.45)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        borderBottom: "1px solid var(--border-subtle)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
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

      {/* Menu Button for Mobile */}
      {isMobile && <MenuToggle toggle={handleMenuToggle} />}
    </nav>
  );
};

// Inline Styles

const logoStyles = {
  fontSize: "1.45rem",
  fontWeight: "700",
  cursor: "pointer",
  letterSpacing: "0.06em",
  color: "var(--text-primary)",
};
// Inline Styles (remain the same)
const leftContainerStyles = {
  display: "flex",
  alignItems: "center",
  gap: "1.1rem",
};

const navLinksContainerStyles = {
  position: "relative",
  display: "flex",
  alignItems: "center",
};

const navLinksStyles = {
  listStyle: "none",
  display: "flex",
  gap: "1.75rem",
  position: "relative",
  margin: 0,
  padding: 0,
};

const linkStyles = (isActive) => ({
  color: isActive ? "var(--accent-strong)" : "var(--text-secondary)",
  cursor: "pointer",
  padding: "0.4rem 0.9rem",
  position: "relative",
  textDecoration: "none",
  transition: "color 0.3s ease",
});

const indicatorBaseStyles = {
  position: "absolute",
  bottom: 0,
  height: "3px",
  background: "var(--accent-gradient)",
  borderRadius: "4px",
};

const menuButtonStyles = {
  background: "rgba(15, 23, 42, 0.65)",
  border: "1px solid var(--border-subtle)",
  borderRadius: "999px",
  cursor: "pointer",
  padding: "0.45rem 0.75rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "var(--shadow-soft)",
};

export default Navbar;
