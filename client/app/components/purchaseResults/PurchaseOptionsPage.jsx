"use client";

import React from "react";
import MortgageOptionsPage from "../mortgageResults/MortgageOptionsPage";

const PurchaseOptionsPage = (props) => {
  const scenario = props.scenario
    ? { ...props.scenario, quoteType: "Purchase" }
    : props.scenario;

  return <MortgageOptionsPage {...props} scenario={scenario} />;
};

export default PurchaseOptionsPage;
