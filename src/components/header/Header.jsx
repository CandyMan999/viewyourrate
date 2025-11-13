import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  const headerBarStyles = {
    width: "100%",
    background: "linear-gradient(90deg, #064e3b, #047857)",
    color: "#eafff4",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 35,
    top: 0,
    zIndex: 1001,
    boxShadow: "0 6px 18px rgba(6, 78, 59, 0.35)",
  };

  const headerContentStyles = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginRight: "2rem",
  };

  const headerLinkStyles = {
    color: "#ecfdf5",
    textDecoration: "none",
    fontSize: "0.9rem",
    display: "flex",
    alignItems: "center",
    padding: "0.5rem 0.75rem",
    gap: "0.5rem",
    letterSpacing: "0.02em",
  };

  return (
    <div style={headerBarStyles}>
      <div style={headerContentStyles}>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=tmanriquez@viewyourrate.com"
          style={headerLinkStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope /> tmanriquez@viewyourrate.com
        </a>
        <a href="tel:+12146754530" style={headerLinkStyles}>
          <FaPhoneAlt /> (214) 675-4530
        </a>
      </div>
    </div>
  );
};

export default Header;
