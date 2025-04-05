import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ImPencil2 } from "react-icons/im"; // Import the icon
import Context from "../../context"; // ⬅️ Import your global context

const ApplyNowButton = ({ mobile }) => {
  const { dispatch } = useContext(Context); // ⬅️ Grab dispatch

  const containerStyles = {
    position: "relative",
    display: "inline-block",
    marginLeft: mobile ? "0.5rem" : "1.5rem",
  };

  const applyButtonStyles = {
    backgroundColor: "#fff",
    color: "#fff",
    padding: mobile ? "0.3rem 0.6rem" : "0.5rem 1rem",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: mobile ? "0.8rem" : "1rem",
    textDecoration: "none",
    overflow: "hidden",
    boxShadow: mobile
      ? "0 0 10px rgba(0, 0, 0, 0.5)"
      : "0 0 20px rgba(0, 0, 0, 0.5)",
    border: "none",
    fontWeight: "bold",
  };

  const iconStyles = {
    position: "absolute",
    top: mobile ? "-1rem" : "-1.5rem",
    right: mobile ? "-1rem" : "-1.3rem",
    fontSize: mobile ? "1.5rem" : "2rem",
  };

  const buttonVariants = {
    animate: {
      borderImageSource: [
        "linear-gradient(45deg, #ff00cc, #333399)",
        "linear-gradient(45deg, #333399, #00ffcc)",
        "linear-gradient(45deg, #00ffcc, #ff9900)",
        "linear-gradient(45deg, #ff9900, #ff00cc)",
      ],
      borderImageSlice: 1,
      color: ["#007bff"],
      boxShadow: [" #007bff"],
      transition: {
        duration: 10,
        ease: "linear",
        repeat: Infinity,
      },
    },
    hover: {
      scale: mobile ? 1.2 : 1.35,
    },
    whileTap: {
      scale: 0.95,
    },
  };

  const iconVariants = {
    animate: {
      color: ["#007bff"],
      transition: {
        duration: 10,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  const handleClick = () => {
    dispatch({ type: "SHOW_APPLY_NOW_WIDGET", payload: true });
  };

  return (
    <motion.div
      style={containerStyles}
      whileHover="hover"
      whileTap="whileTap"
      variants={buttonVariants}
    >
      {/* Pencil Icon positioned above the button */}
      <motion.div style={iconStyles} animate="animate" variants={iconVariants}>
        <ImPencil2 />
      </motion.div>

      {/* Apply Now Button (now a button not an anchor) */}
      <motion.button
        style={applyButtonStyles}
        animate="animate"
        variants={buttonVariants}
        onClick={handleClick}
      >
        Apply Now
      </motion.button>
    </motion.div>
  );
};

export default ApplyNowButton;
