import React, { useEffect, useRef, useState, useContext } from "react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import Context from "../../context"; // Import the global context

// MenuToggle Component for the animated menu button
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#333"
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
    hover: { scale: 1.1, color: "#007bff" },
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
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        position: "sticky",
        // position: showHeader ? "relative" : "sticky",

        top: 0,
        zIndex: 1000,
      }}
    >
      <div style={logoStyles}>ViewYourRate</div>

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
  fontSize: "1.5rem",
  fontWeight: "bold",
  cursor: "pointer",
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
  color: isActive ? "#007bff" : "#333",
  cursor: "pointer",
  padding: "0.5rem 1rem",
  position: "relative",
  textDecoration: "none",
  transition: "color 0.3s ease",
});

const indicatorBaseStyles = {
  position: "absolute",
  bottom: 0,
  height: "3px",
  backgroundColor: "#007bff",
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

export default Navbar;
