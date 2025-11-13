import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Import icons

const Header = () => {
  const headerBarStyles = {
    width: "100%",
    background: "var(--surface-base)",
    color: "var(--text-secondary)",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 40,
    top: 0,
    zIndex: 1001,
    padding: "0 1.5rem",
    borderBottom: "1px solid var(--border-subtle)",
    boxShadow: "0 4px 18px rgba(8, 18, 35, 0.35)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  };

  const headerContentStyles = {
    display: "flex",
    alignItems: "center",

    gap: "1rem",
  };

  const headerLinkStyles = {
    color: "var(--text-primary)",
    textDecoration: "none",
    fontSize: "0.9rem",
    display: "flex",
    alignItems: "center",
    padding: "0.5rem 1rem",
    gap: "0.5rem", // Spacing between icon and text
    borderRadius: "999px",
    background: "rgba(15, 23, 42, 0.55)",
    border: "1px solid rgba(148, 163, 184, 0.22)",
    boxShadow: "var(--shadow-soft)",
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
