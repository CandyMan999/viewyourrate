import React from "react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect"; // Import mobile detection
import {
  FaHome,
  FaUniversity,
  FaLandmark,
  FaPiggyBank,
  FaBalanceScale,
  FaUserGraduate,
  FaHorseHead,
  FaUndo,
  FaCoins,
  FaSeedling,
  FaRegHandshake,
} from "react-icons/fa";

const services = [
  {
    title: "Fixed-Rate Mortgage",
    description: "Stable monthly payments for the life of your loan.",
    icon: <FaHome />, // Solid, reliable
  },
  {
    title: "FHA Mortgage",
    description:
      "(FHA) Loans designed to assist homebuyers with lenient credit and down payment requirements.",
    icon: <FaUniversity />, // Government-backed, established
  },
  {
    title: "VA Mortgage",
    description:
      "Exclusive benefits for veterans and active-duty military personnel.",
    icon: <FaLandmark />, // Honors military/government connection
  },
  {
    title: "Jumbo Mortgage",
    description:
      "Financing for high-value properties exceeding conventional loan limits.",
    icon: <FaHorseHead />, // Luxury/specialty symbol
  },
  {
    title: "Adjustable Rate Mortgages",
    description:
      "Variable interest rates that may change over time based on market conditions.",
    icon: <FaBalanceScale />, // Balance/flexibility over time
  },
  {
    title: "USDA Mortgages",
    description:
      "Loans for rural homebuyers with low-interest rates and zero down payment options.",
    icon: <FaSeedling />, // Growth, farmland, green/rural
  },
  {
    title: "First Time Home Buyer Mortgages",
    description:
      "Special loans tailored for new homebuyers with reduced down payments.",
    icon: <FaUserGraduate />, // Youth/new beginnings
  },
  {
    title: "Reverse Mortgages",
    description:
      "Convert your home's equity into cash without monthly payments.",
    icon: <FaUndo />, // Reversal concept
  },
  {
    title: "Interest Only Mortgages",
    description:
      "Pay only interest for an initial period, reducing your monthly payment.",
    icon: <FaCoins />, // Cash flow emphasis
  },
];

const MortgageServices = () => {
  return (
    <div style={isMobile ? mobileSectionStyles : sectionStyles}>
      <h2 style={isMobile ? mobileHeaderStyles : headerStyles}>
        Mortgage Services
      </h2>
      <div style={scrollContainerStyles}>
        <div style={cardsContainerStyles}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              style={isMobile ? mobileCardStyles : cardStyles}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 28px 60px rgba(56, 189, 248, 0.28)",
              }}
              transition={{ duration: 0.25 }}
            >
              <div
                style={
                  isMobile ? mobileIconContainerStyles : iconContainerStyles
                }
              >
                {service.icon}
              </div>
              <h3 style={isMobile ? mobileCardTitleStyles : cardTitleStyles}>
                {service.title}
              </h3>
              <p
                style={
                  isMobile ? mobileCardDescriptionStyles : cardDescriptionStyles
                }
              >
                {service.description}
              </p>
              <motion.button
                style={isMobile ? mobileButtonStyles : buttonStyles}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 42px rgba(56, 189, 248, 0.26)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
              >
                Get a Free Quote
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Desktop Styles
const sectionStyles = {
  padding: "3rem 2rem",
  background: "transparent",
  textAlign: "center",
  margin: "0 auto 3rem",
  maxWidth: "1200px",
  color: "var(--text-primary)",
};

const headerStyles = {
  fontSize: "2.2rem",
  color: "var(--text-primary)",
  marginBottom: "1.75rem",
  letterSpacing: "0.02em",
};

const scrollContainerStyles = {
  overflowX: "auto",
  paddingBottom: "1.25rem",
};

const cardsContainerStyles = {
  display: "flex",
  gap: "1.5rem",
  padding: "1rem",
  flexWrap: "nowrap",
  minWidth: "100%",
};

