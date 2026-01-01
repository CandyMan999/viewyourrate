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
  padding: "2rem 1rem",
  backgroundColor: "rgb(248, 249, 250)", // Dark theme background
  textAlign: "center",
  marginBottom: "2rem",
  boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)",
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
  minWidth: "250px",
  backgroundColor: "#333", // Dark card background
  padding: "1.5rem",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Enhanced shadow for a dark theme
  transition: "transform 0.3s ease",
  textAlign: "center",
  width: 350,
  flex: "0 0 auto",
};

const iconContainerStyles = {
  backgroundColor: "#007bff",
  borderRadius: "50%",
  padding: "1rem",
  marginBottom: "1rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2rem",
  color: "#fff",
  boxShadow: "0 0 0 4px rgba(255, 255, 255, 1), 0 0 0 6px #007bff",
};

const cardTitleStyles = {
  fontSize: "1.25rem",
  margin: "0.5rem 0",
  color: "#fff", // White text for dark theme
};

const cardDescriptionStyles = {
  fontSize: "0.9rem",
  color: "#aaa", // Light grey for the description
  marginBottom: "1rem",
};

const buttonStyles = {
  padding: "0.75rem 1.5rem",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontSize: "1rem",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  marginTop: "1rem",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)", // Button shadow
};

// Mobile Styles (20% smaller)
const mobileSectionStyles = {
  padding: "1.5rem 0.8rem",
  backgroundColor: "rgb(248, 249, 250)",
  textAlign: "center",
  boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)", // Top and bottom shadows
  marginBottom: "2rem",
};

const mobileHeaderStyles = {
  fontSize: "1.6rem",
  color: "#007bff",
  marginBottom: "1.2rem",
};

const mobileCardStyles = {
  minWidth: "200px",
  backgroundColor: "#333",
  padding: "1.2rem",
  borderRadius: "8px",
  boxShadow: "0 3px 6px rgba(0, 0, 0, 0.5)",
  transition: "transform 0.3s ease",
  textAlign: "center",
  width: 280,
  flex: "0 0 auto",
};

const mobileIconContainerStyles = {
  backgroundColor: "#007bff",
  borderRadius: "50%",
  padding: "0.8rem",
  marginBottom: "0.8rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.6rem",
  color: "#fff",
  boxShadow: "0 0 0 3px rgba(255, 255, 255, 1), 0 0 0 4px #007bff",
};

const mobileCardTitleStyles = {
  fontSize: "1rem",
  margin: "0.4rem 0",
  color: "#fff",
};

const mobileCardDescriptionStyles = {
  fontSize: "0.75rem",
  color: "#aaa",
  marginBottom: "0.8rem",
};

const mobileButtonStyles = {
  padding: "0.6rem 1.2rem",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontSize: "0.9rem",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  marginTop: "0.8rem",
  boxShadow: "0 3px 12px rgba(0, 0, 0, 0.3)",
};

export default MortgageServices;
