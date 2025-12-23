import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FiTrendingDown } from "react-icons/fi";
import Context from "../../context";

const BeatMyEstimateButton = ({ mobile = false, className = "" }) => {
  const { dispatch } = useContext(Context);

  const handleClick = () => {
    dispatch({ type: "SHOW_BEAT_MY_ESTIMATE_WIDGET", payload: true });
  };

  const buttonVariants = {
    hover: { scale: 1.03 },
    tap: { scale: 0.96 },
  };

  const classes = [
    "beat-estimate-button",
    mobile ? "beat-estimate-button--mobile" : "",
    className,
  ]
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
      <FiTrendingDown size={16} style={{ position: "relative", zIndex: 1 }} />
      <span className="beat-estimate-button__label">Beat My Estimate</span>
    </motion.button>
  );
};

export default BeatMyEstimateButton;
