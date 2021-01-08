import React from "react";
import {
  ProductPill,
  ProductPillA,
  ProductPillAKey,
  ProductPillAShield,
  ProductPillB,
  ProductPillC,
} from "./ProductPill";
import "./ProductPillPage.css";

export function ProductPillPage() {
  return (
    <div>
      <h2>Product Pill</h2>

      <div className="PillRow">
        <ProductPill />
        <ProductPillA />
        <ProductPillAKey />
        <ProductPillAShield />
      </div>
      <div className="PillRow">
        <ProductPill />
        <ProductPillA />
        <ProductPillB />
        <ProductPillC />
      </div>
      <br />
    </div>
  );
}
