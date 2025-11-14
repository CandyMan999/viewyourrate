import React, { useContext } from "react";
import Context from "../../context";

const ProductsFilterWidget = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <div className="find-products-widget">
      {/* To do - build a widget that has the title - Compare mortgage products - We will not pull your credit.
Checking your options won't affect your score. No hard inquiry at this stage.- feilds - Loan Type - Purchase/Refi, Purchase Price, Down Payment, Loan Term, Property Type, Occupancy, State, and Estimated Credit score - put the esimated loan amount at the bottom  */}
      {/* {uppon clicking the find products page - a loader Icoun will show and we will remove the animated presences component slider from app.js file and render the CompareProducts Component} */}
    </div>
  );
};

export default ProductsFilterWidget;
