import React from "react";
import {
  ProductPill,
  ProductPillB,
  ProductPillC,
} from "../ProductPill/ProductPill";
import "./ProductTableCards.css";

export function ProductTableCards() {
  return (
    <div className="Table">
      <div className="ProductTable__Card">
        <div className="ProductTable_Column_Logo">
          <div className="ProductTable_Logo_PH"></div>
        </div>

        <div className="ProductTable_Column_Logo">
          <div className="ProductTable_Logo_PH"></div>
        </div>
        <div className="ProductTable_Column_Title">
          Spin functional ethnic diplomat performer
        </div>
        <div>
          <ProductPill />
        </div>
        <div>
          <ProductPillB />
        </div>
        <div>
          <ProductPillC />
        </div>

        <div className="ProductTable_Column_Price">
          <div className="ProductTable_Column_PriceButton">127,09 €</div>
        </div>
      </div>
    </div>
  );
}
