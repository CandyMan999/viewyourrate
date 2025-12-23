import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

const ApplyNowWidget = ({ isVisible, onClose }) => {
  const variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      y: "100%",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  const overlay = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
  };

  const widget = {
    backgroundColor: "#fff",
    width: "95%",
    maxWidth: "1100px",
    height: "90vh",
    borderRadius: "12px",
    overflow: "hidden",
    position: "relative",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
  };

  const closeStyle = {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
    fontSize: "1.5rem",
    color: "#fff",
    cursor: "pointer",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "6px",
    borderRadius: "50%",
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          style={overlay}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
        >
          <FiX style={closeStyle} onClick={onClose} />
          <motion.div style={widget}>
            <iframe
              src="https://viewyourrate.my1003app.com?time=1743826121808"
              style={{ width: "100%", height: "100%", border: "none" }}
              title="Apply Now"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ApplyNowWidget;
