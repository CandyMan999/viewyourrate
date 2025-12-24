import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHome, FiPhone, FiPieChart, FiTrendingDown } from "react-icons/fi";
import { FaCalculator } from "react-icons/fa"; // Actual calculator icon

const NavDrawer = ({
  isOpen,
  toggleDrawer,
  active,
  handleNavClick,
  navItems,
  linkVariants,
}) => {
  const sidebarVariants = {
    open: { x: 0, transition: { stiffness: 200 } },
    closed: { x: "100%", transition: { stiffness: 200 } },
  };

  const sidebarStyles = {
    position: "fixed",
    top: 60,
    right: 0,
    width: "50%",
    height: "100%",
    backgroundColor: "var(--app-surface-solid)",
    boxShadow: "-2px 0 10px var(--app-shadow-strong)",
    zIndex: 2001,
    padding: "2rem",
    borderRadius: "10px 0px 0px 0px",
  };

  const sidebarNavLinksStyles = {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",

    height: "100%",
    padding: 0,
    margin: 0,
  };

  const linkStyles = (isActive) => ({
    color: isActive ? "var(--app-accent)" : "var(--app-text)",
    cursor: "pointer",
    padding: "0.5rem 1rem",
    textDecoration: "none",
    transition: "color 0.3s ease",
    display: "flex",
    alignItems: "center",
  });

  const iconContainerStyles = (isActive) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "var(--app-surface-strong)", // Dark scale background
    border: `2px solid ${
      isActive ? "var(--app-accent)" : "var(--app-border)"
    }`, // Blue ring if active, white otherwise

    boxShadow: isActive ? "0 0 0 2px var(--app-accent)" : "none", // Blue outer ring if active
    color: "var(--app-text)", // White for icons
    fontSize: "1.5rem", // Increased icon size
    marginRight: 20,
  });

  // Example icons mapping based on names
  const getIcon = (name) => {
    switch (name) {
      case "Home":
        return <FiHome />;
      case "Calculators":
        return <FaCalculator />;
      case "Component1":
        return <FiPieChart />;
      case "Beat My Estimate":
        return <FiTrendingDown />;
      case "Contact":
        return <FiPhone />;
      default:
        return <FiHome />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          style={sidebarStyles}
          variants={sidebarVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <ul style={sidebarNavLinksStyles}>
            {navItems.map(({ name, index }) => (
              <motion.li
                key={index}
                variants={linkVariants}
                whileHover="hover"
                style={linkStyles(index === active)} // Check if the index is active
                onClick={() => {
                  handleNavClick(index); // Use the index for navigation
                  toggleDrawer(); // Close the drawer after navigation
                }}
              >
                {/* Icon Container */}
                <div style={iconContainerStyles(index === active)}>
                  {getIcon(name)}
                </div>
                {name}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavDrawer;
