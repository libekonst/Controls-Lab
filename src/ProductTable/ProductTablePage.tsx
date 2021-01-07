import React from "react";
import { ProductTable } from "./ProductTable";
import { ProductTableFilledCovers } from "./ProductTableFilledCovers";

export function ProductTablePage() {
  return (
    <div>
      <h2>Product Table</h2>
      <p>Default</p>
      <ProductTable />
      <br />
      <br />
      <p>Filled covers</p>
      <ProductTableFilledCovers />
      <br />
      <br />
      {/* <SegmentedControl flavor="outlined" />
      <br />
      <br />
      <br />

      <p>Dynamic tab count, no motion, css only</p>
      <SegmentedControlFilled flavor="border" />
      <br />
      <br />
      <SegmentedControlFilled flavor="filled-opacity" />
      <br />
      <br />
      <SegmentedControlFilled flavor="outline" /> */}
    </div>
  );
}
