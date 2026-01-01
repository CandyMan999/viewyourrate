import React, { useContext } from "react";
import { motion } from "framer-motion";
import Context from "../../context";

const ApplyNowButton = ({ mobile = false, className = "" }) => {
  const { dispatch } = useContext(Context);

  const handleClick = () => {
    dispatch({ type: "SHOW_APPLY_NOW_WIDGET", payload: true });
  };

  const buttonVariants = {
    hover: {
      scale: 1.04,
    },
    tap: {
      scale: 0.96,
    },
  };

  const classes = ["apply-button", mobile ? "apply-button--mobile" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.button
      type="button"
      className={classes}
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
      onClick={handleClick}
    >
      <span className="apply-button__label">Apply Now</span>
    </motion.button>
  );
};

export default ApplyNowButton;
