import React, { useState } from "react";
import "./SegmentedControlFilled.css";
import "./SegmentedControlMatFill.css";
import "./SegmentedControlOutline.css";

type Flavor = "border" | "outline" | "filled-opacity";

type Props = {
  flavor: Flavor;
};

export function SegmentedControlFilled({ flavor }: Props) {
  const [selection, setSelection] = useState<0 | 1 | 2>(1);
  const [row, tab, tabSelected] = mapFlavorToClassName(flavor);

  return (
    <div className={row}>
      <div
        className={`${tab} ${selection === 0 && tabSelected}`}
        onClick={() => setSelection(0)}
      >
        Όχι
      </div>
      <div
        className={`${tab} ${selection === 1 && tabSelected}`}
        onClick={() => setSelection(1)}
      >
        Αδιάφορο
      </div>
      <div
        className={`${tab} ${selection === 2 && tabSelected}`}
        onClick={() => setSelection(2)}
      >
        Ναι
      </div>
    </div>
  );
}

function mapFlavorToClassName(flavor: Flavor) {
  switch (flavor) {
    default:
    case "border":
      return [
        "SegmentedControlFilled",
        "SegmentedControlFilled__Tab",
        "SegmentedControlFilled__Tab--Selected"
      ] as const;

    case "filled-opacity":
      return [
        "SegmentedControlMatFill",
        "SegmentedControlMatFill__Tab",
        "SegmentedControlMatFill__Tab--Selected"
      ] as const;

    case "outline":
      return [
        "SegmentedControlOutline",
        "SegmentedControlOutline__Tab",
        "SegmentedControlOutline__Tab--Selected"
      ] as const;
  }
}
