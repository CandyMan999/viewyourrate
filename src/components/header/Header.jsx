import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Import icons

const Header = () => {
  const headerBarStyles = {
    width: "100%",
    backgroundColor: "#007bff",
    color: "#fff",

    display: "flex",

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
    color: "#fff",
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
          href="https://mail.google.com/mail/?view=cm&fs=1&to=cgarrido@viewyourrate.com"
          style={headerLinkStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope /> cgarrido@viewyourrate.com
        </a>

        {/* Phone Link */}
        <a href="tel:+14698773808" style={headerLinkStyles}>
          <FaPhoneAlt /> (469) 877-3803
        </a>
      </div>
    </div>
  );
};

export default Header;
