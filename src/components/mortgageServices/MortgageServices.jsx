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
              whileHover={{ scale: 1.05, boxShadow: "0 6px 15px #007bff" }}
              transition={{ duration: 0.3 }}
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.2 }}
                transition={{ duration: 0.3 }}
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
  padding: "3rem 1.5rem",
  background:
    "linear-gradient(160deg, rgba(0, 123, 255, 0.08), rgba(255, 255, 255, 0.95))",
  textAlign: "center",
  marginBottom: "2rem",
};

const headerStyles = {
  fontSize: "2rem",
  color: "#007bff",
  marginBottom: "1.5rem",
};

const scrollContainerStyles = {
  overflowX: "auto",
  paddingBottom: "1rem",
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
  backgroundColor: "#fff",
  padding: "1.75rem",
  borderRadius: "18px",
  border: "1px solid rgba(0, 123, 255, 0.12)",
  boxShadow: "0 22px 40px rgba(15, 33, 60, 0.12)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  textAlign: "center",
  width: 340,
  flex: "0 0 auto",
};

const iconContainerStyles = {
  backgroundColor: "rgba(0, 123, 255, 0.12)",
  borderRadius: "16px",
  padding: "1rem",
  marginBottom: "1rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.8rem",
  color: "#007bff",
  boxShadow: "0 12px 24px rgba(0, 123, 255, 0.18)",
};

const cardTitleStyles = {
  fontSize: "1.25rem",
  margin: "0.5rem 0",
  color: "#1f2933",
  fontWeight: 700,
};

const cardDescriptionStyles = {
  fontSize: "0.95rem",
  color: "#516379",
  marginBottom: "1rem",
  lineHeight: 1.6,
};

const buttonStyles = {
  padding: "0.75rem 1.7rem",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "999px",
  fontSize: "0.95rem",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  marginTop: "1rem",
  boxShadow: "0 16px 32px rgba(0, 123, 255, 0.25)",
};

// Mobile Styles (20% smaller)
const mobileSectionStyles = {
  padding: "2rem 1rem",
  background:
    "linear-gradient(160deg, rgba(0, 123, 255, 0.08), rgba(255, 255, 255, 0.95))",
  textAlign: "center",
  marginBottom: "2rem",
};

const mobileHeaderStyles = {
  fontSize: "1.6rem",
  color: "#007bff",
  marginBottom: "1.2rem",
};

const mobileCardStyles = {
  minWidth: "220px",
  backgroundColor: "#fff",
  padding: "1.4rem",
  borderRadius: "16px",
  border: "1px solid rgba(0, 123, 255, 0.12)",
  boxShadow: "0 18px 32px rgba(15, 33, 60, 0.12)",
  transition: "transform 0.3s ease",
  textAlign: "center",
  width: 280,
  flex: "0 0 auto",
};

const mobileIconContainerStyles = {
  backgroundColor: "rgba(0, 123, 255, 0.12)",
  borderRadius: "14px",
  padding: "0.9rem",
  marginBottom: "0.8rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5rem",
  color: "#007bff",
  boxShadow: "0 10px 20px rgba(0, 123, 255, 0.18)",
};

const mobileCardTitleStyles = {
  fontSize: "1.05rem",
  margin: "0.4rem 0",
  color: "#1f2933",
  fontWeight: 700,
};

const mobileCardDescriptionStyles = {
  fontSize: "0.85rem",
  color: "#516379",
  marginBottom: "0.8rem",
  lineHeight: 1.6,
};

const mobileButtonStyles = {
  padding: "0.65rem 1.4rem",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "999px",
  fontSize: "0.9rem",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  marginTop: "0.8rem",
  boxShadow: "0 14px 28px rgba(0, 123, 255, 0.22)",
};

export default MortgageServices;
