import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHome, FiPhone, FiPieChart, FiUsers } from "react-icons/fi";
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
    backgroundColor: "rgba(255, 255, 255, 0.98)",
    boxShadow: "-12px 0 35px rgba(15, 33, 60, 0.15)",
    zIndex: 2001,
    padding: "2rem",
    borderRadius: "18px 0 0 0",
    borderLeft: "1px solid rgba(0, 123, 255, 0.1)",
    backdropFilter: "blur(6px)",
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
    color: isActive ? "#007bff" : "#4f5d75",
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
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    backgroundColor: isActive
      ? "rgba(0, 123, 255, 0.15)"
      : "rgba(0, 123, 255, 0.08)",
    border: `1px solid rgba(0, 123, 255, ${isActive ? 0.5 : 0.25})`,
    boxShadow: isActive
      ? "0 10px 20px rgba(0, 123, 255, 0.25)"
      : "0 6px 16px rgba(15, 33, 60, 0.08)",
    color: "#007bff",
    fontSize: "1.4rem",
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
      case "Component2":
        return <FiUsers />;
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
