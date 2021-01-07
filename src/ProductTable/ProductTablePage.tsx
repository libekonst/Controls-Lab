import React from "react";
import { ProductTable } from "./ProductTable";
import { ProductTableFilledCovers } from "./ProductTableFilledCovers";
import { ProductTableInvalidatedPrice } from "./ProductTableInvalidatedPrice";
import { ProductTableLoadingPrice } from "./ProductTableLoadingPrice";

export function ProductTablePage() {
  return (
    <div>
      <h2>Product Table</h2>
      <p>Default</p>
      <ProductTable />
      <br />
      <br />
      <p>Filled covers, no icon price button</p>
      <ProductTableFilledCovers />
      <br />
      <br />
      <p>Invalidated price</p>
      <ProductTableInvalidatedPrice />
      <br />
      <br />
      <p>Loading price</p>
      <ProductTableLoadingPrice />
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
