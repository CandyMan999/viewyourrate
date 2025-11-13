import React, { useEffect, useRef, useState, useContext } from "react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import Context from "../../context";
import ApplyButton from "../applyButton/ApplyButton";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#d1fae5"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => {
  const { state } = useContext(Context);
  const isOpen = state.isNavDrawerOpen;

  return (
    <button className="navButton" onClick={toggle} style={menuButtonStyles}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          animate={isOpen ? "open" : "closed"}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          animate={isOpen ? "open" : "closed"}
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

  useEffect(() => {
    if (navRefs.current[activeComponent]) {
      const { width, left } =
        navRefs.current[activeComponent].getBoundingClientRect();
      const containerLeft =
        navRefs.current[0].parentElement.getBoundingClientRect().left;
      setIndicatorStyle({ width, left: left - containerLeft });
    }
  }, [activeComponent]);

  const linkVariants = {
    hover: { scale: 1.08, color: "#86efac" },
  };

  const handleNavClick = (index) => {
    onNavClick(index);
  };

  const handleMenuToggle = () => {
    toggleDrawer();
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        background: "linear-gradient(135deg, rgba(4, 27, 31, 0.96), rgba(5, 22, 25, 0.92))",
        color: "#e6f9f0",
        borderBottom: "1px solid rgba(74, 222, 128, 0.35)",
        boxShadow: "0 12px 32px rgba(4, 27, 31, 0.25)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(12px)",
      }}
    >
      <div style={leftContainerStyles}>
        <div style={logoStyles}>ViewYourRate</div>
        <ApplyButton mobile={isMobile} />
      </div>

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
          <motion.div
            style={indicatorBaseStyles}
            animate={{
              width: `${indicatorStyle.width}px`,
              left: `${indicatorStyle.left}px`,
            }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
          />
        </div>
      )}

      {isMobile && <MenuToggle toggle={handleMenuToggle} />}
    </nav>
  );
};

const logoStyles = {
  fontSize: "1.5rem",
  fontWeight: "700",
  cursor: "pointer",
  letterSpacing: "0.08em",
  color: "#bbf7d0",
};

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
  color: isActive ? "#4ade80" : "rgba(226, 252, 236, 0.82)",
  cursor: "pointer",
  padding: "0.5rem 1rem",
  position: "relative",
  textDecoration: "none",
  transition: "color 0.3s ease",
  fontWeight: isActive ? 700 : 500,
  letterSpacing: "0.04em",
});

const indicatorBaseStyles = {
  position: "absolute",
  bottom: -6,
  height: "3px",
  background: "linear-gradient(90deg, #22c55e, #4ade80)",
  borderRadius: "999px",
  boxShadow: "0 0 12px rgba(34, 197, 94, 0.65)",
};

const menuButtonStyles = {
  background: "rgba(15, 44, 41, 0.65)",
  border: "1px solid rgba(74, 222, 128, 0.4)",
  borderRadius: "999px",
  cursor: "pointer",
  padding: "0.4rem 0.55rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 10px 20px rgba(4, 27, 31, 0.35)",
};

export default Navbar;
