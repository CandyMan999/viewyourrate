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
    width: "70%",
    maxWidth: 360,
    height: "100%",
    background: "var(--surface-highlight)",
    boxShadow: "-12px 0 35px rgba(8, 18, 35, 0.45)",
    zIndex: 2001,
    padding: "2.5rem 2rem",
    borderRadius: "24px 0 0 0",
    borderLeft: "1px solid var(--border-subtle)",
    color: "var(--text-primary)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
  };

  const sidebarNavLinksStyles = {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: 0,
    margin: 0,
    gap: "1rem",
  };

  const linkStyles = (isActive) => ({
    color: isActive ? "var(--accent-strong)" : "var(--text-secondary)",
    cursor: "pointer",
    padding: "0.6rem 0.85rem",
    textDecoration: "none",
    transition: "color 0.3s ease",
    display: "flex",
    alignItems: "center",
    borderRadius: "14px",
    background: isActive ? "rgba(56, 189, 248, 0.12)" : "transparent",
  });

  const iconContainerStyles = (isActive) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    borderRadius: "14px",
    background: "rgba(15, 23, 42, 0.75)",
    border: `1px solid ${isActive ? "var(--accent)" : "rgba(148, 163, 184, 0.25)"}`,
    boxShadow: isActive ? "0 10px 25px rgba(56, 189, 248, 0.35)" : "var(--shadow-soft)",
    color: "var(--accent-strong)",
    fontSize: "1.35rem",
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
