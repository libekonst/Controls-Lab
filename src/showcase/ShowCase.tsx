import React from "react";
import { ProductTable } from "../ProductTable/ProductTable";
import { SegmentedControl } from "../SegmentedControl/SegmentedControl";
import "./ShowCase.css";
export function ShowCase() {
  return (
    <div className="ShowCase">
      <div className="FiltersPane">
        <SegmentedControl />
        <SegmentedControl flavor="outlined" />
        <SegmentedControl flavor="outlined" />
        <SegmentedControl flavor="outlined" />
      </div>
      <ProductTable />
    </div>
  );
}
