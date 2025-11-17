import React, { forwardRef } from "react";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { isMobile } from "react-device-detect";
import NMLS from "../../pics/NMLS.png";

const Footer = forwardRef((props, ref) => {
  // Common styles for both mobile and desktop
  const columnStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: isMobile ? "center" : "flex-start",
    marginBottom: isMobile ? "1rem" : 0,
    textAlign: isMobile ? "center" : "left",
  };

  const logoPlaceholderStyles = {
    width: "150px",
    height: "50px",
    backgroundColor: "#ccc",
    marginBottom: "1rem",
  };

  const resourcesListStyles = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  };

  const resourceLinkStyles = {
    marginBottom: "0.5rem",
    color: "#333",
    textDecoration: "none",
  };

  const socialIconsStyles = {
    display: "flex",
    gap: "1rem",
    marginTop: "1rem",
    justifyContent: isMobile ? "center" : "flex-start",
  };

  const iconStyles = {
    color: "#666",
    fontSize: "1.5rem",
  };

  // Conditional styles for mobile and desktop
  const footerStyles = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: isMobile ? "center" : "space-between",
    alignItems: isMobile ? "center" : "flex-start",
    padding: isMobile ? "1rem" : "2rem",
    backgroundColor: "#f9f9f9",
    borderTop: "1px solid #ddd",
    boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)", // Top and bottom shadows
  };

  const logosContainerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: isMobile ? "center" : "flex-start",
    gap: "1rem",
    marginTop: "1rem",
  };

  const logoStyles = {
    height: 40,
    objectFit: "contain",
  };

  const svgStyles = {
    width: "50px",
    height: "50px",
  };

  return (
    <div ref={ref} style={footerStyles}>
      {/* Column 1: Company Information */}
      <div style={columnStyles}>
        <div style={logoPlaceholderStyles}></div> {/* Placeholder for logo */}
        <div>NMLS #2625844</div>
        <p>Your Home, Your Rate, Your Way.</p>
        <div style={socialIconsStyles}>
          <FaInstagram style={iconStyles} />
          <FaYoutube style={iconStyles} />
          <FaLinkedin style={iconStyles} />
          <FaTiktok style={iconStyles} />
        </div>
      </div>

      {/* Column 2: Resources */}
      <div style={columnStyles}>
        <h4>Resources</h4>
        <ul style={resourcesListStyles}>
          <li>
            <a href="#" style={resourceLinkStyles}>
              Shop rates
            </a>
          </li>
          <li>
            <a href="#" style={resourceLinkStyles}>
              Get a quote
            </a>
          </li>
          <li>
            <a href="#" style={resourceLinkStyles}>
              Reviews
            </a>
          </li>
          <li>
            <a href="#" style={resourceLinkStyles}>
              Calculators
            </a>
          </li>
          <li>
            <a href="#" style={resourceLinkStyles}>
              Meet our team
            </a>
          </li>
          <li>
            <a href="#" style={resourceLinkStyles}>
              NMLS consumer access
            </a>
          </li>
        </ul>
      </div>

      {/* Column 3: Contact Information */}
      <div style={columnStyles}>
        <h4>Contact us</h4>
        <p>
          <FaMapMarkerAlt /> 8004 Springmoss Drive
          <br />
          Plano, TX 75025
        </p>
        <p>
          <FaEnvelope />{" "}
          <a
            style={{ color: "inherit", textDecoration: "none" }}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tmanriquez@viewyourrate.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            tmanriquez@viewyourrate.com
          </a>
        </p>
        <a
          href="tel:+12146754530"
          style={{ color: "#000", textDecoration: "none" }}
        >
          <FaPhone /> (214) 675-4530
        </a>

        {/* Container for NMLS logo and house SVG */}
        <div style={logosContainerStyles}>
          <img src={NMLS} alt="NMLS" style={logoStyles} />
          <svg
            width="86"
            height="85"
            viewBox="0 0 86 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_204_2128)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.2119 65.5091H9.08145V66.7482H11.9566V67.7946H9.08145V69.3173H12.3508V70.3646H7.87407V64.4653H12.2119V65.5091ZM16.1705 68.7603L16.7623 69.3177C16.5565 69.4232 16.3281 69.4772 16.0969 69.4752C15.431 69.4752 14.4939 69.0651 14.4939 67.4141C14.4939 65.7631 15.431 65.353 16.0969 65.353C16.7623 65.353 17.6985 65.7631 17.6985 67.4141C17.6985 67.967 17.5918 68.3754 17.4277 68.681L16.8033 68.098L16.1705 68.7603ZM18.9561 70.1229L18.3136 69.5184C18.6752 69.0576 18.931 68.3842 18.931 67.4145C18.931 64.6465 16.877 64.3105 16.0964 64.3105C15.3164 64.3105 13.2632 64.6465 13.2632 67.4145C13.2632 70.1842 15.3164 70.5194 16.0964 70.5194C16.4404 70.5194 17.0489 70.455 17.6076 70.1234L18.307 70.791L18.9561 70.1229ZM24.7311 68.3022C24.7311 69.8526 23.7932 70.5189 22.3062 70.5189C21.7647 70.5189 20.9595 70.388 20.4338 69.805C20.1137 69.4461 19.9902 68.9654 19.9743 68.3754V64.4653H21.2311V68.292C21.2311 69.1162 21.7074 69.4756 22.2815 69.4756C23.1286 69.4756 23.4726 69.0655 23.4726 68.3507V64.4653H24.7315L24.7311 68.3022ZM28.0318 65.7966H28.0499L28.7797 68.1298H27.2742L28.0318 65.7966ZM26.9452 69.1453H29.1232L29.5015 70.365H30.8408L28.7638 64.4653H27.3417L25.2387 70.365H26.5364L26.9452 69.1453ZM33.0342 69.297H35.9666V70.3646H31.8003V64.4653H33.0342V69.297ZM40.6392 67.717V70.3646H39.4089V64.4653H40.6392V66.6992H42.9402V64.4653H44.1709V70.3646H42.9402V67.717H40.6392ZM46.5195 67.4141C46.5195 65.7631 47.4575 65.353 48.1207 65.353C48.7875 65.353 49.7245 65.7631 49.7245 67.4141C49.7245 69.0651 48.7875 69.4752 48.1207 69.4752C47.4575 69.4752 46.5195 69.0651 46.5195 67.4141ZM45.2888 67.4141C45.2888 70.1838 47.3437 70.5189 48.1207 70.5189C48.9043 70.5189 50.957 70.1838 50.957 67.4141C50.957 64.6461 48.9048 64.3101 48.1207 64.3101C47.3442 64.3101 45.2888 64.6461 45.2888 67.4141ZM56.8396 68.3022C56.8396 69.8526 55.9017 70.5189 54.4143 70.5189C53.8719 70.5189 53.0689 70.388 52.541 69.805C52.2213 69.4461 52.0974 68.9654 52.0828 68.3754V64.4653H53.3378V68.292C53.3378 69.1162 53.8159 69.4756 54.3922 69.4756C55.238 69.4756 55.5824 69.0655 55.5824 68.3507V64.4653H56.84L56.8396 68.3022ZM59.0943 68.5474C59.1053 68.8754 59.2707 69.5007 60.3458 69.5007C60.9279 69.5007 61.5783 69.3614 61.5783 68.7352C61.5783 68.277 61.1347 68.1522 60.5111 68.005L59.8779 67.8568C58.9219 67.6354 58.0029 67.4246 58.0029 66.1264C58.0029 65.4685 58.3587 64.3101 60.2717 64.3101C62.0806 64.3101 62.5643 65.4919 62.5731 66.2151H61.3887C61.3569 65.954 61.2577 65.3278 60.1813 65.3278C59.7143 65.3278 59.1556 65.5002 59.1556 66.0343C59.1556 66.4968 59.5335 66.5916 59.7774 66.6494L61.2167 67.0026C62.0219 67.2006 62.7601 67.5296 62.7601 68.5884C62.7601 70.365 60.9539 70.5194 60.4357 70.5194C58.2851 70.5194 57.9156 69.2785 57.9156 68.5478L59.0943 68.5474ZM65.002 70.3646H63.7734V64.4653H65.002V70.3646ZM69.925 64.4653H71.0737V70.3646H69.843L67.4375 66.1564H67.4168V70.3646H66.268V64.4653H67.5658L69.9043 68.5734H69.925V64.4653ZM75.1977 67.1847H77.6601V70.3646H76.8403L76.7173 69.6255C76.4055 69.9836 75.9535 70.5185 74.8767 70.5185C73.4563 70.5185 72.1678 69.5003 72.1678 67.4308C72.1678 65.8221 73.0634 64.3008 75.0487 64.3096C76.8588 64.3096 77.5741 65.4826 77.6358 66.2993H76.4051C76.4051 66.0686 75.9848 65.3278 75.1157 65.3278C74.2346 65.3278 73.4224 65.935 73.4224 67.4458C73.4224 69.0571 74.3017 69.4752 75.1391 69.4752C75.4103 69.4752 76.3165 69.3702 76.5687 68.1774H75.1977V67.1847ZM8.84421 76.3755C8.84421 74.7245 9.78039 74.3126 10.4449 74.3126C11.1104 74.3126 12.0461 74.7245 12.0461 76.3755C12.0461 78.0256 11.1104 78.4392 10.4449 78.4392C9.78039 78.4392 8.84421 78.0256 8.84421 76.3755ZM7.61213 76.3755C7.61213 79.1426 9.6653 79.4839 10.4454 79.4839C11.2259 79.4839 13.2791 79.143 13.2791 76.3755C13.2791 73.6079 11.2255 73.2715 10.4454 73.2715C9.6653 73.2715 7.61213 73.6084 7.61213 76.3755ZM16.6551 76.1775V74.4427H17.6328C18.3961 74.4427 18.7171 74.683 18.7171 75.2585C18.7171 75.5213 18.7171 76.1775 17.7964 76.1775H16.6551ZM16.6551 77.1979H18.0671C19.6533 77.1979 19.9479 75.849 19.9479 75.3158C19.9479 74.1583 19.2595 73.4263 18.1165 73.4263H15.4235V79.326H16.6551V77.1979ZM23.2918 76.1775V74.4427H24.2676C25.0318 74.4427 25.3524 74.683 25.3524 75.2585C25.3524 75.5213 25.3524 76.1775 24.4339 76.1775H23.2918ZM23.2918 77.1979H24.7046C26.2895 77.1979 26.5863 75.849 26.5863 75.3158C26.5863 74.1583 25.897 73.4263 24.7549 73.4263H22.0593V79.326H23.2918V77.1979ZM29.6673 76.3755C29.6673 74.7245 30.6013 74.3126 31.2694 74.3126C31.9317 74.3126 32.8701 74.7245 32.8701 76.3755C32.8701 78.0256 31.9322 78.4392 31.2694 78.4392C30.6013 78.4392 29.6673 78.0256 29.6673 76.3755ZM28.4348 76.3755C28.4348 79.1426 30.4876 79.4839 31.2694 79.4839C32.0477 79.4839 34.1009 79.143 34.1009 76.3755C34.1009 73.6079 32.0477 73.2715 31.2694 73.2715C30.4876 73.2715 28.4348 73.6084 28.4348 76.3755ZM37.4549 76.0223V74.4427H38.9891C39.7122 74.4427 39.8507 74.9053 39.8507 75.2171C39.8507 75.8009 39.5398 76.0223 38.8987 76.0223H37.4549ZM36.244 79.3265H37.4549V77.0175H38.7258C39.6386 77.0175 39.6889 77.3284 39.6889 78.1336C39.6889 78.74 39.7352 79.0438 39.8176 79.3265H41.1824V79.1673C40.9196 79.0698 40.9196 78.8555 40.9196 77.9961C40.9196 76.8919 40.6568 76.7128 40.1726 76.4985C40.7556 76.3032 41.0828 75.7431 41.0828 75.0953C41.0828 74.5847 40.797 73.4271 39.2276 73.4271H36.2436L36.244 79.3265ZM45.6738 79.3265H44.4421V74.4705H42.6606V73.4267H47.4575V74.4705H45.6738V79.3265ZM54.0699 77.2618C54.0699 78.8141 53.1337 79.4839 51.6454 79.4839C51.1061 79.4839 50.3009 79.3468 49.7739 78.7647C49.4533 78.4048 49.3303 77.9277 49.3157 77.3368V73.4267H50.5707V77.2535C50.5707 78.075 51.0479 78.4392 51.6225 78.4392C52.4682 78.4392 52.8126 78.0256 52.8126 77.3117V73.4263H54.0703V77.2618H54.0699ZM60.0322 73.4267H61.1845V79.3265H59.9498L57.5425 75.1183H57.5293V79.3265H56.377V73.4267H57.6748L60.0177 77.533H60.0322V73.4267ZM64.6607 79.3265H63.4246V73.4267H64.6607V79.3265ZM69.4708 79.3265H68.2392V74.4705H66.4598V73.4267H71.2545V74.4705H69.4708V79.3265ZM75.9125 79.3265H74.6782V77.0991L72.6432 73.4267H74.0962L75.3199 75.9905L76.4893 73.4267H77.8837L75.9125 77.1137V79.3265ZM42.7417 3.01758L3.02734 22.5778V31.7659H7.47234V59.3275H77.7121V31.7659H83.0497V22.5778L42.7417 3.01758ZM69.1185 51.0266H16.0673V25.8379L42.7417 12.2057L69.1189 25.8379V51.0266H69.1185Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M54.891 34.727H30.2949V25.8379H54.891V34.727ZM54.891 47.4764H30.2949V38.5815H54.891V47.4764Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_204_2128">
                <rect
                  width="85"
                  height="85"
                  fill="white"
                  transform="translate(0.538086)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
});

export default Footer;
