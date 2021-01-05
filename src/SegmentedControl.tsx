import React, { useMemo, useState } from "react";
import "./SegmentedControl.css";

type Flavor = "simple" | "outlined";
type Props = { flavor?: Flavor };

function mapFlavorToClassName(flavor: Flavor) {
  switch (flavor) {
    default:
    case "simple":
      return [
        "SegmentedControl",
        "SegmentedControl__ThumbRack__Thumb",
        "SegmentedControl__TabsRow__Tab",
        "SegmentedControl__TabsRow__Tab--Selected"
      ] as const;
    case "outlined":
      return [
        "SegmentedControl--Outlined",
        "SegmentedControl__ThumbRack__Thumb--Outlined",
        "SegmentedControl__TabsRow__Tab--Outlined",
        "SegmentedControl__TabsRow__Tab--Selected"
      ] as const;
  }
}

export function SegmentedControl({ flavor = "simple" }: Props) {
  const [selection, setSelection] = useState<0 | 1 | 2>(1);
  const [root, thumb, tab, tabSelected] = useMemo(
    () => mapFlavorToClassName(flavor),
    [flavor]
  );
  const flexRatio = useMemo(() => {
    if (selection === 0) return 0;
    if (selection === 1) return 0.33;
    if (selection === 2) return 0.7;
  }, [selection]);

  return (
    <div className={root}>
      {flavor === "simple" && <div className="Borderland"></div>}
      <div className="SegmentedControl__ThumbRack">
        <div
          className="SegmentedControl__ThumbRack__Animator"
          style={{ flex: flexRatio }}
        ></div>
        <div className={thumb}></div>
      </div>
      <div className="SegmentedControl__TabsRow">
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
    </div>
  );
}