const cardStyles = {
  minWidth: "260px",
  background:
    "linear-gradient(160deg, rgba(15, 23, 42, 0.95), rgba(9, 14, 28, 0.88))",
  padding: "1.85rem",
  borderRadius: "26px",
  border: "1px solid var(--border-subtle)",
  boxShadow: "0 22px 50px rgba(8, 18, 35, 0.55)",
  transition: "transform 0.25s ease",
  textAlign: "center",
  width: 340,
  flex: "0 0 auto",
  color: "var(--text-primary)",
};

const iconContainerStyles = {
  background: "rgba(15, 23, 42, 0.75)",
  borderRadius: "18px",
  padding: "1rem",
  marginBottom: "1.1rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2rem",
  color: "var(--accent-strong)",
  border: "1px solid rgba(148, 163, 184, 0.25)",
  boxShadow: "0 18px 38px rgba(56, 189, 248, 0.25)",
};

const cardTitleStyles = {
  fontSize: "1.25rem",
  margin: "0.5rem 0",
  color: "var(--text-primary)",
};

const cardDescriptionStyles = {
  fontSize: "0.92rem",
  color: "var(--text-secondary)",
  marginBottom: "1.1rem",
  lineHeight: 1.5,
};

const buttonStyles = {
  padding: "0.8rem 1.6rem",
  background: "var(--accent-gradient)",
  color: "#0f172a",
  border: "1px solid rgba(148, 163, 184, 0.18)",
  borderRadius: "999px",
  fontSize: "0.95rem",
  fontWeight: 600,
  cursor: "pointer",
  transition: "transform 0.2s ease",
  marginTop: "0.75rem",
  boxShadow: "0 16px 38px rgba(56, 189, 248, 0.25)",
};

// Mobile Styles (20% smaller)
const mobileSectionStyles = {
  padding: "2rem 1rem",
  background: "transparent",
  textAlign: "center",
  marginBottom: "2rem",
};

const mobileHeaderStyles = {
  fontSize: "1.7rem",
  color: "var(--text-primary)",
  marginBottom: "1.25rem",
};

const mobileCardStyles = {
  minWidth: "220px",
  background:
    "linear-gradient(160deg, rgba(15, 23, 42, 0.95), rgba(9, 14, 28, 0.88))",
  padding: "1.4rem",
  borderRadius: "22px",
  border: "1px solid var(--border-subtle)",
  boxShadow: "0 20px 45px rgba(8, 18, 35, 0.55)",
  transition: "transform 0.25s ease",
  textAlign: "center",
  width: 280,
  flex: "0 0 auto",
  color: "var(--text-primary)",
};

const mobileIconContainerStyles = {
  background: "rgba(15, 23, 42, 0.75)",
  borderRadius: "16px",
  padding: "0.85rem",
  marginBottom: "0.8rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.6rem",
  color: "var(--accent-strong)",
  border: "1px solid rgba(148, 163, 184, 0.25)",
  boxShadow: "0 12px 28px rgba(56, 189, 248, 0.25)",
};

const mobileCardTitleStyles = {
  fontSize: "1.05rem",
  margin: "0.4rem 0",
  color: "var(--text-primary)",
};

const mobileCardDescriptionStyles = {
  fontSize: "0.8rem",
  color: "var(--text-secondary)",
  marginBottom: "0.9rem",
  lineHeight: 1.45,
};

const mobileButtonStyles = {
  padding: "0.65rem 1.25rem",
  background: "var(--accent-gradient)",
  color: "#0f172a",
  border: "1px solid rgba(148, 163, 184, 0.18)",
  borderRadius: "999px",
  fontSize: "0.92rem",
  fontWeight: 600,
  cursor: "pointer",
  transition: "transform 0.2s ease",
  marginTop: "0.8rem",
  boxShadow: "0 14px 32px rgba(56, 189, 248, 0.25)",
};

export default MortgageServices;
