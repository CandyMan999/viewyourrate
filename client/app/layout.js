import "./globals.css";
import "../../src/index.css";
import "../../src/components/applyButton/ApplyButton.css";
import "../../src/components/beatMyEstimate/BeatMyEstimateButton.css";
import "../../src/components/ratesSection/RateCard.css";
import "../../src/components/ratesSection/RatesSection.css";
import "../../src/components/rateSectionMobile/RatesSectionMobile.css";

export const metadata = {
  title: "View Your Rate",
  description: "Mortgage rate exploration built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
