import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHome, FiPhone, FiPieChart, FiUsers } from "react-icons/fi";
import { FaCalculator } from "react-icons/fa";

const NavDrawer = ({
  isOpen,
  toggleDrawer,
  active,
  handleNavClick,
  navItems,
  linkVariants,
}) => {
  const motionVariants =
    linkVariants || {
      hover: { scale: 1.05, color: "#86efac" },
    };

  const sidebarVariants = {
    open: { x: 0, transition: { stiffness: 200 } },
    closed: { x: "100%", transition: { stiffness: 200 } },
  };

  const sidebarStyles = {
    position: "fixed",
    top: 64,
    right: 0,
    width: "60%",
    maxWidth: 360,
    height: "100%",
    background: "linear-gradient(160deg, rgba(4, 27, 31, 0.97), rgba(5, 22, 25, 0.94))",
    boxShadow: "-18px 0 40px rgba(4, 27, 31, 0.35)",
    zIndex: 2001,
    padding: "2rem 1.75rem",
    borderRadius: "18px 0 0 18px",
    borderLeft: "1px solid rgba(34, 197, 94, 0.3)",
    color: "#ecfdf5",
    backdropFilter: "blur(10px)",
  };

  const sidebarNavLinksStyles = {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
    height: "100%",
    padding: 0,
    margin: 0,
  };

  const linkStyles = (isActive) => ({
    color: isActive ? "#4ade80" : "rgba(232, 252, 243, 0.85)",
    cursor: "pointer",
    padding: "0.65rem 0.5rem",
    textDecoration: "none",
    transition: "color 0.3s ease",
    display: "flex",
    alignItems: "center",
    fontWeight: isActive ? 700 : 500,
    letterSpacing: "0.04em",
  });

  const iconContainerStyles = (isActive) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    borderRadius: "12px",
    backgroundColor: isActive ? "rgba(34, 197, 94, 0.18)" : "rgba(15, 44, 41, 0.65)",
    border: `1px solid ${isActive ? "rgba(34, 197, 94, 0.7)" : "rgba(148, 163, 184, 0.25)"}`,
    color: isActive ? "#4ade80" : "#e2f7ef",
    fontSize: "1.25rem",
    marginRight: 16,
    boxShadow: isActive ? "0 0 14px rgba(34, 197, 94, 0.45)" : "none",
  });

  const getIcon = (name) => {
    switch (name) {
      case "Home":
        return <FiHome />;
      case "Calculators":
        return <FaCalculator />;
      case "Compare Products":
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
                variants={motionVariants}
                whileHover="hover"
                style={linkStyles(index === active)}
                onClick={() => {
                  handleNavClick(index);
                  toggleDrawer();
                }}
              >
                <div style={iconContainerStyles(index === active)}>{getIcon(name)}</div>
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
