import React from "react";

const BackDrop = ({ onClose }) => {
  const backdropStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.3)",
    zIndex: 999,
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    WebkitFilter: "blur(5px)",
    MozFilter: "blur(5px)",
    OFilter: "blur(5px)",
    msFilter: "blur(5px)",
    filter: "blur(5px)",
  };

  return <div style={backdropStyles} onClick={onClose} />;
};

export default BackDrop;
