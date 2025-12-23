import React from "react";
import MortgageOptionsPage from "../../client/app/components/mortgageResults/MortgageOptionsPage";
import PurchaseOptionsPage from "../../client/app/components/purchaseResults/PurchaseOptionsPage";

const containerStyle = {
  padding: "24px 12px 48px",
  backgroundColor: "#0f1115",
  minHeight: "100vh",
};

const CompareProduct = ({
  scenario,
  quoteMode,
  pricingState,
  onRetryPricing,
  onEdit,
  onReset,
}) => {
  if (!scenario) return null;

  const content =
    quoteMode === "Purchase" ? (
      <PurchaseOptionsPage
        scenario={scenario}
        pricing={pricingState.data}
        pricingStatus={pricingState.status}
        pricingError={pricingState.error}
        onRetryPricing={onRetryPricing}
        onEdit={onEdit}
        onReset={onReset}
      />
    ) : (
      <MortgageOptionsPage
        scenario={scenario}
        pricing={pricingState.data}
        pricingStatus={pricingState.status}
        pricingError={pricingState.error}
        onRetryPricing={onRetryPricing}
        onEdit={onEdit}
        onFixLtv={onEdit}
        onReset={onReset}
      />
    );

  return <div style={containerStyle}>{content}</div>;
};

export default CompareProduct;
