import * as React from "react";
import { SegmentedControl } from "./SegmentedControl";
import { SegmentedControlFilled } from "./SegmentedControlFilled";

export function SegmentedControlDemo() {
  return (
    <div>
      <h2>Segmented Control</h2>
      <p>Predetermined tab count, motion, css only</p>
      <SegmentedControl />
      <br />
      <br />
      <SegmentedControl flavor="outlined" />
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
      <SegmentedControlFilled flavor="outline" />
    </div>
  );
}
