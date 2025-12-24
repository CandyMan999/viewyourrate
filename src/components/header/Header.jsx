import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Import icons

const Header = () => {
  const headerBarStyles = {
    width: "100%",
    backgroundColor: "var(--app-header-bg)",
    color: "var(--app-header-text)",

    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 35,
    top: 0,
    zIndex: 1001,
  };

  const headerContentStyles = {
    display: "flex",
    alignItems: "center",

    gap: "1rem",
  };

  const headerLinkStyles = {
    color: "var(--app-header-text)",
    textDecoration: "none",
    fontSize: "0.9rem",
    display: "flex",
    alignItems: "center",
    padding: "0.5rem 1rem",
    gap: "0.5rem", // Spacing between icon and text
  };

  return (
    <div style={headerBarStyles}>
      <div style={headerContentStyles}>
        {/* Email Link */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=tmanriquez@viewyourrate.com"
          style={headerLinkStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope /> tmanriquez@viewyourrate.com
        </a>

        {/* Phone Link */}
        <a href="tel:+12146754530" style={headerLinkStyles}>
          <FaPhoneAlt /> (214) 675-4530
        </a>
      </div>
    </div>
  );
};

export default Header;
