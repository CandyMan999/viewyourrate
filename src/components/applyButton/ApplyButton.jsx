import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ImPencil2 } from "react-icons/im";
import Context from "../../context";

const ApplyNowButton = ({ mobile }) => {
  const { dispatch } = useContext(Context); // ⬅️ Grab dispatch

  const containerStyles = {
    display: "inline-flex",
    alignItems: "center",
    marginLeft: mobile ? "0.5rem" : "1.5rem",
  };

  const applyButtonStyles = {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: mobile ? "0.45rem 1.1rem" : "0.65rem 1.6rem",
    borderRadius: "999px",
    cursor: "pointer",
    fontSize: mobile ? "0.85rem" : "1rem",
    textDecoration: "none",
    border: "none",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    boxShadow: "0 15px 30px rgba(0, 123, 255, 0.3)",
    transition: "box-shadow 0.2s ease",
  };

  const iconStyles = {
    fontSize: mobile ? "0.95rem" : "1.1rem",
    color: "#fff",
  };

  const handleClick = () => {
    dispatch({ type: "SHOW_APPLY_NOW_WIDGET", payload: true });
  };

  return (
    <motion.div style={containerStyles}>
      <motion.button
        style={applyButtonStyles}
        onClick={handleClick}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 36px rgba(0, 123, 255, 0.35)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <ImPencil2 style={iconStyles} />
        Apply Now
      </motion.button>
    </motion.div>
  );
};

export default ApplyNowButton;
