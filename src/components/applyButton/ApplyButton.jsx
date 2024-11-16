// ApplyNowButton.jsx

import React from "react";
import { motion } from "framer-motion";
import { ImPencil2 } from "react-icons/im"; // Import the icon

const ApplyNowButton = ({ mobile }) => {
  // Adjust styles based on the 'mobile' prop
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
      color: ["#ff00cc", "#333399", "#00ffcc", "#ff9900", "#ff00cc"],
      boxShadow: [
        mobile ? "0 0 10px #ff00cc" : "0 0 20px #ff00cc",
        mobile ? "0 0 10px #333399" : "0 0 20px #333399",
        mobile ? "0 0 10px #00ffcc" : "0 0 20px #00ffcc",
        mobile ? "0 0 10px #ff9900" : "0 0 20px #ff9900",
        mobile ? "0 0 10px #ff00cc" : "0 0 20px #ff00cc",
      ],
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
      color: ["#ff00cc", "#333399", "#00ffcc", "#ff9900", "#ff00cc"],
      transition: {
        duration: 10,
        ease: "linear",
        repeat: Infinity,
      },
    },
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

      {/* Apply Now Button */}
      <motion.a
        href="https://auth.lendwize.io/login?state=hKFo2SBv..."
        style={applyButtonStyles}
        animate="animate"
        variants={buttonVariants}
      >
        Apply Now
      </motion.a>
    </motion.div>
  );
};

export default ApplyNowButton;
